"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Activity, Globe, Shield, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0A]">
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
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link 
              href="/contact" 
              className="group relative h-24 bg-white text-black px-16 rounded-full flex items-center justify-center gap-4 overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="text-sm font-black uppercase tracking-[0.2em] relative z-10 group-hover:text-white transition-colors">Start Project</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:text-white transition-all" />
            </Link>
            <Link 
              href="/work" 
              className="group h-24 px-16 rounded-full flex items-center justify-center gap-4 border border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/5 transition-all text-sm font-black uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            >
              View Archive
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Industrial Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Metric Card */}
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[5%] glass p-8 rounded-[40px] w-80 hidden xl:block border-purple-500/20 shadow-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
            </div>
            <Activity className="w-4 h-4 text-purple-500/50" />
          </div>
          <div className="space-y-6">
             <div className="flex justify-between items-end">
               <div>
                 <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-1">System Load</p>
                 <p className="text-3xl font-black text-white">0.024<span className="text-sm text-purple-500 ml-1">MS</span></p>
               </div>
               <div className="flex items-end gap-1 h-12">
                  {[20, 50, 30, 80, 45, 90].map((h, i) => (
                    <div key={i} className="w-1.5 bg-purple-500/20 rounded-full h-full relative overflow-hidden">
                      <motion.div 
                        animate={{ height: [`${h}%`, `${h*0.6}%`, `${h}%`] }}
                        transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
                        className="absolute bottom-0 left-0 right-0 bg-purple-500"
                      />
                    </div>
                  ))}
               </div>
             </div>
          </div>
        </motion.div>

        {/* Global Node Card */}
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[8%] glass p-8 rounded-[40px] w-80 hidden xl:block border-blue-500/20 shadow-2xl"
        >
           <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                 <Globe className="w-7 h-7 text-blue-400" />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-white tracking-widest uppercase">Nodes Active</span>
                 <span className="text-2xl font-black text-blue-400">12,842</span>
              </div>
           </div>
           <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="flex justify-between mb-2">
                <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">Network Health</span>
                <span className="text-[8px] font-bold text-blue-400 uppercase tracking-widest">Optimal</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="h-full w-1/3 bg-blue-500/50" 
                />
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

