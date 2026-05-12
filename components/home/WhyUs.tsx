"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Zap, TrendingUp, Code, Lock } from "lucide-react";

const features = [
  { title: "Scalable Engineering", icon: TrendingUp, desc: "Built to handle 10x growth without architectural bottlenecks." },
  { title: "Modern Architecture", icon: Code, desc: "Serverless, edge-ready, and modular system designs." },
  { title: "Clean Code Systems", icon: CheckCircle2, desc: "Industry-standard practices for long-term maintainability." },
  { title: "Fast Development", icon: Zap, desc: "Rapid prototyping and deployment without compromising quality." },
  { title: "Security First", icon: Lock, desc: "Enterprise-grade security protocols built into every layer." },
  { title: "Automation Focused", icon: Shield, desc: "Eliminating manual overhead through intelligent systems." },
];

const WhyUs = () => {
  return (
    <section className="relative z-[60] py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.4em] text-blue-500 mb-6"
            >
              The Advantage
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-12 leading-[1.1]"
            >
              Precision <br />
              <span className="text-white/30">Engineering.</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-500">
                    <feature.icon className="w-5 h-5 text-white/50 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-2">{feature.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed font-light">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Immersive 3D-like Data Visualization */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-12 rounded-[60px] border border-white/5 bg-white/[0.02] backdrop-blur-3xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
              
              <div className="relative z-10 space-y-10">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">Global Status</div>
                    <div className="text-2xl font-bold text-white">All Systems Nominal</div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse shadow-[0_0_20px_rgba(34,197,94,0.5)]" />
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                    <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                    <div className="text-[9px] font-bold uppercase tracking-widest text-white/30">Uptime</div>
                  </div>
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                    <div className="text-3xl font-bold text-white mb-1">20ms</div>
                    <div className="text-[9px] font-bold uppercase tracking-widest text-white/30">Avg Latency</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">Load Balancer Distribution</span>
                    <span className="text-xs font-mono text-blue-400">8.4k req/sec</span>
                  </div>
                  <div className="h-20 flex items-end gap-2 px-2">
                    {[40, 70, 45, 90, 65, 80, 50, 85, 60, 75, 40, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.05 }}
                        className="flex-1 bg-gradient-to-t from-blue-500/50 to-blue-400 rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <div className="flex-1 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-[10px] font-bold text-white/50 uppercase">Region: US-EAST-1</span>
                  </div>
                  <div className="flex-1 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    <span className="text-[10px] font-bold text-white/50 uppercase">Region: EU-WEST-2</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
