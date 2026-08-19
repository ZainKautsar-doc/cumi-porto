import React from 'react';

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 active:scale-95";
  
  const variants = {
    primary: "bg-[#E8A0BF] hover:bg-[#d88dae] text-white shadow-md hover:shadow-lg hover:scale-[1.02]",
    secondary: "bg-transparent border-2 border-[#1a1a2e] text-[#1a1a2e] hover:bg-[#FAF8F3]"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm sm:text-base",
    lg: "px-8 py-3.5 text-base sm:text-lg"
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
