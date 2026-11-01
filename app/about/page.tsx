"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Code2, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  Cpu, 
  Layout, 
  Database 
} from "lucide-react";

const PILLARS = [
  {
    icon: Code2,
    title: "Dedicated Senior Engineering",
    description: "Every engagement is architected and executed directly by senior software engineers and interface architects. We eliminate the telephone game of account managers and junior subcontractors."
  },
  {
    icon: ShieldCheck,
    title: "Strict Engineering Rigor",
    description: "Sub-second load times, 100/100 Lighthouse performance, type-safe Next.js stacks, and airtight security are non-negotiable baselines across all builds."
  },
  {
    icon: Layers,
    title: "100% Client IP Ownership",
    description: "Every repository, design asset, and cloud infrastructure blueprint belongs completely to you. We deliver clean, modular code with zero vendor lock-in."
  },
  {
    icon: Sparkles,
    title: "Tactile Ergonomics",
    description: "Visual polish and interaction speed go hand-in-hand. We build interfaces with micro-interactions, smooth state changes, and intuitive commercial funnels."
  }
];

const STUDIO_PRACTICES = [
  {
    title: "Full-Stack Systems & Cloud Infrastructure",
    role: "Engineering Division",
    focus: "Cloud Systems & Next.js Architecture",
    bio: "Focuses on high-throughput fullstack systems, Next.js performance, microservices, and secure session architectures. Oversees production builds from foundation to cloud deployment.",
    icon: Cpu
  },
  {
    title: "Design Systems & User Ergonomics",
    role: "Creative Division",
    focus: "Design Systems & Interaction Ergonomics",
    bio: "Specializes in conversion-focused UI/UX design, interactive motion systems, and brand ergonomics. Translates complex business requirements into fluid digital interfaces.",
    icon: Layout
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-36 pb-24 text-slate-900">
      <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-[780px] mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            <span className="font-mono uppercase tracking-widest text-[11px] font-bold">
              About Integral Labs // Studio
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Bridging Pure Engineering <br />
            <span className="text-slate-400 font-light">&amp; Visual Mastery.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[660px] mx-auto font-normal"
          >
            Integral Labs was founded with a single, clear objective: to bridge the gap between absolute visual excellence and robust, production-grade engineering.
          </motion.p>
        </div>

        {/* Studio Spotlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm mb-24"
        >
          {/* Technical Terminal Visual */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto rounded-2xl overflow-hidden bg-slate-950 p-6 sm:p-8 flex flex-col justify-between text-white border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  CORE_SYS // MATRIX
                </span>
              </div>

              <div className="space-y-4 my-auto py-4">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block mb-1">
                    DIVISION SPECIFICATION
                  </span>
                  <div className="text-sm font-bold text-white">Integral Labs Studio</div>
                  <div className="text-xs text-slate-400 mt-0.5">Creative Engineering Department of Integral Groups</div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">Execution</div>
                    <div className="text-xs font-bold text-emerald-400">Direct Senior Team</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">Ownership</div>
                    <div className="text-xs font-bold text-blue-400">100% Client IP</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1.5">
                    Engineering Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-300 text-[10px] font-mono">Next.js 16</span>
                    <span className="px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 text-[10px] font-mono">TypeScript</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 text-[10px] font-mono">SEO &amp; AEO</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-blue-400 font-bold block">Status</span>
                  <span className="text-xs font-bold">Production Runtime Active</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-mono font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </div>
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-600 font-bold uppercase tracking-wider mb-3">
              <span>Operating Philosophy</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              Direct Senior Engineering Commitment on Every Engagement.
            </h3>

            <p className="text-slate-600 leading-relaxed font-normal mb-6 text-sm sm:text-base">
              We don&apos;t build temporary code or short-lived systems. We design highly performant, custom-tailored visual infrastructures that survive time, scaling alongside your operational needs while maintaining extreme frame rates.
            </p>

            <p className="text-slate-600 leading-relaxed font-normal mb-8 text-sm sm:text-base">
              As the Creative Engineering Department of Integral Groups, we specialize in high-stakes web applications, custom SaaS systems, machine learning workflows, and high-conversion brand experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200">
              {STUDIO_PRACTICES.map((practice) => {
                const Icon = practice.icon;
                return (
                  <div key={practice.title} className="p-4 rounded-xl bg-white border border-slate-200/80">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Icon size={14} />
                      </div>
                      <span className="text-xs font-mono text-blue-600 font-bold uppercase">{practice.role}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{practice.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{practice.bio}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Studio Pillars Grid */}
        <div className="mb-24">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Core Architectural Standards
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              The fundamental engineering pillars applied across every product we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Link to Work & Contact */}
        <div className="text-center pt-12 border-t border-slate-200 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-950 text-white text-xs sm:text-sm font-bold transition-all shadow-sm"
          >
            <span>Explore Delivered Projects</span>
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold transition-all shadow-md"
          >
            <span>Start a Project</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </main>
  );
}
