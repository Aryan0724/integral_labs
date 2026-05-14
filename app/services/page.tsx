"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Zap, 
  Shield, 
  ArrowUpRight,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "SaaS & Product Systems",
    category: "Engineering",
    icon: <Code2 className="w-5 h-5 text-[#6366f1]" />,
    description: "Building high-performance, scalable web applications and SaaS platforms using modern architectural patterns and robust type-safety.",
    capabilities: ["Next.js & React Systems", "Distributed Microservices", "Real-time Architecture", "Full-stack Excellence"]
  },
  {
    title: "Applied Intelligence",
    category: "Intelligence",
    icon: <Cpu className="w-5 h-5 text-[#6366f1]" />,
    description: "Deploying custom LLM integrations, predictive models, and autonomous agents that drive real business value and operational efficiency.",
    capabilities: ["Custom LLM Training", "Neural Infrastructure", "Data Intelligence", "Autonomous Agents"]
  },
  {
    title: "Automation Infrastructure",
    category: "Automation",
    icon: <Zap className="w-5 h-5 text-[#6366f1]" />,
    description: "Architecting complex workflow automations and infrastructure-as-code that eliminate operational bottlenecks and human error.",
    capabilities: ["Workflow Orchestration", "CI/CD Automation", "Infrastructure Management", "Legacy Modernization"]
  },
  {
    title: "Interface Engineering",
    category: "UX/UI",
    icon: <Shield className="w-5 h-5 text-[#6366f1]" />,
    description: "Premium frontend engineering and design systems built for modern usability, performance, and cross-platform consistency.",
    capabilities: ["Design System Ops", "Motion Engineering", "Accessibility Systems", "Product Strategy"]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      {/* Subtle background */}
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-[600px] mb-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge mb-6"
          >
            Studio Capabilities
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="text-display text-[40px] sm:text-[56px] text-white mb-8 leading-[1.1]"
          >
            Engineering
            <br />
            Modern Systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-[16px] text-[#888] leading-[1.8]"
          >
            We provide the technical horsepower and product thinking required 
            to scale software systems from initial concept to industrial-grade deployment.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group surface-2 p-10 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-10">
                <div className="w-12 h-12 rounded-xl bg-[#111] border border-white/8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <span className="text-[11px] font-medium text-[#444] uppercase tracking-wider pt-2">{service.category}</span>
              </div>

              {/* Content */}
              <h3 className="text-[20px] font-semibold text-white mb-4 tracking-tight group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-[14px] text-[#666] mb-8 leading-[1.7]">{service.description}</p>

              {/* Capabilities List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {service.capabilities.map((cap, j) => (
                  <div key={j} className="flex items-center gap-2.5 text-[12px] text-[#555] group-hover:text-[#888] transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6366f1]/40" />
                    {cap}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link 
                href="/contact"
                className="btn-secondary py-2.5 px-6 text-[12px] group/btn"
              >
                Inquire Deployment 
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Final CTA - Minimalist */}
        <div className="relative rounded-2xl border border-white/6 bg-[#0d0d0d] p-12 md:p-24 text-center overflow-hidden">
          <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-display text-[32px] md:text-[44px] text-white mb-8 leading-[1.1]">
              Ready to Build Better?
            </h2>
            <Link 
              href="/contact"
              className="btn-primary py-3 px-12 text-[14px]"
            >
              Start A Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
