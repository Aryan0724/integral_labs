"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const Logo = ({ className, dark = false }: { className?: string; dark?: boolean }) => {
  return (
    <div className={cn("flex items-center gap-2.5 group select-none", className)}>
      {/* Authentic Integral Logo Mark (∫NTEGRAL) */}
      <div className="relative h-8 w-[78px] flex items-center shrink-0">
        <Image
          src={dark ? "/integral-logo-white.png" : "/integral-logo-dark.png"}
          alt="Integral"
          width={116}
          height={48}
          className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>
      
      {/* Studio Identifier */}
      <div className={cn(
        "flex items-center gap-1.5 pl-2.5 border-l",
        dark ? "border-slate-800" : "border-slate-200"
      )}>
        <span className={cn(
          "text-[10px] font-mono tracking-[0.25em] uppercase font-black",
          dark ? "text-blue-400" : "text-blue-600"
        )}>
          LABS
        </span>
        <span className={cn(
          "text-[9px] font-mono tracking-[0.1em] font-medium hidden sm:inline select-none",
          dark ? "text-slate-500" : "text-slate-400"
        )}>
          // STUDIO
        </span>
      </div>
    </div>
  );
};

export default Logo;
