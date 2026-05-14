"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Zap, 
  Globe, 
  Shield, 
  Search, 
  Terminal, 
  Database, 
  Layers,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Digital Product Engineering",
    category: "ENGINEERING",
    icon: <Code2 className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-400",
    description: "Building high-performance, scalable web applications and SaaS platforms using modern architectural patterns.",
    capabilities: ["Next.js & React Systems", "Distributed Microservices", "Real-time Architecture", "Full-stack Excellence"]
  },
  {
    title: "Applied AI & Machine Intelligence",
    category: "INTELLIGENCE",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-purple-600 to-fuchsia-500",
    description: "Deploying custom LLM integrations, predictive models, and autonomous agents that drive real business value.",
    capabilities: ["Custom LLM Training", "Neural Infrastructure", "Data Intelligence", "Autonomous Agents"]
  },
  {
    title: "Industrial Automation Systems",
    category: "AUTOMATION",
    icon: <Zap className="w-8 h-8" />,
    color: "from-amber-500 to-orange-400",
    description: "Architecting complex workflow automations and infrastructure-as-code that eliminate operational bottlenecks.",
    capabilities: ["Workflow Orchestration", "CI/CD Automation", "Infrastructure Management", "Legacy Modernization"]
  },
  {
    title: "Cyber-Security & Data Sovereignty",
    category: "SECURITY",
    icon: <Shield className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-400",
    description: "Ensuring your digital assets are protected by military-grade security protocols and redundant fail-safes.",
    capabilities: ["Security Auditing", "Data Encryption", "Compliance Systems", "Zero Trust Architecture"]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <Terminal className="w-3 h-3 text-purple-500" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/50">Service Capabilities</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-display text-5xl md:text-8xl font-black text-white mb-10 leading-[0.9]"
          >
            THE <span className="text-gradient-purple italic">CAPABILITIES</span> <br />
            ECOSYSTEM.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/50 leading-relaxed max-w-2xl font-light tracking-tight"
          >
            We provide the technical horsepower required to scale ideas into industrial-grade digital empires.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative glass p-12 rounded-[50px] border-white/5 hover:border-purple-500/30 transition-all duration-700"
            >
              {/* Service Icon & Category */}
              <div className="flex justify-between items-start mb-12">
                <div className={`w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center group-hover:bg-gradient-to-br ${service.color} transition-all duration-700`}>
                  <div className="text-white group-hover:scale-110 transition-transform duration-700">
                    {service.icon}
                  </div>
                </div>
                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] pt-2">{service.category}</span>
              </div>

              {/* Content */}
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter group-hover:text-purple-400 transition-colors">{service.title}</h3>
              <p className="text-white/40 mb-10 text-lg leading-relaxed font-light tracking-tight">{service.description}</p>

              {/* Capabilities List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {service.capabilities.map((cap, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm text-white/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500/50" />
                    {cap}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link 
                href="/contact"
                className="inline-flex items-center gap-3 text-[10px] font-black text-white uppercase tracking-[0.3em] group/btn"
              >
                Inquire Deployment 
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Process CTA */}
        <div className="glass p-16 md:p-32 rounded-[80px] text-center border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-[0.05]" />
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-10 uppercase tracking-tighter leading-[0.9]">
              READY TO <br />
              <span className="text-gradient-purple italic">INDUSTRIALIZE?</span>
            </h2>
            <Link 
              href="/contact"
              className="h-24 bg-white text-black px-20 rounded-full flex items-center justify-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)]"
            >
              <span className="text-sm font-black uppercase tracking-widest">Execute Proposal</span>
              <Zap className="w-5 h-5 fill-black" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
