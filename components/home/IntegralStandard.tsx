"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiteContent } from "@/lib/cms";

// Interactive blueprint schematics for each card
function CardSchematic({ index }: { index: number }) {
  const strokeColor = "rgba(168, 85, 247, 0.3)"; // purple-500/30
  
  switch (index) {
    case 0: // Web Development
      return (
        <svg viewBox="0 0 100 60" className="w-full h-full opacity-60">
          <rect x="5" y="10" width="90" height="40" rx="3" fill="none" stroke={strokeColor} strokeWidth="1" />
          <line x1="5" y1="20" x2="95" y2="20" stroke={strokeColor} strokeWidth="1" />
          <circle cx="12" cy="15" r="1.5" fill="#a855f7" />
          <circle cx="18" cy="15" r="1.5" fill="#a855f7" />
          <circle cx="24" cy="15" r="1.5" fill="#a855f7" />
          {/* Wireframe blocks */}
          <rect x="15" y="26" width="30" height="18" rx="1" fill="none" stroke={strokeColor} strokeWidth="0.8" />
          <line x1="52" y1="28" x2="85" y2="28" stroke={strokeColor} strokeWidth="0.8" />
          <line x1="52" y1="34" x2="80" y2="34" stroke={strokeColor} strokeWidth="0.8" />
          <line x1="52" y1="40" x2="70" y2="40" stroke={strokeColor} strokeWidth="0.8" />
          <text x="50" y="56" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="5" fontFamily="monospace">UI_RENDER_NODE</text>
        </svg>
      );
    case 1: // App / SaaS Build
      return (
        <svg viewBox="0 0 100 60" className="w-full h-full opacity-60">
          <rect x="10" y="15" width="20" height="25" rx="2" fill="none" stroke={strokeColor} strokeWidth="1" />
          <rect x="40" y="5" width="20" height="45" rx="2" fill="none" stroke={strokeColor} strokeWidth="1" />
          <rect x="70" y="15" width="20" height="25" rx="2" fill="none" stroke={strokeColor} strokeWidth="1" />
          <line x1="30" y1="28" x2="40" y2="28" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="2 2" />
          <line x1="60" y1="28" x2="70" y2="28" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="2 2" />
          <circle cx="50" cy="15" r="2" fill="#a855f7" />
          <circle cx="50" cy="28" r="2" fill="#a855f7" />
          <circle cx="50" cy="40" r="2" fill="#a855f7" />
          <text x="50" y="56" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="5" fontFamily="monospace">SYS_CLUSTER_DB</text>
        </svg>
      );
    case 2: // Intelligent Automation
      return (
        <svg viewBox="0 0 100 60" className="w-full h-full opacity-60">
          <rect x="15" y="10" width="70" height="36" rx="4" fill="none" stroke={strokeColor} strokeWidth="1" />
          <line x1="15" y1="20" x2="85" y2="20" stroke={strokeColor} strokeWidth="1" />
          <circle cx="22" cy="15" r="1.5" fill="#a855f7" />
          <circle cx="28" cy="15" r="1.5" fill="#a855f7" />
          <line x1="25" y1="28" x2="55" y2="28" stroke={strokeColor} strokeWidth="0.8" />
          <line x1="25" y1="34" x2="65" y2="34" stroke={strokeColor} strokeWidth="0.8" />
          <line x1="25" y1="40" x2="45" y2="40" stroke={strokeColor} strokeWidth="0.8" />
          <circle cx="75" cy="30" r="3" fill="none" stroke="#a855f7" strokeWidth="1" className="animate-pulse" />
          <text x="50" y="54" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="5" fontFamily="monospace">CRON_JOB_RUNNER</text>
        </svg>
      );
    default: // AI and ML Systems
      return (
        <svg viewBox="0 0 100 60" className="w-full h-full opacity-60">
          <circle cx="50" cy="25" r="10" fill="none" stroke="#a855f7" strokeWidth="1" />
          <circle cx="20" cy="15" r="5" fill="none" stroke={strokeColor} strokeWidth="1" />
          <circle cx="20" cy="38" r="5" fill="none" stroke={strokeColor} strokeWidth="1" />
          <circle cx="80" cy="15" r="5" fill="none" stroke={strokeColor} strokeWidth="1" />
          <circle cx="80" cy="38" r="5" fill="none" stroke={strokeColor} strokeWidth="1" />
          <line x1="25" y1="18" x2="41" y2="22" stroke={strokeColor} strokeWidth="0.8" />
          <line x1="25" y1="35" x2="41" y2="29" stroke={strokeColor} strokeWidth="0.8" />
          <line x1="75" y1="18" x2="59" y2="22" stroke={strokeColor} strokeWidth="0.8" />
          <line x1="75" y1="35" x2="59" y2="29" stroke={strokeColor} strokeWidth="0.8" />
          <circle cx="50" cy="25" r="3" fill="#a855f7" className="animate-pulse" />
          <text x="50" y="54" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="5" fontFamily="monospace">AI_INFERENCE_CORE</text>
        </svg>
      );
  }
}

