"use client";

import React from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Bot, Zap, MonitorSmartphone } from "lucide-react";

const products = [
  {
    icon: LayoutDashboard,
    title: "SaaS Platforms",
    description: "Modern software systems designed for startups and businesses.",
  },
  {
    icon: Bot,
    title: "AI Products",
    description: "Machine learning systems and intelligent digital tools.",
  },
  {
    icon: Zap,
    title: "Automation Infrastructure",
    description: "Workflow systems designed to improve operational efficiency.",
  },
  {
    icon: MonitorSmartphone,
    title: "Frontend Systems",
    description: "Premium frontend experiences and scalable interface systems.",
  },
];

export default function Services() {
  return (
    <section className="section-padding border-t border-white/5">
      <div className="container">
        <div className="max-w-[440px] mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge mb-5"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group surface-2 rounded-2xl p-8 hover:border-white/12 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-black border border-white/8 flex items-center justify-center mb-10 group-hover:scale-105 transition-transform">
                  <Icon className="w-4 h-4 text-[#6366f1]" />
                </div>

                <h3 className="text-[16px] font-semibold text-white mb-3">
                  {product.title}
                </h3>
                <p className="text-[14px] text-[#666] leading-[1.65]">
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
