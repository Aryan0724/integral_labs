"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  { label: "Research", detail: "Define scope, constraints, and user needs." },
  { label: "UX", detail: "Map user flows and information architecture." },
  { label: "Design", detail: "High-fidelity systems and component design." },
  { label: "Development", detail: "Clean, maintainable code and performance." },
  { label: "Scale", detail: "Production hardening and monitoring." },
];

export default function Process() {
  return (
    <section className="section-padding border-t border-white/[0.04]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          <div className="max-w-[300px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="badge mb-4"
            >
              Workflow
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-display text-[32px] sm:text-[36px] text-white"
            >
              How We Build
            </motion.h2>
          </div>

          <div className="flex-1 max-w-[500px] space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.19, 1, 0.22, 1] }}
                className="flex items-start gap-8 group"
              >
                <div className="text-[10px] font-mono text-[#333] pt-1.5 group-hover:text-white transition-colors">0{i + 1}</div>
                <div>
                  <div className="text-[15px] font-semibold text-white mb-1">{step.label}</div>
                  <div className="text-[13px] text-[#555] leading-relaxed">{step.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
