"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Vortex Analytics",
    category: "Data Intelligence",
    description: "Industrial-grade analytics engine for real-time market surveillance and predictive forecasting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    stats: ["99.9% ACCURACY", "2ms LATENCY"],
    color: "bg-purple-600/20",
  },
  {
    title: "Quantum OS",
    category: "Cloud Infrastructure",
    description: "Distributed operating system designed for edge computing and massive scale automation.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e905263543?auto=format&fit=crop&q=80&w=1200",
    stats: ["GLOBAL EDGE", "AUTO-SCALING"],
    color: "bg-fuchsia-600/20",
  },
  {
    title: "Aura AI",
    category: "Neural Systems",
    description: "Multi-agent autonomous intelligence framework for enterprise decision-making pipelines.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    stats: ["LLM-DRIVEN", "SELF-OPTIMIZING"],
    color: "bg-rose-600/20",
  },
  {
    title: "Stellar Cloud",
    category: "Automation Flow",
    description: "High-performance CI/CD and deployment infrastructure for mission-critical applications.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    stats: ["ZERO-DOWNTIME", "IRON-CLAD"],
    color: "bg-teal-600/20",
  },
];

export default function ProjectShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    let ctx = gsap.context(() => {
      const getScrollAmount = () => {
        const containerWidth = container.scrollWidth;
        return -(containerWidth - window.innerWidth);
      };

      gsap.to(container, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${container.scrollWidth + window.innerHeight}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          refreshPriority: 1,
        },
      });
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    
    const timer = setTimeout(() => ScrollTrigger.refresh(), 1000);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section 
      id="work" 
      ref={sectionRef} 
      className="relative bg-black overflow-hidden h-screen flex flex-col justify-center"
    >
      {/* Background Section Identifier - Pushed higher to avoid Navbar overlap */}
      <div className="absolute top-40 left-10 md:left-20 z-20 flex flex-col gap-4 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
          <span className="text-[10px] uppercase tracking-[0.5em] font-black text-white/40">Portfolio_Archive</span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-display text-5xl md:text-8xl font-black text-white leading-none tracking-tighter"
        >
          Selected <br /> <span className="text-white/40 italic font-medium">Builds.</span>
        </motion.h2>
      </div>

      <div 
        ref={containerRef} 
        className="flex items-center gap-20 pl-[40vw] pr-[40vw] h-[60vh] relative z-10"
      >
        {projects.map((project, i) => (
          <div 
            key={project.title}
            className="flex-shrink-0 w-[85vw] lg:w-[60vw] h-full relative group project-card"
          >
            {/* Glow Effect */}
            <div className={`absolute inset-[-10%] ${project.color} blur-[120px] opacity-0 group-hover:opacity-30 transition-opacity duration-1000`} />
            
            <div className="relative w-full h-full glass rounded-[60px] overflow-hidden p-8 flex flex-col group-hover:border-white/20 transition-all duration-700">
              {/* Top Bar Mockup */}
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                <div className="flex items-center gap-6">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <div className="h-6 w-px bg-white/10" />
                  <span className="text-[9px] uppercase tracking-widest font-black text-white/30">{project.category}</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-700">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>

              {/* Image / Content Container */}
              <div className="flex-1 relative rounded-[40px] overflow-hidden mb-8">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
                   <h3 className="text-display text-4xl md:text-6xl font-black text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700 tracking-tighter">
                      {project.title}
                   </h3>
                   <p className="text-white/40 text-sm md:text-lg font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 max-w-xl">
                      {project.description}
                   </p>
                </div>
              </div>

              {/* Metrics / Info */}
              <div className="flex flex-wrap gap-8">
                {project.stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-purple-500 rounded-full" />
                    <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Instruction */}
      <div className="absolute bottom-10 right-20 flex items-center gap-4 z-20">
        <span className="text-[8px] uppercase tracking-[0.5em] text-white/20">Scroll to explore archive</span>
        <div className="h-[1px] w-20 bg-gradient-to-r from-white/20 to-transparent" />
      </div>
    </section>
  );
}
