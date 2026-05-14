"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Layout, Cpu, Zap, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "High-performance web applications that merge stunning design with flawless technical execution.",
    icon: Globe,
    color: "from-blue-500/20 to-cyan-500/20",
    tags: ["React", "Next.js", "TypeScript", "Performance"],
  },
  {
    title: "SaaS Development",
    description: "Custom SaaS ecosystems engineered for rapid scale, secure data handling, and elite user experiences.",
    icon: Layout,
    color: "from-purple-500/20 to-pink-500/20",
    tags: ["Cloud Infrastructure", "API Design", "Security", "Scale"],
  },
  {
    title: "Machine Learning",
    description: "Integrating intelligent automation and predictive analytics into your core business operations.",
    icon: Cpu,
    color: "from-orange-500/20 to-red-500/20",
    tags: ["AI Integration", "Data Systems", "Automation", "LLMs"],
  },
  {
    title: "Automation Systems",
    description: "Eliminating operational friction through custom workflow automation and intelligent system design.",
    icon: Zap,
    color: "from-green-500/20 to-emerald-500/20",
    tags: ["Workflows", "Internal Tools", "Efficiency", "Scripting"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-40 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500 mb-6"
            >
              Capabilities
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-display text-4xl md:text-6xl font-bold text-white"
            >
              Engineering <br /> <span className="text-white/40 italic font-medium">Excellence.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-white/40 max-w-sm font-light leading-relaxed"
          >
            We don&apos;t just build websites. We engineer high-performance digital ecosystems 
            that capture market share and maximize ROI.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative h-[450px] rounded-[40px] border border-white/5 bg-white/[0.02] overflow-hidden p-12 flex flex-col justify-between hover:border-white/10 transition-all duration-700"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                    <service.icon className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors" />
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-700"
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                <h3 className="text-display text-3xl md:text-4xl font-bold text-white mb-6">
                  {service.title}
                </h3>
                <p className="text-white/40 text-lg font-light leading-relaxed max-w-sm group-hover:text-white/60 transition-colors">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[9px] uppercase tracking-widest font-bold text-white/30 group-hover:text-white/50 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Card Decoration */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/[0.02] rounded-full blur-3xl group-hover:bg-white/[0.05] transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
