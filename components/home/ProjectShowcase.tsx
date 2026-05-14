"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Shield, Terminal, Zap } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Vortex Analytics",
    category: "Data Intelligence",
    description: "Industrial-grade analytics engine for real-time market surveillance and predictive forecasting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    stats: ["99.9% ACCURACY", "2ms LATENCY"],
    color: "from-blue-600/20 to-indigo-600/20",
  },
  {
    title: "Quantum OS",
    category: "Cloud Infrastructure",
    description: "Distributed operating system designed for edge computing and massive scale automation.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e905263543?auto=format&fit=crop&q=80&w=1200",
    stats: ["GLOBAL EDGE", "AUTO-SCALING"],
    color: "from-purple-600/20 to-fuchsia-600/20",
  },
  {
    title: "Aura AI",
    category: "Neural Systems",
    description: "Multi-agent autonomous intelligence framework for enterprise decision-making pipelines.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    stats: ["LLM-DRIVEN", "SELF-OPTIMIZING"],
    color: "from-fuchsia-600/20 to-rose-600/20",
  },
  {
    title: "Stellar Cloud",
    category: "Automation Flow",
    description: "High-performance CI/CD and deployment infrastructure for mission-critical applications.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    stats: ["ZERO-DOWNTIME", "IRON-CLAD"],
    color: "from-emerald-600/20 to-teal-600/20",
  },
];

export default function ProjectShowcase() {
  return (
    <section id="work" className="relative py-40 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/40">Portfolio_Archive</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-display text-5xl md:text-8xl font-bold text-white leading-[0.9]"
            >
              Selected <br /> <span className="text-white/40 italic font-medium">Builds.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 text-lg md:text-xl font-light max-w-sm mb-4"
          >
            A collection of high-performance systems and intelligent platforms 
            engineered for technical dominance.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative flex flex-col lg:flex-row gap-12 items-center"
            >
              {/* Project Card */}
              <div className="relative w-full lg:w-2/3 aspect-[16/9] rounded-[40px] md:rounded-[60px] overflow-hidden glass border-white/5 group-hover:border-white/10 transition-all duration-700">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40`} />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[2000ms]"
                />
                
                {/* Overlay Metadata */}
                <div className="absolute top-8 left-8 flex items-center gap-4">
                  <div className="px-4 py-2 rounded-full glass border-white/10 text-[9px] uppercase tracking-widest font-bold text-white">
                    {project.category}
                  </div>
                </div>
                
                <Link 
                  href="#" 
                  className="absolute bottom-8 right-8 w-16 h-16 rounded-full bg-white text-black flex items-center justify-center translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 hover:bg-purple-600 hover:text-white"
                >
                  <ArrowUpRight className="w-8 h-8" />
                </Link>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/3 flex flex-col justify-center">
                <h3 className="text-display text-4xl md:text-6xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/40 text-lg font-light leading-relaxed mb-10">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-8">
                  {project.stats.map((stat, index) => (
                    <div key={index} className="flex flex-col gap-1">
                      <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/20">{stat.split(" ")[1]}</span>
                      <span className="text-xs font-bold text-white/60 tracking-widest">{stat.split(" ")[0]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-40 text-center">
           <Link 
            href="#" 
            className="inline-flex items-center gap-4 px-12 py-6 rounded-full glass border-white/10 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-700 text-xs font-bold uppercase tracking-[0.3em] text-white"
           >
             Explore Full Archive <ArrowUpRight className="w-4 h-4" />
           </Link>
        </div>
      </div>
    </section>
  );
}
