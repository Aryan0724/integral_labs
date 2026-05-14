"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Research",
    description: "Define scope, constraints, and user needs. Validate assumptions with real data before writing any code.",
  },
  {
    number: "02",
    title: "UX",
    description: "Map user flows, information architecture, and interaction patterns. Design for clarity before aesthetics.",
  },
  {
    number: "03",
    title: "Design",
    description: "High-fidelity interfaces with consistent design tokens, component systems, and responsive layouts.",
  },
  {
    number: "04",
    title: "Development",
    description: "Clean, maintainable code with proper abstractions, testing, and performance optimization baked in.",
  },
  {
    number: "05",
    title: "Scale",
    description: "Production hardening, monitoring, CI/CD pipelines, and documentation for long-term maintainability.",
  },
];

export default function Process() {
  return (
    <section className="section-padding border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="badge mb-4"
            >
              Process
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-display text-[30px] sm:text-[36px] text-white mb-4"
            >
              How We
              <br />Build
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[13px] text-[#666] leading-[1.7]"
            >
              Every system is built through a structured process focused on
              usability, scalability, engineering quality, and long-term
              maintainability.
            </motion.p>
          </div>

          {/* Right: Steps */}
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[19px] top-8 bottom-8 w-px bg-white/5" />

            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="group flex gap-6 py-6 border-b border-white/5 last:border-0 cursor-default"
                >
                  {/* Step dot */}
                  <div className="relative flex-shrink-0 mt-0.5">
                    <div className="w-10 h-10 rounded-full bg-[#111] border border-white/8 flex items-center justify-center group-hover:border-[#6366f1]/30 transition-colors duration-300">
                      <span className="text-mono text-[11px] text-[#555] group-hover:text-[#6366f1] transition-colors">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-[14px] font-semibold text-white mb-1.5 group-hover:text-[#a5b4fc] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-[#666] leading-[1.65]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
