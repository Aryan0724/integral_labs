import React from "react";
import { cn } from "@/lib/utils";

export const Logo = ({ className, dark = false }: { className?: string; dark?: boolean }) => {
  return (
    <div className={cn("flex items-center gap-3 group select-none", className)}>
      {/* Structural minimalist geometric monogram */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("w-7 h-7 transition-transform duration-300 group-hover:scale-105", dark ? "text-white" : "text-slate-900")}
        >
          {/* Two elegant vertical studio pillars */}
          <rect x="6" y="5" width="4.5" height="22" rx="1.5" fill="currentColor" />
          <rect x="14" y="5" width="4.5" height="15" rx="1.5" fill="currentColor" />
          <rect x="22" y="12" width="4.5" height="15" rx="1.5" fill={dark ? "#60A5FA" : "#2563EB"} />
        </svg>
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={cn("text-[17px] font-extrabold tracking-tight uppercase", dark ? "text-white" : "text-slate-900")}>
            Integral
          </span>
        </div>
        <span className={cn("text-[8.5px] font-mono tracking-[0.2em] uppercase font-semibold mt-0.5", dark ? "text-slate-400" : "text-slate-500")}>
          Labs // Studio
        </span>
      </div>
    </div>
  );
};

export default Logo;
