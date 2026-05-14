"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Activity, Globe, ChevronRight, Code2, GitBranch } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-32 md:pt-48 overflow-hidden bg-[#0A0A0A]">
      {/* Background Motion System */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        <div className="absolute inset-0 bg-grid-small opacity-[0.05]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A] z-10" />
        
        {/* Animated Glows */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
            x: [0, 100, 0],
            y: [0, -100, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-600/30 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05],
            x: [0, -100, 0],
            y: [0, 100, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-indigo-600/20 blur-[150px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="group inline-flex items-center gap-4 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-12 hover:bg-white/10 transition-all cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.02)]"
          >
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping opacity-75" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/70 flex items-center gap-2">
              Engineering the Digital Edge <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.div>

          {/* Headline */}
          <div className="relative mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-display text-[clamp(2.5rem,10vw,140px)] font-black mb-0 text-white tracking-[-0.05em] leading-[0.85]"
            >
              CRAFTING <br />
              <span className="text-gradient-purple italic font-medium">INDUSTRIAL</span> <br />
              INTELLIGENCE.
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-white/50 max-w-4xl font-normal leading-relaxed mb-16 tracking-tight"
          >
            Integral Labs is a premium digital studio that builds high-performance software, 
            AI-driven ecosystems, and industrial-grade automation for the world&apos;s most ambitious founders.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
          >
            <Link 
              href="/contact" 
              className="group relative h-20 md:h-24 bg-white text-black px-12 md:px-16 rounded-full flex items-center justify-center gap-4 overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)] w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="text-sm font-black uppercase tracking-[0.2em] relative z-10 group-hover:text-white transition-colors">Start Project</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:text-white transition-all" />
            </Link>
            <Link 
              href="/work" 
              className="group h-20 md:h-24 px-12 md:px-16 rounded-full flex items-center justify-center gap-4 border border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/5 transition-all text-sm font-black uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(0,0,0,0.5)] w-full sm:w-auto"
            >
              View Archive
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Studio Cards */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Active Projects Card */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, -1.5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[28%] left-[4%] glass p-8 rounded-[40px] w-72 hidden xl:block border-purple-500/20 shadow-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] text-green-500 uppercase tracking-widest font-bold">Live</span>
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <p className="text-[9px] text-white/25 uppercase tracking-[0.3em] mb-2">Active Engagements</p>
              <p className="text-4xl font-black text-white">7 <span className="text-base text-purple-400 font-bold">Projects</span></p>
            </div>
            <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
              {["Aether Intelligence", "Nexus IoT Platform", "Lumina OS"].map((name, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Code2 className="w-3 h-3 text-purple-500/50" />
                  <span className="text-[10px] text-white/30 font-medium tracking-wide">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Sprint Status Card */}
        <motion.div 
          animate={{ y: [0, 25, 0], rotate: [0, 1.5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[22%] right-[6%] glass p-8 rounded-[40px] w-72 hidden xl:block border-blue-500/20 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
              <GitBranch className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-white/30 tracking-widest uppercase">Current Sprint</span>
              <span className="text-lg font-black text-white">Sprint 14</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[9px] text-white/20 uppercase tracking-widest font-bold">Velocity</span>
              <span className="text-[9px] text-blue-400 uppercase tracking-widest font-bold">84 pts</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "72%" }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="h-full bg-blue-500/60 rounded-full" 
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[9px] text-white/20 uppercase tracking-widest font-bold">Completion</span>
              <span className="text-[9px] text-white/40 uppercase tracking-widest font-bold">72%</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-purple-500 to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/20">Explore Lab</span>
      </motion.div>
    </section>
  );
}

