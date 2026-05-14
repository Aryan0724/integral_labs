"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Filter, Code2, Cpu, Zap, Globe, Activity } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Aether Intelligence",
    category: "AI / ML",
    image: "/work/aether.png",
    description: "Industrial-grade supply chain optimization platform driven by autonomous neural agents and real-time predictive analytics.",
    tags: ["LLM Agents", "Neural Networks", "Data Intel"],
    color: "from-purple-500/20 to-transparent"
  },
  {
    id: 2,
    title: "Lumina OS",
    category: "PRODUCT",
    image: "/work/lumina.png",
    description: "A premium, glassmorphic operating system interface designed for high-performance creative studios and digital architects.",
    tags: ["Next.js", "Glassmorphism", "Motion"],
    color: "from-blue-500/20 to-transparent"
  },
  {
    id: 3,
    title: "Vortex Finance",
    category: "FINTECH",
    image: "/work/vortex.png",
    description: "Decentralized liquidity protocol featuring advanced 3D visualization of capital flows and automated risk management.",
    tags: ["DeFi", "Web3", "Capital Flow"],
    color: "from-amber-500/20 to-transparent"
  },
  {
    id: 4,
    title: "Nexus Systems",
    category: "IOT / AUTOMATION",
    image: "/work/nexus.png",
    description: "Rugged IoT monitoring dashboard for industrial factory floor management, featuring real-time sensor fusion.",
    tags: ["IoT Core", "Sensor Fusion", "Real-time"],
    color: "from-red-500/20 to-transparent"
  }
];

const categories = ["ALL", "AI / ML", "PRODUCT", "FINTECH", "IOT / AUTOMATION"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects = activeCategory === "ALL" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-40 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-0 w-[800px] h-[800px] bg-purple-600/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <Activity className="w-3 h-3 text-purple-500" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/50">Production Archive</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-display text-5xl md:text-8xl font-black text-white mb-12 leading-[0.9] tracking-tighter uppercase"
          >
            SELECTED <br />
            <span className="text-gradient-purple italic font-medium">DEPLOYMENTS.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/40 font-light leading-relaxed max-w-2xl tracking-tight"
          >
            A curated archive of high-performance systems and cinematic digital experiences 
            engineered for the world&apos;s most ambitious founders.
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-32 border-b border-white/5 pb-12">
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-700 border ${
                activeCategory === cat 
                  ? "bg-white text-black border-white shadow-[0_0_50px_rgba(255,255,255,0.15)] scale-105" 
                  : "bg-white/5 text-white/40 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[60px] border border-white/10 bg-white/[0.01] mb-12 transition-all duration-700 group-hover:border-purple-500/30 group-hover:shadow-[0_0_80px_-12px_rgba(124,58,237,0.2)]">
                  {/* Image */}
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  {/* View Project Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-700 shadow-3xl">
                       <ArrowRight className="w-10 h-10 text-black -rotate-45" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="px-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.5em] mb-3 block">{project.category}</span>
                      <h3 className="text-4xl font-black text-white uppercase tracking-tighter group-hover:text-purple-400 transition-colors">{project.title}</h3>
                    </div>
                  </div>
                  <p className="text-white/40 text-lg leading-relaxed font-light tracking-tight max-w-xl group-hover:text-white/60 transition-colors mb-8">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                     {project.tags.map(tag => (
                       <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-[9px] font-black text-white/20 uppercase tracking-[0.2em] group-hover:text-white/40 transition-colors">{tag}</span>
                     ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer CTA */}
        <div className="mt-60 glass p-20 md:p-32 rounded-[80px] border-white/5 flex flex-col items-center text-center shadow-3xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-grid opacity-[0.05]" />
          <div className="relative z-10">
            <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.6em] mb-12">Industrial Architecture</p>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-16 uppercase tracking-tighter">WANT TO BUILD <br /> <span className="text-gradient-purple italic font-medium">THE NEXT STANDARD?</span></h2>
            <Link 
              href="/contact"
              className="group h-24 bg-white text-black px-20 rounded-full inline-flex items-center justify-center gap-6 hover:scale-105 active:scale-95 transition-all shadow-2xl"
            >
              <span className="text-sm font-black uppercase tracking-[0.2em]">Deploy Now</span>
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

