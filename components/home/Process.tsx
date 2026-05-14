"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  { label: "Research", detail: "Define technical scope, constraints, and operational needs." },
  { label: "UX", detail: "Map high-density user flows and architecture." },
  { label: "Design", detail: "High-fidelity systems and component interface design." },
  { label: "Development", detail: "Clean, performant code with CI/CD hardening." },
  { label: "Scale", detail: "Global production deployment and monitoring." },
];

export default function Process() {
  return (
    <section className="section-padding border-t border-white/[0.04] relative overflow-hidden">
      {/* Background Depth */}
      <div className="ambient-beam bottom-[-200px] left-[-200px] bg-white/[0.01]" />

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-32">
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
              transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-display text-[32px] sm:text-[42px] text-white"
            >
              How We Build
            </motion.h2>
          </div>

          <div className="flex-1 max-w-[480px] space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-10 group"
              >
                <div className="text-[11px] font-mono text-[#3f3f46] pt-1.5 group-hover:text-white transition-colors duration-500">0{i + 1}</div>
                <div className="pb-8 border-b border-white/[0.03] w-full last:border-0 group-hover:border-white/10 transition-colors duration-700">
                  <div className="text-[17px] font-semibold text-white mb-2 group-hover:translate-x-1 transition-transform duration-500">{step.label}</div>
                  <div className="text-[14px] text-[#52525b] leading-relaxed group-hover:text-[#71717a] transition-colors">{step.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
