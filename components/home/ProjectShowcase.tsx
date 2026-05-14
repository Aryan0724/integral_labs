"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowUpRight, Terminal, Globe, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Vortex Analytics",
    category: "SaaS Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    color: "bg-blue-600/20",
    stats: ["99.9% Performance", "2.4s Deployment", "Enterprise Secure"],
  },
  {
    title: "Quantum OS",
    category: "Admin System",
    image: "https://images.unsplash.com/photo-1504868584819-f8e905263543?auto=format&fit=crop&q=80&w=1200",
    color: "bg-purple-600/20",
    stats: ["Real-time Data", "Custom Widgets", "Global Edge"],
  },
  {
    title: "Aura AI",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    color: "bg-indigo-600/20",
    stats: ["LLM Integrated", "Predictive Analytics", "Deep Learning"],
  },
  {
    title: "Stellar Cloud",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    color: "bg-emerald-600/20",
    stats: ["Workflow Engine", "Auto-scaling", "CI/CD Pipeline"],
  },
];

export default function ProjectShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    const totalWidth = container.scrollWidth - window.innerWidth;

    let ctx = gsap.context(() => {
      gsap.to(container, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => "+=" + totalWidth,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="relative bg-black overflow-hidden h-screen flex items-center">
      {/* Background Section Identifier */}
      <div className="absolute top-48 left-10 md:left-20 z-10 flex flex-col gap-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/40">Portfolio_Archive</span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-display text-5xl md:text-7xl font-bold text-white leading-none"
        >
          Selected <br /> <span className="text-white/40 italic font-medium">Builds.</span>
        </motion.h2>
      </div>

      <div ref={containerRef} className="flex items-center gap-20 pl-[30vw] pr-[20vw] h-full">
        {projects.map((project, i) => (
          <div 
            key={project.title}
            className="flex-shrink-0 w-[80vw] lg:w-[65vw] h-[70vh] relative group"
          >
            {/* Glow Effect */}
            <div className={`absolute inset-[-10%] ${project.color} blur-[120px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000`} />
            
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
                  <span className="text-[9px] uppercase tracking-widest font-bold text-white/30">{project.category}</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-700">
                  <ArrowUpRight className="w-5 h-5" />
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
                   <h3 className="text-display text-4xl md:text-6xl font-bold text-white mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                      {project.title}
                   </h3>
                </div>
              </div>

              {/* Metrics / Info */}
              <div className="flex flex-wrap gap-8">
                {project.stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-blue-500 rounded-full" />
                    <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Instruction */}
      <div className="absolute bottom-10 right-20 flex items-center gap-4">
        <span className="text-[8px] uppercase tracking-[0.5em] text-white/20">Scroll for more</span>
        <div className="h-[1px] w-20 bg-gradient-to-r from-white/20 to-transparent" />
      </div>
    </section>
  );
}
