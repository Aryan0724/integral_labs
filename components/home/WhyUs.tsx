"use client";

import React from "react";
import { motion } from "framer-motion";

const values = [
  {
    title: "Precision",
    description:
      "Every decision is deliberate. We engineer with surgical accuracy, removing everything that doesn't serve the system.",
  },
  {
    title: "Restraint",
    description:
      "Simplicity is the hardest discipline. We strip complexity until only the essential remains.",
  },
  {
    title: "Longevity",
    description:
      "Software that lasts. We build architectures that adapt to time, not just solve today's problem.",
  },
];

export default function Philosophy() {
  return (
    <section
      className="relative py-20 md:py-24 overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      {/* Blueprint vertical lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 bottom-0 left-[33.33%] w-px" style={{ background: "rgba(255,255,255,0.025)" }} />
        <div className="absolute top-0 bottom-0 left-[66.66%] w-px" style={{ background: "rgba(255,255,255,0.025)" }} />
        {/* Nodes */}
        <div className="blueprint-node" style={{ top: "50%", left: "33.33%" }} />
        <div className="blueprint-node" style={{ top: "50%", left: "66.66%" }} />
      </div>

      <div className="container">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="h-px w-6 bg-white/20" />
          <span
            className="font-mono text-[9px] tracking-[0.25em] uppercase"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Philosophy
          </span>
        </motion.div>

        {/* Large statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[860px] mb-16 md:mb-20"
        >
          <p
            className="font-display text-[32px] sm:text-[44px] md:text-[52px] leading-[1.1]"
            style={{ color: "rgba(255,255,255,0.85)", fontWeight: 300, letterSpacing: "-0.04em" }}
          >
            We don&apos;t just write code — we design systems with{" "}
            <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.35)" }}>
              clarity,
            </span>{" "}
            <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.35)" }}>
              scalability,
            </span>{" "}
            and{" "}
            <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.35)" }}>
              operational efficiency
            </span>{" "}
            at their core.
          </p>
        </motion.div>

        {/* Values grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative p-10 group"
              style={{ background: "#0f0f0f" }}
            >
              {/* Index */}
              <div
                className="font-mono text-[9px] tracking-[0.2em] uppercase mb-6"
                style={{ color: "rgba(255,255,255,0.15)" }}
              >
                0{i + 1}
              </div>
              <h3
                className="text-[20px] font-light text-white mb-4 group-hover:translate-x-0.5 transition-transform duration-500"
                style={{ letterSpacing: "-0.02em" }}
              >
                {value.title}
              </h3>
              <p
                className="text-[13px] leading-[1.75]"
                style={{ color: "rgba(255,255,255,0.3)", fontWeight: 300 }}
              >
                {value.description}
              </p>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: "rgba(139,92,246,0.02)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
