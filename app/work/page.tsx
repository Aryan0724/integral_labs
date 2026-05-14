"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const products = [
  {
    title: "Aether Intelligence",
    challenge: "Developing a real-time ML inference engine for supply chain logistics.",
    system: "Distributed Rust-based data engine with predictive modeling dashboards.",
    outcome: "40% reduction in delivery latency and automated risk mitigation.",
    image: "/work/aether.png",
    tags: ["Rust", "PyTorch", "Next.js"],
  },
  {
    title: "Lumina OS",
    challenge: "Creating a unified workspace for high-performance engineering teams.",
    system: "Integrated desktop-class interface for cluster and infrastructure management.",
    outcome: "Streamlined operational overhead and improved collaboration speed.",
    image: "/work/lumina.png",
    tags: ["Go", "React", "Electron"],
  },
  {
    title: "Vortex Ledger",
    challenge: "Building an immutable financial reconciliation system for high-volume trade.",
    system: "Event-driven ledger architecture with real-time audit trails.",
    outcome: "Zero reconciliation errors across 1.2M transactions per second.",
    image: "/work/vortex.png",
    tags: ["TypeScript", "Kafka", "PostgreSQL"],
  },
  {
    title: "Nexus Control",
    challenge: "Orchestrating industrial IoT devices across diverse edge environments.",
    system: "Unified monitoring and command platform with real-time sensor fusion.",
    outcome: "Full visibility and remote orchestration for 50k+ edge nodes.",
    image: "/work/nexus.png",
    tags: ["Python", "C++", "MQTT"],
  },
];

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container">
        <div className="max-w-[540px] mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge mb-6"
          >
            Products
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display text-[42px] sm:text-[56px] text-white mb-8"
          >
            Engineering 
            <br />
            Digital Artifacts.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#71717a] text-[17px] leading-relaxed"
          >
            Selected product interfaces and software systems engineered for 
            high-performance environments and scalable operational workflows.
          </motion.p>
        </div>

        <div className="space-y-32">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-start"
            >
              {/* Preview */}
              <div className="surface rounded-2xl overflow-hidden border border-white/[0.06] bg-[#050505] shadow-2xl relative aspect-[16/10]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>

              {/* Details */}
              <div className="pt-4">
                <h2 className="text-[24px] font-semibold text-white mb-8 tracking-tight">{product.title}</h2>
                
                <div className="space-y-8 mb-12">
                  <div>
                    <div className="text-[11px] font-mono text-[#3f3f46] uppercase tracking-[0.2em] mb-2">Challenge</div>
                    <div className="text-[14px] text-[#71717a] leading-relaxed">{product.challenge}</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#3f3f46] uppercase tracking-[0.2em] mb-2">System</div>
                    <div className="text-[14px] text-[#71717a] leading-relaxed">{product.system}</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#3f3f46] uppercase tracking-[0.2em] mb-2">Outcome</div>
                    <div className="text-[14px] text-white/80 leading-relaxed font-medium">{product.outcome}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/[0.04]">
                  {product.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono text-[#52525b] uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
