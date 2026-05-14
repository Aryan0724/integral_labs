"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data/projects";

function ProjectCard({ project, index, scrollYProgress }: { project: any, index: number, scrollYProgress: MotionValue<number> }) {
  const containerRef = useRef(null);
  
  // Parallax effects
  const y = useTransform(
    scrollYProgress,
    [index * 0.2, (index + 1) * 0.3],
    [100, -100]
  );
  
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={containerRef}
      style={{ y: smoothY }}
      className={`relative group w-full max-w-[800px] mb-40 md:mb-64 ${
        index % 2 === 1 ? "ml-auto" : "mr-auto"
      }`}
    >
      {/* Blueprint background label */}
      <div className="absolute -top-12 left-0 flex items-center gap-4 opacity-20 group-hover:opacity-40 transition-opacity">
        <span className="font-mono text-[10px] tracking-widest uppercase">artifact_id: {project.id}</span>
        <div className="h-px w-24 bg-white/50" />
      </div>

      {/* Main Image Container */}
      <Link href={`/work/${project.id}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/5 bg-[#1a1a1a] shadow-2xl">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-white/20" />
        </div>
      </Link>

      {/* Content info */}
      <div className={`mt-8 ${index % 2 === 1 ? "text-right" : "text-left"}`}>
        <div className="flex items-center gap-4 mb-4 justify-start group-hover:gap-6 transition-all">
          <span className="font-mono text-[11px] text-white/30 uppercase tracking-[0.2em]">{project.year}</span>
          <div className="h-px w-8 bg-white/10" />
          <span className="font-mono text-[11px] text-purple-400 uppercase tracking-[0.2em]">{project.category}</span>
        </div>
        
        <h3 className="text-4xl md:text-6xl font-display text-white mb-6 tracking-tighter leading-none group-hover:italic transition-all">
          {project.title}
        </h3>
        
        <p className="text-[15px] md:text-[17px] text-white/40 leading-relaxed max-w-[400px] mb-8 group-hover:text-white/60 transition-colors">
          {project.description}
        </p>

        <Link 
          href={`/work/${project.id}`}
          className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-white group/link"
        >
          VIEW CASE STUDY
          <motion.span 
            className="w-8 h-px bg-white/30"
            whileHover={{ width: 48 }}
          />
        </Link>
      </div>
    </motion.div>
  );
}

export default function ProjectShowcase() {
  const [content, setContent] = React.useState<any>(null);
  const containerRef = useRef(null);

  React.useEffect(() => {
    fetch('/api/cms')
      .then(res => res.json())
      .then(data => setContent(data.portfolio));
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="relative py-40 overflow-visible bg-[#0f0f0f]">
      {content && (
        <div className="container">
          {/* Section Header */}
          <div className="mb-32 flex flex-col items-center">
             <div className="measure-bar mb-8 opacity-20">
                <div className="measure-line w-20" />
                <span className="blueprint-label uppercase">Selected Deliverables</span>
                <div className="measure-line w-20" />
             </div>
             <h2 className="text-center text-[50px] md:text-[90px] font-display text-white tracking-tighter leading-[0.85]">
                {content.title.split('.').map((part: string, i: number) => (
                  <React.Fragment key={i}>
                     {part}
                     {i === 0 && <span className="italic opacity-40">.</span>}
                  </React.Fragment>
                ))}
             </h2>
          </div>

          {/* Projects List */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.03] -translate-x-1/2 hidden lg:block" />
            
            {projects.map((project, i) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={i} 
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
