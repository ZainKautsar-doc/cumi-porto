import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { heroText } from '../../data/portfolio';
import Button from '../common/Button';
import BlobShape from '../common/BlobShape';
import Container from '../layout/Container';

export default function Hero() {
  const { isId } = useLanguage();

  return (
    <section id="hero" className="relative py-24 lg:py-36 bg-[#FAF8F3] overflow-hidden">
      {/* Decorative Blob Shapes */}
      <BlobShape color="pink" size="lg" className="-top-10 -left-20" animated />
      <BlobShape color="blue" size="md" className="bottom-0 right-[-5%]" animated />

      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Cursive Tagline */}
          <span className="block font-cursive text-2xl sm:text-3xl lg:text-4xl text-[#E8A0BF] animate-slideInUp">
            {isId ? heroText.tagline.id : heroText.tagline.en}
          </span>

          {/* Main Serif Heading (72px desktop / 48px mobile) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#1a1a2e] tracking-tight leading-[1.1] animate-fadeIn">
            {isId ? heroText.title.id : heroText.title.en}
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl font-semibold text-slate-700 font-sans tracking-wide">
            {isId ? heroText.subtitle.id : heroText.subtitle.en}
          </p>

          {/* Action Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#about" variant="primary" size="lg">
              {isId ? heroText.exploreBtn.id : heroText.exploreBtn.en}
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              {isId ? heroText.contactBtn.id : heroText.contactBtn.en}
            </Button>
          </div>

          {/* Skill Pills */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-2">
            {["ArcGIS Pro", "ArcMap", "QGIS", "Remote Sensing", "Cartography"].map((item) => (
              <span key={item} className="px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs">
                {item}
              </span>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
