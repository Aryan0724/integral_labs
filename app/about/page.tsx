"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, ShieldCheck, Layers, Sparkles, Terminal, CheckCircle2 } from "lucide-react";

const PILLARS = [
  {
    icon: Code2,
    title: "Direct Founder Engineering",
    description: "Every engagement is architected and executed directly by Tanuj Pargai and Aryan Tiwari. We eliminate the telephone game of account managers and junior subcontractors."
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

const LEADERSHIP = [
  {
    name: "Tanuj Pargai",
    role: "Co-Founder & Lead Developer",
    focus: "Cloud Systems & Next.js Architecture",
    bio: "Focuses on high-throughput fullstack systems, Next.js performance, microservices, and secure session architectures. Oversees production builds from foundation to cloud deployment."
  },
  {
    name: "Aryan Tiwari",
    role: "Co-Founder & Lead Designer",
    focus: "Design Systems & User Ergonomics",
    bio: "Specializes in conversion-focused UI/UX design, interactive motion systems, and brand ergonomics. Translates complex business requirements into fluid digital interfaces."
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

        {/* Founders Spotlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm mb-24"
        >
          {/* Framed Photo */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto rounded-2xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200">
              <Image
                src="/founders.png"
                alt="Tanuj Pargai and Aryan Tiwari - Founders of Integral Labs"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-blue-400 font-bold block">Leadership</span>
                  <span className="text-sm font-bold">Tanuj Pargai &amp; Aryan Tiwari</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-mono font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  FOUNDERS
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
              Direct Founder Commitment on Every Engagement.
            </h3>

            <p className="text-slate-600 leading-relaxed font-normal mb-6 text-sm sm:text-base">
              We don&apos;t build temporary code or short-lived systems. We design highly performant, custom-tailored visual infrastructures that survive time, scaling alongside your operational needs while maintaining extreme frame rates.
            </p>

            <p className="text-slate-600 leading-relaxed font-normal mb-8 text-sm sm:text-base">
              As the Creative Engineering Department of Integral Groups, we specialize in high-stakes web applications, custom SaaS systems, machine learning workflows, and high-conversion brand experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200">
              {LEADERSHIP.map((leader) => (
                <div key={leader.name} className="p-4 rounded-xl bg-white border border-slate-200/80">
                  <h4 className="font-bold text-slate-900 text-sm">{leader.name}</h4>
                  <p className="text-xs font-mono text-blue-600 font-semibold mb-2">{leader.role}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{leader.bio}</p>
                </div>
              ))}
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
