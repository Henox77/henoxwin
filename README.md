# 💻 Henox Win - Retro Windows XP Profile Page

Windows XP Başlat Menüsü estetiğine ve MSN Messenger canlı Discord durum widget'ına sahip, tamamen kişiselleştirilebilir, premium nostaljik kişisel web sitesi şablonu.

---

## 🚀 Öne Çıkan Özellikler

- 🎨 **Klasik Windows XP Tasarımı**: Gerçekçi Başlat Menüsü görünümü, dikey sütunlu düzen ve gün/gece döngülü dithered retro Bliss arka plan değiştirici.
- 💬 **MSN Canlı Discord Widget (Lanyard API)**: Discord üzerindeki aktif durumunu (Çevrimiçi, Boşta, Rahatsız Etmeyin, Çevrimdışı) renkli kenarlık olarak profil resmine yansıtır. Canlı olarak ne oynadığını, Spotify'da dinlediğin şarkıyı veya özel durum mesajını MSN Messenger tarzında gösterir.
- 💣 **Mayın Tarlası (Minesweeper) Pop-up Oyunu**: Tıpkı orijinal Windows XP'deki gibi çalışan, gülen yüz ifadeli, süre ve mayın sayaçlı, ilk tıklama korumalı pop-up oyun penceresi.
- 🎵 **Winamp Müzik Çalar**: Webamp entegrasyonuyla çalışan, Aero temalı, şarkıları dinamik olarak çalabilen nostaljik oynatıcı.
- 📱 **Tam Mobil Uyum**: Mobilde sütunların dikey olarak sıralanması, kaydırma desteği ve mobil karşılama konuşma balonu ile telefonlarda kusursuz görünüm.
- ⚙️ **Tek Noktadan Kontrol (`config.js`)**: Kod düzenlemeye gerek kalmadan tek bir JS dosyasından tüm sosyal medya linklerini (R10, GitHub, Instagram, Discord), e-postanı ve Winamp çalma listeni düzenleme imkanı.

---

## 🛠️ Kurulum ve Çalıştırma

Proje tamamen statik (HTML/CSS/JS) olarak geliştirilmiştir. Herhangi bir veritabanı veya sunucu kurulumu gerektirmez.

1. Bu depoyu indirin veya klonlayın:
   ```bash
   git clone https://github.com/Henox77/henoxwin.git
   ```
2. `index.html` dosyasına çift tıklayarak tarayıcınızda anında çalıştırabilirsiniz.
3. Veya statik bir web barındırma servisine (GitHub Pages, Vercel, Netlify vb.) klasörü yükleyerek yayına alabilirsiniz.

---

## ⚙️ Özelleştirme Rehberi

Tüm profil bilgilerini ve çalma listesini değiştirmek için [scripts/config.js](scripts/config.js) dosyasını favori editörünüzle açıp düzenlemeniz yeterlidir:

```javascript
const CONFIG = {
    name: "Henox",
    email: "xx@gmail.com",
    whatsapp: "905375628262", // WhatsApp İletişim numaranız
    socials: {
        r10: "https://www.r10.net/profil/...", // R10 profil linkiniz
        github: "https://github.com/...", // GitHub linkiniz
        instagram: "https://instagram.com/...", // Instagram linkiniz
        discord: "https://discord.gg/...", // Discord sunucu davetiniz
        discordUserId: "1462496241693753558" // Lanyard canlı durumu için Discord ID'niz
    },
    // Winamp Müzik Çalar listesi
    tracks: [
        {
            metaData: { artist: "Sanatçı", title: "Şarkı Adı" },
            url: "/media/sounds/sarkilar/Sarki-Dosyasi.mp3",
            duration: 300
        }
    ]
};
```

---

## 📂 Dosya Yapısı

```text
├── about/           # Hakkımda sayfası
├── media/           # İkonlar, Bliss duvar kağıtları, sesler
│   ├── skins/       # Winamp dış görünüm teması
│   └── sounds/      # Mp3 müzik dosyaları klasörü
├── minesweeper/     # Mayın Tarlası oyunu
├── player/          # Winamp oynatıcı şablonu
├── scripts/         # Dinamik JS dosyaları (lanyard, changer, config)
├── default.css      # Ana stil dosyası
├── index.html       # Ana giriş sayfası (Başlat Menüsü)
└── LICENSE          # Lisans bilgileri
```

---

*Nostaljinin tadını çıkarın! ☕*
