"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  ShoppingBag, 
  Palette, 
  Zap, 
  Cloud, 
  ArrowRight, 
  CheckCircle2,
  Sparkles,
  LucideIcon
} from "lucide-react";
import Link from "next/link";

interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables: string[];
  tags: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: "web-saas",
    icon: Code2,
    title: "Custom Web & SaaS Development",
    description: "End-to-end engineering of scalable web applications, enterprise SaaS architectures, and high-load backend services.",
    deliverables: [
      "Custom SaaS platforms & client dashboards",
      "Next.js App Router fullstack architectures",
      "High-throughput REST & GraphQL APIs",
      "Database schema design & query optimization"
    ],
    tags: ["Next.js", "React 19", "TypeScript", "PostgreSQL", "Node.js"]
  },
  {
    id: "ai-ml",
    icon: Cpu,
    title: "AI / ML & Intelligent Systems",
    description: "Integrating intelligent machine learning models, predictive engines, and generative AI pipelines into business systems.",
    deliverables: [
      "Custom ML regression & predictive forecasting",
      "LLM integration & retrieval-augmented generation (RAG)",
      "Automated document & media extraction pipelines",
      "Edge model inference & latency optimization"
    ],
    tags: ["Python", "FastAPI", "PyTorch", "Scikit-Learn", "Vector DBs"]
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "E-Commerce & Digital Storefronts",
    description: "Speed-optimized shopping platforms and custom digital storefronts engineered for high conversion rates and fluid user checkouts.",
    deliverables: [
      "Headless e-commerce & micro-storefronts",
      "Real-time catalog search & inventory syncing",
      "Custom payment gateway & Stripe integrations",
      "Cart checkout friction elimination"
    ],
    tags: ["E-Commerce", "Stripe", "Next.js", "Tailwind CSS", "Redis"]
  },
  {
    id: "ui-ux",
    icon: Palette,
    title: "UI/UX Design Systems & Motion",
    description: "Bespoke digital design systems, user journey architectures, and fluid micro-interactions that elevate technical software.",
    deliverables: [
      "Component libraries & tokenized design systems",
      "High-fidelity interactive prototyping",
      "Cinematic motion design & micro-interactions",
      "WCAG 2.1 AA accessibility auditing"
    ],
    tags: ["Figma", "Design Systems", "Framer Motion", "Tailwind v4", "a11y"]
  },
  {
    id: "automation",
    icon: Zap,
    title: "Intelligent Workflow Automation",
    description: "Robust automation pipelines and webhook networks that connect operational tools and streamline repetitive manual processes.",
    deliverables: [
      "Self-healing cron & background job networks",
      "Cross-platform API & webhook integrations",
      "Automated notification & alerting dispatchers",
      "Operational ETL & data transformation pipes"
    ],
    tags: ["Automation", "Webhooks", "Queues", "Serverless", "APIs"]
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    title: "Cloud Architecture & DevOps",
    description: "Resilient server infrastructure, zero-downtime CI/CD workflows, and containerized deployments tuned for maximum uptime.",
    deliverables: [
      "Multi-region edge deployment configurations",
      "Docker containerization & orchestration",
      "Real-time telemetry, APM & error tracking",
      "Infrastructure security audits & hardening"
    ],
    tags: ["Docker", "AWS", "Cloudflare Edge", "CI/CD", "Security"]
  }
];

export default function Services() {
  const [activeHover, setActiveHover] = useState<string | null>(null);

  return (
    <section 
      id="services-section"
      className="relative py-28 md:py-36 overflow-hidden bg-transparent border-t border-white/[0.05]"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-purple-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Section Header (Zentix benchmark layout) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-[650px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-purple-400">
                Core Capabilities
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[38px] sm:text-[54px] md:text-[62px] text-white tracking-tight leading-[1.0]"
            >
              Engineering Services Built For{" "}
              <span className="italic font-light text-white/50">Modern Demands.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-[380px]"
          >
            <p className="text-[14px] sm:text-[15px] text-white/50 leading-relaxed font-light mb-4">
              We combine robust system architecture with refined interface design to build software that scales reliably under heavy operational load.
            </p>
            <Link 
              href="/services" 
              className="inline-flex items-center gap-1.5 text-[11px] font-mono text-purple-400 hover:text-purple-300 uppercase tracking-wider font-bold transition-colors"
            >
              <span>Explore Full Capabilities</span>
              <ArrowRight size={13} />
            </Link>
          </motion.div>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const isHovered = activeHover === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setActiveHover(service.id)}
                onMouseLeave={() => setActiveHover(null)}
                className={`group relative rounded-2xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
                  isHovered 
                    ? "bg-[#121212] border-purple-500/30 shadow-xl shadow-purple-950/20 -translate-y-1" 
                    : "bg-[#0b0b0b]/80 border-white/[0.07] hover:border-white/20"
                }`}
              >
                <div>
                  {/* Top Bar: Icon & Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                      <Icon size={22} />
                    </div>
                    <span className="font-mono text-[11px] text-white/20 tracking-widest">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-[20px] font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-white/50 leading-relaxed font-light mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Deliverables */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 block mb-2">
                      Key Deliverables
                    </span>
                    {service.deliverables.map((deliv) => (
                      <div key={deliv} className="flex items-start gap-2 text-[12px] text-white/70">
                        <CheckCircle2 size={13} className="text-purple-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tags & Link */}
                <div className="pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-white/40 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono text-white/50 group-hover:text-purple-300 uppercase tracking-wider font-semibold transition-colors"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6 sm:p-8 border border-white/10 bg-gradient-to-r from-purple-950/20 via-[#0e0e0e] to-purple-950/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
              <Sparkles size={20} />
            </div>
            <div>
              <h4 className="text-[16px] font-bold text-white tracking-tight">
                Need a custom architectural evaluation?
              </h4>
              <p className="text-[13px] text-white/40 font-light">
                We review technical constraints, tech stack suitability, and delivery scopes prior to contract signing.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="btn-sweep btn-sweep-primary px-6 py-3 text-[11px] font-bold tracking-[0.12em] uppercase shrink-0 w-full md:w-auto text-center"
          >
            <span>Book Scope Review</span>
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
