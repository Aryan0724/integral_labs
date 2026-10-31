"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  ExternalLink, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles,
  Cpu
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  categoryTag: string;
  categoryFilter: string;
  description: string;
  image: string;
  caseStudyLink: string;
  liveLink: string;
  tech: string[];
  stats?: string;
}

const FEATURED_PLATFORMS: ProjectItem[] = [
  {
    id: "bro-uni",
    title: "Bro University",
    categoryTag: "Higher Education Portal",
    categoryFilter: "education",
    description: "Comprehensive academic portal featuring structured course directories, student admission pathways, and faculty systems with responsive layouts.",
    image: "/projects/real/bro-uni.png",
    caseStudyLink: "/work/bro-uni",
    liveLink: "https://bro-uni-2.vercel.app/",
    tech: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
    stats: "Academic Directory"
  },
  {
    id: "ukdrip",
    title: "UK Drip",
    categoryTag: "Streetwear Fashion & Drops",
    categoryFilter: "ecommerce",
    description: "High-energy urban streetwear lookbook and online shop featuring limited collection drops, curated visual galleries, and instant mobile ordering.",
    image: "/projects/real/ukdrip.png",
    caseStudyLink: "/work/ukdrip",
    liveLink: "https://ukdrip-seven.vercel.app/",
    tech: ["Next.js", "CSS Modules", "TailwindCSS", "Framer Motion"],
    stats: "Seasonal Drops"
  },
  {
    id: "atozprints",
    title: "AtoZ Prints",
    categoryTag: "Custom Merch & Print E-Commerce",
    categoryFilter: "ecommerce",
    description: "Full-scale custom printing and merchandise e-commerce platform offering online apparel customization, commercial print quotes, and rapid checkout.",
    image: "/projects/real/atozprints.png",
    caseStudyLink: "/work/atozprints",
    liveLink: "https://atozprints.com",
    tech: ["Next.js", "TailwindCSS", "Node.js", "PostgreSQL"],
    stats: "Custom Print Portal"
  },
  {
    id: "exam-planner",
    title: "Exam Planner OG",
    categoryTag: "Academic Productivity Suite",
    categoryFilter: "education",
    description: "Interactive revision scheduler helping students organize syllabus milestones, calculate study hours, and monitor test readiness.",
    image: "/projects/real/exam-planner.png",
    caseStudyLink: "/work/exam-planner",
    liveLink: "https://examplanner-og.vercel.app/",
    tech: ["React", "TailwindCSS", "Framer Motion", "Vite"],
    stats: "Milestone Planner"
  }
];

