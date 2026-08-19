import React from 'react';
import { personalInfo } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer className="bg-[#F5F1EB] text-[#1a1a2e] pt-16 pb-12 border-t border-slate-900/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-12">
        
        {/* Row 1: Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-serif text-3xl font-bold italic tracking-tight">{personalInfo.name}</h3>
            <p className="text-sm text-slate-600 font-sans max-w-md leading-relaxed">
              Geographic Information Systems (GIS) & Remote Sensing Enthusiast. Dedikasi untuk pemetaan data terpresisi, analisis spasial, dan kartu visualisasi berkualitas tinggi.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-[#1a1a2e] uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-600 font-sans">
              <li><a href="#hero" className="hover:text-[#E8A0BF] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#E8A0BF] transition-colors">About Story</a></li>
              <li><a href="#expertise" className="hover:text-[#E8A0BF] transition-colors">Expertise</a></li>
              <li><a href="#experience" className="hover:text-[#E8A0BF] transition-colors">Experience</a></li>
              <li><a href="#contact" className="hover:text-[#E8A0BF] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-[#1a1a2e] uppercase tracking-wider">Contact</h4>
            <p className="text-sm text-slate-600 font-sans leading-relaxed">
              {personalInfo.location.en}<br />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-[#E8A0BF] transition-colors">{personalInfo.email}</a><br />
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#E8A0BF] transition-colors">LinkedIn Profile</a>
            </p>
          </div>

        </div>

        {/* Row 2: Meta Copyright */}
        <div className="pt-8 border-t border-slate-300/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-sans gap-4">
          <p>© {new Date().getFullYear()} Putri Arielia. All rights reserved.</p>
          <p>Universitas Pendidikan Indonesia • Sains Informasi Geografi</p>
        </div>

      </div>
    </footer>
  );
}
