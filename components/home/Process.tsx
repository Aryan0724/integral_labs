"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    index: "01",
    title: "Research",
    description: "Deep discovery of user needs, technical constraints, and market context.",
  },
  {
    index: "02",
    title: "UX Design",
    description: "Architecture flows, wireframes, and interaction patterns optimized for clarity.",
  },
  {
    index: "03",
    title: "Engineering",
    description: "Production-grade code with scalable infrastructure and rigorous testing.",
  },
  {
    index: "04",
    title: "Deployment",
    description: "CI/CD pipelines, monitoring, and handoff with documentation.",
  },
  {
    index: "05",
    title: "Scale",
    description: "Ongoing optimization, feature expansion, and performance tuning.",
  },
];

export default function Process() {
  return (
    <section
      className="relative py-20 md:py-24 overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="max-w-[560px] mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-6 bg-white/20" />
            <span
              className="font-mono text-[9px] tracking-[0.25em] uppercase"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Workflow
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[42px] sm:text-[58px] text-white mb-6"
            style={{ fontWeight: 300, letterSpacing: "-0.04em" }}
          >
            How We
            <br />
            <span style={{ fontStyle: "italic", opacity: 0.4 }}>Work</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] leading-[1.8]"
            style={{ color: "rgba(255,255,255,0.3)", fontWeight: 300 }}
          >
            Every system is built through a structured process focused on
            usability, engineering quality, and long-term adaptability.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Horizontal connector line */}
          <div
            className="absolute top-[28px] left-0 right-0 h-px hidden md:block"
            style={{ background: "rgba(255,255,255,0.04)" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                {/* Node */}
                <div className="relative z-10 mb-8 flex items-center">
                  <div
                    className="w-[14px] h-[14px] rounded-full border flex items-center justify-center transition-all duration-500 group-hover:border-white/30"
                    style={{
                      background: "#0f0f0f",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <div
                      className="w-[4px] h-[4px] rounded-full transition-all duration-500 group-hover:bg-white/60"
                      style={{ background: "rgba(255,255,255,0.15)" }}
                    />
                  </div>
                  {/* Measurement label */}
                  <span
                    className="font-mono text-[9px] ml-2"
                    style={{ color: "rgba(255,255,255,0.2)" }}
                  >
                    {step.index}
                  </span>
                </div>

                <h3
                  className="text-[16px] font-light text-white mb-3 transition-colors duration-300"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[12px] leading-[1.7]"
                  style={{ color: "rgba(255,255,255,0.25)", fontWeight: 300 }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