const CATEGORY_TABS = [
  { id: "all", label: "All Client Work" },
  { id: "education", label: "EdTech & University" },
  { id: "ecommerce", label: "E-Commerce & Retail" },
];

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = FEATURED_PLATFORMS.filter((p) => {
    if (activeTab === "all") return true;
    return p.categoryFilter === activeTab;
  });

  return (
    <section 
      id="work-section"
      className="relative py-24 md:py-32 bg-white border-t border-slate-200/80"
    >
      <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* 1. FLAGSHIP AI WORK SECTION: PREYT PLATFORM */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 inline-block" />
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              Flagship AI Work // Production Machine Learning
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Predictive Intelligence Built by Integral Labs
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-[640px] font-normal mb-8">
            Our premier machine learning deployment in production. Custom regression models serving real-time YouTube audience traction and reach forecasts.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#0B132B] via-[#0F172A] to-[#1E293B] rounded-3xl p-8 sm:p-12 text-white overflow-hidden shadow-2xl border border-slate-800"
          >
            {/* Subtle Ambient Glow */}
            <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                    Flagship AI Deployment // Preyt
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                  Preyt Platform
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
                  An intelligent ML forecasting system that predicts video performance, subscriber growth probability, and thumbnail audience resonance prior to publishing.
                </p>

                {/* Key Highlights */}
                <div className="space-y-2.5 mb-8 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-blue-400 shrink-0" />
                    <span>Real-time YouTube regression model parsing title &amp; thumbnail metadata</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-blue-400 shrink-0" />
                    <span>FastAPI inference engine serving predictions under 250ms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-blue-400 shrink-0" />
                    <span>Interactive simulation sliders with instant curve adjustments</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://preyt.integralgroups.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full shadow-lg shadow-blue-600/30 transition-all group"
                  >
                    <span>Launch Live Platform</span>
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <Link
                    href="/work/preyt-platform"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-300 hover:text-white px-5 py-3 rounded-full border border-slate-700 hover:border-slate-500 transition-all"
                  >
                    <span>Read AI Architecture</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Right Side: Real-time Screenshot Mockup */}
              <div className="lg:col-span-7">
                <div className="bg-slate-900/90 rounded-2xl border border-slate-700/80 overflow-hidden shadow-2xl">
                  {/* Browser bar */}
                  <div className="bg-slate-800/80 px-4 py-3 border-b border-slate-700/80 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-xs font-mono text-slate-400 font-semibold">
                        preyt.integralgroups.in
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        LIVE_PRODUCTION
                      </span>
                    </div>
                  </div>

                  {/* Real-time Screenshot */}
                  <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden group">
                    <Image
                      src="/projects/real/preyt-platform.png"
                      alt="Preyt Platform Live Production Homepage"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-40 pointer-events-none" />
                  </div>

                  {/* Real Metrics Banner */}
                  <div className="grid grid-cols-3 divide-x divide-slate-800 bg-slate-950/90 p-4 text-center">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Accuracy Rate</div>
                      <div className="text-xl sm:text-2xl font-black text-white mt-0.5">98.4%</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Inference Latency</div>
                      <div className="text-xl sm:text-2xl font-black text-blue-400 mt-0.5">&lt; 250ms</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Core Engine</div>
                      <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-0.5">FastAPI + ML</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* 2. VERIFIED CLIENT PORTFOLIOS SECTION */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 inline-block" />
                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                  Client Platforms // Live Deployments
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Selected Client Work
              </h3>
              <p className="text-sm text-slate-500 max-w-[540px] mt-2 font-normal">
                Production web applications and digital commerce systems shipped by Integral Labs.
              </p>
            </div>

            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors shrink-0 group"
            >
              <span>Explore All Case Studies</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all shrink-0 select-none ${
                    isActive
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* 4 Cards Grid: Bro University, UK Drip, AtoZ Prints, Exam Planner OG */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group flex flex-col bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300"
                >
                  {/* Browser Frame Header */}
                  <div className="bg-slate-100/90 px-5 py-3 border-b border-slate-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300/80" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 truncate max-w-[240px] font-semibold">
                      {project.liveLink.replace("https://", "")}
                    </span>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open Live Deployment"
                      className="text-slate-400 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={13} />
                    </a>
                  </div>

                  {/* Real-time Screenshot Container */}
                  <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} live homepage`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/10 transition-colors" />
                    
                    {project.stats && (
                      <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-white/95 backdrop-blur-md shadow-xs border border-slate-200/60 text-[11px] font-mono font-bold text-slate-900">
                        {project.stats}
                      </div>
                    )}
                  </div>

                  {/* Card Details */}
                  <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between bg-white">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                          {project.categoryTag}
                        </span>
                      </div>

                      <h4 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h4>

                      <p className="text-sm text-slate-500 leading-relaxed font-normal mt-2.5">
                        {project.description}
                      </p>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-2 mt-5">
                        {project.tech.map((t) => (
                          <span 
                            key={t}
                            className="px-2.5 py-1 rounded bg-slate-100 text-xs font-mono font-medium text-slate-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions Row */}
                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={project.caseStudyLink}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors"
                      >
                        <span>Read Case Study</span>
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </Link>

                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
