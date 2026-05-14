"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data/projects";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] pt-40 pb-24">
      {/* Blueprint Header */}
      <div className="container relative mb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] h-px bg-white/[0.03] pointer-events-none" />
        
        <div className="max-w-[700px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="measure-bar mb-8"
          >
            <div className="measure-line w-12" />
            <span className="blueprint-label uppercase tracking-[0.3em]">Engineering Portfolio</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[60px] md:text-[90px] font-display text-white mb-10 tracking-tighter leading-[0.85]"
          >
            Our Digital 
            <br />
            <span className="italic opacity-40">Artifacts.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/30 text-lg leading-relaxed max-w-[500px] font-light"
          >
            A collection of high-performance software systems and intelligent interfaces built for the next generation of digital infrastructure.
          </motion.p>
        </div>

        {/* Decorative corner node */}
        <div className="absolute top-0 right-0 p-8 border-l border-b border-white/5 hidden lg:block">
           <span className="blueprint-label opacity-20">LOC: PORTFOLIO_V2.4</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative"
            >
              <Link href={`/work/${project.id}`} className="block">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/5 bg-[#111] shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Hover icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                     <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                        <ArrowUpRight size={24} />
                     </div>
                  </div>

                  {/* Corner nodes */}
                  <div className="absolute top-4 left-4 w-1 h-1 bg-white/20" />
                  <div className="absolute top-4 right-4 w-1 h-1 bg-white/20" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/20" />
                  <div className="absolute bottom-4 right-4 w-1 h-1 bg-white/20" />
                </div>
              </Link>

              {/* Info */}
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-4 mb-3 opacity-30">
                    <span className="font-mono text-[10px] tracking-widest uppercase">{project.category}</span>
                    <div className="h-px w-8 bg-white" />
                    <span className="font-mono text-[10px] tracking-widest uppercase">{project.year}</span>
                  </div>
                  <h2 className="text-3xl font-display text-white group-hover:italic transition-all">
                    {project.title}
                  </h2>
                </div>
                
                <Link 
                  href={`/work/${project.id}`}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:border-white group/btn transition-all duration-500"
                >
                  <ArrowUpRight size={16} className="text-white/40 group-hover/btn:text-black transition-colors" />
                </Link>
              </div>
              
              <p className="mt-6 text-white/30 text-sm leading-relaxed max-w-[340px] font-light">
                {project.intro.split('.')[0]}.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background blueprint details */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[-1]">
         <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      </div>
    </main>
  );
}
