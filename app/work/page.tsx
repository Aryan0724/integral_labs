"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "all") return true;
    return getProjectCategoryId(p.category) === activeCategory;
  });

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-[760px] mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-6"
          >
            <Sparkles size={13} className="text-purple-400" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-purple-300 font-bold">
              Engineering Portfolio // 20 Production Builds
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[42px] sm:text-[62px] md:text-[76px] text-white tracking-tight leading-[0.98] mb-8"
          >
            Real Case Studies &amp;{" "}
            <span className="italic font-light text-white/50">Delivered Systems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[16px] sm:text-[18px] text-white/50 leading-relaxed font-light"
          >
            A comprehensive catalog of scalable SaaS platforms, intelligent AI models, e-commerce storefronts, and bespoke digital experiences built by Integral Labs.
          </motion.p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-16 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
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

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group rounded-3xl border border-white/[0.08] bg-[#0c0c0c]/90 overflow-hidden hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between shadow-2xl hover:shadow-purple-950/20"
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
                  <div className="p-8">
                    <h2 className="text-[26px] font-bold text-white tracking-tight leading-tight mb-3 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h2>

                    <p className="text-[14px] text-white/50 leading-relaxed font-light mb-6 line-clamp-3">
                      {project.intro}
                    </p>

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

                    {project.founderQuote?.text && (
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-[12px] italic text-white/40 mb-2 font-light">
                        "{project.founderQuote.text}"
                        <span className="not-italic font-mono text-[10px] text-purple-400 block mt-1">
                          — {project.founderQuote.name}, {project.founderQuote.role}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-8 pb-8 pt-4 border-t border-white/5 flex items-center justify-between">
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

        {/* Bottom Banner */}
        <div className="text-center rounded-3xl border border-white/10 bg-[#0d0d0d] p-12 max-w-[800px] mx-auto">
          <h3 className="text-3xl font-display text-white mb-4">Want to build something similar?</h3>
          <p className="text-white/50 text-[14px] max-w-[500px] mx-auto mb-8 font-light leading-relaxed">
            We partner with ambitious startups and enterprises to architect custom digital systems.
          </p>
          <Link
            href="/contact"
            className="btn-sweep btn-sweep-primary px-8 py-4 text-[12px] font-bold tracking-[0.14em] uppercase"
          >
            <span>Discuss A Project</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
