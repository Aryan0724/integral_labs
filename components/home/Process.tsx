"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Compass, 
  Layout, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  LucideIcon
} from "lucide-react";
import Link from "next/link";

interface ProcessStep {
  index: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  deliverables: string[];
  duration: string;
}

const steps: ProcessStep[] = [
  {
    index: "01",
    title: "Discovery & Architecture",
    subtitle: "System Scoping & Tech Stack Selection",
    icon: Compass,
    description: "Deep dive into business logic, user flows, database constraints, and API dependencies to define a bulletproof architectural blueprint.",
    deliverables: ["Technical specification doc", "Database schema & ERD", "Sprint milestones & roadmap"],
    duration: "Week 1"
  },
  {
    index: "02",
    title: "UI/UX & Prototyping",
    subtitle: "Design Systems & Token Architecture",
    icon: Layout,
    description: "Creating responsive, accessible user interfaces and high-fidelity interactive prototypes tested against real user journeys.",
    deliverables: ["Figma design system tokens", "Interactive desktop & mobile wireframes", "Micro-interaction specs"],
    duration: "Week 2 - 3"
  },
  {
    index: "03",
    title: "Sprint-Based Engineering",
    subtitle: "Production-Grade Codebase Construction",
    icon: Code2,
    description: "Rapid, test-driven development using Next.js 16, TypeScript, Python FastAPI, and PostgreSQL with continuous client review demos.",
    deliverables: ["Modular component library", "Secure API microservices", "Weekly staging environment demos"],
    duration: "Week 3 - 6"
  },
  {
    index: "04",
    title: "QA & Performance Hardening",
    subtitle: "Security, Latency & a11y Audits",
    icon: ShieldCheck,
    description: "Rigorously validating unit tests, cross-browser compatibility, Lighthouse CWV scores, and API security headers.",
    deliverables: ["Core Web Vitals & performance audit", "Security header verification", "Cross-browser & mobile testing"],
    duration: "Week 6 - 7"
  },
  {
    index: "05",
    title: "CI/CD & Edge Deployment",
    subtitle: "Zero-Downtime Launch Execution",
    icon: Rocket,
    description: "Automated deployment to global edge CDN infrastructure with SSL, DNS failover, APM logging, and production database migrations.",
    deliverables: ["Production edge routing", "Automated deployment pipelines", "System telemetry & error alerts"],
    duration: "Launch Day"
  },
  {
    index: "06",
    title: "Continuous Evolution",
    subtitle: "Post-Launch Scaling & Feature Sprints",
    icon: RefreshCw,
    description: "Ongoing telemetry monitoring, query optimization, security patches, and iterative feature development as your client base expands.",
    deliverables: ["Telemetry monitoring", "Post-launch SLA support", "Iterative feature roadmapping"],
    duration: "Ongoing"
  }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section 
      id="process-section"
      className="relative py-28 md:py-36 overflow-hidden bg-transparent border-t border-white/[0.05]"
    >
      <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Header */}
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
                Engineering Workflow
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[38px] sm:text-[54px] md:text-[62px] text-white tracking-tight leading-[1.0]"
            >
              A Step-by-Step Delivery{" "}
              <span className="italic font-light text-white/50">Roadmap.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] sm:text-[15px] text-white/50 leading-relaxed font-light max-w-[380px]"
          >
            We eliminate ambiguity with milestone-driven sprints, continuous client demos, and strict engineering verification at every stage.
          </motion.p>
        </div>

        {/* 6-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;

            return (
              <motion.div
                key={step.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setActiveStep(idx)}
                className={`group rounded-2xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isCurrent
                    ? "bg-[#121212] border-purple-500/40 shadow-xl shadow-purple-950/20"
                    : "bg-[#0b0b0b]/80 border-white/[0.07] hover:border-white/20"
                }`}
              >
                <div>
                  {/* Top Bar: Icon, Index & Duration */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl border transition-colors ${
                      isCurrent 
                        ? "bg-purple-500/20 text-purple-300 border-purple-500/30" 
                        : "bg-white/5 text-white/50 border-white/5 group-hover:text-purple-400"
                    }`}>
                      <Icon size={20} />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-purple-300/60 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                        {step.duration}
                      </span>
                      <span className="font-mono text-[12px] font-bold text-white/20">
                        {step.index}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-[20px] font-bold text-white tracking-tight leading-snug mb-1 group-hover:text-purple-300 transition-colors">
                    {step.title}
                  </h3>
                  <div className="font-mono text-[11px] text-purple-400/80 uppercase tracking-wider mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-[13px] text-white/50 leading-relaxed font-light mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-white/5 space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 block mb-1">
                    Phase Milestones
                  </span>
                  {step.deliverables.map((deliv) => (
                    <div key={deliv} className="flex items-center gap-2 text-[12px] text-white/70">
                      <div className="w-1 h-1 rounded-full bg-purple-400" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Workflow Bottom Bar */}
        <div className="text-center">
          <Link
            href="/contact"
            className="btn-sweep btn-sweep-primary px-8 py-3.5 text-[11px] font-bold tracking-[0.14em] uppercase"
          >
            <span>Initiate Sprint 0 Discovery</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
