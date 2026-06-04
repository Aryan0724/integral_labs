"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data/projects";

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
  scrollYProgress,
}: {
  project: any;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const containerRef = useRef(null);

  const y = useTransform(
    scrollYProgress,
    [index * 0.2, (index + 1) * 0.3],
    [100, -100]
  );
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={containerRef}
      style={{ y: smoothY }}
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

  return (
    <section ref={containerRef} className="relative py-20 md:py-24 overflow-visible bg-transparent">
      {content && (
        <div className="container">
          {/* Section Header */}
          <div className="mb-16 md:mb-20 flex flex-col items-center">
            <div className="measure-bar mb-8 opacity-20">
              <div className="measure-line w-20" />
              <span className="blueprint-label uppercase">Selected Deliverables</span>
              <div className="measure-line w-20" />
            </div>
            <h2 className="text-center text-[50px] md:text-[90px] font-display text-white tracking-tighter leading-[0.85]">
              {content.title.split(".").map((part: string, i: number) => (
                <React.Fragment key={i}>
                  {part}
                  {i === 0 && <span className="italic opacity-40">.</span>}
                </React.Fragment>
              ))}
            </h2>
          </div>

          {/* Projects List */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.03] -translate-x-1/2 hidden lg:block" />
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
