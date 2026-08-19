import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { experiences } from '../../data/experiences';
import Container from '../layout/Container';
import SectionHeading from '../common/SectionHeading';
import ExperienceCard from '../common/ExperienceCard';
import Button from '../common/Button';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Experience() {
  const { isId } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <section id="experience" className="py-24 bg-white">
      <Container className="space-y-16 max-w-5xl">
        
        <SectionHeading
          tagline={isId ? "Rekam Jejak Karir" : "Career Track"}
          title={isId ? "Pengalaman Profesional" : "Professional Experience"}
          subtitle={isId ? "Portofolio kerja penyusunan peta dasar, analisis spasial, & kepemimpinan." : "Track record of base map compilation, spatial analytics & project leadership."}
        />

        {/* Experience List */}
        <div className="space-y-6">
          {visibleExperiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>

        {/* Expand / Collapse CTA Button */}
        {experiences.length > 3 && (
          <div className="text-center pt-4">
            <Button
              variant="secondary"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2"
            >
              <span>
                {showAll
                  ? (isId ? "Tampilkan Lebih Sedikit" : "Show Less")
                  : (isId ? `Lihat Pengalaman Lainnya (${experiences.length - 3} Lagi)` : `Show All Experiences (${experiences.length - 3} More)`)}
              </span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </div>
        )}

      </Container>
    </section>
  );
}
