"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, PenTool, Database, Code2, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  { title: "Discovery", icon: Search, color: "text-blue-400" },
  { title: "Planning", icon: PenTool, color: "text-purple-400" },
  { title: "Architecture", icon: Database, color: "text-cyan-400" },
  { title: "Development", icon: Code2, color: "text-indigo-400" },
  { title: "Testing", icon: ShieldCheck, color: "text-emerald-400" },
  { title: "Deployment", icon: Rocket, color: "text-blue-500" },
];

const ProcessStep = ({ step, index }: { step: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex flex-col items-center group"
    >
      <div className="w-20 h-20 rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-500 group-hover:-translate-y-2">
        <step.icon className={`w-8 h-8 ${step.color}`} />
      </div>
      <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-2">{step.title}</h3>
      <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/50 transition-colors" />
    </motion.div>
  );
};

const Process = () => {
  return (
    <section id="process" className="relative z-30 py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            The Engineering <span className="text-white/30">Lifecycle.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Animated Connecting Line Path */}
          <div className="absolute top-10 left-0 w-full h-[2px] hidden lg:block overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
            />
            <div className="absolute inset-0 border-b border-dashed border-white/10" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <ProcessStep key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Immersive Architecture Visual */}
        <div className="mt-40 relative h-[400px] w-full max-w-5xl mx-auto rounded-3xl border border-white/5 bg-white/[0.01] overflow-hidden flex items-center justify-center group">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
          
          <div className="relative z-10 flex flex-col items-center gap-12">
            <div className="flex items-center gap-20">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-24 h-24 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-xl"
              >
                <Database className="text-blue-400 w-10 h-10" />
              </motion.div>
              <div className="w-32 h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-purple-500/0 relative">
                <motion.div 
                  animate={{ left: ["0%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute top-[-2px] w-2 h-1 bg-white shadow-[0_0_10px_#fff]"
                />
              </div>
              <motion.div 
                animate={{ scale: [1.1, 1, 1.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-32 h-32 rounded-full border border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-xl relative"
              >
                <div className="absolute inset-0 border border-dashed border-white/20 rounded-full animate-spin-slow" />
                <Code2 className="text-purple-400 w-12 h-12" />
              </motion.div>
              <div className="w-32 h-[1px] bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-emerald-500/0 relative">
                <motion.div 
                  animate={{ left: ["0%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                  className="absolute top-[-2px] w-2 h-1 bg-white shadow-[0_0_10px_#fff]"
                />
              </div>
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="w-24 h-24 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-xl"
              >
                <Rocket className="text-emerald-400 w-10 h-10" />
              </motion.div>
            </div>
            
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/30">System Infrastructure Flow</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
