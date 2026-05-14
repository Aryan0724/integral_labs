"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = ["Research", "UX", "Design", "Development", "Scale"];

export default function Process() {
  return (
    <section className="section-padding border-t border-white/5 overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge mb-5"
          >
            Workflow
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-display text-[32px] sm:text-[40px] text-white"
          >
            How We Build
          </motion.h2>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-[11px] left-0 right-0 h-px bg-white/5 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center md:items-start group"
              >
                <div className="w-6 h-6 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-[#6366f1]/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#333] group-hover:bg-[#6366f1] transition-colors" />
                </div>
                <div className="text-[14px] font-semibold text-white mb-2">{step}</div>
                <div className="text-[12px] text-[#555] font-mono uppercase tracking-widest">Step 0{i + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
