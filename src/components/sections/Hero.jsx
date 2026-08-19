import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import Container from '../layout/Container';

export default function Hero() {
  const { isId } = useLanguage();

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative pt-12 sm:pt-16 pb-20 lg:pb-32 bg-[#FAF8F3] overflow-hidden"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Tilted Card Frame with Soft Blue Blob Backdrop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative flex justify-center lg:justify-start"
          >
            {/* Soft Sky Blue Blob Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] sm:w-[380px] lg:w-[480px] h-[85%] sm:h-[420px] lg:h-[520px] bg-[#D4E8FF] rounded-[50%_50%_45%_55%/55%_45%_55%_45%] blur-xl -z-10 animate-[floatBlob_8s_ease-in-out_infinite]" />

            {/* Slightly Tilted Grey Image Placeholder Card */}
            <div className="w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] aspect-[4/5] bg-slate-200/90 border border-slate-400/40 rounded-3xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 flex items-center justify-center p-6 relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                alt="Mapping Geospasial Data"
                className="w-full h-full object-cover rounded-2xl opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-200">GIS & Remote Sensing</span>
                <h3 className="text-xl font-bold">Putri Arielia</h3>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Headline, Subtitle, & Dark/Outline Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Bold Heavy Headline (Mapping the World's Data) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.1]">
              Mapping the World's Data
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg font-medium text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Putri Arielia - Geographic Information Systems (GIS) & Remote Sensing Enthusiast
            </p>

            {/* Action Buttons: Dark Pill "View Work" + Rounded Outline "Get in Touch" */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#181E24] hover:bg-slate-800 text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md transition-all hover:scale-105"
              >
                {isId ? 'Lihat Karya' : 'View Work'}
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent hover:bg-white text-slate-800 border-2 border-slate-700 font-bold text-sm px-8 py-3.5 rounded-full transition-all hover:scale-105"
              >
                {isId ? 'Hubungi Saya' : 'Get in Touch'}
              </a>
            </div>
          </motion.div>

        </div>
      </Container>
    </motion.section>
  );
}
