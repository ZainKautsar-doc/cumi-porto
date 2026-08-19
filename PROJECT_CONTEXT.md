# 🧠 PROJECT CONTEXT

## 1. Informasi Umum
- **Nama Project**: Portfolio Website Putri Arielia (`cumi-porto`)
- **Deskripsi Project**: Aplikasi web Single-Page Portfolio (SPA) personal untuk **Putri Arielia**, seorang mahasiswi S1 Sains Informasi Geografi di Universitas Pendidikan Indonesia (UPI). Aplikasi ini berada pada domain profil profesional geospasial, pemetaan tematik, kartografi, dan penginderaan jauh (*Remote Sensing*).
- **Tujuan Utama**: Menampilkan rekam jejak akademik, pengalaman profesional penyusunan peta dasar/RDTR, sertifikasi BNSP & Coursera, serta keahlian perangkat lunak GIS (ArcGIS Pro, ArcMap, QGIS) dalam bentuk visual yang modern, interaktif, serta memiliki dukungan penuh bahasa ganda (Bahasa Indonesia & Bahasa Inggris) untuk mempermudah kolaborasi profesional.
- **Target User**: Perekrut (*recruiters*), mitra kolaborasi proyek geospasial, instansi pemerintah/swasta di bidang infrastruktur & kewilayahan, serta civitas akademika.
- **Fitur Utama**:
  1. **Dual Language Toggle (ID/EN) & Persistence**: Memungkinkan pengunjung mengubah seluruh teks situs antara Bahasa Indonesia dan Bahasa Inggris secara langsung tanpa *reload* halaman. Pilihan bahasa pengunjung disimpan di `localStorage` (`app_lang`).
  2. **Responsive Sticky Navigation**: Header navigasi yang melayang (*sticky*) dengan efek *glassmorphism* (`backdrop-blur`), tautan navigasi smooth scroll, tombol switcher bahasa, dan tombol unduh CV. Dilengkapi *hamburger drawer* khusus tampilan mobile.
  3. **Hero Section Visual**: Tampilan headline "Mapping the World's Data" dengan layout 2-kolom, hiasan latar belakang bentuk *gradient blob*, serta card gambar ilustrasi peta dunia lengkap dengan badge status "IPK 3.75" dan tag keahlian "ArcGIS Pro & QGIS".
  4. **Journey & Specialization Pillars**: Menampilkan 3 pilar utama kompetensi spasial (Spatial Analysis, Cartography & Layouting, Remote Sensing) dalam format card interaktif.
  5. **Expandable Professional Experience List**: Menampilkan 6 riwayat pengalaman profesional (BAPPERIDA Kota Bandung, RDTR Kota Cimahi, Wanadri, BBWS, Coach Renang, Instruktur GIS). Secara default menampilkan 3 pengalaman teratas, dan dapat diperluas (*expand*) untuk melihat seluruhnya melalui tombol toggle *Show More*.
  6. **3-Column Qualification Dashboard**: Layout 3 kolom yang mengelompokkan:
     - *Kolom 1*: Background Pendidikan & Mata Kuliah Utama.
     - *Kolom 2*: Sertifikasi Resmi (BNSP, Coursera, UMich) & Pengalaman Organisasi (PMB 1948, IMAGIS).
     - *Kolom 3*: Categorized Core Skills (GIS Software, Spatial Competencies, Languages & Leadership).
  7. **Direct Collaboration Contact Cards (Non-Form)**: Section kontak interaktif tanpa form isian yang menyajikan kartu informasi lokasi, email direct (`mailto:`), WhatsApp direct (`wa.me`), dan profil LinkedIn (`https://www.linkedin.com/in/putriarielia/`).
  8. **SEO & Social Share Ready**: Dilengkapi Meta Tags lengkap (OpenGraph Facebook/LinkedIn dan Twitter Cards) untuk optimasi mesin pencari dan tampilan preview *social share*.

---

## 2. Teknologi yang Digunakan
- **Bahasa Pemrograman**: JavaScript (ES6+ JSX / ECMAScript Modules).
- **Framework Utama**: **React 19** (`react` ^19.2.8, `react-dom` ^19.2.8) bertindak sebagai UI rendering library berbasis komponen deklaratif.
- **Build Tool / Bundler**: **Vite 6** (`vite` ^6.0.0, `@vitejs/plugin-react` ^4.3.0) untuk kompilasi modul yang cepat, *Hot Module Replacement* (HMR), dan kompilasi bundle produksi.
- **Library / Packages Penting**:
  - `lucide-react` (^1.33.0): Kumpulan ikon vektor SVG modern yang digunakan pada seluruh komponen UI (Globe, Map, Compass, Layers, GraduationCap, Award, Wrench, Phone, Mail, dll).
