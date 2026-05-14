"use client";

import React from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Bot, Zap, MonitorSmartphone } from "lucide-react";

const products = [
  {
    icon: LayoutDashboard,
    title: "SaaS Platforms",
    description: "Modern scalable software systems for startups and businesses.",
    tag: "Platform",
  },
  {
    icon: Bot,
    title: "AI Products",
    description: "Machine learning systems and intelligent digital tools.",
    tag: "Logic",
  },
  {
    icon: Zap,
    title: "Automation Infrastructure",
    description: "Workflow systems designed to improve operational efficiency.",
    tag: "Automation",
  },
  {
    icon: MonitorSmartphone,
    title: "Frontend Systems",
    description: "Premium frontend experiences and scalable interface systems.",
    tag: "Interface",
  },
];

export default function Services() {
  return (
    <section className="section-padding border-t border-white/[0.04]">
      <div className="container">
        <div className="max-w-[480px] mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge mb-6"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-display text-[32px] sm:text-[42px] text-white mb-6"
          >
            Software Products Built
            <br />For Modern Businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#71717a] text-[15px] leading-relaxed"
          >
            Scalable digital systems designed with usability, performance, and
            long-term adaptability in mind.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.03] border border-white/[0.04] rounded-2xl overflow-hidden shadow-2xl">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="group bg-black p-12 hover:bg-[#050505] transition-all duration-700 relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-16">
                  <div className="w-10 h-10 rounded-lg border border-white/[0.05] flex items-center justify-center bg-white/[0.01] group-hover:border-white/20 transition-all duration-500">
                    <Icon className="w-4 h-4 text-[#71717a] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <span className="text-[10px] font-mono text-[#3f3f46] tracking-[0.2em] uppercase group-hover:text-[#71717a] transition-colors">
                    {product.tag}
                  </span>
                </div>

                <h3 className="text-[17px] font-semibold text-white mb-4 group-hover:translate-x-1 transition-transform duration-500">
                  {product.title}
                </h3>
                <p className="text-[14px] text-[#52525b] group-hover:text-[#71717a] leading-[1.7] max-w-[280px] transition-colors duration-500">
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
