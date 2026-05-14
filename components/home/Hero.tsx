"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

function DashboardMock() {
  return (
    <div className="w-full aspect-[4/3] surface-2 rounded-2xl overflow-hidden flex flex-col border border-white/8 shadow-2xl relative">
      {/* Titlebar */}
      <div className="flex items-center gap-1.5 px-4 h-10 border-b border-white/5 flex-shrink-0 bg-black">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <div className="w-2 h-2 rounded-full bg-white/10" />
        </div>
        <div className="mx-auto flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-white/10" />
          <div className="text-[10px] text-[#444] font-mono tracking-tight">internal.integral.app</div>
        </div>
      </div>

      {/* Interface */}
      <div className="flex flex-1 overflow-hidden bg-black">
        {/* Sidebar */}
        <div className="w-40 border-r border-white/5 p-4 flex flex-col gap-6 flex-shrink-0">
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className={`w-1.5 h-1.5 rounded-full ${i === 1 ? "bg-[#6366f1]" : "bg-white/10"}`} />
                <div className={`h-1.5 rounded-full bg-white/5 ${i === 1 ? "w-16" : "w-12"}`} />
              </div>
            ))}
          </div>
          <div className="mt-auto pt-4 border-t border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-white/10" />
              <div className="h-1.5 w-10 bg-white/5 rounded-full" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 space-y-8">
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-32 bg-white/10 rounded-full" />
            <div className="h-6 w-16 border border-white/10 rounded-md bg-white/[0.02]" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <div key={i} className="h-20 rounded-xl border border-white/5 bg-white/[0.01] p-4">
                <div className="h-1.5 w-12 bg-white/5 rounded-full mb-3" />
                <div className="h-3 w-20 bg-white/20 rounded-full" />
              </div>
            ))}
          </div>

          <div className="h-40 rounded-xl border border-white/5 bg-white/[0.01] p-5 relative overflow-hidden">
            <div className="flex items-end gap-1.5 h-full pt-4">
              {[40, 70, 45, 90, 65, 80, 50, 85, 30, 60, 40, 75].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + i * 0.04, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 bg-white/10 rounded-sm"
                />
              ))}
            </div>
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
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 grid-texture opacity-60 pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-20 items-center">
          {/* Left: Content */}
          <div className="max-w-[500px]">
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
              className="text-display text-[40px] sm:text-[56px] text-white mb-6"
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
              className="text-[#888] text-[15px] leading-[1.8] mb-10 text-tight"
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
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Interface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
