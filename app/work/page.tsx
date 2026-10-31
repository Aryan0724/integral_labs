"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data/projects";

const CATEGORIES = [
  { id: "all", label: "All Work" },
  { id: "ai-tech", label: "Flagship AI" },
  { id: "education", label: "EdTech & University" },
  { id: "ecommerce", label: "E-Commerce & Apparel" },
];

const getProjectCategoryId = (category: string): string => {
  const cat = category.toLowerCase();
  if (cat.includes("machine learning") || cat.includes("ai")) {
    return "ai-tech";
  }
  if (cat.includes("university") || cat.includes("productivity") || cat.includes("academic")) {
    return "education";
  }
  if (cat.includes("e-commerce") || cat.includes("streetwear") || cat.includes("merch") || cat.includes("print")) {
    return "ecommerce";
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
    <main className="min-h-screen bg-white pt-36 pb-24 text-slate-900">
      <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-[760px] mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 bg-blue-50/70 mb-6"
          >
            <Sparkles size={13} className="text-blue-600" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-blue-700 font-bold">
              Engineering Portfolio // Selected Projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.02] mb-6"
          >
            Real Case Studies &amp; Delivered Systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed font-normal"
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
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                    : "bg-slate-100 text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-200/60"
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
                className="group rounded-3xl border border-slate-200/90 bg-white overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-xs"
              >
                <div>
                  {/* Visual Image Preview */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 p-6 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 text-slate-900 font-bold backdrop-blur-md">
                          {project.category}
                        </span>
                        <span className="text-[10px] font-mono text-white/90 bg-slate-900/60 px-2.5 py-1 rounded-full backdrop-blur-md">
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
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight leading-tight mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6 line-clamp-3">
                      {project.intro}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech: string) => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.founderQuote?.text && (
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs italic text-slate-600 mb-2 font-normal">
                        "{project.founderQuote.text}"
                        <span className="not-italic font-bold text-blue-600 block mt-1">
                          — {project.founderQuote.name}, {project.founderQuote.role}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-8 pb-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/work/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 uppercase tracking-wider transition-colors"
                  >
                    <span>Read Architecture Spec</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-slate-900 transition-colors"
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
        <div className="text-center rounded-3xl border border-slate-200 bg-slate-50 p-12 max-w-[800px] mx-auto shadow-xs">
          <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Want to build something similar?</h3>
          <p className="text-slate-600 text-base max-w-[500px] mx-auto mb-8 font-normal leading-relaxed">
            We partner with ambitious startups and enterprises to architect custom digital systems.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            <span>Discuss A Project</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
