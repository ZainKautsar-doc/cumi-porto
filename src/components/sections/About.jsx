import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import Container from '../layout/Container';

export default function About() {
  const { isId } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-16 sm:py-24 bg-[#FAF8F3] overflow-hidden space-y-24"
    >
      <Container>
        <div className="space-y-24">
          
          {/* BLOCK 1: Perjalanan Saya di Data Spasial */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          >
            {/* Text Column (Left) */}
            <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
              <h2 className="font-cursive text-4xl sm:text-5xl lg:text-6xl text-[#181E24] tracking-wide">
                {isId ? 'Perjalanan Saya di Data Spasial' : 'My Journey in Spatial Data'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                {isId
                  ? 'Sebagai mahasiswa S1 Sains Informasi Geografi di Universitas Pendidikan Indonesia yang berdedikasi tinggi, saya berfokus untuk memahami hubungan rumit antara data spasial dan ruang fisik.'
                  : 'As a passionate student of S1 Sains Informasi Geografi at Universitas Pendidikan Indonesia, I have dedicated myself to understanding the intricate relationships between data and physical space.'}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                {isId
                  ? 'Keahlian saya terletak pada Sistem Informasi Geografis (SIG) dan Penginderaan Jauh. Saya percaya pada kekuatan data spasial untuk mengungkap pola, menyelesaikan tantangan lingkungan, serta mendukung pengambilan keputusan yang tepat.'
                  : 'My expertise lies in Geographic Information Systems (GIS) and Remote Sensing. I believe in the power of spatial data to uncover patterns, solve complex environmental challenges, and drive informed decision-making for a sustainable future.'}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                {["Spatial Analysis", "Cartography", "Remote Sensing"].map((tag) => (
                  <span
                    key={tag}
                    className="px-5 py-2 rounded-full bg-[#FAF0F2] border border-pink-300/60 text-xs font-semibold text-slate-800 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Image Column (Right) */}
            <motion.div variants={itemVariants} className="lg:col-span-6 relative flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[420px] lg:w-[500px] h-[90%] sm:h-[450px] lg:h-[520px] bg-[#D4E8FF] rounded-[50%_50%_45%_55%/55%_45%_55%_45%] blur-xl -z-10 animate-[floatBlob_8s_ease-in-out_infinite]" />
              <div className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] aspect-[4/3] bg-white border border-slate-300 rounded-3xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden p-3 relative group">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="Perjalanan Saya di Data Spasial"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </motion.div>


          {/* BLOCK 2: Pemetaan & Analisis Geospasial */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-8"
          >
            {/* Text Column (Left) */}
            <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
              <h2 className="font-cursive text-4xl sm:text-5xl lg:text-6xl text-[#181E24] tracking-wide">
                {isId ? 'Pemetaan & Analisis Geospasial' : 'Mapping & Geospatial Analysis'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                {isId
                  ? 'Berpengalaman dalam mengolah data geospasial presisi tinggi, penyusunan Peta Dasar RDTR Kota Cimahi skala 1:5.000, serta produksi 15+ peta tematik infrastruktur dan kewilayahan di BAPPERIDA Kota Bandung.'
                  : 'Experienced in processing high-precision geospatial datasets, compiling Cimahi City RDTR Base Maps at 1:5,000 scale, and producing 15+ thematic infrastructure and territorial maps at BAPPERIDA Bandung.'}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                {isId
                  ? 'Setiap proyek dikerjakan dengan menerapkan standar Quality Control (QC) ketat, pembersihan data topologi, serta penyajian layout kartografi yang komunikatif dan terstandarisasi.'
                  : 'Every project is executed adhering to strict Quality Control (QC) standards, spatial topology data cleaning, and standardized, highly informative cartographic visual presentations.'}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                {["ArcGIS Pro", "QGIS", "Thematic Maps"].map((tag) => (
                  <span
                    key={tag}
                    className="px-5 py-2 rounded-full bg-[#FAF0F2] border border-pink-300/60 text-xs font-semibold text-slate-800 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Image Column (Right) */}
            <motion.div variants={itemVariants} className="lg:col-span-6 relative flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[420px] lg:w-[500px] h-[90%] sm:h-[450px] lg:h-[520px] bg-[#FCE8EF] rounded-[50%_50%_45%_55%/55%_45%_55%_45%] blur-xl -z-10 animate-[floatBlob_8s_ease-in-out_infinite]" />
              <div className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] aspect-[4/3] bg-white border border-slate-300 rounded-3xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden p-3 relative group">
                <img
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80"
                  alt="Pemetaan & Analisis Geospasial"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </motion.section>
  );
}
