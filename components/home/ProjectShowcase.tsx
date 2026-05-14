"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Aether Engine",
    category: "Analytics Platform",
    description: "Cloud-native data engine with real-time telemetry and predictive operational dashboards.",
    image: "/work/aether.png",
    tags: ["Distributed Systems", "Rust", "Next.js"],
  },
  {
    title: "Lumina Workspace",
    category: "SaaS Product",
    description: "Collaborative interface for enterprise engineering teams to manage clusters and infrastructure.",
    image: "/work/lumina.png",
    tags: ["Go", "React", "Terraform"],
  },
  {
    title: "Vortex Ledger",
    category: "FinTech System",
    description: "High-throughput financial reconciliation engine with immutable ledger logging and audit systems.",
    image: "/work/vortex.png",
    tags: ["TypeScript", "PostgreSQL", "Kafka"],
  },
  {
    title: "Nexus Control",
    category: "Automation Interface",
    description: "Industrial IoT monitoring and orchestration platform with edge compute integration.",
    image: "/work/nexus.png",
    tags: ["Python", "MQTT", "C++"],
  },
];

export default function ProjectShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);
  const springX = useSpring(x, { stiffness: 60, damping: 20 });

  return (
    <section ref={targetRef} className="relative h-[300vh] border-t border-white/5">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mb-12">
          <div className="max-w-[480px]">
            <div className="badge mb-4">Case Studies</div>
            <h2 className="text-display text-[32px] sm:text-[40px] text-white">
              Selected Product
              <br />Interfaces
            </h2>
          </div>
        </div>

        {/* Scroll Track */}
        <motion.div
          style={{ x: springX }}
          className="flex gap-6 pl-[max(24px,calc((100vw-1080px)/2+24px))]"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0 w-[400px]"
            >
              <div className="surface rounded-2xl overflow-hidden border border-white/8 hover:border-white/15 transition-colors group">
                {/* Visual */}
                <div className="h-[240px] bg-[#080808] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.02] transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4">
                    <span className="badge text-[9px] bg-black/80 backdrop-blur-sm border-white/10">{project.category}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[15px] font-semibold text-white">{project.title}</h3>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                  <p className="text-[13px] text-[#555] leading-[1.65] mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-[#333] border border-white/5 px-2 py-0.5 rounded bg-white/[0.01]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {/* End padding */}
          <div className="w-[10vw] flex-shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}
