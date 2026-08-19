import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { expertisePillars } from '../../data/about';
import Container from '../layout/Container';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';
import SkillTag from '../common/SkillTag';
import { Map, Compass, Layers } from 'lucide-react';

export default function Expertise() {
  const { isId } = useLanguage();

  const getIcon = (name) => {
    switch (name) {
      case 'Map': return <Map className="w-8 h-8 text-[#E8A0BF]" />;
      case 'Compass': return <Compass className="w-8 h-8 text-[#4A90E2]" />;
      case 'Layers': return <Layers className="w-8 h-8 text-[#E8A0BF]" />;
      default: return <Map className="w-8 h-8 text-[#E8A0BF]" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section
      id="expertise"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-24 bg-[#FAF8F3] border-y border-slate-200/50"
    >
      <Container className="space-y-16">
        
        <SectionHeading
          tagline={isId ? "Spesialisasi Utamanya" : "Core Specializations"}
          title={isId ? "Keahlian & Pilar Kompetensi" : "Areas of Expertise"}
          subtitle={isId ? "Tiga pilar keahlian utama dalam ekosistem sains data geografis." : "Three core pillars of geospatial data engineering and visual analytics."}
        />

        {/* 3-Column Expertise Grid with Staggered Animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {expertisePillars.map((pillar) => {
            const title = isId ? pillar.title.id : pillar.title.en;
            const desc = isId ? pillar.description.id : pillar.description.en;

            return (
              <motion.div key={pillar.id} variants={itemVariants}>
                <Card className="p-8 flex flex-col justify-between h-full" hoverable>
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-[#FAF8F3] border border-slate-200/80 flex items-center justify-center mb-6">
                      {getIcon(pillar.icon)}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-[#1a1a2e] mb-3">
                      {title}
                    </h3>
                    <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed mb-6">
                      {desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                    {pillar.tags.map((tag) => (
                      <SkillTag key={tag} variant="default">
                        {tag}
                      </SkillTag>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

      </Container>
    </motion.section>
  );
}
