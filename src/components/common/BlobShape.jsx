import React from 'react';

export default function BlobShape({
  color = "pink",
  size = "md",
  className = "",
  animated = true
}) {
  const colorMap = {
    pink: "rgba(232, 160, 191, 0.35)",
    blue: "rgba(74, 144, 226, 0.35)",
    cream: "rgba(240, 235, 227, 0.5)"
  };

  const sizeMap = {
    sm: "w-48 h-48",
    md: "w-72 h-72 lg:w-96 lg:h-96",
    lg: "w-96 h-96 lg:w-[480px] lg:h-[480px]"
  };

  return (
    <div
      className={`absolute pointer-events-none -z-10 rounded-[40%_60%_70%_30%/50%_60%_30%_70%] blur-3xl transition-all duration-700 ${
        sizeMap[size] || sizeMap.md
      } ${animated ? "animate-[floatBlob_6s_ease-in-out_infinite]" : ""} ${className}`}
      style={{ backgroundColor: colorMap[color] || colorMap.pink }}
    />
  );
}
