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
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12"
          >
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_#a855f7]" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/60">Next-Gen Engineering Studio</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
            }}
            className="text-display text-6xl md:text-[120px] font-bold mb-12 text-white tracking-tight leading-[0.9]"
          >
            {"Architecting".split("").map((char, i) => (
              <motion.span 
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            <br />
            {"Digital".split(" ").map((word, i) => (
              <motion.span 
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-gradient-purple italic font-medium inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
             {"Supremacy.".split(" ").map((word, i) => (
              <motion.span 
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-gradient-purple italic font-medium inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-white/40 max-w-3xl font-light leading-relaxed mb-16"
          >
            We build industrial-grade software, high-performance automation, 
            and scalable intelligence systems for the world&apos;s most ambitious teams.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-8"
          >
            <Link 
              href="#contact" 
              className="group relative h-20 bg-white text-black px-12 rounded-full flex items-center justify-center gap-4 overflow-hidden transition-all hover:bg-purple-600 hover:text-white w-full sm:w-auto"
            >
              <span className="text-xs font-bold uppercase tracking-widest relative z-10">Start Project</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#work" 
              className="h-20 px-12 rounded-full flex items-center justify-center gap-4 border border-white/10 hover:bg-white/5 transition-all text-xs font-bold uppercase tracking-widest w-full sm:w-auto"
            >
              View Archive
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Status Cards */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[5%] glass p-6 rounded-3xl w-64 hidden xl:block border-purple-500/20"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>
            <span className="text-[8px] font-mono text-white/20">LIVE_METRICS</span>
          </div>
          <div className="space-y-3">
             <div className="flex justify-between items-center">
               <span className="text-[10px] text-white/40">Uptime</span>
               <span className="text-[10px] text-green-400 font-bold">99.99%</span>
             </div>
             <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ width: ["0%", "99.99%"] }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="h-full bg-purple-500" 
                />
             </div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[8%] glass p-6 rounded-3xl w-72 hidden xl:block border-blue-500/20"
        >
           <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                 <Zap className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-bold text-white">SYSTEM_IDLE</span>
                 <span className="text-[8px] text-white/20">AWAITING_INPUT...</span>
              </div>
           </div>
           <div className="flex items-end gap-1.5 h-16">
              {[40, 70, 45, 90, 65, 80, 50, 85].map((h, i) => (
                <motion.div 
                  key={i} 
                  animate={{ height: [`${h/2}%`, `${h}%`, `${h/2}%`] }}
                  transition={{ duration: 2 + i * 0.2, repeat: Infinity }}
                  className="flex-1 bg-blue-500/20 rounded-t-sm" 
                />
              ))}
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
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
        <span className="text-[8px] uppercase tracking-[0.5em] text-white/20">Scroll to Explore</span>
      </motion.div>
    </section>
  );
}
