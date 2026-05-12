"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Activity, Network } from "lucide-react";
import Link from "next/link";

export default function RedesignedHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-black">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        
        {/* Animated Ecosystem Visual (Right Side) */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60vw] h-[80vh] hidden lg:block">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="w-full h-full border border-white/[0.03] rounded-full relative"
          >
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ duration: 4 + i, repeat: Infinity }}
                className="absolute w-4 h-4 bg-white rounded-full blur-[2px]"
                style={{ 
                  top: `${50 + Math.cos((angle * Math.PI) / 180) * 50}%`,
                  left: `${50 + Math.sin((angle * Math.PI) / 180) * 50}%`
                }}
              />
            ))}
          </motion.div>
          {/* Central Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-white/[0.02] blur-3xl rounded-full" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-3 mb-8"
          >
            <Activity className="w-4 h-4 text-white/40" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">Ecosystem Status [ Active ]</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-display text-5xl md:text-8xl font-medium tracking-tight mb-10 leading-[0.95]"
          >
            Building A <br /> 
            <span className="text-white/40 italic">Decentralized</span> <br />
            Ecosystem.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl font-light leading-relaxed mb-12"
          >
            Integral Group develops specialized divisions across software engineering, intelligent automation, media systems, AI infrastructure, and scalable digital products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link href="/ecosystem" className="group relative w-full sm:w-auto h-16 bg-white text-black px-10 rounded-full flex items-center justify-center gap-3 overflow-hidden transition-all hover:bg-blue-500 hover:text-white">
              <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] font-bold">Explore Ecosystem</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/divisions" className="w-full sm:w-auto h-16 glass px-10 rounded-full flex items-center justify-center text-[10px] uppercase tracking-[0.3em] font-bold border-white/5 hover:bg-white/5 transition-all">
              View Divisions
            </Link>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
        <span className="text-[8px] uppercase tracking-[0.5em] text-white/20">Scroll to Initialize</span>
      </div>
    </section>
  );
}
