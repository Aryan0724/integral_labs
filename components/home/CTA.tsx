"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Sparkles, CheckCircle2 } from "lucide-react";

export default function CTA() {
  return (
    <section 
      id="cta-section"
      className="relative py-28 md:py-36 overflow-hidden bg-transparent border-t border-white/[0.05]"
    >
      {/* Background Central Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[500px] md:w-[700px] h-[350px] bg-purple-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 text-center">
        <div className="max-w-[850px] mx-auto rounded-3xl border border-white/10 bg-[#0c0c0c]/90 backdrop-blur-2xl p-8 sm:p-14 md:p-16 shadow-2xl shadow-purple-950/20 relative overflow-hidden">
          {/* Subtle Ambient Border Grid */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Overline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8"
          >
            <Sparkles size={13} className="text-purple-400" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-purple-300 font-bold">
              Initiate Collaboration
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[36px] sm:text-[54px] md:text-[68px] text-white mb-6 tracking-tight leading-[0.98]"
          >
            Ready to build your next{" "}
            <span className="italic font-light text-white/50">digital breakthrough?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[15px] sm:text-[17px] text-white/50 max-w-[620px] mx-auto mb-10 leading-relaxed font-light"
          >
            Let's translate complex operational requirements into scalable, high-performance software. Sprints launch in 5 to 7 days.
          </motion.p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link 
              href="/contact" 
              className="btn-sweep btn-sweep-primary px-8 py-4 text-[12px] font-bold tracking-[0.14em] uppercase w-full sm:w-auto"
            >
              <span>Start Your Project</span>
              <ArrowRight size={15} />
            </Link>

            <a 
              href="mailto:contact@integralgroups.in" 
              className="btn-sweep btn-sweep-outline px-8 py-4 text-[12px] font-bold tracking-[0.14em] uppercase w-full sm:w-auto flex items-center gap-2"
            >
              <Mail size={15} />
              <span>contact@integralgroups.in</span>
            </a>
          </div>

          {/* Security & NDA Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-8 border-t border-white/5 text-[11px] font-mono text-white/40">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-400" />
              <span>Standard NDA &amp; IP Protection</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-400" />
              <span>Transparent Milestone Sprints</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-400" />
              <span>Direct Senior Architecture Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
