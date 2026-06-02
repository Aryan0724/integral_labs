import React from "react";
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-4 group", className)}>
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Outer structural hexagon */}
        <div className="absolute inset-0 bg-white/10 rounded-[18px] rotate-45 group-hover:rotate-[135deg] transition-all duration-700 blur-[2px]" />
        
        {/* Main logo mark */}
        <div className="relative w-10 h-10 bg-white rounded-xl flex items-center justify-center group-hover:scale-95 transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-black group-hover:rotate-90 transition-transform duration-700"
          >
            {/* Structural "I" and "L" intersection */}
            <path
              d="M12 8V32M12 32H28M20 8V24M28 8V32"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="square"
              className="opacity-90"
            />
            {/* Node indicator */}
            <rect x="18" y="28" width="4" height="4" fill="#7C3AED" />
          </svg>
        </div>
      </div>
      
      <div className="flex flex-col">
        <span className="text-2xl font-black text-white uppercase tracking-tighter italic leading-none group-hover:text-purple-400 transition-colors">
          Integral
        </span>
        <span className="text-[10px] uppercase tracking-[0.5em] text-purple-500 font-black leading-none">
          Labs
        </span>
      </div>
    </div>
  );
};
