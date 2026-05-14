"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// Realistic SaaS dashboard mock - Refined for "Premium Product" look
function DashboardMock() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main window shell */}
      <div className="w-[90%] aspect-[4/3] surface-2 rounded-xl overflow-hidden flex flex-col border border-white/8 shadow-2xl shadow-black/60 relative">
        {/* Titlebar */}
        <div className="flex items-center gap-1.5 px-4 h-10 border-b border-white/5 flex-shrink-0 bg-[#0a0a0a]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <div className="mx-auto">
            <div className="text-[10px] text-[#444] font-mono tracking-tight">core-engine.integral.ai</div>
          </div>
        </div>

        {/* App layout */}
        <div className="flex flex-1 overflow-hidden bg-[#080808]">
          {/* Sidebar */}
          <div className="w-[120px] border-r border-white/5 p-3 flex flex-col gap-1 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-white/5 mb-4" />
            {["System", "Telemetry", "Clusters", "Logs"].map((item, i) => (
              <div
                key={item}
                className={`h-6 rounded-md flex items-center px-2 gap-2 ${
                  i === 0 ? "bg-white/5" : ""
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-[#6366f1]" : "bg-white/10"}`} />
                <div className={`h-1.5 rounded-full bg-white/10 ${i === 0 ? "w-8" : "w-10"}`} />
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-5 overflow-hidden">
            {/* Header row */}
            <div className="flex items-center justify-between mb-6">
              <div className="space-y-1.5">
                <div className="h-2 w-24 bg-white/20 rounded-full" />
                <div className="h-1.5 w-16 bg-white/5 rounded-full" />
              </div>
              <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5" />
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="h-16 rounded-lg border border-white/5 bg-white/[0.02] p-3"
                >
                  <div className="h-1.5 w-12 bg-white/10 rounded-full mb-2" />
                  <div className="h-3 w-20 bg-white/40 rounded-full" />
                </motion.div>
              ))}
            </div>

            {/* Chart Area */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="h-32 rounded-lg border border-white/5 bg-white/[0.02] p-4 relative overflow-hidden"
            >
              <div className="flex items-end gap-1.5 h-full pt-4">
                {[40, 70, 45, 90, 65, 80, 50, 85, 30, 60, 40, 75].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 1.3 + i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 bg-[#6366f1]/30 rounded-t-sm"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating detail - Subtle */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] -right-4 w-32 glass rounded-lg p-2.5 border border-white/10 shadow-2xl"
      >
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <div className="h-1 w-12 bg-white/20 rounded-full" />
        </div>
        <div className="h-1.5 w-16 bg-white/40 rounded-full" />
      </motion.div>
    </div>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.7, 
      delay: i * 0.1, 
      ease: [0.16, 1, 0.3, 1] as const 
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute inset-0 grid-texture opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#6366f1]/5 to-transparent pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="max-w-[540px]">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={0}
              className="badge mb-8 bg-[#111] border-white/8 text-[#888]"
            >
              Systems Studio
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={1}
              className="text-display text-[42px] sm:text-[56px] text-white mb-6 leading-[1.05]"
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
              className="text-[#888] text-[16px] leading-[1.75] mb-10 text-tight"
            >
              Integral Labs develops scalable SaaS platforms, automation systems,
              machine learning products, and premium digital infrastructure.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="/work" className="btn-primary py-3 px-8 text-[14px] bg-white text-black hover:bg-[#eee] transition-colors rounded-full font-semibold">
                Explore Products
              </Link>
              <Link href="/contact" className="btn-secondary py-3 px-8 text-[14px] border-white/10 text-white hover:bg-white/5 transition-all rounded-full font-medium">
                Start A Project
              </Link>
            </motion.div>
          </div>

          {/* Right: Realistic Product UI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
