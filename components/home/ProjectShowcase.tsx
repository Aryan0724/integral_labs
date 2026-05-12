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
    category: "SaaS Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    color: "bg-blue-600/20",
  },
  {
    title: "Quantum OS",
    category: "Admin System",
    image: "https://images.unsplash.com/photo-1504868584819-f8e905263543?auto=format&fit=crop&q=80&w=1200",
    color: "bg-purple-600/20",
  },
  {
    title: "Aura AI",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    color: "bg-orange-600/20",
  },
  {
    title: "Stellar Cloud",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    color: "bg-emerald-600/20",
  },
];

const ProjectShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".project-card");
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          start: "top top",
          end: () => `+=${horizontalRef.current?.scrollWidth}`,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative z-50 bg-black overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-20 left-20 z-20">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-6xl font-bold text-white tracking-tight"
        >
          Selected <span className="text-white/30">Works.</span>
        </motion.h2>
      </div>

      <div ref={horizontalRef} className="flex h-[70vh] items-center gap-12 px-[10vw]">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card relative flex-shrink-0 w-[80vw] md:w-[60vw] h-full group cursor-pointer"
          >
            <div className={`absolute inset-0 ${project.color} blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700`} />
            
            <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/50 mb-2 block">{project.category}</span>
                    <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">{project.title}</h3>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-xl group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
