"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    index: "01",
    title: "SaaS Platforms",
    description:
      "Modern scalable software systems for startups and businesses. End-to-end development from architecture to deployment.",
    tags: ["Architecture", "Cloud", "API Design"],
  },
  {
    index: "02",
    title: "AI Products",
    description:
      "Machine learning systems and intelligent digital tools powered by modern ML infrastructure and model pipelines.",
    tags: ["ML", "LLM", "Inference"],
  },
  {
    index: "03",
    title: "Automation",
    description:
      "Workflow systems designed to improve operational efficiency. Custom pipelines and integration networks.",
    tags: ["Workflows", "Integration", "Data"],
  },
  {
    index: "04",
    title: "Frontend Systems",
    description:
      "Premium frontend experiences and scalable interface systems built for performance and accessibility.",
    tags: ["React", "Motion", "TypeScript"],
  },
];

export default function Services() {
  return (
    <section className="relative py-32 overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      {/* Blueprint grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 bottom-0 w-px" style={{ background: "rgba(255,255,255,0.02)" }} />
      </div>

      <div className="container">
        {/* Section header */}
        <div className="flex items-end justify-between mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-6 bg-white/20" />
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
                Capabilities
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[42px] sm:text-[58px] text-white"
              style={{ fontWeight: 300, letterSpacing: "-0.04em" }}
            >
              What We
              <br />
              <span style={{ fontStyle: "italic", opacity: 0.4 }}>Build</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:block max-w-[320px] text-[14px] leading-[1.8]"
            style={{ color: "rgba(255,255,255,0.3)", fontWeight: 300 }}
          >
            Scalable digital systems designed with usability, performance, and long-term adaptability in mind.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.04)" }}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="group relative p-10 cursor-default"
              style={{ background: "#0f0f0f" }}
            >
              {/* Corner nodes */}
              <div className="corner-node corner-node-tl" />
              {i % 2 === 1 && <div className="corner-node corner-node-tr" />}
              {i >= 2 && <div className="corner-node corner-node-bl" />}
              {i >= 2 && i % 2 === 1 && <div className="corner-node corner-node-br" />}

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: "rgba(139,92,246,0.025)" }}
              />

              {/* Index */}
              <div className="flex items-center justify-between mb-12">
                <span
                  className="font-mono text-[10px] tracking-[0.2em]"
                  style={{ color: "rgba(255,255,255,0.15)" }}
                >
                  {service.index}
                </span>
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center border opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-1 group-hover:translate-x-0"
                  style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <ArrowUpRight size={12} style={{ color: "rgba(255,255,255,0.5)" }} />
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-[22px] font-light tracking-tight text-white mb-4 group-hover:translate-x-0.5 transition-transform duration-500"
                style={{ letterSpacing: "-0.02em" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-[13px] leading-[1.75] mb-8"
                style={{ color: "rgba(255,255,255,0.3)", fontWeight: 300 }}
              >
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex items-center gap-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] tracking-[0.15em] uppercase"
                    style={{ color: "rgba(255,255,255,0.2)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom measurement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-end gap-3 mt-6 pointer-events-none"
        >
          <div className="w-px h-3 bg-white/10" />
          <div className="h-px w-24 bg-white/06" />
          <span className="blueprint-label">4 services</span>
          <div className="h-px w-24 bg-white/06" />
          <div className="w-px h-3 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
