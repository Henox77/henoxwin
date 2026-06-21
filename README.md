# 💻 Henox Win - Retro Windows XP Personal Profile Page

<div align="center">

![Windows XP Logo](https://img.shields.io/badge/Windows-XP--Style-blue?style=for-the-badge&logo=windows)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-Lanyard%20API-5865F2?style=for-the-badge&logo=discord&logoColor=white)

**Windows XP Başlat Menüsü estetiğine, MSN Messenger canlı Discord durum widget'ına, nostaljik bir Winamp müzik çalarına ve tamamen oynanabilir bir Mayın Tarlası oyununa sahip; modern cihazlarla tam uyumlu, premium retro kişisel web sitesi.**

[🚀 Canlı Önizleme](https://henox77.github.io/henoxwin/) • [🛠️ Özelleştirme](#%EF%B8%8F-özelleştirme-rehberi) • [📂 Dosya Yapısı](#-dosya-yapısı) • [💬 İletişim](#-İletişim)

</div>

---

## 🎨 Öne Çıkan Özellikler

| Özellik | Açıklama |
| :--- | :--- |
| **📺 Windows XP Nostaljisi** | Orijinal Başlat Menüsü düzeni, masaüstü ikonları, dikey pencereler ve gün/gece döngülü (Dithered) Bliss duvar kağıdı değiştirici. |
| **💬 MSN Canlı Durum** | [Lanyard API](https://github.com/Phineas/lanyard) entegrasyonu ile Discord durumunuzu (Çevrimiçi, Boşta, Rahatsız Etmeyin, Çevrimdışı) profil avatarı etrafında renkli çerçeveyle gösterir. MSN Messenger tarzında ne oynadığınızı veya Spotify'da dinlediğiniz şarkıyı yansıtır. |
| **🎵 Winamp Müzik Çalar** | [Webamp](https://github.com/captbaritone/webamp) altyapılı, Windows XP gümüş (Aero/Luna) temalı, listedeki 22 nostaljik Türkçe parçayı otomatik/manuel çalabilen müzik oynatıcı. |
| **💣 XP Mayın Tarlası** | Orijinal XP Mayın Tarlası oyununun tüm kurallarına, gülen yüz tepkilerine, mayın/zaman sayaçlarına ve ilk tıklama korumasına sahip, pop-up pencerede açılan sürümü. |
| **📱 Gelişmiş Mobil Uyum** | Masaüstünde yan yana duran sütunlar mobilde alt alta dizilir. Taşmaları önleyen duyarlı (responsive) yapısı ve mobil kullanıcılar için özel karşılama balonu mevcuttur. |
| **⚙️ Merkezi Kontrol** | HTML/CSS kodlarıyla uğraşmadan, tüm sosyal ağlarınızı, e-postanızı, telefonunuzu ve Winamp müzik listenizi tek bir dosyadan ([config.js](scripts/config.js)) yönetin. |

---

## 🚀 Hızlı Kurulum

Proje tamamen **statik** (HTML/CSS/JS) olarak tasarlanmıştır. Herhangi bir sunucu tarafı derleme işlemine veya NodeJS sunucusuna ihtiyaç duymaz.

### 1. Projeyi Klonlayın
```bash
git clone https://github.com/Henox77/henoxwin.git
cd henoxwin
```

### 2. Yerel Olarak Çalıştırın
Herhangi bir kurulum yapmadan doğrudan `index.html` dosyasına çift tıklayarak tarayıcınızda açıp deneyimleyebilirsiniz.

### 3. Yayına Alın (Deployment)
Klasörü doğrudan GitHub Pages, Netlify, Vercel veya kendi web sunucunuza yükleyerek saniyeler içinde yayına alabilirsiniz.

---

## ⚙️ Özelleştirme Rehberi

Tüm kişisel bilgileri, sosyal medya linklerini ve çalma listesini değiştirmek için tek yapmanız gereken [scripts/config.js](scripts/config.js) dosyasını düzenlemektir.

```javascript
const CONFIG = {
    name: "Henox",
    email: "xx@gmail.com", // İletişim sayfasında gösterilecek e-posta adresi
    whatsapp: "905375628262", // WhatsApp Butonu tıklandığında yönlendirilecek numara
    socials: {
        r10: "https://www.r10.net/profil/...", // R10 profiliniz
        github: "https://github.com/...", // GitHub profiliniz
        instagram: "https://instagram.com/...", // Instagram profiliniz
        discord: "https://discord.gg/...", // Discord sunucu/davet linkiniz
        discordUserId: "1462496241693753558" // Canlı Discord durumu ve Spotify bilgisi için Discord Karakter Kimliği
    },
    // Winamp Müzik Çalar Listesi
    tracks: [
        {
            metaData: { artist: "Azer Bülbül", title: "İyi Değilim" },
            url: "/media/sounds/sarkilar/Azer-Bulbul-Iyi-Degilim.mp3",
            duration: 270
        },
        // Diğer şarkılar...
    ]
};
```

> [!TIP]
> Canlı Discord durumunuzun düzgün çalışabilmesi için Discord hesabınızın **Lanyard API** ile bağlı olması gerekir. Lanyard sunucusuna katılarak veya durumu herkese açık yaparak profilinizi aktifleştirebilirsiniz.

---

## 📂 Temizlenmiş Proje Yapısı

Gereksiz tüm klasör ve dosyalar (eski blog yazıları, günlükler, WIP dizinleri) temizlenmiş, optimize edilmiş dosya yapısı aşağıdaki gibidir:

```text
├── about/                # Hakkımda detay sayfası
├── media/                # Medya varlıkları klasörü
│   ├── skins/            # Winamp için Aero/Classic skin dosyaları
│   └── sounds/           # mp3 formatında Türkçe nostalji şarkıları
│       └── sarkilar/     # Web uyumlu, temiz isimlendirilmiş 22 adet parça
├── minesweeper/          # Klasik Mayın Tarlası web uygulaması
├── player/               # Winamp oynatıcı pop-up arayüzü
├── scripts/              # Dinamik JavaScript dosyaları
│   ├── background_changer.js  # Bliss Gece/Gündüz duvar kağıdı yönetimi
│   ├── config.js         # Tüm sistemin merkezi yönetim ve ayar dosyası
│   ├── lanyard.js        # Canlı Discord Lanyard API bağlantısı
│   └── notification.js   # Retro XP konuşma balonu bildirimleri
├── default.css           # Ana XP teması ve responsive düzen CSS'i
├── index.html            # Ana Başlat Menüsü & profil paneli
└── README.md             # Bu belge
```

---

## 💬 İletişim & Sosyal Medya

Eğer benimle iletişime geçmek isterseniz, Başlat Menüsü üzerinden veya aşağıdaki kanallardan ulaşabilirsiniz:

- **💬 WhatsApp:** [+90 537 562 82 62](https://wa.me/905375628262)
- **🐙 GitHub:** [Henox77](https://github.com/Henox77)

---

<div align="center">
    <sub>Bu proje nostalji sevenler için özenle optimize edilmiş ve modernize edilmiştir.</sub><br>
    <sub>Henox © 2026. Tüm Hakları Saklıdır.</sub>
</div>
