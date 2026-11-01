"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Video, 
  TrendingUp, 
  Box, 
  ArrowUpRight, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink 
} from "lucide-react";
import Link from "next/link";

const DEPARTMENTS = [
  {
    id: "labs",
    name: "Integral Labs",
    tagline: "Software, Web & Search Architecture",
    role: "Core Engineering Division",
    description: "The flagship development division building high-performance web applications, bespoke SaaS platforms, and modern SEO/AEO search architectures.",
    icon: Code2,
    badge: "Active Division",
    capabilities: [
      "Custom Software Development",
      "Next.js Web Applications",
      "Technical SEO & Core Web Vitals",
      "Answer Engine Optimization (AEO)"
    ],
    href: "/",
    isCurrent: true,
  },
  {
    id: "media",
    name: "Integral Media",
    tagline: "Content, Brand & Visual Production",
    role: "Creative Media Division",
    description: "The multimedia production house crafting high-fidelity brand visual assets, cinematic product storytelling, and editorial content pipelines.",
    icon: Video,
    badge: "Media & Brand",
    capabilities: [
      "Brand Identity & Art Direction",
      "Cinematic Product Production",
      "Editorial Content Strategy",
      "Visual Design Systems"
    ],
    href: "https://integralgroups.in/",
  },
  {
    id: "marketing",
    name: "Integral Marketing",
    tagline: "Performance, Growth & Distribution",
    role: "Growth Acceleration Division",
    description: "The data-driven growth engine executing performance acquisition, conversion rate optimization (CRO), and multi-channel campaign scaling.",
    icon: TrendingUp,
    badge: "Growth & Ads",
    capabilities: [
      "Omnichannel Performance Ads",
      "Conversion Rate Optimization (CRO)",
      "Market Analytics & Attribution",
      "Growth Funnel Architecture"
    ],
    href: "https://integralgroups.in/",
  },
  {
    id: "products",
    name: "Department of Products",
    tagline: "Proprietary SaaS & Product Incubation",
    role: "Internal Venture Studio",
    description: "The proprietary technology incubator researching, developing, and deploying specialized in-house software products and SaaS applications.",
    icon: Box,
    badge: "SaaS Incubation",
    capabilities: [
      "Proprietary SaaS Engineering",
      "Intelligent Tooling Incubation",
      "API Platform Commercialization",
      "Specialized Product Experiments"
    ],
    href: "https://integralgroups.in/",
  },
];

export default function GroupsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-36 md:pt-44 pb-28 text-slate-900">
      <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-[800px] mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold mb-6 shadow-2xs select-none"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-blue-700">
              Parent Organization
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6"
          >
            Integral Groups.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal"
          >
            The parent multidisciplinary organization uniting software engineering, brand media, performance marketing, and proprietary product incubation.
          </motion.p>
        </div>

        {/* 4 Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {DEPARTMENTS.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between ${
                  dept.isCurrent
                    ? "bg-slate-900 text-white border-slate-800 shadow-lg ring-1 ring-blue-500/30"
                    : "bg-white text-slate-900 border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      dept.isCurrent 
                        ? "bg-blue-600 text-white shadow-xs" 
                        : "bg-blue-50 text-blue-600"
                    }`}>
                      <Icon size={22} />
                    </div>

                    <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1 rounded-full ${
                      dept.isCurrent
                        ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                        : "bg-slate-100 text-slate-600"
                    }`}>
                      {dept.badge}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold mb-1 ${dept.isCurrent ? "text-white" : "text-slate-900"}`}>
                    {dept.name}
                  </h3>
                  <div className={`text-xs font-mono font-medium mb-3.5 ${
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

                <div className={`pt-5 border-t ${
                  dept.isCurrent ? "border-slate-800" : "border-slate-100"
                }`}>
                  <div className={`text-[10px] font-mono uppercase tracking-wider font-bold mb-3 ${
                    dept.isCurrent ? "text-slate-400" : "text-slate-400"
                  }`}>
                    Capabilities:
                  </div>
                  <ul className="space-y-2 mb-6">
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
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>

                  {dept.isCurrent ? (
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span>Explore Labs Studio</span>
                      <ArrowRight size={13} />
                    </Link>
                  ) : (
                    <a
                      href={dept.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                    >
                      <span>Learn more</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Group Principles Callout */}
        <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-xs">
          <div className="max-w-[760px]">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold block mb-2">
              Group Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              Cross-Functional Depth with Surgical Focus
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal mb-8">
              Each entity within Integral Groups maintains dedicated leadership and distinct operational discipline. When a client partners with Integral Labs for custom software or search engineering, they gain the security of an expansive parent ecosystem capable of supporting production-grade media, market growth, and proprietary product scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
            <div>
              <div className="text-sm font-bold text-slate-900 mb-1">
                Engineering Integrity
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Zero-compromise code quality, strict security models, and total source code ownership.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold text-slate-900 mb-1">
                Organic & AI Discoverability
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Every platform is architected for both traditional search crawlers and conversational AI citations.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold text-slate-900 mb-1">
                Full-Lifecycle Growth
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Seamless transition from software deployment to performance marketing and visual storytelling.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
