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
    <section className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Why Engineers Choose <br />
              <span className="text-muted-foreground">Integral Labs.</span>
            </h2>
            <p className="text-muted-foreground mb-12 max-w-lg">
              We bridge the gap between complex engineering and business growth. 
              Our systems are built for the future, ensuring your technology never 
              becomes a bottleneck.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full" />
            <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">System Health</span>
                  <span className="text-[10px] font-bold text-green-400">OPTIMAL</span>
                </div>
                
                <div className="space-y-4">
                  {[85, 92, 78, 95].map((val, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[10px] text-white/70">
                        <span>Cluster Node-0{i+1}</span>
                        <span>{val}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${val}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-white/40" 
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">99.9%</div>
                    <div className="text-[8px] uppercase tracking-widest text-white/30">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">&lt;50ms</div>
                    <div className="text-[8px] uppercase tracking-widest text-white/30">Latency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">256-bit</div>
                    <div className="text-[8px] uppercase tracking-widest text-white/30">Encryption</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
