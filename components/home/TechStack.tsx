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
    <section id="tech-stack" className="py-24 bg-background border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Stack.</h2>
            <p className="text-muted-foreground">
              We use a modern, high-performance technology stack to build systems that are fast, 
              scalable, and easy to maintain.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/50">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Vercel Optimized
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-4 hover:bg-white/[0.08] hover:border-white/20 transition-all cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <span className="text-xl font-bold text-white group-hover:scale-110 transition-transform">{tech.name}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">{tech.category}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl border border-white/10 bg-black/40 font-mono text-sm overflow-x-auto">
          <div className="flex gap-4">
            <span className="text-white/30 select-none">1</span>
            <span className="text-green-400">npm</span> <span className="text-white">install</span> <span className="text-blue-400">@integral-labs/core</span>
          </div>
          <div className="flex gap-4">
            <span className="text-white/30 select-none">2</span>
            <span className="text-white/50">// Initializing production environment...</span>
          </div>
          <div className="flex gap-4">
            <span className="text-white/30 select-none">3</span>
            <span className="text-white">const</span> <span className="text-blue-400">system</span> <span className="text-white">=</span> <span className="text-yellow-400">new</span> <span className="text-white">IntegralSystem({`{`}</span>
          </div>
          <div className="flex gap-4">
            <span className="text-white/30 select-none">4</span>
            <span className="text-white ml-8">performance:</span> <span className="text-green-400">&apos;ultra&apos;</span><span className="text-white">,</span>
          </div>
          <div className="flex gap-4">
            <span className="text-white/30 select-none">5</span>
            <span className="text-white ml-8">scaling:</span> <span className="text-green-400">&apos;infinite&apos;</span><span className="text-white">,</span>
          </div>
          <div className="flex gap-4">
            <span className="text-white/30 select-none">6</span>
            <span className="text-white">{`}`});</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
