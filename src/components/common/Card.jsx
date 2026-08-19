import React from 'react';

export default function Card({
  children,
  className = "",
  hoverable = true,
  variant = "default",
  ...props
}) {
  const baseStyles = "rounded-2xl transition-all duration-300";
  
  const variants = {
    default: "bg-white border border-slate-200/60 shadow-sm",
    bordered: "bg-white border-2 border-[#E8A0BF]",
    filled: "bg-[#FAF8F3] border border-[#F0EBE3]"
  };

  const hoverStyles = hoverable ? "hover:-translate-y-1 hover:shadow-xl hover:border-[#4A90E2]" : "";

  return (
    <div className={`${baseStyles} ${variants[variant] || variants.default} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  );
}
