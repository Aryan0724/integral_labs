"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Target, BarChart3, Users, Quote, CheckCircle2, Activity, Terminal } from "lucide-react";
import Marquee from "@/components/shared/Marquee";

const features = [
  {
    title: "Precision Engineering",
    description: "Every pixel and every line of code is architected for maximum performance and reliability.",
    icon: Shield,
    color: "text-purple-400",
  },
  {
    title: "Rapid Execution",
    description: "Our systems-driven approach allows us to deploy enterprise-grade platforms in record time.",
    icon: Zap,
    color: "text-blue-400",
  },
  {
    title: "Intelligence First",
    description: "We integrate machine learning and autonomous intelligence at the core of every product.",
    icon: Target,
    color: "text-fuchsia-400",
  },
  {
    title: "Scalable Infrastructure",
    description: "Designed to handle millions of requests without friction, powered by global edge technology.",
    icon: BarChart3,
    color: "text-emerald-400",
  },
];

const testimonials = [
  {
    name: "David Marcus",
    role: "CTO, Nexus Labs",
    content: "Integral Labs completely transformed our online presence. Their technical execution boosted our performance by 300%.",
  },
  {
    name: "Sarah Chen",
    role: "Founder, QuantFlow",
    content: "The most sophisticated engineering team we've ever partnered with. They don't just build, they innovate.",
  },
  {
    name: "James Wilson",
    role: "Director, Stellar Systems",
    content: "The level of precision and detail in their work is unmatched. A true technical partner for modern scale.",
  },
  {
    name: "Elena Rodriguez",
    role: "VP Eng, Atmos",
    content: "Speed, security, and intelligence. Integral delivered a platform that handled our growth seamlessly.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-48 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start mb-40">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
            >
              <Activity className="w-3 h-3 text-purple-500" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/50">The Advantage</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-display text-5xl md:text-[100px] font-black text-white mb-12 leading-[0.85] tracking-tighter uppercase"
            >
              BUILDING THE <br />
              <span className="text-gradient-purple italic font-medium">DIGITAL EDGE.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/40 font-light leading-relaxed mb-16 max-w-xl tracking-tight"
            >
              Elite engineering collective delivering technical dominance through 
              precision architecture, global-edge delivery, and AI-driven automation.
            </motion.p>
            
            <div className="space-y-8">
              {["Industrial-grade security", "Global edge distribution", "Zero-friction deployment"].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/10 transition-all">
                    <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  </div>
                  <span className="text-[12px] uppercase tracking-[0.4em] font-black text-white/40 group-hover:text-white transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group glass p-10 rounded-[50px] border-white/5 hover:border-purple-500/30 transition-all duration-700 shadow-2xl overflow-hidden"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-white group-hover:scale-110 transition-all duration-700">
                  <feature.icon className={`w-8 h-8 ${feature.color} group-hover:text-black transition-colors`} />
                </div>
                <h4 className="text-xl font-black uppercase tracking-tighter text-white mb-4 group-hover:text-purple-400 transition-colors">{feature.title}</h4>
                <p className="text-white/40 leading-relaxed font-light tracking-tight group-hover:text-white/60 transition-colors">{feature.description}</p>
                
                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-grid opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Marquee Section */}
        <div className="relative mt-20 py-24 border-y border-white/5 bg-white/[0.01]">
          <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
          <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />
          
          <Marquee speed={60} className="gap-12">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-shrink-0 w-[450px] mx-8">
                <div className="glass p-12 rounded-[50px] border-white/5 h-full flex flex-col justify-between group hover:border-purple-500/30 transition-all duration-700">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <Quote className="w-10 h-10 text-purple-500/20 group-hover:text-purple-500/40 transition-colors" />
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(s => <div key={s} className="w-1 h-1 bg-purple-500/50 rounded-full" />)}
                      </div>
                    </div>
                    <p className="text-white/60 text-xl font-light leading-relaxed italic mb-10 tracking-tight">
                      &quot;{t.content}&quot;
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center font-black text-white/20 text-xl border border-white/5 group-hover:border-purple-500/30 transition-all">
                       {t.name[0]}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] font-black uppercase tracking-[0.4em] text-white leading-none mb-2">{t.name}</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 leading-none">{t.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

