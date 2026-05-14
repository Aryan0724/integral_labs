"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Layout, Cpu, Zap, ArrowUpRight, Terminal, Layers, Box } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Web Engineering",
    description: "High-performance web applications that merge stunning design with flawless technical execution.",
    icon: Globe,
    color: "from-purple-500/20 to-indigo-500/20",
    tags: ["React Systems", "Next.js 16", "Three.js", "Industrial UX"],
  },
  {
    title: "AI Ecosystems",
    description: "Integrating autonomous intelligence and predictive neural networks into your core operations.",
    icon: Cpu,
    color: "from-blue-500/20 to-indigo-500/20",
    tags: ["LLM Agents", "Neural Networks", "Data Intel", "Automation"],
  },
  {
    title: "SaaS Infrastructure",
    description: "Custom SaaS ecosystems engineered for rapid scale, secure data handling, and elite experiences.",
    icon: Layers,
    color: "from-fuchsia-500/20 to-purple-500/20",
    tags: ["Scalable Architecture", "API Design", "Security", "Reliability"],
  },
  {
    title: "System Automation",
    description: "Eliminating operational friction through custom industrial-grade workflow automation.",
    icon: Box,
    color: "from-amber-500/20 to-orange-500/20",
    tags: ["Smart Workflows", "Protocol Design", "Optimization", "Speed"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-48 bg-[#0A0A0A] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-[0.02]" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
            >
              <Terminal className="w-3 h-3 text-purple-500" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/50">Core Capabilities</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-display text-5xl md:text-8xl font-black text-white leading-[0.9]"
            >
              ENGINEERING <br /> <span className="text-gradient-purple italic font-medium">SUPREMACY.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-white/40 max-w-sm font-light leading-relaxed tracking-tight"
          >
            We don&apos;t just build websites. We architect high-performance digital ecosystems 
            that dominate markets and redefine industrial standards.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative glass p-12 rounded-[60px] border-white/5 hover:border-purple-500/30 transition-all duration-700 overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-16">
                  <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-700">
                    <service.icon className="w-10 h-10 text-white group-hover:text-black transition-colors" />
                  </div>
                  <Link 
                    href="/services"
                    className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-700 hover:bg-white hover:text-black hover:scale-110"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </Link>
                </div>

                <h3 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/40 text-lg font-light leading-relaxed max-w-sm group-hover:text-white/70 transition-colors tracking-tight mb-12">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-[9px] uppercase tracking-[0.2em] font-black text-white/20 group-hover:text-white/40 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Decoration */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/[0.01] rounded-full blur-[100px] group-hover:bg-purple-600/10 transition-all duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

