"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Code2, 
  Palette, 
  Smartphone, 
  Rocket, 
  Share2, 
  ArrowRight,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

interface ServiceCard {
  number: string;
  id: string;
  icon: any;
  title: string;
  description: string;
  tags: string[];
}

const servicesData: ServiceCard[] = [
  {
    number: "01",
    id: "ai-ml",
    icon: Sparkles,
    title: "AI / ML Development",
    description: "Build intelligent systems with cutting-edge machine learning.",
    tags: ["Predictive Analytics", "LLM & RAG Pipelines", "Automated Vision"]
  },
  {
    number: "02",
    id: "custom-software",
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored solutions for your business needs.",
    tags: ["Custom SaaS Platforms", "Fullstack Web Apps", "API Microservices"]
  },
  {
    number: "03",
    id: "ui-ux",
    icon: Palette,
    title: "UI/UX Design",
    description: "Create intuitive and engaging digital experiences.",
    tags: ["Design Systems", "Interactive Prototypes", "Accessible UX"]
  },
  {
    number: "04",
    id: "mobile-dev",
    icon: Smartphone,
    title: "Mobile Development",
    description: "Build powerful mobile applications for iOS and Android.",
    tags: ["Cross-Platform Flutter/React Native", "Native iOS & Android", "Offline-first"]
  },
  {
    number: "05",
    id: "mvp-dev",
    icon: Rocket,
    title: "MVP Development",
    description: "Launch your idea with a lean and scalable MVP.",
    tags: ["Rapid Prototyping", "Lean Architecture", "Fast Time-to-Market"]
  },
  {
    number: "06",
    id: "software-consulting",
    icon: Share2,
    title: "Software Consulting",
    description: "Get expert guidance on your technology strategy.",
    tags: ["Architecture Audits", "DevOps & Cloud Scaling", "Security Hardening"]
  }
];

export default function Services() {
  return (
    <section 
      id="services-section"
      className="relative py-24 md:py-32 bg-slate-50/60 border-t border-slate-200/80"
    >
      <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 inline-block" />
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Our Software Development Services
            </h2>
            <p className="text-base text-slate-500 mt-3 max-w-[620px]">
              Comprehensive software development services to help your business grow and innovate.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors shrink-0 group"
          >
            <span>View All Services</span>
            <ExternalLink size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* 3x2 Grid of Clean White Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-2xl border border-slate-200/80 p-7 shadow-xs hover:shadow-md hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top row with icon and sequence number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-blue-500 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Bullet Tags */}
                  <ul className="space-y-1.5 mb-8">
                    {service.tags.map((tag) => (
                      <li key={tag} className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors" />
                        <span>{tag}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn more bottom link */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors mt-auto group-hover:gap-2 duration-200"
                >
                  <span>Learn more</span>
                  <ArrowRight size={13} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
