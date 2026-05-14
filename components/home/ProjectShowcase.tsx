"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Aether Intelligence",
    category: "Analytics Platform",
    description: "Cloud-native data engine with real-time telemetry and predictive operational dashboards.",
    image: "/work/aether.png",
    tags: ["Rust", "Distributed Systems"],
    stats: "0.02ms Latency",
  },
  {
    title: "Lumina Workspace",
    category: "SaaS Product",
    description: "Collaborative interface for enterprise engineering teams to manage clusters and infrastructure.",
    image: "/work/lumina.png",
    tags: ["Go", "React"],
    stats: "99.9% Uptime",
  },
  {
    title: "Vortex Ledger",
    category: "FinTech System",
    description: "High-throughput financial reconciliation engine with immutable ledger logging and audit systems.",
    image: "/work/vortex.png",
    tags: ["TypeScript", "Kafka"],
    stats: "1.2M req/sec",
  },
  {
    title: "Nexus Control",
    category: "Automation Interface",
    description: "Industrial IoT monitoring and orchestration platform with edge compute integration.",
    image: "/work/nexus.png",
    tags: ["Python", "C++"],
    stats: "Live Sync",
  },
];

export default function ProjectShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const springX = useSpring(x, { stiffness: 40, damping: 18 });

  return (
    <section ref={targetRef} className="relative h-[300vh] border-t border-white/[0.04]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mb-12">
          <div className="max-w-[480px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="badge mb-6"
            >
              Case Studies
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-display text-[32px] sm:text-[44px] text-white"
            >
              Selected Product
              <br />Interfaces
            </motion.h2>
          </div>
        </div>

        <motion.div
          style={{ x: springX }}
          className="flex gap-8 pl-[max(32px,calc((100vw-1000px)/2+32px))]"
        >
          {projects.map((project, i) => (
            <div key={project.title} className="flex-shrink-0 w-[420px] group cursor-none">
              <div className="surface bg-black border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-700 relative shadow-2xl">
                <div className="h-[280px] bg-[#050505] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-[1.05] transition-all duration-[1.2s] ease-[0.22,1,0.36,1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute top-5 left-5">
                    <span className="badge text-[9px] bg-black/60 backdrop-blur-md border-white/10">{project.category}</span>
                  </div>
                  <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{project.stats}</span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[17px] font-semibold text-white tracking-tight">{project.title}</h3>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                      <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                  <p className="text-[14px] text-[#52525b] leading-[1.7] mb-6 line-clamp-2">{project.description}</p>
                  <div className="flex items-center gap-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-[#3f3f46] uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="w-[20vw] flex-shrink-0" />
        </motion.div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-white/[0.04] rounded-full overflow-hidden">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="h-full bg-white/20 origin-left"
          />
        </div>
      </div>
    </section>
  );
}
