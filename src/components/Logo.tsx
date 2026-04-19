import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: {
      svg: "w-8 h-8",
      title: "text-[14px]",
      subtitle: "text-[14px]",
      gap: "gap-1.5",
    },
    md: {
      svg: "w-10 h-10",
      title: "text-[18px]",
      subtitle: "text-[18px]",
      gap: "gap-2.5",
    },
    lg: {
      svg: "w-12 h-12",
      title: "text-[22px]",
      subtitle: "text-[22px]",
      gap: "gap-3",
    },
  };

  const { svg, title, subtitle, gap } = sizeClasses[size];

  return (
    <div className={`flex items-center ${gap} ${className}`}>
      <svg
        viewBox="0 0 100 135"
        className={`shrink-0 ${svg}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bulb Body */}
        <path
          d="M30 85 C 10 70, 5 45, 20 25 C 35 5, 65 5, 80 25 C 95 45, 90 70, 70 85"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Threads */}
        <line x1="32" y1="98" x2="68" y2="98" stroke="white" strokeWidth="8" strokeLinecap="round" />
        <line x1="36" y1="112" x2="64" y2="112" stroke="white" strokeWidth="8" strokeLinecap="round" />
        <line x1="42" y1="126" x2="58" y2="126" stroke="white" strokeWidth="8" strokeLinecap="round" />
        
        {/* Arrow Body */}
        <path
          d="M 5 65 L 40 37 L 55 50 L 85 24"
          stroke="#00ff00"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Arrow Head */}
        <path
          d="M 60 24 L 85 24 L 85 49"
          stroke="#00ff00"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <div className="flex flex-col justify-center text-left leading-[1.1] pt-1">
        <span className={`text-white font-black tracking-widest ${title}`}>FIRST OPTION</span>
        <span className={`text-white font-black tracking-widest ${subtitle}`}>AGENCY</span>
      </div>
    </div>
  );
}
