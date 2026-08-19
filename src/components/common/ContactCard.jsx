import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  onClick
}) {
  const content = (
    <div className="bg-white p-6 rounded-xl border-2 border-[#E8A0BF] hover:border-[#4A90E2] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group text-center flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-[#FAF8F3] text-[#E8A0BF] group-hover:text-[#4A90E2] group-hover:scale-110 flex items-center justify-center mb-4 transition-all">
        {Icon && <Icon className="w-6 h-6" />}
      </div>
      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
        {label}
      </h4>
      <p className="text-sm sm:text-base font-bold text-[#1a1a2e] flex items-center justify-center gap-1.5 break-all">
        <span>{value}</span>
        {href && <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 shrink-0" />}
      </p>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? "_blank" : undefined} rel="noopener noreferrer" onClick={onClick} className="block">
        {content}
      </a>
    );
  }

  return content;
}
