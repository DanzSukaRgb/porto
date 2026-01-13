import { useState } from 'react';

const CodeBlock = ({ code, language = 'jsx', filename }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-6">
      {filename && (
        <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg">
          <span className="text-sm text-gray-300 font-mono">📁 {filename}</span>
          <span className="text-xs text-gray-400">{language}</span>
        </div>
      )}
      <div className="relative group">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm rounded-lg transition-colors z-10"
        >
          {copied ? '✅ Copied!' : '📋 Copy'}
        </button>
        <pre className="bg-gray-900 rounded-b-lg p-6 overflow-x-auto max-h-[600px]">
          <code className="text-sm text-gray-100 font-mono whitespace-pre">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

const ComponentAccordion = ({ title, filename, code, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center space-x-4">
          <span className="text-2xl">{isOpen ? '📂' : '📁'}</span>
          <div className="text-left">
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500 font-mono">{filename}</p>
            {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
          </div>
        </div>
        <svg
          className={`w-6 h-6 text-gray-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <CodeBlock code={code} filename={filename} />
        </div>
      )}
    </div>
  );
};

const Documentation = ({ onNavigateToPortfolio }) => {
  const [activeTab, setActiveTab] = useState('setup');

  const tabs = [
    { id: 'setup', label: '🚀 Setup' },
    { id: 'config', label: '⚙️ Konfigurasi' },
    { id: 'components', label: '🧩 Components' },
    { id: 'data', label: '📊 Data' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed w-full top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-primary-600">📖 Dokumentasi Lengkap</h1>
            <button
              onClick={onNavigateToPortfolio}
              className="px-6 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              ← Kembali
            </button>
          </div>
        </div>
      </header>

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              📖 Dokumentasi Lengkap
            </h1>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">
              Semua kode dari awal hingga selesai. Copy & paste langsung!
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary-600 to-green-600 rounded-2xl p-8 mb-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">🌐 Live Demo</h2>
            <p className="text-lg mb-6">Lihat hasil akhir portfolio website!</p>
            <button
              onClick={onNavigateToPortfolio}
              className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:shadow-xl transition-all"
            >
              👁️ Lihat Portfolio Demo
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-8">
              
              {/* SETUP TAB */}
              {activeTab === 'setup' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">🚀 Setup dari Awal Sampai Selesai</h2>
                  
                  <div className="space-y-8">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">Prerequisites</h3>
                      <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Node.js versi 18+ terinstall</li>
                        <li>NPM atau Yarn</li>
                        <li>Text editor (VSCode recommended)</li>
                        <li>Terminal/Command Prompt</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-primary-600 pl-6">
                      <h3 className="text-xl font-bold mb-3">Step 1: Buat Project Vite</h3>
                      <CodeBlock
                        code="npm create vite@latest my-portfolio"
                        language="bash"
                        filename="Terminal"
                      />
                      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-3">
                        <p className="text-sm font-semibold text-gray-800 mb-2">Pilihan saat setup:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>✅ Select a framework: <strong className="text-blue-600">React</strong></li>
                          <li>✅ Select a variant: <strong className="text-blue-600">JavaScript</strong></li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-primary-600 pl-6">
                      <h3 className="text-xl font-bold mb-3">Step 2: Masuk ke Folder & Install</h3>
                      <CodeBlock
                        code={`cd my-portfolio
npm install`}
                        language="bash"
                        filename="Terminal"
                      />
                    </div>

                    <div className="border-l-4 border-primary-600 pl-6">
                      <h3 className="text-xl font-bold mb-3">Step 3: Install Tailwind CSS v4</h3>
                      <CodeBlock
                        code="npm install -D tailwindcss@latest @tailwindcss/vite@latest"
                        language="bash"
                        filename="Terminal"
                      />
                    </div>

                    <div className="border-l-4 border-primary-600 pl-6">
                      <h3 className="text-xl font-bold mb-3">Step 4: Buat Struktur Folder</h3>
                      <CodeBlock
                        code="mkdir -p src/components src/pages src/data"
                        language="bash"
                        filename="Terminal"
                      />
                      <div className="bg-gray-900 text-green-400 p-4 rounded-lg mt-3 font-mono text-sm">
                        <pre>{`my-portfolio/
├── node_modules/
├── public/
├── src/
│   ├── components/       ← Component files (akan dibuat)
│   ├── pages/            ← Page files (akan dibuat)
│   ├── data/             ← Data files (akan dibuat)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js`}</pre>
                      </div>
                    </div>

                    <div className="border-l-4 border-primary-600 pl-6">
                      <h3 className="text-xl font-bold mb-3">Step 5: Hapus File Tidak Terpakai</h3>
                      <CodeBlock
                        code="rm src/App.css"
                        language="bash"
                        filename="Terminal"
                      />
                    </div>

                    <div className="border-l-4 border-primary-600 pl-6">
                      <h3 className="text-xl font-bold mb-3">Step 6: Test Development Server</h3>
                      <CodeBlock
                        code="npm run dev"
                        language="bash"
                        filename="Terminal"
                      />
                      <p className="text-gray-600 mt-3">
                        ✅ Jika berhasil, buka: <code className="bg-gray-100 px-3 py-1 rounded font-mono text-primary-600">http://localhost:5173</code>
                      </p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-green-900 mb-3">✅ Setup Dasar Selesai!</h3>
                      <p className="text-green-800">Selanjutnya: Konfigurasi file di tab "⚙️ Konfigurasi"</p>
                    </div>
                  </div>
                </div>
              )}

              {/* KONFIGURASI TAB */}
              {activeTab === 'config' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">⚙️ File Konfigurasi</h2>
                  <p className="text-gray-600 mb-8">Copy semua file konfigurasi berikut ke project Anda</p>
                  
                  <CodeBlock
                    filename="vite.config.js (Root folder)"
                    code={`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})`}
                  />

                  <CodeBlock
                    filename="index.html (Root folder)"
                    language="html"
                    code={`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Name - Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`}
                  />

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>✏️ Kustomisasi:</strong> Ubah <code className="bg-yellow-100 px-2 py-1 rounded">&lt;title&gt;</code> dengan nama Anda
                    </p>
                  </div>

                  <CodeBlock
                    filename="src/index.css"
                    language="css"
                    code={`@import "tailwindcss";
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
}`}
                  />

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>💡 Ganti Warna Tema:</strong> Ubah nilai <code className="bg-blue-100 px-2 py-1 rounded">--color-primary-*</code> dengan warna favorit Anda<br/>
                      Contoh: Biru <code className="bg-blue-100 px-2 py-1 rounded">#3B82F6</code>, Ungu <code className="bg-blue-100 px-2 py-1 rounded">#8B5CF6</code>
                    </p>
                  </div>

                  <CodeBlock
                    filename="src/main.jsx"
                    code={`import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)`}
                  />

                  <CodeBlock
                    filename="src/App.jsx"
                    code={`import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;`}
                  />

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
                    <h3 className="text-lg font-bold text-green-900 mb-2">✅ Konfigurasi Selesai!</h3>
                    <p className="text-green-800">Selanjutnya: Copy semua component di tab "🧩 Components"</p>
                  </div>
                </div>
              )}

              {/* COMPONENTS TAB */}
              {activeTab === 'components' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">🧩 Components Lengkap</h2>
                  <p className="text-gray-600 mb-8">
                    Klik setiap component untuk melihat dan copy kode lengkapnya
                  </p>

                  <ComponentAccordion
                    title="1. Navbar Component"
                    filename="src/components/Navbar.jsx"
                    description="Sticky navbar dengan blur background, mobile menu, smooth scroll"
                    code={`import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={\`fixed w-full top-0 z-50 transition-all duration-300 \${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}\`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('home')} className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
              Your Name
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md text-gray-700 hover:text-primary-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors">
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;`}
                  />

                  <ComponentAccordion
                    title="2. Hero Component"
                    filename="src/components/Hero.jsx"
                    description="Hero section dengan gradient background & animasi blob"
                    code={`const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-200"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-400"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-primary-600 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-green-600">Your Name</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-8 font-medium">
            Frontend / Full Stack Developer
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Passionate about creating beautiful, functional, and user-friendly web applications using modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => scrollToSection('projects')} className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg shadow-lg hover:bg-primary-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              View Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg shadow-lg hover:shadow-xl border-2 border-primary-600 hover:bg-primary-50 transform hover:scale-105 transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-primary-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      <style>{\`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-blob { animation: blob 7s infinite; }
      \`}</style>
    </section>
  );
};

export default Hero;`}
                  />


                  <ComponentAccordion
                    title="3. About Component"
                    filename="src/components/About.jsx"
                    description="About section dengan avatar, bio, dan statistics"
                    code={`const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-green-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                  <svg
                    className="w-40 h-40 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary-600 text-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-semibold">Developer</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Hello! I'm Danu
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in building modern web applications
              and mobile solutions. With a strong foundation in both frontend and backend development,
              I create seamless digital experiences that users love.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              My primary focus is on <span className="text-primary-600 font-semibold">React JS</span> for
              building dynamic and responsive user interfaces, <span className="text-primary-600 font-semibold">Laravel</span> for
              robust backend solutions, and <span className="text-primary-600 font-semibold">Flutter</span> for
              cross-platform mobile applications.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm always eager to learn new technologies and tackle challenging projects. My goal is to
              write clean, maintainable code and deliver products that make a real impact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-3xl font-bold text-primary-600">3+</div>
                <div className="text-sm text-gray-600 mt-1">Years Exp</div>
              </div>
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-3xl font-bold text-primary-600">20+</div>
                <div className="text-sm text-gray-600 mt-1">Projects</div>
              </div>
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-3xl font-bold text-primary-600">15+</div>
                <div className="text-sm text-gray-600 mt-1">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
`}
                  />

                  <ComponentAccordion
                    title="4. Skills Component"
                    filename="src/components/Skills.jsx"
                    description="Skills cards dengan SVG icons & progress bar"
                    code={`import { skills } from '../data/portfolioData.jsx';

const SkillCard = ({ skill }) => {
  return (
    <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-primary-400">
      <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {skill.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{skill.name}</h3>
      <p className="text-sm text-primary-600 font-medium mb-2 text-center">{skill.category}</p>
      <div className="flex items-center">
        <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className={\`h-full bg-gradient-to-r from-primary-500 to-green-500 rounded-full transition-all duration-1000 \${
              skill.level === 'Advanced' ? 'w-11/12' : 'w-8/12'
            }\`}
          ></div>
        </div>
        <span className="ml-3 text-xs text-gray-600">{skill.level}</span>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
`}
                  />

                  <ComponentAccordion
                    title="5. Projects Component"
                    filename="src/components/Projects.jsx"
                    description="Project showcase cards dengan hover effects"
                    code={`import { projects } from '../data/portfolioData.jsx';

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={project.demoLink}
            className="flex-1 text-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            Live Demo
          </a>
          <a
            href={project.codeLink}
            className="flex-1 text-center px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
`}
                  />

                  <ComponentAccordion
                    title="6. Contact Component"
                    filename="src/components/Contact.jsx"
                    description="Contact form (UI only) dengan validation"
                    code={`import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI only - tidak mengirim ke server
    alert('Thank you for your message! (This is a demo form - no data is sent)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900 font-medium">danu@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-900 font-medium">Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
`}
                  />

                  <ComponentAccordion
                    title="7. Footer Component"
                    filename="src/components/Footer.jsx"
                    description="Footer dengan social media links & quick navigation"
                    code={`import { socialLinks } from '../data/portfolioData.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'github':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        );
      case 'instagram':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4">Danu</h3>
            <p className="text-gray-400">
              Full Stack Developer passionate about creating amazing web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors transform hover:scale-110 duration-300"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} <span className="text-primary-400 font-semibold">Danu</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
`}
                  />

                  <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                    <h3 className="text-lg font-bold text-green-900 mb-2">✅ Semua Component Selesai!</h3>
                    <p className="text-green-800">Selanjutnya: Copy file data di tab "📊 Data"</p>
                  </div>
                </div>
              )}

              {/* DATA TAB */}
              {activeTab === 'data' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">📊 Data Portfolio</h2>
                  <p className="text-gray-600 mb-8">
                    File ini berisi semua data skills, projects, dan social links. Copy lengkap dengan SVG icons!
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-6">
                    <p className="text-sm text-gray-700">
                      <strong>⚠️ Penting:</strong> File ini menggunakan ekstensi <code className="bg-yellow-100 px-2 py-1 rounded">.jsx</code> (bukan .js) karena berisi JSX syntax untuk SVG icons
                    </p>
                  </div>

                  <CodeBlock
                    filename="src/data/portfolioData.jsx"
                    code={`// Array Skills dengan SVG Icons
export const skills = [
  {
    id: 1,
    name: "React JS",
    category: "Frontend",
    level: "Advanced",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
        <path fill="#61DAFB" d="M12,10.11c1.03,0,1.87,0.84,1.87,1.89c0,1.05-0.84,1.89-1.87,1.89c-1.03,0-1.87-0.84-1.87-1.89C10.13,10.95,10.97,10.11,12,10.11 M7.37,20c0.63,0.38,2.01-0.2,3.6-1.7c-0.52-0.59-1.03-1.23-1.51-1.9c-0.82-0.08-1.63-0.2-2.4-0.36C6.88,17.18,6.74,19.62,7.37,20 M8.08,14.26l0.03,0.19l0.09-0.06L8.08,14.26z M16.62,20c0.63-0.38,0.77-2.82,0.59-3.96c-0.77,0.16-1.58,0.28-2.4,0.36c-0.48,0.67-0.99,1.31-1.51,1.9C14.88,19.8,15.99,20.38,16.62,20 M15.92,14.26l0.09,0.06l0.03-0.19L15.92,14.26z M12,6.78c-0.19,0.22-0.39,0.45-0.59,0.72h1.18C12.39,7.23,12.19,7,12,6.78z M12,17.22c0.19-0.22,0.39-0.45,0.59-0.72h-1.18C11.61,16.77,11.81,17,12,17.22z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M19.46,9.5c-0.32-0.59-0.88-1.12-1.54-1.63c0-0.01,0-0.01-0.01-0.02C16.27,6.26,14.24,5.25,12,5.25c-2.24,0-4.27,1.01-5.91,2.6c0,0.01,0,0.01-0.01,0.02c-0.66,0.51-1.22,1.04-1.54,1.63C4.2,10.06,4,10.61,4,11.19c0,0.58,0.2,1.13,0.54,1.69c0.32,0.59,0.88,1.12,1.54,1.63c0,0.01,0,0.01,0.01,0.02C7.73,16.14,9.76,17.15,12,17.15c2.24,0,4.27-1.01,5.91-2.6c0-0.01,0-0.01,0.01-0.02c0.66-0.51,1.22-1.04,1.54-1.63c0.34-0.56,0.54-1.11,0.54-1.69C20,10.61,19.8,10.06,19.46,9.5z"/>
      </svg>
    )
  },
  {
    id: 2,
    name: "Laravel",
    category: "Backend",
    level: "Advanced",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#FF2D20">
        <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033.012.009.025.018.036.027.01.013.022.026.032.04.012.013.019.024.024.038.008.016.018.038.024.056.007.01.01.021.013.032.007.032.013.065.013.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.022.025-.033.007-.011.02-.031.033-.045.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.012.022.025.033.04.011.011.02.024.024.035.008.02.017.038.024.058.006.01.01.021.013.032.007.032.013.065.013.098zM4.51 3.444v9.659a.376.376 0 01-.189.326l-3.76 2.164V5.928l3.95-2.484zM5.043 3.85l-3.76 2.164 3.76 2.164 3.76-2.164-3.76-2.164zM9.93 14.935v9.659l-3.76-2.164V12.772l3.76 2.163zm9.656-1.097V5.527l-3.76 2.164v9.311l3.76-2.164zm-3.013-10.69v9.659l3.76-2.164V5.527l-3.76-2.164zm3.388 5.85l-3.76-2.163 3.76-2.164 3.76 2.164-3.76 2.164z"/>
      </svg>
    )
  },
  {
    id: 3,
    name: "Flutter",
    category: "Mobile",
    level: "Intermediate",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24">
        <path fill="#02569B" d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
      </svg>
    )
  },
  {
    id: 4,
    name: "JavaScript",
    category: "Frontend",
    level: "Advanced",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#F7DF1E">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
      </svg>
    )
  },
  {
    id: 5,
    name: "PHP",
    category: "Backend",
    level: "Advanced",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24">
        <path fill="#777BB4" d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12s-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.681h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.752zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"/>
      </svg>
    )
  },
  {
    id: 6,
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Advanced",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#06B6D4">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
      </svg>
    )
  },
  {
    id: 7,
    name: "MySQL",
    category: "Database",
    level: "Intermediate",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24">
        <path fill="#4479A1" d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.273.15.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"/>
      </svg>
    )
  },
  {
    id: 8,
    name: "Git",
    category: "Tools",
    level: "Intermediate",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#F05032">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
      </svg>
    )
  }
];

// Array Projects
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application with payment gateway integration and admin dashboard.",
    image: "https://via.placeholder.com/400x250/22c55e/ffffff?text=E-Commerce",
    tech: ["React", "Laravel", "MySQL", "Tailwind"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features.",
    image: "https://via.placeholder.com/400x250/16a34a/ffffff?text=Task+Manager",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for tracking workouts, calories, and fitness goals.",
    image: "https://via.placeholder.com/400x250/15803d/ffffff?text=Fitness+App",
    tech: ["Flutter", "Firebase", "Dart"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 4,
    title: "Blog CMS",
    description: "Content management system with SEO optimization and markdown support.",
    image: "https://via.placeholder.com/400x250/166534/ffffff?text=Blog+CMS",
    tech: ["Laravel", "Vue.js", "PostgreSQL"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with maps, forecasts, and location search.",
    image: "https://via.placeholder.com/400x250/14532d/ffffff?text=Weather+App",
    tech: ["React", "API Integration", "Chart.js"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 6,
    title: "Portfolio Generator",
    description: "SaaS platform for creating custom portfolio websites with drag-and-drop builder.",
    image: "https://via.placeholder.com/400x250/22c55e/ffffff?text=Portfolio+Gen",
    tech: ["React", "Laravel", "Tailwind", "MySQL"],
    demoLink: "#",
    codeLink: "#"
  }
];

// Array Social Links
export const socialLinks = [
  { id: 1, name: "GitHub", url: "https://github.com", icon: "github" },
  { id: 2, name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { id: 3, name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { id: 4, name: "Instagram", url: "https://instagram.com", icon: "instagram" }
];`}
                  />

                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                      <h4 className="font-bold text-blue-900 mb-3">✏️ Kustomisasi Skills</h4>
                      <ul className="text-sm text-blue-800 space-y-2">
                        <li>• Ubah nama, category, level</li>
                        <li>• Ganti SVG icon dari <a href="https://simpleicons.org" target="_blank" rel="noopener noreferrer" className="underline">simpleicons.org</a></li>
                        <li>• Tambah/kurangi skills sesuai kebutuhan</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                      <h4 className="font-bold text-green-900 mb-3">✏️ Kustomisasi Projects</h4>
                      <ul className="text-sm text-green-800 space-y-2">
                        <li>• Ganti title, description</li>
                        <li>• Update image URL (gunakan Cloudinary/ImgBB)</li>
                        <li>• Ubah tech stack array</li>
                        <li>• Update demo & code links</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-6 bg-gradient-to-r from-primary-600 to-green-600 rounded-xl text-white">
                    <h3 className="text-xl font-bold mb-3">🎉 Selamat! Setup Lengkap Selesai!</h3>
                    <p className="mb-4">Semua file sudah siap. Sekarang:</p>
                    <ol className="list-decimal list-inside space-y-2 text-sm">
                      <li>Jalankan <code className="bg-white/20 px-2 py-1 rounded">npm run dev</code></li>
                      <li>Buka browser di <code className="bg-white/20 px-2 py-1 rounded">http://localhost:5173</code></li>
                      <li>Kustomisasi data sesuai portfolio Anda</li>
                      <li>Build dengan <code className="bg-white/20 px-2 py-1 rounded">npm run build</code></li>
                      <li>Deploy ke Vercel/Netlify!</li>
                    </ol>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white text-center mt-8">
            <h2 className="text-4xl font-bold mb-4">🚀 Siap Membuat Portfolio Anda!</h2>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
              Semua kode lengkap sudah tersedia. Tinggal copy-paste dan kustomisasi dengan data Anda sendiri!
            </p>
            
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-4xl mb-2">⚙️</div>
                <div className="font-bold">5 Config Files</div>
                <div className="text-xs text-gray-400 mt-1">Siap pakai</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-4xl mb-2">🧩</div>
                <div className="font-bold">7 Components</div>
                <div className="text-xs text-gray-400 mt-1">Lengkap</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-4xl mb-2">📊</div>
                <div className="font-bold">1 Data File</div>
                <div className="text-xs text-gray-400 mt-1">Dengan SVG</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-4xl mb-2">🎨</div>
                <div className="font-bold">Full Responsive</div>
                <div className="text-xs text-gray-400 mt-1">Mobile ready</div>
              </div>
            </div>

            <button
              onClick={onNavigateToPortfolio}
              className="px-10 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg rounded-lg transition-all transform hover:scale-105"
            >
              👁️ Lihat Portfolio Demo
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Documentation;
