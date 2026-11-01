"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Mail, ArrowRight, ShieldCheck, Terminal, Award, Cpu, Layout, Search } from "lucide-react";
import Link from "next/link";

const DISCIPLINES = [
  {
    title: "Systems Architecture & Cloud Infrastructure",
    role: "Core Engineering Division",
    icon: Cpu,
    focus: "Next.js Turbopack, Cloud Infrastructure, Database Design, System Security",
    bio: "Responsible for high-throughput fullstack services, API resilience, zero-downtime deployment pipelines, and sub-second TTFB optimization across all client platforms.",
  },
  {
    title: "Interface Ergonomics & Design Systems",
    role: "Creative Engineering Division",
    icon: Layout,
    focus: "Design Systems, Motion Ergonomics, Interactive UX, Commercial Conversion",
    bio: "Pioneering conversion-focused design systems, typography hierarchy, fluid micro-interactions, and tactile interfaces that turn complex business workflows into seamless experiences.",
  },
  {
    title: "Search & Answer Engine Optimization (SEO & AEO)",
    role: "Discoverability Engineering Division",
    icon: Search,
    focus: "Schema.org Graphs, Knowledge Base Entity Alignment, Core Web Vitals",
    bio: "Architecting machine-readable semantic structures, JSON-LD graphs, and vector-aligned documentation engineered for algorithmic search crawlers and AI answer engines.",
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white pt-36 pb-24 text-slate-900">
      <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-[720px] mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 bg-blue-50/70 mb-6"
          >
            <Users size={13} className="text-blue-600" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-blue-700 font-bold">
              Engineering Collective &amp; Disciplines
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.02] mb-6"
          >
            The Collective Behind Every System.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-lg text-slate-600 leading-relaxed font-normal"
          >
            Integral Labs operates as a dedicated multidisciplinary engineering collective. We do not pass client projects off to junior subcontractors; every system is designed, audited, and deployed by our senior engineering leads.
          </motion.p>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {DISCIPLINES.map((discipline, i) => {
            const Icon = discipline.icon;
            return (
              <motion.div
                key={discipline.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-8 sm:p-10 hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <Icon size={24} />
                  </div>

                  <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest block mb-2 font-bold">
                    {discipline.role}
                  </span>
                  
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                    {discipline.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {discipline.bio}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200/80">
                  <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold mb-1">
                    Specialized Competencies
                  </div>
                  <div className="text-xs text-slate-700 font-medium">
                    {discipline.focus}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Operating Pillars */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12 mb-20 grid grid-cols-1 md:grid-cols-3 gap-8 shadow-xs">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck size={18} />
              <span>Dedicated Senior Involvement</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Direct access to senior software architects and interaction designers throughout your project lifecycle.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase tracking-wider mb-3">
              <Terminal size={18} />
              <span>Strict Technical Standards</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              All codebases adhere to TypeScript strict mode, clean modular component boundaries, and documented schemas.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase tracking-wider mb-3">
              <Award size={18} />
              <span>Full IP Ownership</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              100% of repositories, tokens, schemas, and deployed environments belong unconditionally to your organization.
            </p>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            <span>Consult With The Engineering Team</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
