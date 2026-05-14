"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="relative py-40 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="glass p-12 md:p-32 rounded-[80px] border-white/5 relative overflow-hidden group">
          {/* Animated Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid opacity-[0.05]" />
            <motion.div 
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/20 blur-[150px] rounded-full"
            />
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-12 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-700"
            >
              <Terminal className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors" />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-display text-5xl md:text-8xl font-bold text-white mb-12 leading-[0.95]"
            >
              Initialize Your <br /> <span className="text-white/40 italic font-medium">Digital Future.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-white/40 font-light leading-relaxed mb-16"
            >
              Ready to build high-performance systems? Partner with our elite engineering 
              team to architect and scale your vision.
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <Link 
                href="mailto:hello@integrallabs.com" 
                className="group relative h-20 bg-white text-black px-12 rounded-full flex items-center justify-center gap-4 overflow-hidden transition-all hover:bg-blue-600 hover:text-white w-full sm:w-auto"
              >
                <span className="text-xs font-bold uppercase tracking-widest relative z-10">Request a Proposal</span>
                <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/careers" 
                className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 hover:text-white transition-all flex items-center gap-3"
              >
                Join the Mission <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* System Identifier Overlay */}
        <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-12 text-white/10">
          <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.5em]">
             Integral Labs • High-Performance Systems • Intelligent Automation
          </div>
          <div className="flex items-center gap-8">
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 animate-pulse" />
                <span className="text-[9px] uppercase tracking-[0.3em]">Network: Stable</span>
             </div>
             <div className="text-[9px] uppercase tracking-[0.3em] font-mono">Build: 0x8F2A9D</div>
          </div>
        </div>
      </div>
    </section>
  );
}
