"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Cpu, Layout, Zap, Users } from "lucide-react";
import { projects } from "@/lib/data/projects";

export default function ProjectCaseStudy() {
  const { id } = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f]">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">Project not found</h1>
          <Link href="/work" className="text-purple-400 hover:underline">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-8 py-8 flex justify-between items-center pointer-events-none">
        <button 
          onClick={() => router.back()}
          className="pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-black/50 backdrop-blur-md text-[10px] font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-all"
        >
          <ArrowLeft size={14} />
          BACK_TO_WORK
        </button>
        
        <a 
          href={project.liveLink}
          target="_blank"
          className="pointer-events-auto flex items-center gap-2 px-6 py-2 rounded-full bg-white text-black text-[10px] font-bold tracking-[0.2em] hover:bg-gray-200 transition-all shadow-2xl"
        >
          LIVE_PORTFOLIO
          <ExternalLink size={14} />
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/20 to-transparent" />
        
        <div className="absolute inset-x-0 bottom-0 py-20 px-12 md:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-[1000px] mx-auto"
          >
             <div className="flex items-center gap-4 mb-6 opacity-40">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase">{project.category}</span>
                <div className="h-px w-12 bg-white/50" />
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase">{project.year}</span>
             </div>
             <h1 className="text-[60px] md:text-[120px] font-display tracking-tighter leading-[0.8] mb-8">
               {project.title}
             </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro & Overview */}
      <section className="py-32 px-12 md:px-24 border-b border-white/5">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-20">
          <div>
            <div className="measure-bar mb-12">
               <div className="measure-line w-12" />
               <span className="blueprint-label">01.INTRO</span>
            </div>
            <p className="text-white/40 leading-relaxed font-light text-lg">
              {project.intro}
            </p>
          </div>
          
          <div className="space-y-20">
            {/* Case Study Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
               <div>
                  <h4 className="font-mono text-[10px] tracking-[0.2em] text-purple-400 uppercase mb-4">The Challenge</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{project.challenge}</p>
               </div>
               <div>
                  <h4 className="font-mono text-[10px] tracking-[0.2em] text-blue-400 uppercase mb-4">The Solution</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{project.solution}</p>
               </div>
            </div>
            
            <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
               <div className="flex items-center gap-3 mb-6">
                  <Zap size={18} className="text-yellow-400" />
                  <h4 className="font-mono text-[10px] tracking-[0.2em] text-white uppercase">Business Impact</h4>
               </div>
               <p className="text-xl md:text-2xl font-display italic text-white/90">
                 "{project.impact}"
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Details */}
      <section className="py-32 px-12 md:px-24 bg-[#0c0c0c]">
        <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="flex-1">
             <div className="measure-bar mb-12">
                <div className="measure-line w-12" />
                <span className="blueprint-label">02.ENGINEERING</span>
             </div>
             <h3 className="text-4xl font-display mb-12">System Architecture</h3>
             <div className="flex flex-wrap gap-4">
                {project.techStack.map((tech) => (
                   <div key={tech} className="px-6 py-3 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors flex items-center gap-3">
                      <Cpu size={14} className="text-white/20" />
                      <span className="text-sm font-bold tracking-tight text-white/80">{tech}</span>
                   </div>
                ))}
             </div>
          </div>
          
          <div className="max-w-[320px]">
             <div className="p-1.5 rounded-full border border-white/5 mb-12 inline-block">
                <div className="px-4 py-1.5 rounded-full bg-white/[0.02]">
                   <span className="text-[9px] font-mono tracking-[0.2em] text-white/40 uppercase">Founder's Word</span>
                </div>
             </div>
             <div className="relative">
                <div className="absolute -top-6 -left-6 text-4xl text-purple-500 opacity-20">"</div>
                <p className="text-white/70 leading-relaxed italic mb-8">
                  {project.founderQuote.text}
                </p>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Users size={18} className="text-white/30" />
                   </div>
                   <div>
                      <div className="text-xs font-bold uppercase tracking-widest">{project.founderQuote.name}</div>
                      <div className="text-[10px] text-white/20 font-mono tracking-widest uppercase">{project.founderQuote.role}</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-40 px-12 md:px-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center mb-24">
             <div className="measure-bar mb-8 opacity-20">
                <div className="measure-line w-20" />
                <span className="blueprint-label uppercase">Production Previews</span>
                <div className="measure-line w-20" />
             </div>
             <h2 className="text-center text-[50px] font-display text-white tracking-tighter leading-[0.85]">
                Production <span className="italic opacity-40">Previews.</span>
             </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {project.screenshots.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/5 group"
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i+1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                
                {/* corner nodes */}
                <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-white/20" />
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-white/20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="py-32 border-t border-white/5 text-center">
         <Link 
           href="/work" 
           className="group inline-flex flex-col items-center gap-6"
         >
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
               <ArrowLeft size={24} className="text-white group-hover:text-black transition-colors" />
            </div>
            <span className="font-display text-4xl tracking-tighter text-white/40 group-hover:text-white transition-colors">
               Back to Portfolio
            </span>
         </Link>
      </section>
    </main>
  );
}