- **Design System & UI Styling**:
  - **Tailwind CSS v4** (`tailwindcss` ^4.0.0, `@tailwindcss/vite` ^4.0.0): Utility-first CSS framework untuk penataan layout responsive, animasi keyframes, glassmorphism (`backdrop-blur`), dan skema warna.
- **Tools / Integrasi Lain**:
  - **Web Storage API**: `localStorage` native browser untuk menyimpan preferensi bahasa pengguna.
  - **Google Fonts**: Font *Plus Jakarta Sans* diimpor melalui CDN pada `index.html`.

---

## 3. Arsitektur & Alur Sistem
- **Arsitektur**: Component-Based Architecture (Single-Page Application). Aplikasi dirancang secara modular di mana seluruh struktur data (i18n) terpisah secara deklaratif dari antarmuka visual.
- **Alur Data End-to-End**:
  1. *Inisialisasi*: Saat aplikasi dibuka, React membaca state preferensi bahasa dari `localStorage.getItem('app_lang')`. Jika belum ada, sistem mengabaikan ke default `'ID'`.
  2. *Variabel Helper `isId`*: Variabel boolean `const isId = lang === 'ID'` menentukan kunci bahasa mana yang akan dirender dari objek data i18n (`item.title.id` atau `item.title.en`).
  3. *State Change*: Pengguna menekan tombol Toggle Bahasa (ID/EN) $\rightarrow$ Trigger `setLang(nextLang)` $\rightarrow$ Menyimpan nilai baru ke `localStorage` $\rightarrow$ React melakukan re-render instan pada seluruh UI tanpa me-refresh halaman.
  4. *Expand Experience State*: Pengguna menekan tombol "Lihat Pengalaman Lainnya" $\rightarrow$ Trigger `setShowAllExp(!showAllExp)` $\rightarrow$ React memotong array `experiences` dengan `.slice(0, 3)` atau merender seluruh array.

---

## 4. Struktur Folder & Penjelasan Detail

```text
cumi-porto/
├── dist/                     # Asset hasil kompilasi produksi (HTML, CSS, JS bundle)
├── node_modules/             # Dependency npm / node packages
├── public/                   # Asset statis publik
├── src/                      # Source code utama aplikasi
│   ├── App.jsx               # File utama berisi data i18n, logic state, dan seluruh komponen UI
│   ├── index.css             # Import Tailwind CSS v4 (@import "tailwindcss";), font & animasi
│   └── main.jsx              # Entry point React DOM (render <App /> ke elemen #root)
├── .gitignore                # Daftar berkas/folder yang diabaikan Git (node_modules, dist)
├── cumi-porto.md             # Dokumen spesifikasi prompt awal dari user
├── index.html                # Template HTML utama (SEO Meta tags, OpenGraph, font imports)
├── package.json              # Manifes npm (dependencies, scripts, metadata project)
├── PROJECT_CONTEXT.md        # File ini (Dokumentasi lengkap context project untuk AI)
└── vite.config.js            # Konfigurasi plugin Vite & Tailwind CSS v4
```

### Penjelasan Berkas Penting:
1. **`src/App.jsx`**: Merupakan jantung dari aplikasi ini. Berisi:
   - Data struktur konstan yang diexport: `personalInfo`, `bioText`, `heroText`, `journeyText`, `experiences`, `educationList`, `certificationList`, `organizationsList`, dan `coreSkillsData`.
   - Komponen inline `LinkedinIcon` (SVG custom fallback).
   - Main Component `App()` yang mengelola state `lang`, `mobileMenuOpen`, dan `showAllExp`, serta merender 7 section UI (Navbar, Hero, Journey, Experience, Qualification, Contact, Footer).
2. **`index.html`**: Menyediakan kerangka HTML5 dasar, pengesetan SEO meta tags (Description, Keywords, Author), OpenGraph meta (`og:title`, `og:image`), Twitter meta, serta link font CDN Google Fonts *Plus Jakarta Sans*.
3. **`src/index.css`**: Berisi directive `@import "tailwindcss";` untuk Tailwind v4, pengesetan smooth scrolling `scroll-behavior: smooth;` pada elemen `html`, serta custom keyframes `fadeIn` untuk animasi scroll/transition.
4. **`vite.config.js`**: Mengkonfigurasi bundler Vite dengan plugin `@vitejs/plugin-react` dan `@tailwindcss/vite`.
5. **`package.json`**: Menyimpan daftar modul dependency dan script eksekusi (`npm run dev`, `npm run build`).

