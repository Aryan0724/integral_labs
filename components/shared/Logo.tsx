"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const Logo = ({ className, dark = false }: { className?: string; dark?: boolean }) => {
  return (
    <div className={cn("flex items-center gap-3 group select-none", className)}>
      {/* Authentic Integral Labs Structural Mark */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Outer ambient blur/glow */}
        <div className={cn(
          "absolute inset-0 rounded-[14px] rotate-45 group-hover:rotate-[135deg] transition-all duration-700 blur-[2px]",
          dark ? "bg-white/10" : "bg-blue-600/10"
        )} />
        
        {/* Main Logo Container */}
        <div className={cn(
          "relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-500 shadow-sm group-hover:scale-105",
          dark 
            ? "bg-white text-slate-950 shadow-[0_0_25px_rgba(255,255,255,0.2)]" 
            : "bg-slate-900 text-white shadow-md hover:bg-slate-950"
        )}>
          {/* Structural "I" and "L" Intersection SVG */}
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 group-hover:rotate-90 transition-transform duration-700"
          >
            {/* Structural "I" and "L" intersection */}
            <path
              d="M12 8V32M12 32H28M20 8V24M28 8V32"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="square"
              className="opacity-95"
            />
            {/* Studio Node Indicator */}
            <rect 
              x="18" 
              y="28" 
              width="4" 
              height="4" 
              fill={dark ? "#7C3AED" : "#3B82F6"} 
            />
          </svg>
        </div>
      </div>
      
      {/* Brand Name Typography */}
      <div className="flex flex-col justify-center">
        <span className={cn(
          "text-xl font-black uppercase tracking-tighter italic leading-none transition-colors",
          dark 
            ? "text-white group-hover:text-blue-400" 
            : "text-slate-900 group-hover:text-blue-600"
        )}>
          Integral
        </span>
        <div className="flex items-center gap-1 mt-0.5">
          <span className={cn(
            "text-[9px] uppercase tracking-[0.45em] font-black leading-none",
            dark ? "text-purple-400" : "text-blue-600"
          )}>
            Labs
          </span>
          <span className={cn(
            "text-[8px] font-mono tracking-widest uppercase font-semibold",
            dark ? "text-slate-500" : "text-slate-400"
          )}>
            // Studio
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;

