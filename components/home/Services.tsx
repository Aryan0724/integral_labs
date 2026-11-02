"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Search, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import Link from "next/link";

interface ServicePillar {
  id: string;
  number: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  tagline: string;
  overview: string;
  problemsSolved: string[];
  deliverables: string[];
  businessImpact: string;
  badge: string;
}

const PILLARS: ServicePillar[] = [
  {
    id: "web-development",
    number: "01",
    icon: Code2,
    title: "Web Development",
    tagline: "High-Performance Modern Web Platforms & Headless Architecture",
    overview: "Our collective engineers blazing-fast, responsive web platforms and flagship digital products using Next.js, React, and modern edge architecture. Built for sub-second load times, total brand authority, and high-conversion commercial funnels.",
    problemsSolved: [
      "Sluggish legacy websites causing visitor drop-off and high bounce rates",
      "Cluttered, unmaintainable frontend codebases that hinder rapid feature releases",
      "Inconsistent mobile experiences hurting conversions across devices"
    ],
    deliverables: [
      "Production-Ready Next.js & React Codebase",
      "Custom Component Design System & Responsive Layouts",
      "Edge Network Routing & Lightning Asset Pipeline",
      "Headless CMS, E-Commerce & Third-Party API Integrations"
    ],
    businessImpact: "Fast, reliable web platforms that establish immediate credibility and turn organic traffic into engaged prospects.",
    badge: "Development Pillar 01"
  },
  {
    id: "custom-software",
    number: "02",
    icon: Cpu,
    title: "Custom Software Development",
    tagline: "Scalable SaaS Applications, Custom Business Systems & APIs",
    overview: "When off-the-shelf software falls short, our engineering collective designs and deploys bespoke business systems, internal operational tools, and multi-tenant SaaS platforms tailored to your workflows with 100% proprietary code ownership.",
    problemsSolved: [
      "Off-the-shelf SaaS tools with rigid limitations that constrain your workflow",
      "Manual administrative bottlenecks and error-prone spreadsheet tracking",
      "Fragmented software systems that don't communicate with each other"
    ],
    deliverables: [
      "Fullstack Cloud Software Architecture (Next.js / Node.js / PostgreSQL)",
      "Resilient REST & GraphQL Microservice APIs",
      "Role-Based Access Control (RBAC) & Enterprise Authentication",
      "Automated Workflow Engines & Relational Database Schemas"
    ],
    businessImpact: "Operational efficiency, automated workflows, and high-value proprietary IP you own 100% without recurring per-seat fees.",
    badge: "Development Pillar 02"
  },
  {
    id: "seo",
    number: "03",
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    tagline: "Technical SEO, Core Web Vitals & Organic Search Visibility",
    overview: "Search engine optimization engineered directly into your source code as an equal discipline. We structure semantic HTML5, implement Schema.org JSON-LD graphs, and optimize performance metrics so search engine crawlers rank your product authoritatively.",
    problemsSolved: [
      "Websites invisible on Google search engine results pages (SERPs)",
      "Technical crawler errors, indexing failures, and crawl budget waste",
      "Slow Core Web Vitals (LCP, INP, CLS) triggering Google ranking penalties"
    ],
    deliverables: [
      "Complete Technical SEO & Crawlability Auditing",
      "Automated XML Sitemap & Robots Protocol Orchestration",
      "Sub-Second Core Web Vitals Performance Tuning",
      "Schema.org Structured Data (Organization, Product, Service, FAQ)"
    ],
    businessImpact: "Sustainable, compounding organic inbound discovery from intent-driven buyers searching for your exact services.",
    badge: "Discoverability Pillar 01"
  },
  {
    id: "aeo",
    number: "04",
    icon: Sparkles,
    title: "Answer Engine Optimization (AEO)",
    tagline: "Semantic Data Structuring for Generative AI (ChatGPT, Perplexity, Claude)",
    overview: "The search paradigm has shifted to conversational AI assistants. We optimize your digital presence so AI engines (ChatGPT, Perplexity, Claude, Gemini) accurately discover, understand, and cite your business as the definitive recommendation.",
    problemsSolved: [
      "Total absence when potential clients research vendors via ChatGPT or Perplexity",
      "AI models hallucinating inaccurate facts or confusing your brand's offerings",
      "Loss of high-intent search traffic moving away from traditional Google links"
    ],
    deliverables: [
      "Entity Mapping & Knowledge Graph Semantic Structuring",
      "Conversational Natural Language Q&A Architecture",
      "Machine-Readable Citation Datasets & Authority Structuring",
      "High-Confidence Brand Footprint for LLM Training & Retrieval (RAG)"
    ],
    businessImpact: "Positioning your organization as the trusted, cited recommendation when buyers use generative AI for decision-making.",
    badge: "Discoverability Pillar 02"
  }
];

