"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Aether Intelligence",
    category: "AI / ML",
    image: "/work/aether.png",
    description:
      "Autonomous supply chain intelligence with real-time ML inference and predictive analytics dashboards.",
    tags: ["FastAPI", "PyTorch", "Next.js"],
    year: "2025",
  },
  {
    id: 2,
    title: "Lumina OS",
    category: "Product",
    image: "/work/lumina.png",
    description:
      "Modern operating interface for creative studios — file management, collaboration, and workspace tooling.",
    tags: ["React", "Electron", "Supabase"],
    year: "2025",
  },
  {
    id: 3,
    title: "Vortex Finance",
    category: "FinTech",
    image: "/work/vortex.png",
    description:
      "Automated financial operations platform with real-time reconciliation, ledger systems, and reporting.",
    tags: ["TypeScript", "PostgreSQL", "Plaid"],
    year: "2024",
  },
  {
    id: 4,
    title: "Nexus Systems",
    category: "IoT",
    image: "/work/nexus.png",
    description:
      "Industrial IoT monitoring system with sensor fusion, alerting, and edge compute orchestration.",
    tags: ["Python", "MQTT", "InfluxDB"],
    year: "2024",
  },
];

const categories = ["All", "AI / ML", "Product", "FinTech", "IoT"];

export default function WorkPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="container">
        {/* Header */}
        <div className="max-w-[560px] mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge mb-4"
          >
            Selected Work
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="text-display text-[36px] sm:text-[48px] text-white mb-4"
          >
            Product Archive
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12 }}
            className="text-[14px] text-[#666] leading-[1.7]"
          >
            A selection of systems and interfaces built for real operational use.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="flex flex-wrap gap-1.5 mb-12 pb-10 border-b border-white/5"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-[12px] px-3.5 py-1.5 rounded-lg transition-all duration-200 ${
                active === cat
                  ? "bg-white/8 text-white border border-white/10"
                  : "text-[#555] hover:text-[#999] border border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group surface rounded-xl overflow-hidden hover:border-white/10 transition-all duration-300"
                style={{ borderColor: "var(--border)" }}
              >
                {/* Image */}
                <div className="relative h-[220px] bg-[#111] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/80 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="badge text-[10px]">{project.category}</span>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="glass w-8 h-8 rounded-lg flex items-center justify-center">
                      <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-[14px] font-semibold text-white">
                      {project.title}
                    </h3>
                    <span className="text-[11px] text-[#444] font-mono">{project.year}</span>
                  </div>
                  <p className="text-[13px] text-[#666] leading-[1.6] mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-[#555] bg-[#111] border border-white/5 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-14 border-t border-white/5 flex items-center justify-between">
          <div>
            <p className="text-[14px] text-white font-medium mb-1">Have a project in mind?</p>
            <p className="text-[13px] text-[#555]">We work with a limited number of partners each quarter.</p>
          </div>
          <Link href="/contact" className="btn-primary">
            Start A Project
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
