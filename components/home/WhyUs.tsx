"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Layers, 
  Zap, 
  CheckCircle2, 
  Lock,
  ShieldCheck 
} from "lucide-react";
import Link from "next/link";

const DIFFERENTIATORS = [
  {
    icon: Layers,
    title: "Co-Equal: Code & Discoverability",
    description: "We do not treat engineering and SEO as separate silos. Every web platform and software system is architected from day one with semantic markup, fast Core Web Vitals, and machine-readable data for search engines and AI answer systems."
  },
  {
    icon: ShieldCheck,
    title: "Dedicated Senior Engineering",
    description: "No disconnected account executives or junior outsourcing. Our dedicated senior software architects and search engineers directly oversee and implement your system architecture with complete accountability."
  },
  {
    icon: Lock,
    title: "100% Client IP & Code Ownership",
    description: "Every line of source code, design asset, and cloud configuration belongs entirely to you upon completion. We deliver modular, well-documented GitHub repositories with zero proprietary vendor lock-in."
  },
  {
    icon: Zap,
    title: "Sub-Second Production Standards",
    description: "Modern web users and search crawlers demand extreme responsiveness. We engineer on Next.js Turbopack with server-side rendering, edge caching, and optimized database queries to deliver sub-second response times."
  }
];

export default function WhyUs() {
  const [activeDiff, setActiveDiff] = React.useState(0);

  return (
    <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-200/80">
      <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Mission & Principles */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-xs bg-blue-600 inline-block" />
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                Why Integral Labs // The Purpose
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              What We Provide: Full-Stack Engineering &amp; Organic Search Dominance.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
              Most agencies build either visual designs that cannot scale, or backends that remain completely invisible on Google and AI assistants. Integral Labs provides collective development paired with deep SEO and Answer Engine Optimization (AEO) as equal disciplines — delivering high-performance products that capture market demand.
            </p>

            {/* Core Values Checklist */}
            <div className="mt-8 space-y-3 pt-6 border-t border-slate-200/80">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 font-medium">
                  Strict TypeScript type safety and zero-warning production builds
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 font-medium">
                  Cryptographically verified session security and serverless rate limiting
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 font-medium">
                  Entity-mapped data structures ready for generative AI synthesis
                </span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700 group"
              >
                <span>Read more about our engineering standards</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Mobile Principle Switcher (Visible on < sm) */}
          <div className="lg:col-span-7 block sm:hidden">
            <div className="flex items-center justify-between gap-2 mb-3">
              <label htmlFor="mobile-whyus-select" className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                Select Standard:
              </label>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setActiveDiff((prev) => Math.max(0, prev - 1))}
                  disabled={activeDiff === 0}
                  aria-label="Previous Standard"
                  className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg border border-slate-200 bg-white text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
                >
                  ← Prev
                </button>
                <button
                  type="button"
                  onClick={() => setActiveDiff((prev) => Math.min(DIFFERENTIATORS.length - 1, prev + 1))}
                  disabled={activeDiff === DIFFERENTIATORS.length - 1}
                  aria-label="Next Standard"
                  className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg border border-slate-200 bg-white text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Dropdown Menu */}
            <div className="relative mb-3">
              <select
                id="mobile-whyus-select"
                value={activeDiff}
                onChange={(e) => setActiveDiff(Number(e.target.value))}
                className="w-full appearance-none bg-white border border-slate-300 rounded-xl px-4 py-2.5 pr-10 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
              >
                {DIFFERENTIATORS.map((diff, idx) => (
                  <option key={diff.title} value={idx}>
                    0{idx + 1}. {diff.title}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>

            {/* Quick Pill Tabs */}
            <div className="grid grid-cols-4 gap-1.5 mb-4">
              {DIFFERENTIATORS.map((diff, idx) => (
                <button
                  key={diff.title}
                  type="button"
                  onClick={() => setActiveDiff(idx)}
                  className={`py-1.5 rounded-lg text-center font-mono text-[11px] font-bold transition-all ${
                    activeDiff === idx
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>

            {/* Single Active Card on Mobile */}
            {(() => {
              const diff = DIFFERENTIATORS[activeDiff];
              const Icon = diff.icon;
              return (
                <div className="bg-white rounded-2xl p-6 border-2 border-blue-500/80 shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-mono text-blue-600 font-bold uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                        Standard 0{activeDiff + 1} of 0{DIFFERENTIATORS.length}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {diff.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                      {diff.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                    <span>Swipe or tap Next →</span>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Right Column: 4 Principle Cards Grid (Visible on >= sm, untouched) */}
          <div className="lg:col-span-7 hidden sm:grid sm:grid-cols-2 gap-5">
            {DIFFERENTIATORS.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <motion.div
                  key={diff.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="bg-white rounded-2xl p-6.5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4.5">
                      <Icon size={20} />
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {diff.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {diff.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
