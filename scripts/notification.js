document.addEventListener("DOMContentLoaded", function() {
    function showNotification(title, subtext) {
        const notification = document.getElementById('notification');
        if (!notification) return;
        notification.querySelector('.notification-title').textContent = title;
        notification.querySelector('.notification-subtext').textContent = subtext;
        notification.style.display = 'block';

        setTimeout(() => {
            notification.style.display = 'none';
        }, 5000);
    }

    const hasConfig = (typeof CONFIG !== "undefined" && CONFIG.notifications);
    if (window.innerWidth >= 768) {
        const title = hasConfig ? CONFIG.notifications.desktop.title : 'Hoş Geldiniz!';
        const text = hasConfig ? CONFIG.notifications.desktop.text : "Henox'un kişisel sayfasına hoş geldiniz. Nostaljik bir yolculuğa hazır olun!";
        showNotification(title, text);
    } else {
        const title = hasConfig ? CONFIG.notifications.mobile.title : 'Mobil Cihaz!';
        const text = hasConfig ? CONFIG.notifications.mobile.text : 'Bu site masaüstü bilgisayarlar için tasarlanmıştır. En iyi deneyim için bilgisayardan girin~';
        showNotification(title, text);
    }
});
