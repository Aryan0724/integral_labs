"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// Elite Realistic Dashboard Mock - "System Infrastructure" style
function DashboardMock() {
  return (
    <div className="w-full aspect-[16/11] bg-[#050505] rounded-xl overflow-hidden border border-white/[0.05] shadow-2xl relative">
      {/* Titlebar - Surgical refinement */}
      <div className="h-9 border-b border-white/[0.04] px-4 flex items-center justify-between bg-[#080808]">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/[0.03] border border-white/[0.03]" />
          <div className="w-2 h-2 rounded-full bg-white/[0.03] border border-white/[0.03]" />
          <div className="w-2 h-2 rounded-full bg-white/[0.03] border border-white/[0.03]" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-sm bg-[#6366f1]/20 border border-[#6366f1]/30" />
          <div className="text-[9px] font-mono text-[#333] tracking-wider uppercase">Region: US-EAST-1</div>
        </div>
      </div>

      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-32 border-r border-white/[0.04] flex flex-col p-4 gap-6">
          <div className="space-y-2.5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-1 h-1 rounded-full ${i === 1 ? "bg-white/20" : "bg-white/5"}`} />
                <div className={`h-1 rounded-full ${i === 1 ? "w-12 bg-white/10" : "w-8 bg-white/5"}`} />
              </div>
            ))}
          </div>
          <div className="mt-auto mb-8 space-y-2">
            <div className="h-1 w-10 bg-white/5 rounded-full" />
            <div className="h-1 w-6 bg-white/5 rounded-full" />
          </div>
        </div>

        {/* Content - Detailed realism */}
        <div className="flex-1 p-6 flex flex-col gap-8">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="h-2 w-24 bg-white/10 rounded-full" />
              <div className="h-1 w-16 bg-white/5 rounded-full" />
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-4 border border-white/5 rounded bg-white/[0.01]" />
              <div className="w-4 h-4 border border-white/5 rounded bg-white/[0.01]" />
            </div>
          </div>

          {/* Realistic metric cards */}
          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <div key={i} className="h-20 border border-white/[0.04] bg-white/[0.01] rounded-lg p-3">
                <div className="h-1 w-10 bg-white/5 rounded-full mb-3" />
                <div className="flex items-end gap-2">
                  <div className="h-3.5 w-16 bg-white/15 rounded-full" />
                  <div className="h-2 w-6 bg-emerald-500/10 rounded-full" />
                </div>
              </div>
            ))}
          </div>

          {/* Detail list - High density */}
          <div className="space-y-3 pt-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-white/[0.02] last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border border-white/5 rounded bg-white/[0.01]" />
                  <div className="h-1.5 w-24 bg-white/5 rounded-full" />
                </div>
                <div className="h-1 w-12 bg-white/[0.03] rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      delay: i * 0.08, 
      ease: [0.19, 1, 0.22, 1] as const 
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16">
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none" />
      
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          {/* Content */}
          <div className="max-w-[480px]">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={0}
              className="badge mb-8"
            >
              Engineering Studio
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={1}
              className="text-display text-[40px] sm:text-[54px] text-white mb-6"
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
              className="text-[#666] text-[15px] leading-[1.7] mb-10"
            >
              Integral Labs develops scalable SaaS platforms, automation systems,
              machine learning products, and modern digital infrastructure.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={3}
              className="flex items-center gap-4"
            >
              <Link href="/work" className="btn-primary">
                Explore Products
              </Link>
              <Link href="/contact" className="btn-secondary">
                Start A Project
                <ArrowUpRight className="w-3 h-3 ml-1" />
              </Link>
            </motion.div>
          </div>

          {/* Interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="hidden lg:block"
          >
            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
