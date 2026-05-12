"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Globe, Layout, Cpu, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Modern scalable websites, dashboards, portals, and web platforms.",
    icon: Globe,
    problem: "Outdated, slow websites that fail to convert traffic into revenue.",
    capabilities: ["React/Next.js Architecture", "Performance Optimization", "Scalable Infrastructure"],
    outcomes: "High-speed, SEO-optimized platforms that deliver measurable growth.",
  },
  {
    title: "SaaS Development",
    description: "Custom SaaS systems, startup MVPs, subscription platforms, and operational tools.",
    icon: Layout,
    problem: "Generic software that doesn't scale with your business logic or user base.",
    capabilities: ["Full-Stack Engineering", "Subscription Systems", "Multi-tenant Architecture"],
    outcomes: "Production-ready SaaS platforms built for rapid scale and reliability.",
  },
  {
    title: "Machine Learning",
    description: "AI-powered systems, analytics, predictive features, and intelligent integrations.",
    icon: Cpu,
    problem: "Static data that isn't being leveraged for intelligent decision making.",
    capabilities: ["LLM Integrations", "Predictive Analytics", "Data Engineering Pipelines"],
    outcomes: "Intelligent systems that automate insights and drive efficiency.",
  },
  {
    title: "Automation Systems",
    description: "Workflow automation, AI agents, backend systems, and operational infrastructure.",
    icon: Zap,
    problem: "Manual repetitive tasks draining your team's time and resources.",
    capabilities: ["Workflow Orchestration", "AI Agent Development", "API Integrations"],
    outcomes: "Autonomous systems that handle operations while you sleep.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Engineering Excellence. <br />
            <span className="text-muted-foreground">Tailored for Modern Scale.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            We don&apos;t build generic websites. We engineer high-performance systems 
            designed to solve complex business problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group premium-card"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-6 pt-6 border-t border-white/5">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">The Problem</div>
                  <p className="text-sm text-white/70">{service.problem}</p>
                </div>
                
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">Capabilities</div>
                  <div className="flex flex-wrap gap-2">
                    {service.capabilities.map((cap) => (
                      <span key={cap} className="text-[11px] px-2 py-1 rounded bg-white/5 border border-white/10 text-white/60">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">Outcome</div>
                  <p className="text-sm text-white font-medium">{service.outcomes}</p>
                </div>

                <button className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all pt-4">
                  Discuss {service.title}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
