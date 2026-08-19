import React from 'react';

export default function SectionHeading({
  tagline,
  title,
  subtitle,
  centered = true,
  className = ""
}) {
  return (
    <div className={`space-y-3 ${centered ? 'text-center max-w-3xl mx-auto' : ''} ${className}`}>
      {tagline && (
        <span className="inline-block font-cursive text-xl sm:text-2xl text-[#E8A0BF] tracking-wide">
          {tagline}
        </span>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1a1a2e] leading-tight tracking-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
