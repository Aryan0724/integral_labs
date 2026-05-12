"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Database, Code2, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  { title: "Discovery", icon: Search, description: "Deep dive into business goals and technical requirements." },
  { title: "Planning", icon: PenTool, description: "Detailed system design, UI/UX mapping, and sprint planning." },
  { title: "Architecture", icon: Database, description: "Building scalable backend structures and data models." },
  { title: "Development", icon: Code2, description: "High-performance engineering with clean, modular code." },
  { title: "Testing", icon: ShieldCheck, description: "Rigorous QA, security audits, and load testing." },
  { title: "Deployment", icon: Rocket, description: "Vercel optimized deployment with CI/CD automation." },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Development System</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our systematic approach ensures precision engineering and predictable high-quality delivery.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/30 transition-all shadow-xl">
                  <step.icon className="w-8 h-8 text-white/70 group-hover:text-white transition-colors" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-black text-[10px] font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Visual - Architecture Diagram Mockup */}
        <div className="mt-24 p-8 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-around gap-12 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
            <div className="flex flex-col items-center gap-4">
              <div className="w-32 h-32 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center">
                <Database className="w-12 h-12 text-white" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">Core Database</span>
            </div>
            <div className="hidden md:block w-32 h-[1px] bg-white/20" />
            <div className="flex flex-col items-center gap-4">
              <div className="w-40 h-40 rounded-full border border-white/20 bg-white/5 flex items-center justify-center relative">
                <div className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
                <Code2 className="w-16 h-16 text-white" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">API Layer</span>
            </div>
            <div className="hidden md:block w-32 h-[1px] bg-white/20" />
            <div className="flex flex-col items-center gap-4">
              <div className="w-32 h-32 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center">
                <Rocket className="w-12 h-12 text-white" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">Edge Deployment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
