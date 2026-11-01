"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Search, 
  Sparkles, 
  Cloud, 
  Palette, 
  ArrowRight, 
  CheckCircle2, 
  Globe 
} from "lucide-react";
import Link from "next/link";

const detailedCapabilities = [
  {
    id: "web-development",
    icon: Code2,
    title: "Web Development & Digital Platforms",
    subtitle: "High-Performance Next.js & Headless Architecture",
    description: "We collectively engineer blazing-fast, responsive web platforms and digital flagship products utilizing Next.js, React, and modern CSS architecture. Built for sub-second load times, total brand authority, and seamless user conversion.",
    deliverables: [
      "Production-ready Next.js 16 & React 19 web applications",
      "Custom component design systems & fluid responsive layouts",
      "Edge network routing, asset optimization & sub-second TTFB",
      "Headless CMS, payment processing & third-party API integrations",
      "Complete WCAG 2.1 AA accessibility & semantic HTML auditing"
    ],
    techStack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Edge Networks"]
  },
  {
    id: "custom-software",
    icon: Cpu,
    title: "Custom Software & SaaS Development",
    subtitle: "Scalable Cloud SaaS & Tailored Business Systems",
    description: "When off-the-shelf software falls short, our engineering collective designs and builds bespoke business systems, internal operational tools, and multi-tenant SaaS platforms tailored to your exact workflows with 100% proprietary code ownership.",
    deliverables: [
      "Fullstack cloud architecture (Next.js / Node.js / PostgreSQL)",
      "Resilient RESTful & GraphQL microservice APIs",
      "Multi-tenant schema design, relational indexing & data isolation",
      "Role-based access control (RBAC) & enterprise session security",
      "Automated workflow engines & administrative analytics dashboards"
    ],
    techStack: ["PostgreSQL", "Node.js", "TypeScript", "Prisma", "Docker", "REST / GraphQL", "Redis"]
  },
  {
    id: "technical-seo",
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    subtitle: "Technical SEO, Core Web Vitals & Organic Search Visibility",
    description: "Technical search optimization engineered directly into your source code as an equal discipline. We structure semantic HTML5, implement Schema.org JSON-LD graphs, and optimize performance metrics so search engine crawlers rank your pages authoritatively.",
    deliverables: [
      "Comprehensive technical SEO, crawlability & indexation auditing",
      "Sub-second Core Web Vitals optimization (LCP, INP, CLS)",
      "Automated XML sitemap & robots protocol orchestration",
      "Schema.org structured data (Organization, SoftwareApplication, FAQ)",
      "Canonical link routing, Open Graph, and Twitter metadata automation"
    ],
    techStack: ["Schema.org", "JSON-LD", "Core Web Vitals", "XML Sitemaps", "Google Search Console", "Lighthouse"]
  },
  {
    id: "aeo-ai-search",
    icon: Sparkles,
    title: "Answer Engine Optimization (AEO)",
    subtitle: "Semantic Data Structuring for Generative AI (ChatGPT, Perplexity, Claude)",
    description: "The search paradigm has evolved to generative AI assistants. We optimize your digital presence so AI engines (ChatGPT, Perplexity, Claude, Gemini) accurately discover, understand, and cite your business as the definitive recommendation.",
    deliverables: [
      "Entity mapping & knowledge graph semantic structuring",
      "Conversational natural language Q&A and documentation architecture",
      "Machine-readable citation datasets & authority verification",
      "High-confidence brand footprint for LLM retrieval (RAG) & AI indexing",
      "Periodic generative AI citation monitoring & citation gap analysis"
    ],
    techStack: ["Knowledge Graphs", "Entity Linking", "Perplexity Index", "ChatGPT Search", "Claude Citations", "RAG Semantics"]
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    subtitle: "Resilient Deployment & Edge Routing",
    description: "We configure zero-downtime deployment pipelines, containerized environments, and global edge routing that ensure your platform remains fast, secure, and available across all continents.",
    deliverables: [
      "CI/CD deployment pipelines on Vercel & AWS",
      "Docker containerization for reproducible environments",
      "Global CDN caching & SSL/TLS certificate automation",
      "Application performance monitoring & real-time alerting",
      "Database backup automation & disaster recovery plans"
    ],
    techStack: ["Docker", "AWS", "Vercel", "Cloudflare", "GitHub Actions", "Sentry", "PostgreSQL"]
  },
  {
    id: "ui-ux",
    icon: Palette,
    title: "UI/UX Design Systems & Micro-Interactions",
    subtitle: "Digital Design Systems & Tactile Ergonomics",
    description: "Technical software does not have to be cumbersome. We craft bespoke design systems with systematic color tokens, fluid typography, and cinematic motion design that turn complex tasks into joyful user experiences.",
    deliverables: [
      "Complete Figma component libraries & tokens",
      "High-fidelity desktop & mobile interactive wireframes",
      "Fluid micro-interactions and layout transitions",
      "WCAG 2.1 AA accessibility & semantic HTML auditing",
      "Cross-device responsive design verification"
    ],
    techStack: ["Figma", "Design Tokens", "Framer Motion", "Tailwind v4", "Lucide", "a11y Standards"]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-36 pb-24 text-slate-900">
      <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Page Header */}
        <div className="max-w-[780px] mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 bg-blue-50/70 mb-6"
          >
            <Sparkles size={13} className="text-blue-600" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-blue-700 font-bold">
              What We Provide // Engineering &amp; Search Authority
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.02] mb-6"
          >
            High-Impact Development &amp; Search Dominance.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed font-normal"
          >
            Integral Labs provides end-to-end digital creation with equal weight given to code and discoverability. We architect high-performance web applications and custom software platforms while engineering deep Technical SEO and Answer Engine Optimization (AEO) — delivering digital products that perform flawlessly and capture high-intent demand.
          </motion.p>
        </div>

        {/* Detailed Services Vertical Stack */}
        <div className="space-y-10 mb-24">
          {detailedCapabilities.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-3xl border border-slate-200/90 bg-slate-50/60 p-8 sm:p-12 hover:bg-white hover:border-blue-400/60 hover:shadow-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-start"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
                      <Icon size={26} />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest font-bold block">
                        0{index + 1} // {service.subtitle}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-base text-slate-600 leading-relaxed font-normal mb-8">
                    {service.description}
                  </p>

                  <div className="pt-6 border-t border-slate-200/80">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold block mb-3">
                      Technology Ecosystem
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-3 py-1 rounded-lg bg-white text-slate-700 border border-slate-200 shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Deliverables & Action */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between h-full">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 font-bold block mb-4">
                      Core Phase Deliverables
                    </span>
                    <div className="space-y-3 mb-8">
                      {service.deliverables.map((deliv) => (
                        <div key={deliv} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <span>Scope {service.title}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center rounded-3xl border border-slate-200 bg-slate-50 p-12 max-w-[800px] mx-auto shadow-xs">
          <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Have an unlisted requirement?</h3>
          <p className="text-slate-600 text-base max-w-[500px] mx-auto mb-8 font-normal leading-relaxed">
            We architect bespoke solutions across diverse programming languages, custom neural pipelines, and scalable database topologies.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            <span>Consult With Our Engineering Team</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
