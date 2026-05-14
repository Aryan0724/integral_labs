"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// Realistic SaaS dashboard mock
function DashboardMock() {
  return (
    <div className="relative w-full h-full">
      {/* Main window shell */}
      <div className="surface rounded-xl overflow-hidden h-full flex flex-col border border-white/6 shadow-2xl shadow-black/50">
        {/* Titlebar */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 flex-shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
          <div className="mx-auto">
            <div className="text-xs text-[#444] font-mono">analytics.integral.app</div>
          </div>
        </div>

        {/* App layout */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-[140px] border-r border-white/5 p-3 flex flex-col gap-1 flex-shrink-0 bg-[#0b0b0b]">
            <div className="text-[9px] text-[#444] uppercase tracking-wider px-2 mb-1 mt-1">Workspace</div>
            {["Overview", "Analytics", "Products", "Users", "Settings"].map((item, i) => (
              <div
                key={item}
                className={`text-[11px] px-2 py-1.5 rounded-md cursor-pointer flex items-center gap-2 ${
                  i === 1
                    ? "bg-[#6366f1]/10 text-[#a5b4fc]"
                    : "text-[#555] hover:text-[#888]"
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${i === 1 ? "bg-[#6366f1]" : "bg-[#2a2a2a]"}`} />
                {item}
              </div>
            ))}
            <div className="mt-auto pt-2 border-t border-white/5">
              <div className="text-[11px] px-2 py-1.5 rounded-md text-[#555] flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#1a1a1a] border border-white/10" />
                Account
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 overflow-hidden">
            {/* Header row */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[11px] text-white font-medium mb-0.5">Analytics</div>
                <div className="text-[9px] text-[#444]">Last 30 days · Updated just now</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[9px] text-[#555] border border-white/5 px-2 py-1 rounded-md">May 2025</div>
                <div className="text-[9px] text-[#6366f1] border border-[#6366f1]/20 px-2 py-1 rounded-md bg-[#6366f1]/5">Export</div>
              </div>
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { label: "Revenue", value: "$48.2K", change: "+12.4%", up: true },
                { label: "Active Users", value: "2,841", change: "+8.1%", up: true },
                { label: "Churn Rate", value: "1.2%", change: "-0.3%", up: false },
              ].map((kpi) => (
                <div key={kpi.label} className="bg-[#111] rounded-lg p-2.5 border border-white/5">
                  <div className="text-[9px] text-[#555] mb-1">{kpi.label}</div>
                  <div className="text-[13px] font-semibold text-white mb-0.5">{kpi.value}</div>
                  <div className={`text-[9px] font-medium ${kpi.up ? "text-emerald-500" : "text-rose-500"}`}>
                    {kpi.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Chart area */}
            <div className="bg-[#0f0f0f] rounded-lg border border-white/5 p-3 mb-3">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10px] text-[#666]">Monthly Revenue</div>
                <div className="flex gap-1.5">
                  {["1W", "1M", "3M", "1Y"].map((t, i) => (
                    <div key={t} className={`text-[9px] px-1.5 py-0.5 rounded ${i === 1 ? "bg-[#6366f1]/15 text-[#a5b4fc]" : "text-[#444]"}`}>{t}</div>
                  ))}
                </div>
              </div>
              {/* SVG chart */}
              <svg viewBox="0 0 220 60" className="w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 48 C20 42 30 28 50 26 C70 24 80 36 100 30 C120 24 130 16 150 14 C170 12 180 22 200 18 L220 12 L220 60 L0 60 Z" fill="url(#chartGrad)" />
                <path d="M0 48 C20 42 30 28 50 26 C70 24 80 36 100 30 C120 24 130 16 150 14 C170 12 180 22 200 18 L220 12" fill="none" stroke="#6366f1" strokeWidth="1.5" />
                {/* Data points */}
                {[[50,26],[100,30],[150,14],[220,12]].map(([x,y], i) => (
                  <circle key={i} cx={x} cy={y} r="2" fill="#6366f1" />
                ))}
              </svg>
            </div>

            {/* Activity feed */}
            <div className="bg-[#0f0f0f] rounded-lg border border-white/5 p-2.5">
              <div className="text-[9px] text-[#555] mb-2">Recent Activity</div>
              {[
                { action: "New subscription", user: "alex@company.io", time: "2m ago" },
                { action: "Plan upgrade", user: "sarah@startup.co", time: "14m ago" },
                { action: "API integration", user: "dev@enterprise.io", time: "1h ago" },
              ].map((item) => (
                <div key={item.user} className="flex items-center gap-2 py-1.5 border-b border-white/[0.03] last:border-0">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[9px] text-[#777]">{item.action}</div>
                    <div className="text-[9px] text-[#444] truncate">{item.user}</div>
                  </div>
                  <div className="text-[9px] text-[#333]">{item.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating accent card — subtle */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 -left-6 w-48 surface rounded-xl p-3 shadow-xl shadow-black/40 border border-white/6"
      >
        <div className="text-[9px] text-[#555] mb-2">System Health</div>
        <div className="flex gap-2 mb-2">
          {["API", "DB", "CDN", "Auth"].map((svc, i) => (
            <div key={svc} className="flex-1 text-center">
              <div className="text-[8px] text-[#444] mb-1">{svc}</div>
              <div className={`text-[8px] font-mono ${i < 3 ? "text-emerald-500" : "text-yellow-500"}`}>
                {i < 3 ? "●" : "◐"}
              </div>
            </div>
          ))}
        </div>
        <div className="text-[9px] text-emerald-500 flex items-center gap-1">
          <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
          3 services nominal
        </div>
      </motion.div>
    </div>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.55, 
      delay: i * 0.08, 
      ease: [0.16, 1, 0.3, 1] as const 
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 grid-texture opacity-100 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6366f1]/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={0}
              className="badge mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Engineering & Systems Studio
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={1}
              className="text-display text-[40px] sm:text-[52px] text-white mb-5"
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
              className="text-[#888] text-[15px] leading-[1.7] mb-8 max-w-[440px]"
            >
              Integral Labs develops scalable SaaS platforms, automation systems,
              machine learning products, and modern digital infrastructure with
              premium engineering and user experience.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap items-center gap-3"
            >
              <Link href="/work" className="btn-primary">
                Explore Products
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Start A Project
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={4}
              className="mt-10 pt-8 border-t border-white/5 flex gap-8"
            >
              {[
                { value: "12+", label: "Products shipped" },
                { value: "3yrs", label: "In operation" },
                { value: "100%", label: "Client retention" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-[22px] font-semibold text-white tracking-tight">{stat.value}</div>
                  <div className="text-[11px] text-[#555] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Dashboard mock */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative h-[440px] hidden lg:block"
          >
            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
