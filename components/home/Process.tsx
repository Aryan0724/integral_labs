"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Layers, Code2, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  { 
    title: "Discovery", 
    desc: "Mapping project goals and technical constraints.",
    icon: Search, 
    color: "text-blue-400" 
  },
  { 
    title: "Architecture", 
    desc: "Designing the systems for infinite scale.",
    icon: Layers, 
    color: "text-purple-400" 
  },
  { 
    title: "Development", 
    desc: "Precision engineering with modern stacks.",
    icon: Code2, 
    color: "text-cyan-400" 
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
    <section id="process" className="relative py-40 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500 mb-6"
          >
            The Workflow
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display text-4xl md:text-7xl font-bold text-white mb-10"
          >
            System <span className="text-white/40 italic font-medium">Lifecycle.</span>
          </motion.h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Animated Connecting Line */}
          <div className="absolute top-[40px] left-0 w-full h-[1px] hidden lg:block overflow-hidden">
            <div className="absolute inset-0 bg-white/5 border-b border-dashed border-white/20" />
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-1/2 h-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-3xl bg-black border border-white/10 flex items-center justify-center mb-8 relative z-20 group-hover:border-white/30 group-hover:scale-110 transition-all duration-700">
                  <div className="absolute inset-0 bg-white/5 rounded-3xl group-hover:bg-blue-500/10 transition-colors" />
                  <step.icon className={`w-8 h-8 relative z-10 ${step.color}`} />
                </div>
                
                <h3 className="text-[12px] uppercase tracking-[0.3em] font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>

                {/* Animated Pulse */}
                <div className="mt-8 relative">
                   <div className="w-2 h-2 rounded-full bg-white/20" />
                   <motion.div 
                    animate={{ scale: [1, 2.5], opacity: [1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 w-2 h-2 rounded-full bg-white/40"
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