---

## 5. Konvensi & Gaya Coding
- **Gaya Coding**: Functional Components berbasis **React Hooks** (`useState`, `useEffect`). Mengusung prinsip *Clean Code* dan *Declarative UI*.
- **Naming Conventions**:
  - *File*: `camelCase` untuk file Javascript/CSS biasa, `PascalCase` untuk file komponen React (`App.jsx`, `main.jsx`).
  - *Variables & States*: `camelCase` (contoh: `mobileMenuOpen`, `showAllExp`, `handleToggleLang`).
  - *Data Objects*: `camelCase` (contoh: `personalInfo`, `journeyText`, `coreSkillsData`).
- **Data & i18n Handling**: Semua teks yang mendukung dua bahasa dibungkus dalam objek yang konsisten dengan atribut `.id` dan `.en`. Contoh:
  ```javascript
  title: {
    id: "Sertifikasi & Organisasi",
    en: "Certifications & Leadership"
  }
  ```
- **Error Handling & Defense**:
  - Tombol **Unduh CV** memiliki penanganan fallback event (`onClick` prevent default) yang memberikan dialog alert informatif jika berkas PDF belum diunggah.
  - Tautan kontak seperti email (`mailto:`), WhatsApp (`wa.me`), dan LinkedIn dilindungi atribut `target="_blank"` dan `rel="noopener noreferrer"`.

---

## 6. Cara Menjalankan Project

### Prasyarat System:
- **Node.js**: v18.0.0 atau lebih baru.
- **npm**: v9.0.0 atau lebih baru.

### Langkah-langkah:
1. **Clone / Buka Folder Project**:
   ```bash
   cd c:\Users\hp\Downloads\cumi-porto
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Menjalankan Dev Server (Mode Pengembangan)**:
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:5173` (atau port berikutnya jika 5173 terpakai).

4. **Membuat Production Build**:
   ```bash
   npm run build
   ```
   Hasil bundle produksi akan dihasilkan di folder `dist/`.

5. **Preview Production Build secara Lokal**:
   ```bash
   npm run preview
   ```

---

## 7. Insight Teknis Tambahan
- **Keputusan Teknis (Tailwind CSS v4 + Vite)**: Penggunaan `@tailwindcss/vite` (Tailwind v4) dipilih untuk mempercepat waktu build tanpa memerlukan file `tailwind.config.js` yang terpisah, karena directive dikendalikan langsung oleh engine CSS bundler.
- **Lucide Icons & Custom SVG**: Sebagian besar ikon diambil dari `lucide-react`. Untuk ikon LinkedIn, dibuatkan komponen custom SVG inline (`LinkedinIcon`) untuk menjamin kompatibilitas bundle yang 100% stabil di semua versi build.
- **Potensi Improvement Di Masa Depan**:
  - Memisahkan data struktur i18n dari `App.jsx` ke dalam file terpisah `src/data/portfolioData.js` agar pembacaan komponen UI lebih ringkas.
  - Mengintegrasikan modal lightbox / gallery preview untuk melihat sertifikat BNSP dan koleksi peta tematik secara langsung.
  - Menambahkan file PDF CV fisik pada folder `public/cv-putri-arielia.pdf` dan menyambungkan variabel `cvUrl`.

---

## 8. Ringkasan untuk AI
1. **Apa project ini?**: Single-Page Portfolio Website berbasis React + Tailwind CSS untuk Putri Arielia (Mahasiswi Sains Informasi Geografi UPI).
2. **Stack Utama**: React 19, Vite 6, Tailwind CSS v4, Lucide React.
3. **Struktur Utama**: Terpusat pada `src/App.jsx` yang memuat struktur data i18n (Indonesian & English) dan seluruh section antarmuka (Header, Hero, Journey, Experience, Qualifications, Contact, Footer).
4. **Hal Penting yang Perlu Diketahui AI**:
   - Seluruh konten bilingual mengandalkan pola data `{ id: "...", en: "..." }` dan dirender berdasarkan state `lang`.
   - Tidak ada Backend/Database; seluruh data bersifat hardcoded dalam format JavaScript objects/arrays yang mudah di-expand.
   - Styling sepenuhnya menggunakan utility classes Tailwind CSS dengan palette warna Navy (`#1a1a2e`), Light Blue (`#E0F2FE`), dan Pink (`#EC4899`).
