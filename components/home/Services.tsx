"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, LayoutDashboard, Bot, Zap, MonitorSmartphone } from "lucide-react";
import Link from "next/link";

const products = [
  {
    icon: LayoutDashboard,
    label: "SaaS Platforms",
    description: "Modern scalable software systems for startups, creators, and businesses.",
    tags: ["Next.js", "TypeScript", "Postgres"],
    href: "/services",
  },
  {
    icon: Bot,
    label: "AI Products",
    description: "Machine learning systems and intelligent digital tools built for modern workflows.",
    tags: ["PyTorch", "FastAPI", "Vector DB"],
    href: "/services",
  },
  {
    icon: Zap,
    label: "Automation Infrastructure",
    description: "Operational automation systems designed to improve execution and scalability.",
    tags: ["n8n", "Serverless", "CI/CD"],
    href: "/services",
  },
  {
    icon: MonitorSmartphone,
    label: "Frontend & Product Systems",
    description: "Premium frontend engineering and interface systems designed for modern usability.",
    tags: ["React", "Framer Motion", "Figma"],
    href: "/services",
  },
];

export default function Services() {
  return (
    <section className="section-padding border-t border-white/5">
      <div className="container">
        <div className="max-w-[540px] mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="badge mb-4"
          >
            Products
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-display text-[32px] sm:text-[40px] text-white mb-4"
          >
            Products Built For
            <br />Modern Systems
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#666] text-[15px] leading-[1.7]"
          >
            Scalable digital systems designed for usability, performance,
            and long-term adaptability.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group surface-2 rounded-xl p-6 hover:border-white/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
                style={{ borderColor: "var(--border)" }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366f1]/30 to-transparent" />
                </div>

                <div className="flex items-start justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#111] border border-white/6 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#6366f1]" />
                  </div>
                  <Link href={product.href} className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-[#555]" />
                  </Link>
                </div>

                <h3 className="text-[14px] font-semibold text-white mb-2 group-hover:text-white transition-colors">
                  {product.label}
                </h3>
                <p className="text-[13px] text-[#666] leading-[1.65] mb-4">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-[#555] bg-[#111] border border-white/5 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
