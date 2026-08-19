import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { personalInfo } from '../../data/portfolio';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const { lang, toggleLanguage, isId } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: isId ? 'Tentang' : 'About', href: '#about' },
    { label: isId ? 'Pengalaman' : 'Experience', href: '#experience' },
    { label: isId ? 'Keahlian' : 'Skills', href: '#qualifications' },
    { label: isId ? 'Kontak' : 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-4 z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Floating Pill Container */}
      <div className="bg-[#FAF0F2] border border-slate-400/40 rounded-2xl sm:rounded-3xl shadow-sm backdrop-blur-md px-6 sm:px-10 py-3.5 flex items-center justify-between transition-all">
        
        {/* Brand Name - Cursive / Handwritten Style */}
        <a href="#" className="font-cursive text-3xl sm:text-4xl font-bold text-slate-800 tracking-wide hover:text-pink-600 transition-colors">
          Putri Arielia
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-800 hover:text-pink-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controls: EN | ID Toggle & Pill Download CV Button */}
        <div className="hidden md:flex items-center gap-6">
          {/* Text-based Language Switcher (EN | ID) */}
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider">
            <button
              onClick={() => toggleLanguage('EN')}
              className={`transition-colors uppercase ${lang === 'EN' ? 'text-slate-900 font-extrabold' : 'text-slate-400 hover:text-slate-600'}`}
            >
              EN
            </button>
            <span className="text-slate-300 font-normal">|</span>
            <button
              onClick={() => toggleLanguage('ID')}
              className={`transition-colors uppercase ${lang === 'ID' ? 'text-slate-900 font-extrabold' : 'text-slate-400 hover:text-slate-600'}`}
            >
              ID
            </button>
          </div>

          {/* Dark Pill Download CV Button */}
          <a
            href={personalInfo.cvUrl}
            download="CV_Putri_Arielia.pdf"
            className="bg-[#181E24] hover:bg-slate-800 text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all hover:scale-105"
          >
            {isId ? 'Unduh CV' : 'Download CV'}
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-bold">
            <button
              onClick={() => toggleLanguage('EN')}
              className={lang === 'EN' ? 'text-slate-900 font-extrabold' : 'text-slate-400'}
            >
              EN
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => toggleLanguage('ID')}
              className={lang === 'ID' ? 'text-slate-900 font-extrabold' : 'text-slate-400'}
            >
              ID
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-800 hover:bg-slate-200/50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-[#FAF0F2] border border-slate-300 rounded-2xl px-6 py-5 space-y-3 animate-slideInUp shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-800 hover:text-pink-600 py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-300/60">
            <a
              href={personalInfo.cvUrl}
              download="CV_Putri_Arielia.pdf"
              className="w-full flex items-center justify-center bg-[#181E24] text-white text-xs font-semibold py-3 rounded-full shadow-sm"
            >
              {isId ? 'Unduh CV' : 'Download CV'}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
