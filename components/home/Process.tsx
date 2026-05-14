"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = ["Research", "UX", "Design", "Development", "Scale"];

export default function Process() {
  return (
    <section className="section-padding border-t border-white/[0.04]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-32 mb-20">
          <div className="max-w-[320px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="badge mb-6"
            >
              Workflow
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-display text-[32px] sm:text-[42px] text-white mb-8"
            >
              How We Build
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#52525b] text-[14px] leading-relaxed"
            >
              Every system is built through a structured process focused on
              usability, scalability, engineering quality, and long-term
              maintainability.
            </motion.p>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="relative">
              {/* Horizontal Line */}
              <div className="absolute top-[11px] left-0 right-0 h-[1px] bg-white/[0.04] hidden md:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {steps.map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="relative flex flex-col items-center md:items-start group"
                  >
                    <div className="w-6 h-6 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-white/30 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#333] group-hover:bg-white transition-colors" />
                    </div>
                    <div className="text-[15px] font-semibold text-white mb-2">{step}</div>
                    <div className="text-[11px] text-[#3f3f46] font-mono uppercase tracking-[0.15em]">Step 0{i + 1}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
