# 📖 DOKUMENTASI LENGKAP - Portfolio Landing Page

> **Dokumentasi lengkap dengan semua kode yang bisa langsung di-copy-paste!**

**📌 Semua file sudah diberi label folder yang jelas. Tinggal copy code dan paste ke file yang sesuai.**

---

## 📂 Daftar Isi

1. [Struktur Folder](#struktur-folder)
2. [File Konfigurasi](#file-konfigurasi)
3. [Global Styles](#global-styles)
4. [Data File](#data-file)
5. [Components](#components)
6. [Main App](#main-app)
7. [Panduan Kustomisasi](#panduan-kustomisasi)

---

## 📁 Struktur Folder

```
porto/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---


## 🔧 File Konfigurasi

### 📍 File: `vite.config.js` (Root folder)

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**📝 Penjelasan:**
- `react()` - Plugin untuk React Fast Refresh
- `tailwindcss()` - Plugin Tailwind CSS v4 untuk Vite

---

### 📍 File: `index.html` (Root folder)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Danu - Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

**✏️ Kustomisasi:**
- Ubah `<title>` dengan nama Anda
- Ganti `/vite.svg` dengan favicon Anda

---

### 📍 File: `package.json` (Root folder)

```json
{
  "name": "porto",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.2.3",
    "react-dom": "^19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.x",
    "@vitejs/plugin-react": "^5.1.2",
    "eslint": "^9.39.2",
    "eslint-plugin-react": "^7.x",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.26",
    "globals": "^16.5.0",
    "tailwindcss": "^4.x",
    "vite": "^7.3.1"
  }
}
```

**📦 Install semua dependencies:**
```bash
npm install
```

---


## 🎨 Global Styles

### 📍 File: `src/index.css`

```css
@import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

@theme {
  --font-family-sans: 'Inter', system-ui, sans-serif;
  
  --color-primary-50: #f0fdf4;
  --color-primary-100: #dcfce7;
  --color-primary-200: #bbf7d0;
  --color-primary-300: #86efac;
  --color-primary-400: #4ade80;
  --color-primary-500: #22c55e;
  --color-primary-600: #16a34a;
  --color-primary-700: #15803d;
  --color-primary-800: #166534;
  --color-primary-900: #14532d;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
}

@layer utilities {
  .animation-delay-200 {
    animation-delay: 200ms;
  }
  .animation-delay-400 {
    animation-delay: 400ms;
  }
}
```

**✏️ Kustomisasi Warna:**
- Ubah nilai `--color-primary-*` untuk ganti tema warna
- Contoh warna lain:
  - Biru: `#3B82F6`
  - Ungu: `#8B5CF6`  
  - Merah: `#EF4444`

---

### 📍 File: `src/main.jsx`

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**📝 Penjelasan:**
- Entry point aplikasi React
- Import global CSS
- Render App component ke DOM

---

