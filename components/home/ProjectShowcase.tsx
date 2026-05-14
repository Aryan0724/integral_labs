"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Activity, Zap, Shield, Terminal } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Aether Intelligence",
    category: "AI Ecosystems",
    description: "Industrial-grade supply chain optimization platform driven by autonomous neural agents and real-time predictive analytics.",
    image: "/work/aether.png",
    stats: ["99.9% ACCURACY", "2ms LATENCY"],
    color: "rgba(168, 85, 247, 0.3)", // Purple
  },
  {
    title: "Lumina OS",
    category: "Product OS",
    description: "A premium, glassmorphic operating system interface designed for high-performance creative studios and digital architects.",
    image: "/work/lumina.png",
    stats: ["NEXT.JS 16", "MOTION_v4"],
    color: "rgba(59, 130, 246, 0.3)", // Blue
  },
  {
    title: "Vortex Finance",
    category: "DeFi Protocol",
    description: "Decentralized liquidity protocol featuring advanced 3D visualization of capital flows and automated risk management.",
    image: "/work/vortex.png",
    stats: ["DECENTRALIZED", "IRON-CLAD"],
    color: "rgba(244, 63, 94, 0.3)", // Rose
  },
  {
    title: "Nexus Systems",
    category: "IoT Automation",
    description: "Rugged IoT monitoring dashboard for industrial factory floor management, featuring real-time sensor fusion.",
    image: "/work/nexus.png",
    stats: ["EDGE_COMPUTE", "IOT_CORE"],
    color: "rgba(16, 185, 129, 0.3)", // Emerald
  },
];

export default function ProjectShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const springX = useSpring(x, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#0A0A0A]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Background Section Identifier */}
        <div className="absolute top-40 left-10 md:left-20 z-20 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-3 mb-8"
          >
            <Activity className="w-4 h-4 text-purple-500" />
            <span className="text-[10px] uppercase tracking-[0.6em] font-black text-white/30">Archive_04</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-display text-5xl md:text-[100px] font-black text-white leading-[0.85] tracking-tighter uppercase"
          >
            SELECTED <br /> <span className="text-gradient-purple italic font-medium">BUILDS.</span>
          </motion.h2>
        </div>

        <motion.div style={{ x: springX }} className="flex gap-20 pl-[40vw]">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} scrollYProgress={scrollYProgress} />
          ))}
        </motion.div>

        {/* Navigation Instruction */}
        <div className="absolute bottom-10 right-20 flex items-center gap-6 z-20">
          <div className="flex flex-col items-end">
             <span className="text-[8px] uppercase tracking-[0.5em] text-white/20 mb-1">Scroll Progression</span>
             <div className="w-40 h-[1px] bg-white/5 relative overflow-hidden">
                <motion.div 
                  style={{ scaleX: scrollYProgress }} 
                  className="absolute inset-0 bg-purple-500 origin-left"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, scrollYProgress }: { project: any, index: number, scrollYProgress: any }) {
  // Add some perspective rotation based on scroll
  const rotate = useTransform(
    scrollYProgress,
    [index * 0.2, (index + 1) * 0.25],
    [10, -10]
  );
  
  const scale = useTransform(
    scrollYProgress,
    [index * 0.2, (index + 0.5) * 0.2, (index + 1) * 0.25],
    [0.9, 1, 0.9]
  );

  return (
    <motion.div 
      style={{ rotateY: rotate, scale }}
      className="flex-shrink-0 w-[85vw] lg:w-[70vw] h-[65vh] relative group perspective-1000"
    >
      {/* Dynamic Glow */}
      <div 
        className="absolute inset-[-10%] blur-[150px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000"
        style={{ backgroundColor: project.color }}
      />
      
      <div className="relative w-full h-full glass rounded-[70px] overflow-hidden p-10 flex flex-col border-white/5 group-hover:border-purple-500/30 transition-all duration-700 shadow-3xl">
        {/* Top Bar Mockup */}
        <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-8">
          <div className="flex items-center gap-8">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
            <div className="h-8 w-px bg-white/5" />
            <div className="flex items-center gap-3">
               <Terminal className="w-4 h-4 text-purple-500" />
               <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30">{project.category}</span>
            </div>
          </div>
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 45 }}
            className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-700 cursor-pointer shadow-xl"
          >
            <ArrowUpRight className="w-8 h-8" />
          </motion.div>
        </div>

        {/* Content Container */}
        <div className="flex-1 flex flex-col lg:flex-row gap-12 overflow-hidden">
          <div className="lg:w-3/5 relative rounded-[50px] overflow-hidden shadow-2xl group-hover:shadow-purple-500/10 transition-shadow">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[3000ms] opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
          </div>
          
          <div className="lg:w-2/5 flex flex-col justify-center">
            <motion.h3 className="text-display text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none uppercase group-hover:text-purple-400 transition-colors">
              {project.title}
            </motion.h3>
            <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed mb-12 tracking-tight group-hover:text-white/60 transition-colors">
              {project.description}
            </p>
            
            <div className="flex flex-col gap-6">
              {project.stats.map((stat: string, idx: number) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-purple-500/30" />
                  <span className="text-[12px] uppercase tracking-[0.4em] font-black text-white/30 group-hover:text-purple-500 transition-colors">{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />
      </div>
    </motion.div>
  );
}

