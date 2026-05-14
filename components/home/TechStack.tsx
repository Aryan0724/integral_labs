"use client";

import React from "react";
import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js", category: "Framework", color: "from-blue-500/20" },
  { name: "React", category: "Library", color: "from-cyan-500/20" },
  { name: "TypeScript", category: "Language", color: "from-indigo-500/20" },
  { name: "GSAP", category: "Motion", color: "from-green-500/20" },
  { name: "Three.js", category: "3D", color: "from-purple-500/20" },
  { name: "PostgreSQL", category: "Database", color: "from-blue-600/20" },
  { name: "FastAPI", category: "Backend", color: "from-teal-500/20" },
  { name: "Python", category: "ML/AI", color: "from-yellow-500/20" },
  { name: "Docker", category: "Infra", color: "from-blue-400/20" },
  { name: "Supabase", category: "Backend", color: "from-emerald-500/20" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-40 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500 mb-6"
          >
            The Stack
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display text-4xl md:text-7xl font-bold text-white mb-10"
          >
            Built on <span className="text-white/40 italic font-medium">Intelligence.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative h-48 rounded-[32px] border border-white/5 bg-white/[0.02] flex flex-col items-center justify-center p-8 overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl`} />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <span className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
                  {tech.name}
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/20 group-hover:text-white/40 transition-colors">
                  {tech.category}
                </span>
              </div>

              {/* Dynamic Glow Ornament */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Global Infrastructure Visualization */}
        <div className="mt-40 max-w-6xl mx-auto glass p-12 md:p-20 rounded-[60px] border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-grid opacity-[0.05]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 relative z-10">
            <div className="space-y-6">
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/30">System Load</div>
              <div className="text-5xl font-bold text-white">Nominal</div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "15%" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" 
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/30">Global Latency</div>
              <div className="text-5xl font-bold text-white">12ms</div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                  className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" 
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/30">Build Success</div>
              <div className="text-5xl font-bold text-white">100%</div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
                  className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
