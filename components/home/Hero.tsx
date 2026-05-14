"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2, Cpu, Zap, Activity } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const headline = "Engineering Intelligent Digital Systems.";
  const words = headline.split(" ");

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-48 overflow-hidden bg-black">
      {/* Background Motion System */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid opacity-[0.05]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black z-10" />
        
        {/* Animated Glows */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-600/30 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_#3b82f6]" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/60">Modern Engineering Agency</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-display text-5xl md:text-8xl font-bold mb-10 text-white">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="inline-block mr-[0.2em] whitespace-nowrap"
              >
                {word === "Intelligent" || word === "Systems." ? (
                  <span className="italic text-white/40 font-medium">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-white/40 max-w-2xl font-light leading-relaxed mb-12"
          >
            We architect and build high-performance software, intelligent automation, 
            and scalable digital infrastructure for modern enterprises.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link 
              href="#contact" 
              className="group relative h-16 bg-white text-black px-10 rounded-full flex items-center justify-center gap-3 overflow-hidden transition-all hover:bg-blue-600 hover:text-white w-full sm:w-auto"
            >
              <span className="text-xs font-bold uppercase tracking-widest relative z-10">Start a Project</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#work" 
              className="h-16 px-10 rounded-full flex items-center justify-center gap-3 border border-white/10 hover:bg-white/5 transition-all text-xs font-bold uppercase tracking-widest w-full sm:w-auto"
            >
              Selected Works
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating System Visuals (Cinematic Motion) */}
      <div className="absolute right-[-10%] top-[20%] w-[50vw] h-[60vh] hidden xl:block pointer-events-none opacity-40">
        <div className="relative w-full h-full">
          {/* Layer 1: Code Snippet */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-[20%] glass p-6 rounded-2xl w-80"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[8px] uppercase tracking-widest text-white/20 ml-2">system_init.ts</span>
            </div>
            <div className="space-y-2">
              <div className="h-1 w-full bg-white/10 rounded" />
              <div className="h-1 w-[80%] bg-white/10 rounded" />
              <div className="h-1 w-[60%] bg-blue-500/40 rounded" />
              <div className="h-1 w-[90%] bg-white/10 rounded" />
            </div>
          </motion.div>

          {/* Layer 2: Performance Graph */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[20%] right-[40%] glass p-6 rounded-2xl w-64"
          >
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-bold text-white/40">SCALING_LOAD</span>
            </div>
            <div className="flex items-end gap-1 h-12">
              {[40, 70, 45, 90, 65, 80].map((h, i) => (
                <div key={i} className="flex-1 bg-blue-500/20 rounded-t-sm" style={{ height: `${h}%` }} />
              ))}
            </div>
          </motion.div>

          {/* Layer 3: Main Core */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/[0.03] rounded-full"
          >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/20 rounded-full blur-[2px]" />
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/20 rounded-full blur-[2px]" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
        <span className="text-[8px] uppercase tracking-[0.5em] text-white/20">Scroll to Explore</span>
      </motion.div>
    </section>
  );
}
