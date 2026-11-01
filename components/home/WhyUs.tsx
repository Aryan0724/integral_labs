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
    title: "Connected Code & Discoverability",
    description: "We do not treat engineering and SEO as separate silos. Every web platform and software system is architected from day one with semantic markup, fast Core Web Vitals, and machine-readable data for search engines and AI answer systems."
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
  },
  {
    icon: ShieldCheck,
    title: "Dedicated Senior Engineering",
    description: "No disconnected account executives or junior outsourcing. Our dedicated senior software architects and interaction designers directly oversee and implement your system architecture with complete accountability."
  }
];

export default function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-200/80">
      <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Mission & Principles */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-xs bg-blue-600 inline-block" />
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                Why Integral Labs
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Engineering with Architectural Discipline & Search Authority.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
              Most agencies build either visual designs that cannot scale or backends that remain invisible on search engines. Integral Labs unites high-performance full-stack engineering with deep SEO and Answer Engine Optimization (AEO).
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

          {/* Right Column: 4 Principle Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
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
