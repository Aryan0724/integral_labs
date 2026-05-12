"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Vortex Analytics",
    category: "SaaS Dashboard",
    description: "High-performance data visualization platform for real-time market metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Quantum OS",
    category: "Admin System",
    description: "Custom enterprise resource planning system with modular architecture.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e905263543?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Aura AI",
    category: "Machine Learning",
    description: "Predictive maintenance system for industrial automation infrastructure.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
  },
];

const ProjectShowcase = () => {
  return (
    <section id="work" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Selected Work.</h2>
            <p className="text-muted-foreground">
              A showcase of modern systems we&apos;ve engineered for ambitious companies.
            </p>
          </div>
          <button className="text-sm font-bold text-white flex items-center gap-2 hover:gap-4 transition-all pb-2 border-b border-white/10 hover:border-white/30">
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 mb-6">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    {project.category}
                  </span>
                  <div className="h-[1px] flex-1 mx-4 bg-white/5" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-white/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
