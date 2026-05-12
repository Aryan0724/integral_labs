"use client";

import React from "react";
import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Backend/ML" },
  { name: "FastAPI", category: "Backend" },
  { name: "Supabase", category: "Backend/DB" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "Infrastructure" },
  { name: "Vercel", category: "Deployment" },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="relative z-40 py-32 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-blue-500 mb-6"
          >
            The Ecosystem
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-none"
          >
            Built on <span className="text-white/30">Intelligence.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative h-40 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-sm flex flex-col items-center justify-center p-6 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              <span className="text-xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-500">{tech.name}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">{tech.category}</span>
            </motion.div>
          ))}
        </div>

        {/* Cinematic System Logs Component */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-[40px] border border-white/5 bg-white/[0.02] backdrop-blur-md relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <div className="space-y-4">
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Core Performance</div>
              <div className="text-4xl font-bold text-white">99.98%</div>
              <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "99%" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="h-full bg-blue-500" 
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Infrastructure Scale</div>
              <div className="text-4xl font-bold text-white">Infinite</div>
              <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                  className="h-full bg-purple-500" 
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Deployment Speed</div>
              <div className="text-4xl font-bold text-white">&lt; 2.4s</div>
              <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
                  className="h-full bg-cyan-500" 
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