export default function IntegralStandard() {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    fetch("/api/cms")
      .then((res) => res.json())
      .then((data) => setContent(data.services));
  }, []);

  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      {content && (
        <div className="container max-w-[1200px] mx-auto px-6">
          {/* Header Area */}
          <div className="flex flex-col items-center mb-16 space-y-4 text-center">
            <div className="inline-block px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-[9px] font-bold tracking-[0.2em] text-purple-400 uppercase">
              Core Capabilities
            </div>
            <h2 className="text-4xl md:text-[64px] font-display text-white tracking-tighter leading-none">
              Our Technical Systems.
            </h2>
            <p className="text-sm md:text-base text-white/40 max-w-[600px] leading-relaxed">
              {content.description}
            </p>
          </div>

          {/* Capabilities Grid - Replacing the wheel system entirely */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Subtle background blueprint coordinate lines */}
            <div className="absolute inset-0 border border-white/[0.02] pointer-events-none hidden lg:block" />
            
            {content.list.map((q: any, i: number) => (
              <motion.div
                key={q.id || i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative surface border border-white/5 bg-[#080808]/40 hover:bg-[#0a0a0a]/80 hover:border-purple-500/20 rounded-3xl p-6 shadow-2xl flex flex-col justify-between min-h-[380px] transition-all duration-300"
              >
                {/* Tech Corner ticks */}
                <div className="absolute top-3 left-3 w-1.5 h-1.5 border-t border-l border-white/10 group-hover:border-purple-500/30 transition-colors" />
                <div className="absolute top-3 right-3 w-1.5 h-1.5 border-t border-r border-white/10 group-hover:border-purple-500/30 transition-colors" />
                <div className="absolute bottom-3 left-3 w-1.5 h-1.5 border-b border-l border-white/10 group-hover:border-purple-500/30 transition-colors" />
                <div className="absolute bottom-3 right-3 w-1.5 h-1.5 border-b border-r border-white/10 group-hover:border-purple-500/30 transition-colors" />

                {/* Top status bar */}
                <div className="flex items-center justify-between font-mono text-[9px] text-white/20 group-hover:text-purple-400/50 transition-colors mb-6">
                  <span>SYS_NODE://0{i + 1}</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-green-500/40 group-hover:bg-purple-400 group-hover:animate-ping" />
                    ONLINE
                  </span>
                </div>

                {/* Blueprint Diagram container */}
                <div className="relative w-full h-32 mb-6 border border-white/[0.02] bg-white/[0.01] rounded-2xl flex items-center justify-center overflow-hidden">
                  <CardSchematic index={i} />
                </div>

                {/* Metadata details */}
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors tracking-tight">
                      {q.title}
                    </h3>
                    <p className="text-xs text-white/40 group-hover:text-white/50 transition-colors leading-relaxed font-light">
                      {q.description}
                    </p>
                  </div>

                  {/* Core tags */}
                  {q.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-4 mt-auto">
                      {q.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 text-[9px] font-mono text-white/30 group-hover:border-purple-500/10 group-hover:text-purple-400/50 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Blueprint Status log at the bottom */}
          <div className="mt-12 flex items-center justify-between border-t border-white/[0.04] pt-6 font-mono text-[9px] text-white/10">
            <div className="flex items-center gap-4">
              <span className="text-purple-500/40">∫ INTEGRAL_CORE</span>
              <span>STATE: SYNCHRONIZED</span>
            </div>
            <span className="hidden sm:inline">COORD_REF: [30.125°N, 79.489°E]</span>
          </div>
        </div>
      )}
    </section>
  );
}
