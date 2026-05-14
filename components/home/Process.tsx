"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Layers, Code2, Rocket, Activity, Terminal } from "lucide-react";

const steps = [
  { 
    title: "Discovery", 
    desc: "Mapping project goals and technical constraints.",
    icon: Search, 
    color: "text-purple-400" 
  },
  { 
    title: "Architecture", 
    desc: "Designing the systems for infinite scale.",
    icon: Layers, 
    color: "text-blue-400" 
  },
  { 
    title: "Development", 
    desc: "Precision engineering with modern stacks.",
    icon: Code2, 
    color: "text-fuchsia-400" 
  },
  { 
    title: "Deployment", 
    desc: "Seamless rollout to global edge infrastructure.",
    icon: Rocket, 
    color: "text-emerald-400" 
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-48 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <Activity className="w-3 h-3 text-purple-500" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/50">The Protocol</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display text-5xl md:text-8xl font-black text-white mb-10 uppercase tracking-tighter"
          >
            SYSTEM <span className="text-gradient-purple italic font-medium">LIFECYCLE.</span>
          </motion.h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Animated Connecting Line */}
          <div className="absolute top-[50px] left-0 w-full h-[1px] hidden lg:block overflow-hidden">
            <div className="absolute inset-0 bg-white/5 border-b border-dashed border-white/10" />
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent w-1/2 h-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-[40px] bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-10 relative z-20 group-hover:border-purple-500/50 group-hover:scale-110 group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] transition-all duration-700">
                  <div className="absolute inset-0 bg-white/[0.02] rounded-[40px] group-hover:bg-purple-600/5 transition-colors" />
                  <step.icon className={`w-10 h-10 relative z-10 ${step.color} group-hover:text-white transition-colors`} />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black text-white/30 group-hover:bg-purple-500 group-hover:text-white transition-all">
                    0{i + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-6 group-hover:text-purple-400 transition-colors">{step.title}</h3>
                <p className="text-white/40 text-lg font-light leading-relaxed max-w-[240px] tracking-tight group-hover:text-white/60 transition-colors">
                  {step.desc}
                </p>

                {/* Animated Pulse Decoration */}
                <div className="mt-12 relative">
                   <div className="w-2 h-2 rounded-full bg-purple-500/30" />
                   <motion.div 
                    animate={{ scale: [1, 3], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 w-2 h-2 rounded-full bg-purple-500/50"
                   />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

