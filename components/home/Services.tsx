"use client";

import React from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Bot, Zap, Code2 } from "lucide-react";

const products = [
  {
    icon: LayoutDashboard,
    title: "SaaS Platforms",
    description: "Modern software platforms designed for startups and businesses.",
    marker: "01",
  },
  {
    icon: Bot,
    title: "AI Products",
    description: "Machine learning systems and intelligent digital tools.",
    marker: "02",
  },
  {
    icon: Zap,
    title: "Automation Infrastructure",
    description: "Workflow systems designed to improve operational efficiency.",
    marker: "03",
  },
  {
    icon: Code2,
    title: "Frontend Systems",
    description: "Premium frontend experiences and scalable interface systems.",
    marker: "04",
  },
];

export default function Services() {
  return (
    <section className="section-padding border-t border-white/[0.04]">
      <div className="container">
        <div className="max-w-[400px] mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge mb-4"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-display text-[32px] sm:text-[36px] text-white"
          >
            Products Built For
            <br />Modern Systems
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04] border border-white/[0.04] rounded-xl overflow-hidden">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group bg-black p-10 hover:bg-[#050505] transition-colors relative"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="w-8 h-8 rounded border border-white/[0.06] flex items-center justify-center bg-white/[0.01]">
                    <Icon className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[10px] font-mono text-[#333] tracking-widest">{product.marker}</span>
                </div>

                <h3 className="text-[15px] font-semibold text-white mb-3">
                  {product.title}
                </h3>
                <p className="text-[13px] text-[#555] leading-[1.65] max-w-[280px]">
                  {product.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
