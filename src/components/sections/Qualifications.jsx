import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import {
  educationList,
  certificationList,
  organizationsList,
  coreSkillsData
} from '../../data/qualifications';
import Container from '../layout/Container';
import SectionHeading from '../common/SectionHeading';
import SkillTag from '../common/SkillTag';
import { GraduationCap, Award, Wrench, Users, CheckCircle2 } from 'lucide-react';

export default function Qualifications() {
  const { isId } = useLanguage();

  return (
    <section id="qualifications" className="py-24 bg-[#FAF8F3] border-t border-slate-200/60">
      <Container className="space-y-16">
        
        <SectionHeading
          tagline={isId ? "Kualifikasi Terverifikasi" : "Verified Credentials"}
          title={isId ? "Pendidikan, Sertifikasi & Skills" : "Education & Core Competencies"}
          subtitle={isId ? "Latar belakang akademik, lisensi profesi, dan kapabilitas teknis." : "Academic background, professional licenses, and technical capabilities."}
        />

        {/* 3-Column Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Col 1: Education */}
          <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-[#E8A0BF]/50 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a2e] text-white flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#E8A0BF]" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#1a1a2e]">{isId ? 'Pendidikan' : 'Education'}</h3>
                  <p className="text-xs text-slate-500 font-sans">Academic Credentials</p>
                </div>
              </div>

              <div className="space-y-6">
                {educationList.map((edu) => (
                  <div key={edu.id} className="bg-[#FAF8F3] p-5 rounded-xl border border-slate-200/70">
                    <span className="text-xs font-bold text-[#E8A0BF] uppercase tracking-wider">{edu.period}</span>
                    <h4 className="text-base font-serif font-bold text-[#1a1a2e] mt-1">
                      {isId ? edu.degree.id : edu.degree.en}
                    </h4>
                    <p className="text-xs font-semibold text-slate-600 mb-2">{edu.institution}</p>
                    
                    {edu.gpa && (
                      <span className="inline-block bg-[#4A90E2]/15 text-[#4A90E2] text-xs font-extrabold px-2.5 py-0.5 rounded-md mb-3">
                        {edu.gpa}
                      </span>
                    )}

                    <div className="space-y-1">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{isId ? 'Mata Kuliah Utama:' : 'Key Courses:'}</p>
                      <div className="flex flex-wrap gap-1">
                        {(isId ? edu.courses.id : edu.courses.en).map((course, i) => (
                          <span key={i} className="text-[11px] bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Certifications & Leadership */}
          <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-[#E8A0BF]/50 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a2e] text-white flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#4A90E2]" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#1a1a2e]">{isId ? 'Sertifikasi & Organisasi' : 'Certifications & Leadership'}</h3>
                  <p className="text-xs text-slate-500 font-sans">Official License & Community</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-3 mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{isId ? 'Sertifikasi Resmi:' : 'Certifications:'}</p>
                {certificationList.map((cert) => (
                  <div key={cert.id} className="bg-[#FAF8F3] p-4 rounded-xl border border-slate-200/70 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#1a1a2e] leading-snug">{cert.title}</h4>
                      <p className="text-[11px] font-medium text-slate-500 mt-1">{cert.issuer} • <span className="text-[#E8A0BF] font-semibold">{cert.date}</span></p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Organizations */}
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{isId ? 'Pengalaman Organisasi:' : 'Organizations:'}</p>
                {organizationsList.map((org) => (
                  <div key={org.id} className="bg-[#FAF8F3] p-4 rounded-xl border border-slate-200/70">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#E8A0BF]" />
                      <h4 className="text-xs sm:text-sm font-bold text-[#1a1a2e]">
                        {isId ? org.role.id : org.role.en}
                      </h4>
                    </div>
                    <p className="text-xs font-semibold text-slate-600 mt-1">{org.name}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{org.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Col 3: Core Skills */}
          <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-[#E8A0BF]/50 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a2e] text-white flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-[#E8A0BF]" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#1a1a2e]">{isId ? 'Kemampuan Utama' : 'Core Competencies'}</h3>
                  <p className="text-xs text-slate-500 font-sans">Software & Soft Skills</p>
                </div>
              </div>

              <div className="space-y-6">
                {coreSkillsData.map((group, idx) => (
                  <div key={idx} className="bg-[#FAF8F3] p-5 rounded-xl border border-slate-200/70">
                    <h4 className="text-xs font-bold font-sans text-[#1a1a2e] uppercase tracking-wider mb-3 pb-1 border-b border-slate-200">
                      {isId ? group.category.id : group.category.en}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <SkillTag key={skill} variant="secondary">
                          {skill}
                        </SkillTag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
