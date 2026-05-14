"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Zap, Send } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="relative py-48 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="glass p-16 md:p-32 rounded-[80px] border-white/5 relative overflow-hidden group shadow-2xl">
          {/* Animated Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-grid opacity-[0.05]" />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 15, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-600/20 blur-[150px] rounded-full"
            />
          </div>

          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-16 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-700"
            >
              <Zap className="w-10 h-10 text-white group-hover:text-purple-400 transition-all duration-700" />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-display text-5xl md:text-8xl font-black text-white mb-12 leading-[0.9] uppercase tracking-tighter"
            >
              INITIALIZE YOUR <br /> <span className="text-gradient-purple italic font-medium">DIGITAL FUTURE.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-white/40 font-light leading-relaxed mb-20 max-w-3xl mx-auto tracking-tight"
            >
              Ready to architect high-performance systems? Partner with our elite engineering 
              collective to industrialize your vision.
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
              <Link 
                href="/contact" 
                className="group relative h-24 bg-white text-black px-16 rounded-full flex items-center justify-center gap-4 overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="text-sm font-black uppercase tracking-[0.2em] relative z-10 group-hover:text-white transition-colors">Execute Proposal</span>
                <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:text-white transition-all" />
              </Link>
              <Link 
                href="/team" 
                className="text-[10px] uppercase tracking-[0.4em] font-black text-white/20 hover:text-white transition-all flex items-center gap-4 group"
              >
                MEET THE ARCHITECTS <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* System Identifier Overlay */}
        <div className="mt-32 flex flex-col md:flex-row justify-between items-center gap-12 text-white/10">
          <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.5em]">
             Integral Labs • Premium Digital Studio • Engineering Supremacy
          </div>
          <div className="flex items-center gap-10">
             <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500/30 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Status: Optimal</span>
             </div>
             <div className="text-[10px] font-black uppercase tracking-[0.3em] font-mono">Build_v2.4.0</div>
          </div>
        </div>
      </div>
    </section>
  );
}

