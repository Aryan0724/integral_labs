"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ChevronDown, ChevronUp, Layers } from "lucide-react";
import { projects } from "@/lib/data/projects";

// ── Categories & Grouping Logic ──────────────────────────────────────────────
const CATEGORIES = [
  { id: "all", label: "All Work" },
  { id: "ai-tech", label: "AI & Tech" },
  { id: "edtech", label: "EdTech" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "hospitality", label: "Hospitality" }
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
  return "other";
};

// ── Responsive iframe thumbnail ──────────────────────────────────────────────
function IframePreview({ src, title, fallback }: { src: string; title: string; fallback: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setScale(el.offsetWidth / 1440);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden bg-[#111]">
      {failed ? (
        <Image src={fallback} alt={title} fill className="object-cover" />
      ) : (
        <iframe
          src={src}
          title={title}
          scrolling="no"
          onError={() => setFailed(true)}
          style={{
            width: "1440px",
            height: "900px",
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            pointerEvents: "none",
            border: "none",
            display: "block",
          }}
        />
      )}
    </div>
  );
}

// ── Project card ─────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
  totalItems,
  scrollYProgress,
}: {
  project: any;
  index: number;
  totalItems: number;
  scrollYProgress: MotionValue<number>;
}) {
  const containerRef = useRef(null);

  // Normalize range based on project count to avoid broken animation on large lists
  const start = totalItems > 0 ? (index / totalItems) * 0.8 : 0;
  const end = totalItems > 0 ? Math.min(1, ((index + 1) / totalItems) * 0.9) : 1;

  const y = useTransform(
    scrollYProgress,
    [start, end],
    [60, -60]
  );
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={containerRef}
      style={{ y: smoothY }}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative group w-full max-w-[800px] mb-20 md:mb-32 mx-auto"
    >
      {/* Blueprint label */}
      <div className="absolute -top-12 left-0 flex items-center gap-4 opacity-20 group-hover:opacity-40 transition-opacity">
        <span className="font-mono text-[10px] tracking-widest uppercase">
          case_id: {project.id}
        </span>
        <div className="h-px w-24 bg-white/50" />
      </div>

      {/* Preview Container */}
      <Link href={`/work/${project.id}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
          {/* Live iframe */}
          <IframePreview
            src={project.liveLink}
            title={project.title}
            fallback={project.image}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />

          {/* Corner nodes */}
          <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-white/20 pointer-events-none" />
          <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-white/20 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-white/20 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-white/20 pointer-events-none" />
        </div>
      </Link>

      {/* Content info */}
      <div className="mt-8 text-left">
        <div className="flex items-center gap-4 mb-4 justify-start group-hover:gap-6 transition-all">
          <span className="font-mono text-[11px] text-white/30 uppercase tracking-[0.2em]">
            {project.year}
          </span>
          <div className="h-px w-8 bg-white/10" />
          <span className="font-mono text-[11px] text-purple-400 uppercase tracking-[0.2em]">
            {project.category}
          </span>
        </div>

        <h3 className="text-4xl md:text-6xl font-display text-white mb-6 tracking-tighter leading-none group-hover:italic transition-all">
          {project.title}
        </h3>

        <p className="text-[15px] md:text-[17px] text-white/40 leading-relaxed max-w-[400px] mb-8 group-hover:text-white/60 transition-colors">
          {project.intro.split(".")[0]}.
        </p>

        {/* Action buttons */}
        <div className="flex items-center gap-6 flex-wrap">
          <Link
            href={`/work/${project.id}`}
            className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-white group/link"
          >
            VIEW CASE STUDY
            <motion.span
              className="w-8 h-px bg-white/30"
              whileHover={{ width: 48 }}
            />
          </Link>

          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-purple-400 hover:text-white border border-purple-500/30 hover:border-white/30 px-4 py-2 rounded-full transition-all duration-300"
          >
            LIVE SITE
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function ProjectShowcase() {
  const [content, setContent] = React.useState<any>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);

  React.useEffect(() => {
    fetch("/api/cms")
      .then((res) => res.json())
      .then((data) => setContent(data.portfolio));
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Filter projects based on activeTab
  const filteredProjects = projects.filter((project) => {
    if (activeTab === "all") return true;
    return getProjectCategoryId(project.category) === activeTab;
  });

  // Display only first 4 items unless expanded
  const displayLimit = 4;
  const visibleProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, displayLimit);
  const hasMore = filteredProjects.length > displayLimit;

  // Reset expansion state when changing tabs
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setIsExpanded(false);
  };

  return (
    <section ref={containerRef} className="relative py-20 md:py-24 overflow-visible bg-transparent z-10">
      {/* Tech Graphic Background Separator - Fills the gap between sections */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-24 w-full max-w-[800px] h-[300px] pointer-events-none opacity-20 hidden md:block z-0">
        <svg viewBox="0 0 800 300" className="w-full h-full text-white">
          {/* Static crosshair lines */}
          <line x1="200" y1="150" x2="600" y2="150" stroke="currentColor" strokeWidth="0.5" className="opacity-10" />
          <line x1="400" y1="20" x2="400" y2="280" stroke="currentColor" strokeWidth="0.5" className="opacity-10" />
          <circle cx="400" cy="150" r="3" fill="#a855f7" className="animate-pulse opacity-45" />
          
          {/* Rotating details */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "400px 150px" }}
          >
            <circle cx="400" cy="150" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" className="opacity-10" />
            <circle cx="400" cy="150" r="130" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="20 30" className="opacity-5" />
            <line x1="400" y1="50" x2="400" y2="250" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 2" className="opacity-10" />
          </motion.g>

          {/* Text markings */}
          <text x="415" y="45" fill="currentColor" fontSize="7" fontFamily="monospace" className="opacity-25">NODE_ALIGN_VAL_01</text>
          <text x="415" y="265" fill="currentColor" fontSize="7" fontFamily="monospace" className="opacity-25">NODE_ALIGN_VAL_02</text>
          <text x="220" y="140" fill="currentColor" fontSize="6" fontFamily="monospace" className="opacity-20">ROTATION_ANGLE: 360°</text>
          <text x="510" y="140" fill="currentColor" fontSize="6" fontFamily="monospace" className="opacity-20">GRID_STATUS: LOCK_ON</text>
        </svg>
      </div>

      {content && (
        <div className="container relative z-10">
          {/* Section Header */}
          <div className="mb-12 md:mb-16 flex flex-col items-center">
            <div className="measure-bar mb-8 opacity-20">
              <div className="measure-line w-20" />
              <span className="blueprint-label uppercase">Selected Deliverables</span>
              <div className="measure-line w-20" />
            </div>
            <h2 className="text-center text-[50px] md:text-[90px] font-display text-white tracking-tighter leading-[0.85] mb-12">
              {content.title.split(".").map((part: string, i: number) => (
                <React.Fragment key={i}>
                  {part}
                  {i === 0 && <span className="italic opacity-40">.</span>}
                </React.Fragment>
              ))}
            </h2>

            {/* Premium Category Filter Tabs */}
            <div className="relative flex flex-wrap justify-center gap-2 md:gap-3 p-1.5 bg-white/[0.02] border border-white/5 rounded-full backdrop-blur-md max-w-3xl mx-auto mb-16">
              {CATEGORIES.map((cat) => {
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleTabChange(cat.id)}
                    className={`relative px-4 py-2 text-xs md:text-sm font-medium transition-all duration-300 rounded-full select-none ${
                      isActive ? "text-white" : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabGlow"
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 font-mono tracking-wider uppercase">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects List */}
          <div className="relative min-h-[400px]">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.03] -translate-x-1/2 hidden lg:block" />
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  totalItems={visibleProjects.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Action / Toggle Buttons */}
          {hasMore && (
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group relative flex items-center gap-3 px-8 py-4 bg-white/[0.02] border border-white/10 hover:border-purple-500/40 rounded-full font-mono text-[11px] font-bold tracking-[0.2em] text-white hover:text-purple-400 transition-all duration-300 shadow-lg shadow-black/20 w-full sm:w-auto justify-center"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <span className="relative z-10">
                  {isExpanded ? "SHOW FEWER PROJECTS" : "SHOW ALL PROJECTS"}
                </span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-y-0.5">
                  {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </span>
              </button>

              {isExpanded && (
                <Link
                  href="/contact"
                  className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-full font-mono text-[11px] font-bold tracking-[0.2em] text-white transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 w-full sm:w-auto justify-center"
                >
                  <span className="relative z-10">REQUEST FULL PORTFOLIO</span>
                  <ExternalLink size={14} className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
