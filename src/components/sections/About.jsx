import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { aboutBlocks } from '../../data/about';
import Container from '../layout/Container';
import SectionHeading from '../common/SectionHeading';
import BlobShape from '../common/BlobShape';

export default function About() {
  const { isId } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <Container className="space-y-20">
        
        <SectionHeading
          tagline={isId ? "Cerita & Dedikasi" : "Story & Dedication"}
          title={isId ? "Perjalanan Geospasial Saya" : "My Road to Spatial Analytics"}
          subtitle={isId ? "Menghubungkan data spasial dengan dampak nyata di lapangan." : "Connecting spatial data with real-world regional impact."}
        />

        {/* Alternating Image-Text Layout */}
        <div className="space-y-24">
          {aboutBlocks.map((block) => {
            const isLeft = block.imagePosition === 'left';
            const tagline = isId ? block.tagline.id : block.tagline.en;
            const title = isId ? block.title.id : block.title.en;
            const desc = isId ? block.description.id : block.description.en;

            return (
              <div key={block.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Image Block */}
                <div className={`lg:col-span-6 relative ${isLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Decorative Blob */}
                  <BlobShape color={block.blobColor} size="md" className="-top-8 -left-8" animated={false} />
                  
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] group">
                    <img
                      src={block.imageUrl}
                      alt={block.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Text Block */}
                <div className={`lg:col-span-6 space-y-4 ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="font-cursive text-xl text-[#E8A0BF]">
                    {tagline}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a2e] leading-snug">
                    {title}
                  </h3>
                  <p className="text-slate-600 font-sans text-base sm:text-lg leading-relaxed">
                    {desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
