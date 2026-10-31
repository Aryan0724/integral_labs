"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Terminal, Activity, Sparkles, Layers, Cpu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Marquee from "@/components/shared/Marquee";

const DEFAULT_HERO = {
  title: "Custom Software & Intelligent Systems Built For Scale.",
  subtext: "We architect scalable SaaS platforms, custom AI systems, high-converting digital storefronts, and robust automation infrastructure under Integral Group.",
  primaryCta: "Discuss Your Project",
  secondaryCta: "Explore Case Studies"
};

const TECH_ITEMS = [
  "NEXT.JS 16",
  "REACT 19",
  "TYPESCRIPT",
  "PYTHON",
  "FASTAPI",
  "TAILWIND CSS",
  "POSTGRESQL",
  "FRAMER MOTION",
  "DOCKER",
  "CLOUDFLARE EDGE",
  "AWS",
  "SCIKIT-LEARN"
];

const PREVIEW_TABS = [
  {
    id: "preyt",
    label: "Preyt ML",
    category: "AI & Machine Learning",
    title: "Pre-Launch Video Reach Forecasting Engine",
    metric: "98.4% Accuracy",
    image: "/projects/lumina.png",
    link: "/work/preyt-platform"
  },
  {
    id: "edureach",
    label: "EduReach",
    category: "EdTech Platform",
    title: "High-Performance Institutional Learning Suite",
    metric: "10,000+ Students",
    image: "/projects/lumina.png",
    link: "/work/edu-platform-premium"
  },
  {
    id: "vantage",
    label: "Vantage",
    category: "Business Advisory",
    title: "Strategic Advisory Platform for Global Capital",
    metric: "Global Enterprise",
    image: "/projects/vortex.png",
    link: "/work/business-consulting-premium"
  }
];

export default function Hero() {
  const [content, setContent] = useState<any>(DEFAULT_HERO);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetch("/api/cms")
      .then((res) => res.json())
      .then((data) => {
        if (data?.hero) setContent(data.hero);
      })
      .catch(() => {});
  }, []);

  const activeProject = PREVIEW_TABS[activeTab];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden pt-28 md:pt-36 pb-16">
      {/* Background Subtle Gradient & Grid Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] bg-purple-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[120px]" />
        
        {/* Subtle Hairline Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", 
            backgroundSize: "80px 80px" 
          }} 
        />
      </div>

      <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 text-center flex-1 flex flex-col justify-center">
        {/* Overline Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-8 mx-auto shadow-inner"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-purple-300">
            INTEGRAL LABS // ENGINEERING DEPARTMENT
          </span>
          <span className="hidden sm:inline-block text-[9px] font-mono text-white/30 border-l border-white/10 pl-2 uppercase">
            EST. BHIMTAL
          </span>
        </motion.div>

        {/* Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[44px] sm:text-[68px] md:text-[90px] xl:text-[105px] text-white tracking-tight leading-[0.95] max-w-[1100px] mx-auto mb-8"
        >
          Custom Software &amp;{" "}
          <span className="italic font-light text-white/70">Intelligent Systems</span>
          <br className="hidden sm:inline" />
          {" "}Built For Scale.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[15px] sm:text-[18px] text-white/50 max-w-[720px] mx-auto mb-10 leading-relaxed font-light"
        >
          {content.subtext || "We architect scalable SaaS platforms, custom AI systems, high-converting digital storefronts, and robust automation infrastructure under Integral Group."}
        </motion.p>

        {/* Trust Metrics Pill Strip (ZentixSoft benchmark adaptation) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10 text-[11px] sm:text-[12px] font-mono text-white/60"
        >
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/5">
            <CheckCircle2 size={13} className="text-emerald-400" />
            <span>Verified Production Portfolio</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/5">
            <CheckCircle2 size={13} className="text-emerald-400" />
            <span>Next.js 16 &amp; Python ML Architectures</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/5">
            <CheckCircle2 size={13} className="text-emerald-400" />
            <span>Direct Founder Engineering</span>
          </div>
        </motion.div>

        {/* Action Buttons (Zentix bottom-to-top sweep interaction) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/contact"
            className="btn-sweep btn-sweep-primary px-8 py-4 text-[12px] font-bold tracking-[0.14em] uppercase w-full sm:w-auto"
          >
            <span>Discuss Your Project</span>
            <ArrowRight size={15} />
          </Link>
          <Link
            href="/work"
            className="btn-sweep btn-sweep-outline px-8 py-4 text-[12px] font-bold tracking-[0.14em] uppercase w-full sm:w-auto"
          >
            <span>Explore Case Studies</span>
          </Link>
        </motion.div>

        {/* Interactive System Showreel / Architecture Preview Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[960px] mx-auto rounded-2xl md:rounded-3xl border border-white/10 bg-[#0c0c0c]/80 backdrop-blur-xl p-4 sm:p-6 shadow-2xl shadow-black/80 text-left relative overflow-hidden"
        >
          {/* Top Window Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              </div>
              <span className="font-mono text-[10px] text-white/40 tracking-wider">
                INTEGRAL-NODE-EDGE // ACTIVE RUNTIME
              </span>
            </div>

            {/* Switcher Tabs */}
            <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-xl border border-white/5 self-stretch sm:self-auto">
              {PREVIEW_TABS.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-1 rounded-lg text-[10px] font-mono tracking-wider transition-all flex-1 sm:flex-initial ${
                    activeTab === idx
                      ? "bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Preview Showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-6 items-center"
            >
              {/* Media Container */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/5 bg-[#141414] group">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover opacity-85 group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 560px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-purple-500/30 text-purple-200 border border-purple-500/40 backdrop-blur-md">
                      {activeProject.category}
                    </span>
                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {activeProject.metric}
                    </span>
                  </div>
                </div>
              </div>

              {/* Spec & Context */}
              <div className="flex flex-col justify-between py-2">
                <div>
                  <div className="flex items-center gap-2 text-purple-400 text-[10px] font-mono tracking-widest uppercase mb-2">
                    <Sparkles size={12} />
                    <span>Selected System Case</span>
                  </div>
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-white tracking-tight leading-snug mb-3">
                    {activeProject.title}
                  </h3>
                  <p className="text-[13px] text-white/50 leading-relaxed font-light mb-6">
                    Engineered by Integral Labs with responsive client panels, sub-second execution speeds, and modern component ergonomics.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-wider">
                    Full Case Study Available
                  </span>
                  <Link
                    href={activeProject.link}
                    className="text-[11px] font-mono text-purple-400 hover:text-purple-300 font-bold flex items-center gap-1.5 uppercase tracking-wider transition-colors"
                  >
                    <span>View Architecture</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Tech Stack Marquee (Authentic Tools & Frameworks) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="w-full pt-16 relative"
      >
        <div className="text-center mb-4">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">
            Engineered With Production Technologies
          </span>
        </div>
        <Marquee speed={45} className="opacity-40 hover:opacity-80 transition-opacity">
          {TECH_ITEMS.map((item) => (
            <div key={item} className="mx-8 font-mono text-xs tracking-[0.25em] text-white/80 flex items-center gap-4">
              <span>{item}</span>
              <span className="text-purple-500/40 text-[8px]">◆</span>
            </div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
