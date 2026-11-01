"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Video, 
  TrendingUp, 
  Box, 
  ArrowUpRight, 
  Layers
} from "lucide-react";
import Link from "next/link";

interface Department {
  id: string;
  name: string;
  tagline: string;
  focus: string;
  description: string;
  badge: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  capabilities: string[];
  isCurrent?: boolean;
}

const DEPARTMENTS: Department[] = [
  {
    id: "labs",
    name: "Integral Labs",
    tagline: "Software, Web & Search Engineering",
    focus: "Core Development Division",
    description: "The dedicated engineering division building high-performance web applications, bespoke SaaS platforms, and modern SEO/AEO search architectures.",
    badge: "Current Division",
    icon: Code2,
    capabilities: [
      "Custom Software Development",
      "Next.js Web Applications",
      "Technical SEO & Core Web Vitals",
      "Answer Engine Optimization (AEO)"
    ],
    isCurrent: true,
  },
  {
    id: "media",
    name: "Integral Media",
    tagline: "Content, Brand & Visual Production",
    focus: "Creative Media Division",
    description: "The multimedia production house crafting high-fidelity brand visual assets, cinematic product storytelling, and editorial content pipelines.",
    badge: "Media & Brand",
    icon: Video,
    capabilities: [
      "Brand Identity & Art Direction",
      "Cinematic Product Production",
      "Editorial Content Strategy",
      "Visual Design Systems"
    ],
  },
  {
    id: "marketing",
    name: "Integral Marketing",
    tagline: "Performance, Growth & Distribution",
    focus: "Growth Acceleration Division",
    description: "The data-driven growth engine executing performance acquisition, conversion rate optimization (CRO), and multi-channel campaign scaling.",
    badge: "Growth & Ads",
    icon: TrendingUp,
    capabilities: [
      "Omnichannel Performance Ads",
      "Conversion Rate Optimization (CRO)",
      "Market Analytics & Attribution",
      "Growth Funnel Architecture"
    ],
  },
  {
    id: "products",
    name: "Department of Products",
    tagline: "Proprietary SaaS & Product Incubation",
    focus: "Internal Venture Studio",
    description: "The proprietary technology incubator researching, developing, and deploying specialized in-house software products and SaaS applications.",
    badge: "SaaS Incubation",
    icon: Box,
    capabilities: [
      "Proprietary SaaS Engineering",
      "Intelligent Tooling Incubation",
      "API Platform Commercialization",
      "Specialized Product Experiments"
    ],
  },
];

export default function Ecosystem() {
  return (
    <section 
      id="ecosystem"
      className="py-24 md:py-32 bg-white border-t border-slate-200/80 relative overflow-hidden"
    >
      <div className="container max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-xs bg-blue-600 inline-block" />
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                Parent Organization
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              The Integral Groups Ecosystem
            </h2>
            
            <p className="text-base text-slate-600 mt-3.5 leading-relaxed max-w-[660px]">
              Integral Labs is the custom software engineering and digital discoverability division of{" "}
              <strong className="text-slate-900 font-semibold">Integral Groups</strong>. Our clients benefit from the combined multidisciplinary strength of dedicated media, performance marketing, and product development units.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/groups"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-xs font-mono font-semibold text-slate-700 transition-all shadow-2xs"
            >
              <span>Explore Organization</span>
              <ArrowUpRight size={14} className="text-blue-600" />
            </Link>
          </div>
        </div>

        {/* 4-Card Ecosystem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEPARTMENTS.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`rounded-2xl p-6.5 border transition-all duration-300 flex flex-col justify-between ${
                  dept.isCurrent
                    ? "bg-slate-900 text-white border-slate-800 shadow-md ring-1 ring-blue-500/30"
                    : "bg-slate-50/70 hover:bg-white text-slate-900 border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-xs"
                }`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      dept.isCurrent 
                        ? "bg-blue-600 text-white shadow-xs" 
                        : "bg-white text-blue-600 border border-slate-200/80 shadow-2xs"
                    }`}>
                      <Icon size={20} />
                    </div>

                    <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1 rounded-full ${
                      dept.isCurrent
                        ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                        : "bg-slate-200/70 text-slate-600"
                    }`}>
                      {dept.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className={`text-lg font-bold mb-1 ${dept.isCurrent ? "text-white" : "text-slate-900"}`}>
                    {dept.name}
                  </h3>
                  <div className={`text-[11px] font-mono font-medium mb-3.5 ${
                    dept.isCurrent ? "text-blue-400" : "text-blue-600"
                  }`}>
                    {dept.tagline}
                  </div>

                  <p className={`text-xs leading-relaxed mb-6 font-normal ${
                    dept.isCurrent ? "text-slate-300" : "text-slate-600"
                  }`}>
                    {dept.description}
                  </p>
                </div>

                {/* Capabilities list */}
                <div className={`pt-4 border-t ${
                  dept.isCurrent ? "border-slate-800" : "border-slate-200/70"
                }`}>
                  <div className={`text-[10px] font-mono uppercase tracking-wider font-bold mb-2.5 ${
                    dept.isCurrent ? "text-slate-400" : "text-slate-400"
                  }`}>
                    Capabilities:
                  </div>
                  <ul className="space-y-1.5">
                    {dept.capabilities.map((cap) => (
                      <li 
                        key={cap} 
                        className={`text-xs flex items-center gap-2 ${
                          dept.isCurrent ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                          dept.isCurrent ? "bg-blue-400" : "bg-blue-600"
                        }`} />
                        <span className="leading-tight">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Synergy Banner */}
        <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200/80 p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-blue-700 flex items-center justify-center shrink-0">
              <Layers size={18} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Connected Execution Across The Group
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                From bespoke codebases to high-ranking organic search, visual identity to audience acquisition — our ecosystem provides full digital lifecycle capabilities.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700 shrink-0 group"
          >
            <span>Discuss your engagement</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
