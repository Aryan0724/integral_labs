"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Target, BarChart3, Users, ZapIcon } from "lucide-react";

const features = [
  {
    title: "Precision Engineering",
    description: "Every pixel and every line of code is architected for maximum performance and reliability.",
    icon: Shield,
    color: "text-blue-400",
  },
  {
    title: "Rapid Execution",
    description: "Our systems-driven approach allows us to deploy enterprise-grade platforms in record time.",
    icon: Zap,
    color: "text-yellow-400",
  },
  {
    title: "Intelligence First",
    description: "We integrate machine learning and automation at the core of every product we build.",
    icon: Target,
    color: "text-purple-400",
  },
  {
    title: "Scalable Infrastructure",
    description: "Designed to handle millions of requests without breaking a sweat, powered by modern edge technology.",
    icon: BarChart3,
    color: "text-cyan-400",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-40 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500 mb-8"
            >
              Why Integral
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-display text-4xl md:text-7xl font-bold text-white mb-10 leading-tight"
            >
              Building the <br /> <span className="text-white/40 italic font-medium">Digital Edge.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-white/40 font-light leading-relaxed mb-12"
            >
              Traditional agencies are bloated and slow. We operate as an elite engineering 
              squad, delivering technical dominance through speed, security, and intelligence.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white">{feature.title}</h4>
                  <p className="text-xs text-white/30 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Immersive Card Stack */}
            <div className="relative aspect-square max-w-md mx-auto">
               <motion.div 
                animate={{ rotate: [0, 5, 0], y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 glass rounded-[60px] border-white/5 z-30 flex items-center justify-center overflow-hidden p-12"
               >
                  <div className="absolute inset-0 bg-grid opacity-[0.05]" />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <ZapIcon className="w-16 h-16 text-blue-500 mb-8" />
                    <span className="text-[10px] font-mono tracking-[0.5em] text-white/20 uppercase mb-4">Core_Protocol</span>
                    <h3 className="text-3xl font-bold text-white uppercase italic">Ultra_Fast</h3>
                  </div>
               </motion.div>
               <motion.div 
                animate={{ rotate: [0, -3, 0], x: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute inset-0 glass rounded-[60px] border-white/5 z-20 translate-x-8 translate-y-8 opacity-40 scale-95"
               />
               <motion.div 
                animate={{ rotate: [0, 2, 0], x: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute inset-0 glass rounded-[60px] border-white/5 z-10 translate-x-16 translate-y-16 opacity-10 scale-90"
               />
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="glass p-12 md:p-24 rounded-[80px] border-white/5 relative overflow-hidden text-center">
           <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
           <div className="relative z-10 max-w-4xl mx-auto">
              <Users className="w-12 h-12 text-white/20 mx-auto mb-10" />
              <h3 className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-12 italic">
                &quot;Integral Labs completely transformed our online presence. Their technical execution 
                boosted our platform performance by 300% within the first month.&quot;
              </h3>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">David Marcus</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">CTO, Nexus Labs</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
