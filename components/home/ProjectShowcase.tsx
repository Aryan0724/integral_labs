"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import { projects } from "@/lib/data/projects";

const CATEGORIES = [
  { id: "all", label: "All Work" },
  { id: "ai-tech", label: "AI & Tech" },
  { id: "edtech", label: "EdTech" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "hospitality", label: "Hospitality" },
  { id: "business", label: "Business Advisory" },
];

const getProjectCategoryId = (category: string): string => {
  const cat = category.toLowerCase();
  if (cat.includes("machine learning") || cat.includes("ai") || cat.includes("tech research") || cat.includes("studio portal") || cat.includes("productivity")) {
    return "ai-tech";
  }
  if (cat.includes("edtech") || cat.includes("university")) {
    return "edtech";
  }
  if (cat.includes("e-commerce") || cat.includes("car") || cat.includes("apparel") || cat.includes("catalog")) {
    return "ecommerce";
  }
  if (cat.includes("restaurant") || cat.includes("hospitality") || cat.includes("cafe")) {
    return "hospitality";
  }
  if (cat.includes("business") || cat.includes("consulting")) {
    return "business";
  }
  return "other";
};

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "all") return true;
    return getProjectCategoryId(p.category) === activeCategory;
  });

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section 
      id="cases-section"
      className="relative py-28 md:py-36 overflow-hidden bg-transparent border-t border-white/[0.05]"
    >
      <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-[650px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-purple-400">
                Selected Case Studies
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[38px] sm:text-[54px] md:text-[62px] text-white tracking-tight leading-[1.0]"
            >
              Our Real Projects &amp;{" "}
              <span className="italic font-light text-white/50">Systems.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] sm:text-[15px] text-white/50 leading-relaxed font-light max-w-[380px]"
          >
            A curated portfolio of production SaaS platforms, machine learning models, and high-performance digital storefronts.
          </motion.p>
        </div>

        {/* Sticky-Style Category Filters (Zentix benchmark) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setVisibleCount(6);
                }}
                className={`px-4 py-2 rounded-xl text-[11px] font-mono uppercase tracking-wider whitespace-nowrap transition-all border ${
                  isActive
                    ? "bg-purple-500/20 text-purple-300 border-purple-500/40 shadow-lg shadow-purple-950/30 font-bold"
                    : "bg-white/[0.02] text-white/50 border-white/[0.06] hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#0c0c0c]/90 overflow-hidden hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between shadow-2xl hover:shadow-purple-950/20"
              >
                <div>
                  {/* Visual Image Preview */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#161616]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />

                    {/* Gradient Overlay & Badges */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-black/30 p-6 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-black/60 text-purple-300 border border-white/10 backdrop-blur-md">
                          {project.category}
                        </span>
                        <span className="text-[10px] font-mono text-white/50 bg-black/60 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
                          {project.year}
                        </span>
                      </div>

                      {project.impact && (
                        <div className="flex items-center gap-2 w-fit bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-lg backdrop-blur-md text-[11px] font-mono">
                          <CheckCircle2 size={13} />
                          <span className="line-clamp-1">{project.impact}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-7 sm:p-8">
                    <h3 className="text-[24px] sm:text-[28px] font-bold text-white tracking-tight leading-tight mb-3 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-[14px] text-white/50 leading-relaxed font-light mb-6 line-clamp-3">
                      {project.intro}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech: string) => (
                        <span
                          key={tech}
                          className="text-[9px] font-mono px-2.5 py-0.5 rounded bg-white/[0.04] text-white/40 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Founder Quote Preview if available */}
                    {project.founderQuote?.text && (
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-[12px] italic text-white/40 mb-6 font-light">
                        "{project.founderQuote.text}"
                        <span className="not-italic font-mono text-[10px] text-purple-400 block mt-1">
                          — {project.founderQuote.name}, {project.founderQuote.role}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="px-7 sm:px-8 pb-7 sm:pb-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={`/work/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono text-purple-400 hover:text-purple-300 uppercase tracking-wider font-bold transition-colors"
                  >
                    <span>Read Architecture Spec</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-white/40 hover:text-white transition-colors"
                    >
                      <span>Live Site</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / View Portfolio Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          {visibleCount < filteredProjects.length && (
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="btn-sweep btn-sweep-outline px-8 py-3.5 text-[11px] font-bold tracking-[0.14em] uppercase"
            >
              <span>Load More Projects ({filteredProjects.length - visibleCount} remaining)</span>
            </button>
          )}

          <Link
            href="/work"
            className="btn-sweep btn-sweep-primary px-8 py-3.5 text-[11px] font-bold tracking-[0.14em] uppercase"
          >
            <span>View All 20 Case Studies</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
