import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { experiences } from '../../data/experiences';
import Container from '../layout/Container';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Experience() {
  const { isId } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <section id="experience" className="py-16 sm:py-24 bg-[#FAF8F3] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Cursive Title & Vertical Timeline List */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Cursive Title (Professional Experience) */}
            <h2 className="font-cursive text-4xl sm:text-5xl lg:text-6xl text-[#181E24] tracking-wide">
              {isId ? 'Pengalaman Profesional' : 'Professional Experience'}
            </h2>

            {/* Vertical Timeline List */}
            <div className="space-y-6">
              {visibleExperiences.map((exp) => (
                <div key={exp.id} className="flex items-start gap-4 group">
                  {/* Timeline Dot Circle */}
                  <div className="w-4 h-4 rounded-full border-2 border-slate-500 bg-[#FAF8F3] shrink-0 mt-1 group-hover:border-pink-600 transition-colors" />

                  {/* Content */}
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-[#181E24] font-sans">
                      {isId ? exp.position.id : exp.position.en}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500">
                      {exp.company}
                    </p>
                    <p className="text-xs text-slate-600 font-sans leading-relaxed pt-1 max-w-md">
                      {(isId ? exp.highlights.id : exp.highlights.en)[0]}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More / Show Less Button if > 3 */}
            {experiences.length > 3 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-pink-600 transition-colors pt-2"
              >
                <span>
                  {showAll
                    ? (isId ? 'Tampilkan Lebih Sedikit' : 'Show Less')
                    : (isId ? `Lihat Pengalaman Lainnya (${experiences.length - 3} Lagi)` : `Show More (${experiences.length - 3} More)`)}
                </span>
                {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            )}

          </div>

          {/* Right Column: Tilted Laptop Work Photo Frame with Soft Pink Oval Backdrop */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            {/* Soft Pink Oval Blob Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[420px] lg:w-[500px] h-[90%] sm:h-[450px] lg:h-[520px] bg-[#FCE8EF] rounded-[50%_50%_45%_55%/55%_45%_55%_45%] blur-xl -z-10 animate-[floatBlob_8s_ease-in-out_infinite]" />

            {/* Slightly Tilted Frame Container */}
            <div className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] aspect-[4/3] bg-white border border-slate-300 rounded-3xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden p-3 relative group">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Professional Experience GIS Work"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
