"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Database, Shield, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Server,
    title: "Backend Infrastructure",
    detail: "Scalable microservices and event-driven architectures designed for resilience and performance.",
  },
  {
    icon: Database,
    title: "Data Systems",
    detail: "High-throughput database orchestration and immutable ledger systems for mission-critical data.",
  },
  {
    icon: Zap,
    title: "Automation Workflows",
    detail: "Operational automation systems that integrate diverse service layers into a unified execution flow.",
  },
  {
    icon: Shield,
    title: "System Integrity",
    detail: "Hardened infrastructure security and real-time observability across all distributed nodes.",
  },
];

export default function SystemsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container">
        <div className="max-w-[540px] mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge mb-6"
          >
            Systems
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display text-[42px] sm:text-[56px] text-white mb-8"
          >
            Systems &
            <br />
            Infrastructure.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#71717a] text-[17px] leading-relaxed"
          >
            We architect and build the underlying software infrastructure that
            powers modern SaaS platforms and intelligent digital products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="surface p-10 border-white/[0.04] bg-[#050505] hover:border-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg border border-white/5 flex items-center justify-center bg-white/[0.01] mb-8">
                  <Icon className="w-4 h-4 text-[#71717a]" />
                </div>
                <h2 className="text-[18px] font-semibold text-white mb-4">{cap.title}</h2>
                <p className="text-[14px] text-[#52525b] leading-relaxed">{cap.detail}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Engineering diagram mock */}
        <div className="surface rounded-[32px] p-12 border-white/[0.04] bg-black overflow-hidden relative min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 grid-texture opacity-20" />
          <div className="relative z-10 text-center max-w-[400px]">
            <div className="text-[11px] font-mono text-[#3f3f46] uppercase tracking-[0.2em] mb-6">Internal Ops Architecture</div>
            <div className="space-y-4">
              <div className="h-2 w-full bg-white/5 rounded-full" />
              <div className="h-2 w-3/4 bg-white/5 rounded-full mx-auto" />
              <div className="h-2 w-1/2 bg-white/5 rounded-full mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
