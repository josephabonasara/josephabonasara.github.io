import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaFileDownload } from 'react-icons/fa';
import profileImage from '../assets/profilepic.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled state for backdrop padding
      setScrolled(window.scrollY > 40);

      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      // Track active section
      const sections = ['hero', 'career', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero', id: 'hero' },
    { name: 'Experience', href: '#career', id: 'career' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300 pointer-events-none"
    >
      {/* Top Scroll Progress Line */}
      <div className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-amber-400 via-indigo-400 to-cyan-400 z-50 transition-all duration-150" style={{ width: `${scrollProgress}%` }} />

      <div className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 pointer-events-auto ${
        scrolled
          ? 'glass-nav shadow-xl py-3 px-6 border border-[#36353F]'
          : 'bg-[#1A191C]/80 backdrop-blur-md py-4 px-6 border border-[#36353F]/60 shadow-md'
      }`}>
        <div className="flex justify-between items-center">
          {/* Logo / Name */}
          <a href="#hero" className="group flex items-center gap-3">
            <img
              src={profileImage}
              alt="Joseph Abonasara"
              className="w-8 h-8 rounded-full border border-amber-500/40 object-cover shadow-sm group-hover:border-amber-400 group-hover:scale-105 transition-all"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
            />
            <span className="text-base sm:text-lg font-bold text-[#F5F5F7] tracking-tight group-hover:text-amber-400 transition-colors">
              Joseph Abonasara
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#232227] p-1.5 rounded-full border border-[#36353F]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 relative ${
                    isActive
                      ? 'text-amber-400 bg-[#1A191C] shadow-xs border border-[#36353F] font-bold'
                      : 'text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-[#2A2930]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action buttons & Socials */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`${process.env.PUBLIC_URL}/Joseph_Abonasara.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              download="Joseph_Abonasara.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-xl transition-all shadow-sm"
            >
              <FaFileDownload />
              <span>Resume</span>
            </a>
            <div className="h-4 w-[1px] bg-[#36353F] my-auto" />
            <a
              href="https://github.com/josephabonasara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1AA] hover:text-[#F5F5F7] p-2 hover:bg-[#232227] rounded-lg transition-colors"
              title="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/josephsa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1AA] hover:text-[#F5F5F7] p-2 hover:bg-[#232227] rounded-lg transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-[#F5F5F7] hover:text-amber-400 p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="md:hidden mt-3 max-w-6xl mx-auto bg-[#232227] rounded-2xl border border-[#36353F] p-5 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                      : 'text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-[#2A2930]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-[#36353F] flex items-center justify-between">
                <a
                  href={`${process.env.PUBLIC_URL}/Joseph_Abonasara.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Joseph_Abonasara.pdf"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <FaFileDownload />
                  <span>Download Resume</span>
                </a>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://github.com/josephabonasara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A1A1AA] hover:text-[#F5F5F7] p-2"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/josephsa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A1A1AA] hover:text-[#F5F5F7] p-2"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
