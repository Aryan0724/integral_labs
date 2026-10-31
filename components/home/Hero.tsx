"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CornerDownLeft, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const DEFAULT_HERO = {
  badge: "we are available for work",
  titlePart1: "Software",
  titlePart2: "Development",
  titlePart3: "Company",
  subtext: "Gain a technological advantage through expert development and strategic IT solutions. We help businesses build modern websites, web applications and digital products that create real impact.",
  ctaText: "Discuss Your Project",
};

export default function Hero() {
  const [content, setContent] = useState<any>(DEFAULT_HERO);

  useEffect(() => {
    fetch("/api/cms")
      .then((res) => res.json())
      .then((data) => {
        if (data?.hero) {
          setContent({
            ...DEFAULT_HERO,
            ...data.hero
          });
        }
      })
      .catch(() => {});
  }, []);

  const openContact = () => {
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };

  return (
    <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden bg-transparent">
      {/* Soft Light Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[950px] h-[450px] bg-gradient-to-tr from-blue-100/40 via-indigo-50/30 to-emerald-50/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="max-w-[880px]">
          {/* Status Badge: We are available for work */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold mb-8 shadow-xs select-none"
          >
            <span className="text-emerald-500 text-sm">💚</span>
            <span>{content.badge || "we are available for work"}</span>
          </motion.div>

          {/* Giant Clean Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-[84px] font-extrabold text-slate-900 tracking-[-0.035em] leading-[1.04] mb-8"
          >
            <span className="block">{content.titlePart1 || "Software"}</span>
            <span className="block">{content.titlePart2 || "Development"}</span>
            <span className="block text-slate-900">{content.titlePart3 || "Company"}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-[680px] mb-10"
          >
            {content.subtext || "Gain a technological advantage through expert development and strategic IT solutions. We help businesses build modern websites, web applications and digital products that create real impact."}
          </motion.p>

          {/* Action Row & Micro-bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="flex flex-col sm:flex-row sm:items-center gap-5 pt-2"
          >
            <button
              onClick={openContact}
              className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] group"
            >
              <span>{content.ctaText || "Discuss Your Project"}</span>
              <CornerDownLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={openContact}
              className="inline-flex items-center justify-center gap-2 bg-[#BBF7D0] hover:bg-[#A7F3D0] text-emerald-950 font-semibold text-sm sm:text-base px-7 py-4 rounded-full shadow-xs hover:shadow-sm transition-all duration-200 active:scale-[0.98]"
            >
              <span>Let's connect</span>
              <CornerDownLeft size={16} />
            </button>
          </motion.div>

          {/* Tags & Badges Row (from reference image) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-2.5 mt-12 pt-8 border-t border-slate-200/70"
          >
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">Featured:</span>
            
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Our Services
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              New
            </span>

            <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
              Industry Verticals
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              Tech Stack
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Live Projects
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
