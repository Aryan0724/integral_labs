"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  { 
    label: "Research", 
    detail: "Define technical scope, operational constraints, and core user objectives." 
  },
  { 
    label: "UX Architecture", 
    detail: "Map high-density user flows and information architecture for complex systems." 
  },
  { 
    label: "Interface Design", 
    detail: "Develop high-fidelity component systems focused on usability and clarity." 
  },
  { 
    label: "Engineering", 
    detail: "Build clean, maintainable backend and frontend systems with world-class polish." 
  },
  { 
    label: "Deployment", 
    detail: "Production hardening and global deployment across distributed environments." 
  },
  { 
    label: "Scaling", 
    detail: "Continuous monitoring and architectural optimization for long-term growth." 
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container">
        <div className="max-w-[540px] mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge mb-6"
          >
            Workflow
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display text-[42px] sm:text-[56px] text-white mb-8"
          >
            How We
            <br />
            Build Systems.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#71717a] text-[17px] leading-relaxed"
          >
            Every product is engineered through a structured six-stage process
            focused on technical quality, operational reliability, and world-class UX.
          </motion.p>
        </div>

        <div className="space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row items-start gap-12 md:gap-24 group"
            >
              <div className="text-[12px] font-mono text-[#3f3f46] pt-1.5 group-hover:text-white transition-colors duration-500">0{i + 1}</div>
              <div className="pb-12 border-b border-white/[0.03] w-full last:border-0 group-hover:border-white/10 transition-colors duration-700">
                <div className="text-[20px] font-semibold text-white mb-3 group-hover:translate-x-1 transition-transform duration-500">{step.label}</div>
                <div className="text-[15px] text-[#52525b] leading-relaxed max-w-[500px] group-hover:text-[#71717a] transition-colors">{step.detail}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
