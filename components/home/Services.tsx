"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Layout, Cpu, Zap, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Web Development",
    description: "Modern scalable websites, dashboards, portals, and web platforms.",
    icon: Globe,
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "SaaS Development",
    description: "Custom SaaS systems, startup MVPs, subscription platforms, and operational tools.",
    icon: Layout,
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  {
    title: "Machine Learning",
    description: "AI-powered systems, analytics, predictive features, and intelligent integrations.",
    icon: Cpu,
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-400",
  },
  {
    title: "Automation Systems",
    description: "Workflow automation, AI agents, backend systems, and operational infrastructure.",
    icon: Zap,
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
  },
];

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-2xl",
        service.color
      )} />
      
      <div className="relative h-full p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm group-hover:border-white/20 group-hover:bg-white/5 transition-all duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
          <ArrowUpRight className="w-6 h-6 text-white/50" />
        </div>

        <div className="flex flex-col h-full">
          <div className={cn(
            "w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500",
            service.iconColor
          )}>
            <service.icon className="w-7 h-7" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
          <p className="text-white/50 leading-relaxed mb-8 font-light">
            {service.description}
          </p>

          <div className="mt-auto pt-8 border-t border-white/5">
            <button className="text-sm font-bold text-white/40 group-hover:text-white transition-colors flex items-center gap-2">
              Learn More
              <div className="w-0 group-hover:w-8 h-[1px] bg-white/50 transition-all duration-500" />
            </button>
          </div>
        </div>
        
        {/* Animated Background Pattern */}
        <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-white/[0.02] rounded-full blur-3xl group-hover:bg-white/[0.05] transition-colors duration-700" />
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative z-20 py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-4"
            >
              Capabilities
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none"
            >
              Engineering <span className="text-white/30">Intelligence.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-sm text-lg font-light leading-relaxed"
          >
            We build the systems that power modern businesses, from high-performance web apps to intelligent AI automation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
