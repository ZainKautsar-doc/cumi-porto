import React from 'react';
import { personalInfo } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F3] text-[#181E24] pt-12 pb-16 border-t border-slate-300/40 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row items-start justify-between gap-10">
        
        {/* Left Side: Cursive Name Brand & Copyright */}
        <div className="space-y-3 max-w-sm">
          <h3 className="font-cursive text-3xl sm:text-4xl font-bold text-[#181E24] tracking-wide">
            {personalInfo.name}
          </h3>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            © {new Date().getFullYear()} Putri Arielia. GIS Professional based in Bandung, West Java.
          </p>
        </div>

        {/* Right Side: Navigation & Socials Links */}
        <div className="flex items-start gap-16 text-xs">
          
          {/* Column 1: Navigation */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-[#181E24] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li><a href="#about" className="hover:text-pink-600 transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-pink-600 transition-colors">Experience</a></li>
              <li><a href="#qualifications" className="hover:text-pink-600 transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-pink-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 2: Socials */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-[#181E24] uppercase tracking-wider">
              Socials
            </h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-pink-600 transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
}
