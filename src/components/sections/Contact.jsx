import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { personalInfo } from '../../data/portfolio';
import Container from '../layout/Container';
import { MapPin, Mail, Phone, Link2 } from 'lucide-react';

export default function Contact() {
  const { isId } = useLanguage();

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF8F3]">
      <Container>
        {/* Soft Pink Rounded Box Container matching reference screenshot */}
        <div className="bg-[#FAF0F2] border border-slate-400/30 rounded-3xl p-8 sm:p-14 lg:p-20 text-center shadow-xs space-y-10">
          
          {/* Header Tagline & Title */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="font-cursive text-4xl sm:text-5xl lg:text-6xl text-[#181E24] tracking-wide">
              Let's Collaborate
            </h2>
            <p className="text-sm sm:text-base font-medium text-slate-600 leading-relaxed">
              {isId
                ? "Tertarik untuk berkolaborasi dalam proyek data spasial atau memiliki pertanyaan seputar GIS? Saya akan senang mendengar dari Anda."
                : "Interested in working together on spatial data projects or have a question about GIS? I'd love to hear from you."}
            </p>
          </div>

          {/* 2x2 Grid Contact Cards matching reference screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto text-left">
            
            {/* Card 1: Location */}
            <div className="bg-[#FAF8F3] border border-slate-400/40 rounded-2xl p-5 flex items-center gap-4 transition-transform hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Location
                </span>
                <span className="text-sm sm:text-base font-bold text-[#181E24]">
                  {isId ? personalInfo.location.id : personalInfo.location.en}
                </span>
              </div>
            </div>

            {/* Card 2: Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-[#FAF8F3] border border-slate-400/40 rounded-2xl p-5 flex items-center gap-4 transition-transform hover:-translate-y-0.5 group"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 shrink-0 group-hover:text-pink-600 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="truncate">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Email
                </span>
                <span className="text-sm sm:text-base font-bold text-[#181E24] group-hover:text-pink-600 transition-colors truncate">
                  {personalInfo.email}
                </span>
              </div>
            </a>

            {/* Card 3: Phone */}
            <a
              href={`https://wa.me/${personalInfo.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FAF8F3] border border-slate-400/40 rounded-2xl p-5 flex items-center gap-4 transition-transform hover:-translate-y-0.5 group"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 shrink-0 group-hover:text-emerald-600 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Phone
                </span>
                <span className="text-sm sm:text-base font-bold text-[#181E24] group-hover:text-emerald-600 transition-colors">
                  {personalInfo.phone}
                </span>
              </div>
            </a>

            {/* Card 4: LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FAF8F3] border border-slate-400/40 rounded-2xl p-5 flex items-center gap-4 transition-transform hover:-translate-y-0.5 group"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 shrink-0 group-hover:text-blue-600 transition-colors">
                <Link2 className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  LinkedIn
                </span>
                <span className="text-sm sm:text-base font-bold text-[#181E24] group-hover:text-blue-600 transition-colors">
                  /in/putriarielia
                </span>
              </div>
            </a>

          </div>

        </div>
      </Container>
    </section>
  );
}
