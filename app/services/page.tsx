"use client";

import React from "react";
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
  Sparkles 
} from "lucide-react";
import Link from "next/link";

const detailedCapabilities = [
  {
    id: "web-saas",
    icon: Code2,
    title: "Custom Web & SaaS Development",
    subtitle: "Enterprise Applications & Cloud Architecture",
    description: "We architect, build, and deploy production-grade software platforms tailored to complex business models. Our engineering standards prioritize code maintainability, clean domain boundaries, and sub-second load times.",
    deliverables: [
      "Fullstack Next.js 16 & React 19 app architectures",
      "High-throughput RESTful & GraphQL microservice APIs",
      "Multi-tenant PostgreSQL schema design & indexing",
      "Role-based authentication & session security",
      "Client administrative panels & real-time analytics"
    ],
    techStack: ["Next.js", "React 19", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"]
  },
  {
    id: "ai-ml",
    icon: Cpu,
    title: "AI / Machine Learning Systems",
    subtitle: "Predictive Analytics & Model Pipelines",
    description: "We design and integrate custom machine learning workflows directly into business products. From algorithmic reach simulation to LLM-powered context engines, we convert raw datasets into operational advantages.",
    deliverables: [
      "Custom predictive regression & classification pipelines",
      "LLM orchestration with retrieval-augmented generation (RAG)",
      "Automated document processing & content extraction",
      "FastAPI inference microservices running on edge nodes",
      "Model accuracy monitoring & telemetry logging"
    ],
    techStack: ["Python", "FastAPI", "PyTorch", "Scikit-Learn", "Vector Databases", "NumPy", "Pandas"]
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "High-Performance E-Commerce",
    subtitle: "Headless Storefronts & Rapid Checkout",
    description: "Speed is the foremost conversion metric. We engineer lightweight, headless e-commerce storefronts that display thousands of catalog SKUs instantaneously, eliminate cart friction, and streamline checkout.",
    deliverables: [
      "Headless storefront architecture with instant state updates",
      "Instant client-side catalog search & facet filtering",
      "Secure Stripe & localized payment gateway integrations",
      "Automated inventory tracking & order dispatch hooks",
      "Mobile Core Web Vitals performance optimization"
    ],
    techStack: ["Next.js", "Stripe API", "Tailwind CSS", "Redis", "Edge Caching", "Webhook Pipelines"]
  },
  {
    id: "ui-ux",
    icon: Palette,
    title: "UI/UX Design Systems & Motion",
    subtitle: "Digital Design Systems & Micro-Interactions",
    description: "Technical software does not have to be cumbersome. We craft bespoke design systems with systematic color tokens, fluid typography, and cinematic motion design that turn complex tasks into joyful user experiences.",
    deliverables: [
      "Complete Figma component libraries & tokens",
      "High-fidelity desktop & mobile interactive wireframes",
      "Fluid micro-interactions and layout transitions",
      "WCAG 2.1 AA accessibility & semantic HTML auditing",
      "Cross-device responsive design verification"
    ],
    techStack: ["Figma", "Design Tokens", "Framer Motion", "Tailwind v4", "Lucide", "a11y Standards"]
  },
  {
    id: "automation",
    icon: Zap,
    title: "Intelligent Workflow Automation",
    subtitle: "Autonomous Cron Networks & API Pipes",
    description: "We eliminate repetitive administrative overhead by connecting fragmented software tools into unified, automated execution pipelines that heal themselves and alert your team on anomalies.",
    deliverables: [
      "Self-healing cron & background job runners",
      "Multi-service webhook pipes (Discord, Slack, CRMs)",
      "Automated email & customer lifecycle dispatchers",
      "Data synchronization & reconciliation scripts",
      "Operational dashboards for monitoring background pipelines"
    ],
    techStack: ["Node.js", "Python Scripts", "Webhooks", "Serverless Functions", "Queues", "REST APIs"]
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
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Page Header */}
        <div className="max-w-[760px] mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-6"
          >
            <Sparkles size={13} className="text-purple-400" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-purple-300 font-bold">
              Fullstack Engineering Capabilities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[42px] sm:text-[62px] md:text-[76px] text-white tracking-tight leading-[0.98] mb-8"
          >
            Engineering Systems For{" "}
            <span className="italic font-light text-white/50">Modern Enterprise.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[16px] sm:text-[18px] text-white/50 leading-relaxed font-light"
          >
            From bespoke SaaS platforms and machine learning analytics to headless storefronts, we deliver battle-tested software designed for longevity and extreme reliability.
          </motion.p>
        </div>

        {/* Detailed Services Vertical Stack */}
        <div className="space-y-12 mb-28">
          {detailedCapabilities.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-3xl border border-white/[0.08] bg-[#0d0d0d]/90 p-8 sm:p-12 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-start"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3.5 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      <Icon size={26} />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-purple-400 uppercase tracking-widest block">
                        0{index + 1} // {service.subtitle}
                      </span>
                      <h2 className="text-[24px] sm:text-[30px] font-bold text-white tracking-tight leading-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-[15px] text-white/60 leading-relaxed font-light mb-8">
                    {service.description}
                  </p>

                  <div className="pt-6 border-t border-white/5">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 block mb-3">
                      Technology Ecosystem
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-3 py-1 rounded-lg bg-white/[0.03] text-white/60 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Deliverables & Action */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between h-full">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-purple-300 block mb-4">
                      Core Phase Deliverables
                    </span>
                    <div className="space-y-3 mb-8">
                      {service.deliverables.map((deliv) => (
                        <div key={deliv} className="flex items-start gap-2.5 text-[13px] text-white/70">
                          <CheckCircle2 size={15} className="text-purple-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="btn-sweep btn-sweep-primary w-full py-3.5 text-[11px] font-bold tracking-[0.14em] uppercase text-center"
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
        <div className="text-center rounded-3xl border border-white/10 bg-[#0d0d0d] p-12 max-w-[800px] mx-auto">
          <h3 className="text-3xl font-display text-white mb-4">Have an unlisted requirement?</h3>
          <p className="text-white/50 text-[14px] max-w-[500px] mx-auto mb-8 font-light leading-relaxed">
            We architect bespoke solutions across diverse programming languages and database topologies.
          </p>
          <Link
            href="/contact"
            className="btn-sweep btn-sweep-primary px-8 py-4 text-[12px] font-bold tracking-[0.14em] uppercase"
          >
            <span>Consult With Founders</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
