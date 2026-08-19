import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import SkillTag from './SkillTag';
import { CheckCircle2 } from 'lucide-react';

export default function ExperienceCard({ exp }) {
  const { isId } = useLanguage();
  const position = isId ? exp.position.id : exp.position.en;
  const highlights = isId ? exp.highlights.id : exp.highlights.en;

  return (
    <div className="bg-white rounded-xl p-6 sm:p-8 border-l-4 border-l-[#E8A0BF] border-t border-r border-b border-slate-200/70 shadow-sm hover:border-l-[#4A90E2] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#E8A0BF]">
            {exp.company}
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1a1a2e] mt-1">
            {position}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#FAF8F3] text-slate-600 text-xs font-semibold border border-slate-200">
            {exp.duration}
          </span>
        </div>
      </div>

      <ul className="space-y-2 mb-6">
        {highlights.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-slate-700 text-sm sm:text-base leading-relaxed">
            <CheckCircle2 className="w-4 h-4 text-[#4A90E2] shrink-0 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
        {exp.tags.map((tag) => (
          <SkillTag key={tag} variant="secondary">
            #{tag}
          </SkillTag>
        ))}
      </div>
    </div>
  );
}
