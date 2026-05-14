"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Aether Intelligence",
    category: "AI Platform",
    description: "Autonomous supply chain intelligence with real-time ML inference and predictive analytics dashboards.",
    image: "/work/aether.png",
    tags: ["Next.js", "FastAPI", "PyTorch"],
    year: "2025",
  },
  {
    title: "Lumina OS",
    category: "SaaS Product",
    description: "Modern operating interface for creative studios — file management, collaboration, and workspace tooling.",
    image: "/work/lumina.png",
    tags: ["React", "Electron", "Supabase"],
    year: "2025",
  },
  {
    title: "Vortex Finance",
    category: "FinTech System",
    description: "Automated financial operations platform with real-time reconciliation, ledger systems, and reporting.",
    image: "/work/vortex.png",
    tags: ["TypeScript", "PostgreSQL", "Plaid"],
    year: "2024",
  },
  {
    title: "Nexus Systems",
    category: "IoT Dashboard",
    description: "Industrial IoT monitoring system with sensor fusion, alerting, and edge compute orchestration.",
    image: "/work/nexus.png",
    tags: ["Python", "MQTT", "InfluxDB"],
    year: "2024",
  },
];

export default function ProjectShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const springX = useSpring(x, { stiffness: 80, damping: 25 });

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] border-t border-white/5"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mb-10">
          <div className="flex items-end justify-between">
            <div>
              <div className="badge mb-3">Selected Work</div>
              <h2 className="text-display text-[32px] sm:text-[40px] text-white">
                Selected Product
                <br />Interfaces
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-2 text-[12px] text-[#555]">
              <span>Scroll to explore</span>
              <div className="w-12 h-px bg-white/10" />
            </div>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-40 h-px bg-white/5">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="h-full bg-[#6366f1] origin-left"
          />
        </div>

        {/* Cards track */}
        <motion.div
          style={{ x: springX }}
          className="flex gap-5 pl-[calc((100vw-1100px)/2+24px)]"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
          {/* End spacer */}
          <div className="w-[calc((100vw-1100px)/2+24px)] flex-shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative flex-shrink-0 w-[340px] sm:w-[400px]"
    >
      <div className="surface rounded-xl overflow-hidden border border-white/6 hover:border-white/10 transition-all duration-300">
        {/* Image */}
        <div className="relative h-[220px] bg-[#111] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60" />

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="badge text-[10px]">{project.category}</span>
          </div>

          {/* Link button */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 rounded-lg glass flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-[14px] font-semibold text-white">{project.title}</h3>
            <span className="text-[11px] text-[#444] font-mono">{project.year}</span>
          </div>
          <p className="text-[13px] text-[#666] leading-[1.6] mb-4">{project.description}</p>
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
      </div>
    </motion.div>
  );
}
