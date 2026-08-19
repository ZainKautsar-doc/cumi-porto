import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { personalInfo } from '../../data/portfolio';
import { Globe, Menu, X, Download } from 'lucide-react';

export default function Navigation() {
  const { lang, toggleLanguage, isId } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: isId ? 'Tentang' : 'About', href: '#about' },
    { label: isId ? 'Keahlian' : 'Work', href: '#expertise' },
    { label: isId ? 'Pengalaman' : 'Experience', href: '#experience' },
    { label: isId ? 'Pendidikan' : 'Qualifications', href: '#qualifications' },
    { label: isId ? 'Kontak' : 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-900/5 transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        
        {/* Brand Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#1a1a2e] text-white font-serif font-bold text-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            P
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-[#1a1a2e]">
            Putri Arielia
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-[#E8A0BF] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8A0BF] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controls: Language Toggle & Download CV */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => toggleLanguage()}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-[#FAF8F3] hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-all shadow-xs"
            title="Toggle Language"
          >
            <Globe className="w-4 h-4 text-[#E8A0BF]" />
            <span className={lang === 'ID' ? 'text-[#E8A0BF] font-bold' : 'text-slate-400'}>ID</span>
            <span className="text-slate-300">|</span>
            <span className={lang === 'EN' ? 'text-[#E8A0BF] font-bold' : 'text-slate-400'}>EN</span>
          </button>

          <a
            href={personalInfo.cvUrl}
            onClick={(e) => {
              if (personalInfo.cvUrl === '#') {
                e.preventDefault();
                alert(isId ? "CV Putri Arielia dapat diminta langsung via email/LinkedIn." : "CV can be requested directly via email/LinkedIn.");
              }
            }}
            className="flex items-center gap-2 bg-[#E8A0BF] hover:bg-[#d88dae] text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
          >
            <Download className="w-4 h-4" />
            <span>{isId ? 'Unduh CV' : 'Download CV'}</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => toggleLanguage()}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 text-xs font-bold text-slate-700 bg-[#FAF8F3]"
          >
            <Globe className="w-3.5 h-3.5 text-[#E8A0BF]" />
            <span>{lang}</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F3] border-b border-slate-200 px-6 py-6 space-y-4 animate-slideInUp shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-serif text-lg font-bold text-slate-800 hover:text-[#E8A0BF] py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-200">
            <a
              href={personalInfo.cvUrl}
              onClick={(e) => {
                if (personalInfo.cvUrl === '#') {
                  e.preventDefault();
                  alert(isId ? "CV dapat diminta via email." : "CV can be requested via email.");
                }
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#E8A0BF] text-white text-sm font-semibold py-3 rounded-lg shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>{isId ? 'Unduh CV' : 'Download CV'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
