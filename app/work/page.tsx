"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data/projects";

// ── Responsive iframe thumbnail ──────────────────────────────────────────────
function IframePreview({ src, title, fallback }: { src: string; title: string; fallback: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.35);
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

// ── Work Page ─────────────────────────────────────────────────────────────────
export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] pt-28 pb-16">
      {/* Blueprint Header */}
      <div className="container relative mb-16 md:mb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] h-px bg-white/[0.03] pointer-events-none" />

        <div className="max-w-[700px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="measure-bar mb-8"
          >
            <div className="measure-line w-12" />
            <span className="blueprint-label uppercase tracking-[0.3em]">Engineering Portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[60px] md:text-[90px] font-display text-white mb-10 tracking-tighter leading-[0.85]"
          >
            Case{" "}
            <br />
            <span className="italic opacity-40">Studies.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/30 text-lg leading-relaxed max-w-[500px] font-light"
          >
            A collection of high-performance software systems and intelligent interfaces built for
            the next generation of digital infrastructure.
          </motion.p>
        </div>

        {/* Decorative corner node */}
        <div className="absolute top-0 right-0 p-8 border-l border-b border-white/5 hidden lg:block">
          <span className="blueprint-label opacity-20">LOC: PORTFOLIO_V2.4</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Image / iframe Container */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/5 bg-[#111] shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:border-white/10">
                <IframePreview
                  src={project.liveLink}
                  title={project.title}
                  fallback={project.image}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />

                {/* Hover arrow icon */}
                <Link href={`/work/${project.id}`} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                    <ArrowUpRight size={24} />
                  </div>
                </Link>

                {/* Corner nodes */}
                <div className="absolute top-4 left-4 w-1 h-1 bg-white/20 pointer-events-none" />
                <div className="absolute top-4 right-4 w-1 h-1 bg-white/20 pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/20 pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-1 h-1 bg-white/20 pointer-events-none" />
              </div>

              {/* Info row */}
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-4 mb-3 opacity-30">
                    <span className="font-mono text-[10px] tracking-widest uppercase">
                      {project.category}
                    </span>
                    <div className="h-px w-8 bg-white" />
                    <span className="font-mono text-[10px] tracking-widest uppercase">
                      {project.year}
                    </span>
                  </div>
                  <h2 className="text-3xl font-display text-white group-hover:italic transition-all">
                    {project.title}
                  </h2>
                </div>

                {/* Case study link */}
                <Link
                  href={`/work/${project.id}`}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:border-white group/btn transition-all duration-500"
                >
                  <ArrowUpRight
                    size={16}
                    className="text-white/40 group-hover/btn:text-black transition-colors"
                  />
                </Link>
              </div>

              <p className="mt-4 text-white/30 text-sm leading-relaxed max-w-[340px] font-light">
                {project.intro.split(".")[0]}.
              </p>

              {/* Live Site button */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-purple-400 hover:text-white border border-purple-500/30 hover:border-white/30 px-4 py-2 rounded-full transition-all duration-300"
              >
                VISIT LIVE SITE
                <ExternalLink size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background blueprint dots */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[-1]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>
    </main>
  );
}
