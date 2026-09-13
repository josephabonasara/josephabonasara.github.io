import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Career from './components/Career';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Recommendations from './components/Recommendations';
import Contact from './components/Contact';
import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#1A191C] text-[#F5F5F7] min-h-screen relative font-sans antialiased selection:bg-amber-500/20 selection:text-amber-200">
      <Navbar />
      <main>
        <Hero />
        <Career />
        <Skills />
        <Projects />
        <Education />
        <Recommendations />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-[#2F2E36] bg-[#141316] text-xs text-[#A1A1AA]">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="font-bold text-[#F5F5F7] text-sm tracking-tight mb-1">
              Joseph Abonasara
            </p>
            <p className="text-[#A1A1AA]">
              Software Engineer, AI @ Solace • Ontario, Canada (Open to Relocation)
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/josephabonasara"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#232227] hover:bg-[#2A2930] text-[#F5F5F7] border border-[#36353F] transition-all shadow-xs"
              title="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://linkedin.com/in/josephsa/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#232227] hover:bg-[#2A2930] text-[#F5F5F7] border border-[#36353F] transition-all shadow-xs"
              title="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
          </div>

          <div className="text-[#71717A] font-mono">
            © {new Date().getFullYear()} Joseph Abonasara. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Back to Top Floating Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-xl shadow-amber-500/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default App;