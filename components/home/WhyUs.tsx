"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Target, BarChart3, Users, Quote, CheckCircle2 } from "lucide-react";
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
    color: "text-fuchsia-400",
  },
  {
    title: "Intelligence First",
    description: "We integrate machine learning and autonomous intelligence at the core of every product.",
    icon: Target,
    color: "text-rose-400",
  },
  {
    title: "Scalable Infrastructure",
    description: "Designed to handle millions of requests without friction, powered by global edge technology.",
    icon: BarChart3,
    color: "text-indigo-400",
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
  {
    name: "Michael Chang",
    role: "CEO, Vertex Media",
    content: "Building with Integral was the best decision for our digital transformation. High performance at its peak.",
  },
];

export default function WhyUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="why-us" className="relative py-40 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start mb-40">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-purple-500 mb-8"
            >
              The Advantage
            </motion.div>
            
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-display text-5xl md:text-[80px] font-bold text-white mb-12 leading-[0.9] tracking-tight"
            >
              {"Building the".split(" ").map((word, i) => (
                <motion.span key={i} variants={itemVariants} className="inline-block mr-[0.2em]">{word}</motion.span>
              ))}
              <br />
              <motion.span variants={itemVariants} className="text-white/40 italic font-medium">Digital Edge.</motion.span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/40 font-light leading-relaxed mb-16 max-w-xl"
            >
              Elite engineering squad delivering technical dominance through speed, 
              security, and autonomous intelligence.
            </motion.p>
            
            <div className="space-y-6">
              {["Industrial-grade security", "Global edge distribution", "Zero-friction deployment"].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  <span className="text-[12px] uppercase tracking-widest font-bold text-white/60">{item}</span>
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
                className="group p-8 rounded-[40px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">{feature.title}</h4>
                <p className="text-xs text-white/30 leading-relaxed font-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Marquee Section */}
        <div className="relative mt-20 py-20 border-y border-white/5 bg-white/[0.01]">
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />
          
          <Marquee speed={60} className="gap-12">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-shrink-0 w-[400px] mx-6">
                <div className="glass p-10 rounded-[40px] border-white/5 h-full flex flex-col justify-between">
                  <div>
                    <Quote className="w-8 h-8 text-purple-500/40 mb-6" />
                    <p className="text-white/60 text-lg font-light leading-relaxed italic mb-8">
                      &quot;{t.content}&quot;
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">{t.name}</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">{t.role}</span>
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
