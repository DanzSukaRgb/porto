# 🚀 Portfolio Landing Page - ReactJS + Tailwind CSS

> **Portfolio website modern, clean, dan fully responsive menggunakan ReactJS (Vite) dan Tailwind CSS v4**

[![React](https://img.shields.io/badge/React-19.2.3-blue?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

---

## 📸 Preview & Live Demo

### 🌐 Live Demo
**[LIHAT DEMO LIVE]** → `http://localhost:5174`

Jalankan project ini dengan:
```bash
npm install
npm run dev
```

### 📱 Screenshots

**Desktop View:**
- Hero Section dengan gradient & animasi blob
- Skills cards dengan icon SVG profesional
- Projects showcase dengan hover effects

**Mobile View:**
- Fully responsive di semua ukuran layar
- Mobile menu hamburger
- Touch-friendly navigation

---

## ✨ Fitur Lengkap

### 🎯 Sections
- ✅ **Navbar** - Sticky dengan blur background & smooth scroll
- ✅ **Hero** - Gradient background dengan animasi blob
- ✅ **About** - Bio, avatar, dan statistics
- ✅ **Skills** - Grid cards dengan icon SVG & progress bar
- ✅ **Projects** - Showcase dengan gambar & tech stack
- ✅ **Contact** - Form UI (tidak submit ke server)
- ✅ **Footer** - Social links & quick navigation

### 🎨 Design
- ✅ **Warna Tema** - Hijau & Putih (customizable)
- ✅ **Font** - Inter dari Google Fonts
- ✅ **Animasi** - Hover scale, shadow, blob animation
- ✅ **Responsive** - Mobile first design
- ✅ **Clean UI** - Minimalist & modern

### 💻 Technical
- ✅ **No Backend** - Full frontend only
- ✅ **No API** - Semua data dari file JS
- ✅ **No Database** - Static portfolio
- ✅ **SEO Ready** - Semantic HTML
- ✅ **Fast** - Optimized dengan Vite

---

## 📁 Struktur Folder Lengkap

```
porto/
├── 📂 public/
│   └── vite.svg                 # Logo Vite
│
├── 📂 src/
│   ├── 📂 components/           # 🔥 Semua React Components
│   │   ├── Navbar.jsx           # Sticky navbar + mobile menu
│   │   ├── Hero.jsx             # Hero section + gradient
│   │   ├── About.jsx            # About section + stats
│   │   ├── Skills.jsx           # Skills cards + SVG icons
│   │   ├── Projects.jsx         # Project showcase
│   │   ├── Contact.jsx          # Contact form (UI only)
│   │   └── Footer.jsx           # Footer + social links
│   │
│   ├── 📂 data/                 # 📊 Data Storage
│   │   └── portfolioData.jsx    # Skills, Projects, Social Links
│   │
│   ├── 📄 App.jsx               # Main App Component
│   ├── 📄 main.jsx              # Entry Point
│   └── 📄 index.css             # Global Styles + Tailwind Config
│
├── 📄 index.html                # HTML Template
├── 📄 vite.config.js            # Vite Configuration
├── 📄 package.json              # Dependencies
├── 📄 package-lock.json         # Lock file
└── 📄 eslint.config.js          # ESLint Config

📝 Documentation Files:
├── 📖 README.md                 # This file
├── 📋 DOKUMENTASI.md            # Complete code documentation
└── 🚀 SETUP_GUIDE.md            # Step-by-step setup guide
```

---

## 🚀 Quick Start

### 1️⃣ Clone atau Download Project

```bash
# Clone repository (jika ada)
git clone <repository-url>
cd porto

# Atau download ZIP dan extract
```

### 2️⃣ Install Dependencies

```bash
npm install
```

**Package yang akan terinstall:**
- React 19.2.3
- Vite 7.3.1
- Tailwind CSS v4
- @tailwindcss/vite

### 3️⃣ Jalankan Development Server

```bash
npm run dev
```

**Buka browser:** `http://localhost:5173`

### 4️⃣ Build untuk Production

```bash
npm run build
```

Build output akan ada di folder `dist/`

### 5️⃣ Preview Production Build

```bash
npm run preview
```

---

## 📚 Dokumentasi Lengkap

### 📖 Lihat File Dokumentasi

1. **[DOKUMENTASI.md](./DOKUMENTASI.md)** - Dokumentasi lengkap semua kode
   - Copy-paste code untuk setiap file
   - Penjelasan setiap component
   - Cara kustomisasi

2. **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Panduan setup dari awal
   - Membuat project baru dari nol
   - Step-by-step installation
   - Troubleshooting

---

## 🎨 Kustomisasi Cepat

### 1. Ubah Nama & Branding

**📍 File:** `src/components/Navbar.jsx`
```jsx
// Baris 47
<button className="text-2xl font-bold">
  Danu  {/* 👈 GANTI INI */}
</button>
```

**📍 File:** `src/components/Hero.jsx`
```jsx
// Baris 27
<h1 className="text-5xl">
  Hi, I'm <span>Danu</span>  {/* 👈 GANTI INI */}
</h1>
```

### 2. Ubah Warna Tema

**📍 File:** `src/index.css`
```css
/* Baris 5-14 */
@theme {
  --color-primary-600: #16a34a;  /* 👈 Ubah ke warna favorit */
  --color-primary-500: #22c55e;
  /* ... */
}
```

**Contoh warna lain:**
- **Biru:** `#3B82F6`
- **Ungu:** `#8B5CF6`
- **Merah:** `#EF4444`
- **Orange:** `#F97316`

### 3. Ubah Data Skills

**📍 File:** `src/data/portfolioData.jsx`
```jsx
// Baris 1-120 (array skills)
export const skills = [
  {
    id: 1,
    name: "React JS",      // 👈 Nama skill
    category: "Frontend",   // 👈 Kategori
    level: "Advanced",      // 👈 Advanced/Intermediate
    icon: <svg>...</svg>    // 👈 Icon SVG
  },
  // Tambah skill baru di sini
];
```

### 4. Ubah Data Projects

**📍 File:** `src/data/portfolioData.jsx`
```jsx
// Baris 122-194 (array projects)
export const projects = [
  {
    id: 1,
    title: "Project Name",           // 👈 Nama project
    description: "Description...",    // 👈 Deskripsi
    image: "https://...",            // 👈 URL gambar
    tech: ["React", "Laravel"],      // 👈 Tech stack
    demoLink: "https://...",         // 👈 Link demo
    codeLink: "https://...",         // 👈 Link GitHub
  },
  // Tambah project baru di sini
];
```

### 5. Ubah Social Media Links

**📍 File:** `src/data/portfolioData.jsx`
```jsx
// Baris 196-219 (array socialLinks)
export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/username",  // 👈 Ganti URL
    icon: "github"
  },
  // Tambah social media baru di sini
];
```

---

## 📦 Package.json - Scripts

```json
{
  "scripts": {
    "dev": "vite",              // Development server
    "build": "vite build",       // Build production
    "preview": "vite preview"    // Preview build
  }
}
```

**Cara pakai:**
```bash
npm run dev      # Jalankan dev server
npm run build    # Build untuk production
npm run preview  # Preview hasil build
```

---

## 🔧 File Konfigurasi

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Danu - Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## 🌐 Deploy ke Production

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
npm run build
vercel --prod
```

### Option 2: Netlify

```bash
# Build project
npm run build

# Upload folder 'dist' ke Netlify
# atau connect GitHub repository
```

### Option 3: GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}

# Deploy
npm run deploy
```

---

## 🐛 Troubleshooting

### Problem: Tailwind classes tidak work
**Solution:**
1. Pastikan `@import "tailwindcss";` ada di `src/index.css`
2. Restart dev server: `Ctrl+C` → `npm run dev`
3. Clear browser cache

### Problem: JSX syntax error di file .js
**Solution:**
- File dengan JSX harus ekstensi `.jsx` bukan `.js`
- Rename: `file.js` → `file.jsx`

### Problem: Module not found
**Solution:**
1. `npm install` untuk install ulang dependencies
2. Periksa import path (case-sensitive)
3. Restart dev server

### Problem: Port already in use
**Solution:**
- Tutup terminal lain yang menjalankan Vite
- Atau Vite akan otomatis cari port lain (5174, 5175, dst)

---

## 📖 Resources & Learning

### Documentation
- [React Docs](https://react.dev) - React documentation
- [Vite Docs](https://vitejs.dev) - Vite build tool
- [Tailwind CSS v4](https://tailwindcss.com) - Tailwind CSS
- [MDN Web Docs](https://developer.mozilla.org) - Web standards

### Icons & Images
- [Simple Icons](https://simpleicons.org) - Brand SVG icons
- [Heroicons](https://heroicons.com) - UI icons
- [Unsplash](https://unsplash.com) - Free images
- [Placeholder](https://placeholder.com) - Placeholder images

### Tools
- [Color Hunt](https://colorhunt.co) - Color palettes
- [Google Fonts](https://fonts.google.com) - Web fonts
- [Can I Use](https://caniuse.com) - Browser compatibility

---

## 📊 Project Statistics

- **Total Components:** 7 files
- **Data Files:** 1 file
- **Total Skills:** 8 items (customizable)
- **Total Projects:** 6 items (customizable)
- **Social Links:** 4 items (customizable)
- **Lines of Code:** ~1,500 lines
- **Bundle Size:** < 200 KB (after build)

---

## 🎯 Best Practices

### ✅ DO's
- ✅ Update data di `portfolioData.jsx` untuk kustomisasi
- ✅ Gunakan gambar yang sudah di-optimize
- ✅ Test di berbagai ukuran layar
- ✅ Update meta tags untuk SEO
- ✅ Add Google Analytics jika perlu

### ❌ DON'Ts
- ❌ Jangan langsung edit di `node_modules/`
- ❌ Jangan commit `node_modules/` ke git
- ❌ Jangan hardcode data di component
- ❌ Jangan lupa run `npm run build` sebelum deploy

---

## 📝 License

**MIT License** - Bebas digunakan untuk project pribadi atau komersial

---

## 👨‍💻 Author

**Danu**  
Portfolio Landing Page Developer

---

## 🤝 Contributing

Feel free to:
- Fork project ini
- Customize sesuai kebutuhan
- Share dengan teman-teman
- Give feedback

---

## 📞 Support

Jika ada pertanyaan atau masalah:
1. Baca **[DOKUMENTASI.md](./DOKUMENTASI.md)** untuk code lengkap
2. Baca **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** untuk setup guide
3. Check **Troubleshooting** section di atas

---

## 🎉 Happy Coding!

**Made with ❤️ using React + Vite + Tailwind CSS**

---

**⭐ Star project ini jika bermanfaat!**
