import React from 'react';

export default function SkillTag({
  children,
  variant = "default",
  className = ""
}) {
  const variants = {
    default: "bg-[#E8A0BF]/15 text-[#E8A0BF] border border-[#E8A0BF]/30",
    primary: "bg-[#E8A0BF] text-white",
    secondary: "bg-[#4A90E2]/15 text-[#4A90E2] border border-[#4A90E2]/30"
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold font-sans transition-colors ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  );
}
