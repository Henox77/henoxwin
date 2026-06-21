document.addEventListener("DOMContentLoaded", function() {
    if (!CONFIG || !CONFIG.socials || !CONFIG.socials.discordUserId) {
        console.warn("Discord User ID not configured in config.js");
        return;
    }

    const userId = CONFIG.socials.discordUserId;
    const statusBorder = document.getElementById("user-status-border");
    const statusText = document.getElementById("discord-status-text");
    const userAvatar = document.getElementById("user-avatar-img");

    const statusColors = {
        online: "#43b581",
        idle: "#faa61a",
        dnd: "#f04747",
        offline: "#747f8d"
    };

    const statusNames = {
        online: "Online",
        idle: "Boşta (Idle)",
        dnd: "Rahatsız Etmeyin",
        offline: "Çevrimdışı (Offline)"
    };

    async function updatePresence() {
        try {
            const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
            if (!res.ok) throw new Error("Lanyard API error");
            const payload = await res.json();
            
            if (!payload.success || !payload.data) return;
            const data = payload.data;

            const status = data.discord_status || "offline";
            if (statusBorder) {
                statusBorder.style.borderColor = statusColors[status] || statusColors.offline;
                statusBorder.style.borderWidth = "3px";
                statusBorder.style.borderStyle = "solid";
            }

            if (userAvatar && data.discord_user && data.discord_user.avatar) {
                const avatarHash = data.discord_user.avatar;
                const isGif = avatarHash.startsWith("a_");
                const format = isGif ? "gif" : "webp";
                userAvatar.src = `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.${format}?size=128`;
            }

            let currentStatus = statusNames[status];
            
            if (data.listening_to_spotify && data.spotify) {
                currentStatus = `🎵 Spotify: ${data.spotify.song} - ${data.spotify.artist}`;
            } 
            else if (data.activities && data.activities.length > 0) {
                const gameActivity = data.activities.find(act => act.type !== 4);
                const customStatus = data.activities.find(act => act.type === 4);

                if (gameActivity) {
                    currentStatus = `🎮 Oynuyor: ${gameActivity.name}`;
                } else if (customStatus && customStatus.state) {
                    currentStatus = `💬 ${customStatus.state}`;
                }
            } else if (data.activities) {
                const customStatus = data.activities.find(act => act.type === 4);
                if (customStatus && customStatus.state) {
                    currentStatus = `💬 ${customStatus.state}`;
                }
            }

            if (statusText) {
                statusText.textContent = currentStatus;
            }
        } catch (err) {
            console.error("Lanyard status update failed:", err);
            if (statusText) {
                statusText.textContent = "Status offline";
            }
        }
    }

    updatePresence();
    setInterval(updatePresence, 10000);
});
