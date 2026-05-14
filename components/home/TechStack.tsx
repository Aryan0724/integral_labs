"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Terminal, Shield, Zap, Globe } from "lucide-react";

const technologies = [
  { name: "Next.js 16", category: "Framework", color: "from-blue-500/20" },
  { name: "React 19", category: "Library", color: "from-cyan-500/20" },
  { name: "TypeScript", category: "Language", color: "from-indigo-500/20" },
  { name: "GSAP / Motion", category: "Motion", color: "from-green-500/20" },
  { name: "Three.js", category: "3D Engine", color: "from-purple-500/20" },
  { name: "PostgreSQL", category: "Persistence", color: "from-blue-600/20" },
  { name: "FastAPI", category: "Intel Layer", color: "from-teal-500/20" },
  { name: "Python", category: "ML Architecture", color: "from-yellow-500/20" },
  { name: "Docker", category: "Container", color: "from-blue-400/20" },
  { name: "Supabase", category: "Backend Node", color: "from-emerald-500/20" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-48 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <Terminal className="w-3 h-3 text-purple-500" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/50">Core Engine</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display text-5xl md:text-8xl font-black text-white mb-10 uppercase tracking-tighter"
          >
            BUILT ON <br /> <span className="text-gradient-purple italic font-medium">INTELLIGENCE.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative h-56 rounded-[50px] border border-white/5 bg-white/[0.01] flex flex-col items-center justify-center p-8 overflow-hidden hover:border-purple-500/30 transition-all duration-700 shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl`} />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <span className="text-xl md:text-2xl font-black text-white mb-4 tracking-tighter uppercase group-hover:text-purple-400 transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/20 group-hover:text-white/40 transition-colors">
                  {tech.category}
                </span>
              </div>

              {/* Dynamic Glow Ornament */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              {/* Subtle Grid */}
              <div className="absolute inset-0 bg-grid opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Global Infrastructure Visualization */}
        <div className="mt-40 max-w-7xl mx-auto glass p-16 md:p-24 rounded-[70px] border-white/5 relative overflow-hidden group shadow-3xl">
          <div className="absolute inset-0 bg-grid opacity-[0.05]" />
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-purple-600/10 blur-[150px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                 <Shield className="w-5 h-5 text-purple-500" />
                 <span className="text-[12px] uppercase tracking-[0.4em] font-black text-white/20">Security Protocol</span>
              </div>
              <div className="text-5xl font-black text-white uppercase tracking-tighter">SOC2 TYPE II</div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 3, ease: "easeOut" }}
                  className="h-full bg-purple-500 shadow-[0_0_15px_#a855f7]" 
                />
              </div>
              <span className="text-[10px] font-black text-purple-500/50 uppercase tracking-widest">Certified Architecture</span>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                 <Globe className="w-5 h-5 text-blue-500" />
                 <span className="text-[12px] uppercase tracking-[0.4em] font-black text-white/20">Network Engine</span>
              </div>
              <div className="text-5xl font-black text-white uppercase tracking-tighter">GLOBAL EDGE</div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "92%" }}
                  transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
                  className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]" 
                />
              </div>
              <span className="text-[10px] font-black text-blue-500/50 uppercase tracking-widest">Multi-Region Deployment</span>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                 <Zap className="w-5 h-5 text-emerald-500" />
                 <span className="text-[12px] uppercase tracking-[0.4em] font-black text-white/20">Infrastructure</span>
              </div>
              <div className="text-5xl font-black text-white uppercase tracking-tighter">AUTO-SCALING</div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 3, ease: "easeOut", delay: 0.4 }}
                  className="h-full bg-emerald-500 shadow-[0_0_15px_#10b981]" 
                />
              </div>
              <span className="text-[10px] font-black text-emerald-500/50 uppercase tracking-widest">High-Availability Cluster</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