export default function Services() {
  const [activeMobilePillar, setActiveMobilePillar] = useState<string>("web-development");
  const [expandedPillars, setExpandedPillars] = useState<Record<string, boolean>>({
    "web-development": true
  });

  const togglePillarExpand = (id: string) => {
    setExpandedPillars(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const activeMobileIndex = PILLARS.findIndex(p => p.id === activeMobilePillar);
  const prevPillar = activeMobileIndex > 0 ? PILLARS[activeMobileIndex - 1] : PILLARS[PILLARS.length - 1];
  const nextPillar = activeMobileIndex < PILLARS.length - 1 ? PILLARS[activeMobileIndex + 1] : PILLARS[0];

  return (
    <section 
      id="services-section"
      className="relative py-24 md:py-32 bg-slate-50/70 border-t border-slate-200/80"
    >
      <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-xs bg-blue-600 inline-block" />
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                What We Provide // Development &amp; Search As Co-Equals
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Collective Engineering &amp; Search Dominance Built as Equals
            </h2>
            
            <p className="text-base text-slate-600 mt-3.5 leading-relaxed max-w-[660px]">
              We don&apos;t separate building software from being discovered. Our collective develops high-performance web platforms and custom software systems while giving identical technical weight to SEO and Answer Engine Optimization (AEO) — delivering digital products that perform flawlessly and capture high-intent demand.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all group"
            >
              <span>Discuss Your Requirements</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* MOBILE VIEW: Compact Dropdown Menu & Quick Pills (Visible only on < lg screens) */}
        <div className="block lg:hidden mb-8">
          <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs mb-6">
            <label htmlFor="services-mobile-dropdown" className="text-[11px] font-mono uppercase font-bold text-slate-500 mb-2 block">
              Jump To Engineering Discipline:
            </label>
            <div className="relative mb-3">
              <select
                id="services-mobile-dropdown"
                value={activeMobilePillar}
                onChange={(e) => setActiveMobilePillar(e.target.value)}
                className="w-full appearance-none bg-slate-50 border border-slate-300 text-slate-900 font-bold text-xs py-3 px-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs cursor-pointer"
              >
                {PILLARS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.number}. {p.title} ({p.badge})
                  </option>
                ))}
                <option value="all">View All 4 Pillars (Compact Accordion)</option>
              </select>
              <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
            </div>

            {/* Quick-switch numbered tabs */}
            <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-100 rounded-xl">
              {PILLARS.map((p) => {
                const isSelected = activeMobilePillar === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveMobilePillar(p.id)}
                    className={`py-2 px-1 text-center rounded-lg text-[11px] font-mono font-bold transition-all ${
                      isSelected 
                        ? "bg-blue-600 text-white shadow-xs" 
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Pillar {p.number}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Render Mobile Pillar Cards (either single selected card or accordion list) */}
          <div className="space-y-6">
            {PILLARS.filter((p) => activeMobilePillar === "all" || p.id === activeMobilePillar).map((pillar) => {
              const Icon = pillar.icon;
              const isExpanded = !!expandedPillars[pillar.id];

              return (
                <div
                  key={pillar.id}
                  className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 block">
                          {pillar.badge}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-sm font-mono font-bold text-slate-400">
                      {pillar.number}
                    </span>
                  </div>

                  <div className="text-xs font-mono font-semibold text-slate-700 mb-2">
                    {pillar.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {pillar.overview}
                  </p>

                  {/* Accordion Toggle for Deliverables & Problems */}
                  <button
                    onClick={() => togglePillarExpand(pillar.id)}
                    className="w-full flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-xs font-bold text-blue-600 transition-colors cursor-pointer my-2"
                  >
                    <span>
                      {isExpanded ? "Hide Deliverables & Details" : `View Deliverables & Solved Problems (${pillar.deliverables.length})`}
                    </span>
                    <ChevronDown size={15} className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                  </button>

                  {/* Expandable Accordion Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pt-2"
                      >
                        {/* Problems Solved */}
                        <div className="mb-4 bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                          <div className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-500 mb-2">
                            Key Problems Addressed:
                          </div>
                          <ul className="space-y-1.5">
                            {pillar.problemsSolved.map((item, i) => (
                              <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                                <span className="text-red-500 text-xs shrink-0 mt-0.5">✕</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Deliverables */}
                        <div className="mb-4">
                          <div className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-500 mb-2">
                            Key Deliverables:
                          </div>
                          <ul className="space-y-1.5">
                            {pillar.deliverables.map((item, i) => (
                              <li key={i} className="text-xs text-slate-700 flex items-center gap-2 font-medium">
                                <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom Impact & Action */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 mt-3">
                    <div className="text-xs text-slate-500 leading-tight">
                      <span className="font-semibold text-slate-800">Impact: </span>
                      {pillar.businessImpact}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 shrink-0 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100"
                    >
                      <span>Inquire</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>

                  {/* Quick-Prev / Next Bar on Single View */}
                  {activeMobilePillar !== "all" && (
                    <div className="flex items-center justify-between pt-3 mt-4 border-t border-slate-100 text-[11px] font-mono">
                      <button
                        onClick={() => setActiveMobilePillar(prevPillar.id)}
                        className="text-slate-500 hover:text-blue-600 flex items-center gap-1 font-semibold cursor-pointer"
                      >
                        ← {prevPillar.title.split(" ")[0]}
                      </button>
                      <button
                        onClick={() => setActiveMobilePillar(nextPillar.id)}
                        className="text-blue-600 hover:text-blue-700 flex items-center gap-1 font-bold cursor-pointer"
                      >
                        {nextPillar.title.split(" ")[0]} →
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* DESKTOP VIEW: Pristine 2x2 Grid (Unchanged on >= lg screens) */}
        <div className="hidden lg:grid grid-cols-2 gap-6 sm:gap-8">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-8 shadow-xs hover:shadow-md hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Icon, Badge, Number */}
                  <div className="flex items-center justify-between mb-6 pb-5 border-b border-slate-100">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-2xs">
                        <Icon size={22} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 block mb-0.5">
                          {pillar.badge}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-sm font-mono font-bold text-slate-300 group-hover:text-blue-500 transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Tagline & Overview */}
                  <div className="text-xs font-mono font-semibold text-slate-700 mb-2.5">
                    {pillar.tagline}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {pillar.overview}
                  </p>

                  {/* Problems Solved */}
                  <div className="mb-6 bg-slate-50/80 rounded-xl p-4 border border-slate-100">
                    <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-slate-500 mb-2">
                      Key Problems Addressed:
                    </div>
                    <ul className="space-y-1.5">
                      {pillar.problemsSolved.map((item, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                          <span className="text-red-500 text-xs shrink-0 mt-0.5">✕</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="mb-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-slate-500 mb-2.5">
                      Key Deliverables:
                    </div>
                    <ul className="space-y-2">
                      {pillar.deliverables.map((item, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-center gap-2.5 font-medium">
                          <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Impact & Action */}
                <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-4">
                  <div className="text-xs text-slate-500 leading-tight">
                    <span className="font-semibold text-slate-800">Business Impact: </span>
                    {pillar.businessImpact}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 shrink-0 group-hover:gap-2 transition-all self-end sm:self-auto"
                  >
                    <span>Inquire</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SEO vs AEO Clarification Callout */}
        <div className="mt-10 rounded-2xl bg-blue-50/70 border border-blue-200/70 p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
              <Sparkles size={18} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-blue-950">
                Understanding the Difference: SEO vs. AEO
              </h4>
              <p className="text-xs text-blue-900/80 leading-relaxed mt-1 max-w-[800px]">
                <strong>Search Engine Optimization (SEO)</strong> organizes your site architecture and technical performance to rank on traditional search engine results (Google blue links). <strong>Answer Engine Optimization (AEO)</strong> structures entity relationships and conversational context so AI models (ChatGPT, Perplexity, Claude) synthesize and cite your business directly in natural language answers. We engineer both simultaneously.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 shrink-0 px-4 py-2 rounded-full bg-white border border-blue-200 shadow-2xs hover:shadow-xs transition-all"
          >
            <span>Ask us how it works</span>
            <ArrowRight size={13} />
          </Link>
        </div>

      </div>
    </section>
  );
}
