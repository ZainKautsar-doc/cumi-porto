import React from 'react';

export default function Container({
  children,
  className = "",
  size = "lg"
}) {
  const sizes = {
    sm: "max-w-4xl",
    md: "max-w-5xl",
    lg: "max-w-7xl"
  };

  return (
    <div className={`mx-auto px-6 sm:px-10 ${sizes[size] || sizes.lg} ${className}`}>
      {children}
    </div>
  );
}
