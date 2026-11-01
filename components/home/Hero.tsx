"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CornerDownLeft, ArrowRight, Code2, Cpu, Search, Sparkles } from "lucide-react";
import Link from "next/link";

const DEFAULT_HERO = {
  badge: "Software Engineering & Search Architecture",
  titlePart1: "Custom Software,",
  titlePart2: "Web Platforms",
  titlePart3: "& Modern Search.",
  subtext: "We build scalable web applications, bespoke software systems, and search architectures engineered for modern search engines and AI discoverability (AEO) — turning digital presence into qualified business enquiries.",
  primaryCta: "Discuss Your Project",
  secondaryCta: "View Portfolio",
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
      {/* Soft Light Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[950px] h-[450px] bg-gradient-to-tr from-blue-100/40 via-indigo-50/30 to-emerald-50/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="max-w-[890px]">
          
          {/* Status Badge: Honest capability badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-900 text-xs font-semibold mb-8 shadow-xs select-none"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-blue-700">
              {content.badge || "Software Engineering & Search Architecture"}
            </span>
          </motion.div>

          {/* Clean Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-[76px] font-extrabold text-slate-900 tracking-[-0.035em] leading-[1.06] mb-7"
          >
            <span className="block">{content.titlePart1 || "Custom Software,"}</span>
            <span className="block text-slate-900">{content.titlePart2 || "Web Platforms"}</span>
            <span className="block text-blue-600">{content.titlePart3 || "& Modern Search."}</span>
          </motion.h1>

          {/* Subtitle explaining business value */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-[720px] mb-10"
          >
            {content.subtext || "We build scalable web applications, bespoke software systems, and search architectures engineered for modern search engines and AI discoverability (AEO) — turning digital presence into qualified business enquiries."}
          </motion.p>

          {/* Action Row: Primary Inquiry + Secondary Portfolio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1"
          >
            <button
              onClick={openContact}
              className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] group cursor-pointer"
            >
              <span>{content.primaryCta || "Discuss Your Project"}</span>
              <CornerDownLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm sm:text-base px-7 py-4 rounded-full border border-slate-200 shadow-2xs hover:shadow-xs transition-all duration-200 active:scale-[0.98] group"
            >
              <span>{content.secondaryCta || "View Portfolio"}</span>
              <ArrowRight size={16} className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
            </Link>
          </motion.div>

          {/* 4 Pillars Highlight Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-14 pt-8 border-t border-slate-200/80"
          >
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50/80 border border-slate-200/60">
              <Code2 size={16} className="text-blue-600 shrink-0" />
              <div className="text-xs font-semibold text-slate-800 leading-tight">
                Web Development
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50/80 border border-slate-200/60">
              <Cpu size={16} className="text-blue-600 shrink-0" />
              <div className="text-xs font-semibold text-slate-800 leading-tight">
                Custom Software
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50/80 border border-slate-200/60">
              <Search size={16} className="text-blue-600 shrink-0" />
              <div className="text-xs font-semibold text-slate-800 leading-tight">
                Technical SEO
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50/80 border border-slate-200/60">
              <Sparkles size={16} className="text-blue-600 shrink-0" />
              <div className="text-xs font-semibold text-slate-800 leading-tight">
                AEO (AI Search)
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
