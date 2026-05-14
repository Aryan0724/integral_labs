"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// Realistic Dashboard UI for Hero
function HeroDashboard() {
  return (
    <div className="w-full aspect-[16/11] bg-[#050505] rounded-xl overflow-hidden border border-white/[0.04] shadow-2xl relative">
      {/* Surgical Titlebar */}
      <div className="h-10 border-b border-white/[0.03] px-4 flex items-center justify-between bg-black/40 backdrop-blur-md">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/[0.02] border border-white/[0.04]" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/[0.02] border border-white/[0.04]" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/[0.02] border border-white/[0.04]" />
        </div>
        <div className="text-[10px] font-mono text-[#333] tracking-widest uppercase">System: Deployment Active</div>
      </div>

      <div className="flex h-[calc(100%-40px)]">
        {/* Sidebar */}
        <div className="w-40 border-r border-white/[0.03] flex flex-col p-5 gap-8">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-1.5 h-1.5 rounded-sm ${i === 1 ? "bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.2)]" : "bg-white/5"}`} />
                <div className={`h-1 rounded-full ${i === 1 ? "w-16 bg-white/10" : "w-10 bg-white/5"}`} />
              </div>
            ))}
          </div>
          <div className="mt-auto flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-white/5" />
            <div className="h-1 w-12 bg-white/5 rounded-full" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <div className="space-y-2.5">
              <div className="h-3.5 w-32 bg-white/10 rounded-full" />
              <div className="h-1.5 w-24 bg-white/5 rounded-full" />
            </div>
            <div className="w-10 h-10 rounded-lg border border-white/5 bg-white/[0.01]" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <div key={i} className="h-24 border border-white/[0.03] bg-white/[0.01] rounded-xl p-4 flex flex-col justify-between">
                <div className="h-1.5 w-12 bg-white/5 rounded-full" />
                <div className="flex items-baseline gap-2">
                  <div className="h-4 w-20 bg-white/20 rounded-full" />
                  <div className="h-2 w-8 bg-[#6366f1]/20 rounded-full" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 border border-white/[0.03] bg-[#030303] rounded-xl p-6 flex items-end gap-1.5">
            {[30, 50, 40, 80, 60, 90, 45, 70, 35, 55, 40, 65, 50, 85].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.8 + i * 0.03, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 bg-white/[0.04] rounded-t-[2px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      delay: i * 0.1, 
      ease: [0.22, 1, 0.36, 1] as const 
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Signature Depth */}
      <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />
      <div className="ambient-beam top-[-100px] left-[-100px]" />
      <div className="ambient-beam bottom-[-100px] right-[-100px] bg-white/[0.01]" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-20 items-center">
          {/* Content */}
          <div className="max-w-[480px]">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={0}
              className="badge mb-10"
            >
              Systems Engineering
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={1}
              className="text-display text-[42px] sm:text-[58px] text-white mb-8"
            >
              Building Modern
              <br />
              Software Systems.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={2}
              className="text-[#71717a] text-[16px] leading-[1.8] mb-12"
            >
              Integral Labs develops scalable SaaS platforms, automation systems,
              machine learning products, and modern digital infrastructure.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={3}
              className="flex items-center gap-5"
            >
              <Link href="/work" className="btn-primary">
                Explore Products
              </Link>
              <Link href="/contact" className="btn-secondary group">
                Start A Project
                <ArrowUpRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
