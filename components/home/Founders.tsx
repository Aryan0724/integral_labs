"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowLeft,
  ShieldCheck, 
  Code2, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  Quote, 
  Layers,
  Cpu,
  Layout,
  Globe,
  Database
} from "lucide-react";

interface StudioDiscipline {
  title: string;
  role: string;
  focus: string;
  description: string;
  skills: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const STUDIO_DISCIPLINES: StudioDiscipline[] = [
  {
    title: "Full-Stack Architecture & Cloud Infrastructure",
    role: "Development Division // Pillar 01",
    focus: "Cloud Systems & Next.js Stacks",
    description: "Specializing in high-throughput Next.js systems, serverless microservices, distributed security models, and sub-second web performance. Engineering scalable database schemas and production deployment pipelines.",
    skills: ["Next.js Turbopack", "TypeScript", "Node.js", "Cloud Infrastructure", "System Security"],
    icon: Cpu
  },
  {
    title: "Custom Software & Bespoke SaaS Engineering",
    role: "Development Division // Pillar 02",
    focus: "Bespoke Systems & Multi-Tenant SaaS",
    description: "Designing and engineering tailored enterprise software systems, automated workflow engines, and scalable SaaS platforms with 100% proprietary source code ownership.",
    skills: ["PostgreSQL", "REST & GraphQL", "Multi-Tenant Architecture", "100% IP Ownership", "RBAC"],
    icon: Code2
  },
  {
    title: "Technical Search Engine Optimization (SEO)",
    role: "Discoverability Division // Pillar 01",
    focus: "Crawlability & Web Vitals",
    description: "Structuring semantic HTML5, high-efficiency crawler pathways, automated XML sitemaps, and sub-second Core Web Vitals that systematically secure top Google search rankings.",
    skills: ["Semantic DOM", "Schema.org Graphs", "Core Web Vitals", "Crawl Architecture", "SERP Authority"],
    icon: Globe
  },
  {
    title: "Answer Engine Optimization (AEO & AI Search)",
    role: "Discoverability Division // Pillar 02",
    focus: "Generative AI Citations",
    description: "Structuring machine-readable knowledge graphs and authority datasets so conversational AI platforms (ChatGPT, Perplexity, Claude, Gemini) cite and recommend your brand.",
    skills: ["Entity Knowledge Graphs", "Perplexity Indexing", "ChatGPT Citations", "RAG Semantics", "Vector Authority"],
    icon: Sparkles
  }
];

const STUDIO_PILLARS = [
  {
    icon: Code2,
    title: "Dedicated Senior Execution",
    description: "No account managers or junior subcontractors in between. Senior software architects and interaction designers directly engineer, review, and deploy every client engagement."
  },
  {
    icon: ShieldCheck,
    title: "Zero-Compromise Standards",
    description: "Sub-second load times, 100/100 Lighthouse performance, strict type safety, and OWASP-compliant security baked in from day one."
  },
  {
    icon: Layers,
    title: "100% Client IP Ownership",
    description: "Every line of code and design asset belongs entirely to you. Modular, clean repositories with zero vendor lock-in and thorough handoff docs."
  }
];

const TESTIMONIALS = [
  {
    quote: "Integral Labs delivered an exceptional solution that exceeded our expectations. Their technical competence, speed of execution, and design clarity made all the difference in our product launch.",
    client: "Aditya Chauhan",
    designation: "Founder, FindMyInterior",
    initials: "AC"
  },
  {
    quote: "The team redesigned our entire communication dashboard from scratch. Conversion improved by 40% within the first month. Incredible engineering quality and attention to detail.",
    client: "Vikram Malhotra",
    designation: "Product Lead, TrueDial",
    initials: "VM"
  },
  {
    quote: "Seamless collaboration from discovery to production. They don't just write code, they understand commercial conversion funnels and user ergonomics intimately.",
    client: "Sarah Jenkins",
    designation: "CTO, EduReach Suite",
    initials: "SJ"
  }
];

export default function Founders() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeReview = TESTIMONIALS[currentTestimonial];

  return (
    <section 
      id="about"
      style={{ backgroundColor: "#f8fafc", color: "#0f172a" }}
      className="relative z-10 py-24 md:py-36 bg-slate-50 border-t border-slate-200/90 overflow-hidden"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Section Top Header */}
        <div className="max-w-[780px] mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/80 mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
              About Integral Labs // Engineering &amp; Search Collective
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6">
            Engineering Precision &amp; <br className="hidden sm:block" />
            <span className="text-blue-600">Organic Search Dominance.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Integral Labs operates on a definitive principle: software engineering and discoverability must be developed together as equal forces. We build resilient web applications and custom software platforms while engineering deep Technical SEO and Answer Engine Optimization (AEO) into every layer of the codebase.
          </p>
        </div>

        {/* Main Two-Column Showcase: Studio Architecture & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Column: Studio Technical Architecture Blueprint Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Outer technical accent frame */}
            <div className="relative rounded-3xl p-3 bg-white border border-slate-200/90 shadow-2xl">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-950 p-6 sm:p-8 flex flex-col justify-between text-white border border-slate-800">
                
                {/* Tech Terminal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    CORE_SYS // ARCHITECTURE
                  </span>
                </div>

                {/* System Specs Blueprint */}
                <div className="space-y-4 my-auto py-4">
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="text-[10px] font-mono text-blue-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Code2 size={12} /> DIVISION SPECIFICATION
                    </div>
                    <div className="text-sm font-bold text-white">
                      Integral Labs Studio
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Creative Engineering Department of Integral Groups
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                      <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">
                        Performance
                      </div>
                      <div className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                        Sub-Second TTFB
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                      <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">
                        Code Ownership
                      </div>
                      <div className="text-xs font-bold text-blue-400 flex items-center gap-1">
                        100% Client IP
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Co-Equal Core Disciplines
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      <span className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-300">
                        01. Web Platforms
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono text-indigo-300">
                        02. Custom Software
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-300">
                        03. Technical SEO
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-300">
                        04. AEO &amp; AI Citations
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Status Card */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                      Deployment Status
                    </div>
                    <div className="text-xs font-semibold text-white mt-0.5">
                      Production Runtime Active
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-mono text-emerald-300 font-bold uppercase">Online</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Decorative caption */}
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono mt-3 px-2">
              <span>REF: CORE_SYS // SPEC_2025</span>
              <span>VERIFIED ARCHITECTURE</span>
            </div>
          </motion.div>

          {/* Right Column: Studio Philosophy & Operating Manifesto */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Direct Studio Manifesto Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-lg mb-8"
            >
              <Quote size={40} className="text-blue-500/20 absolute top-6 right-6" />

              <p className="text-lg sm:text-xl text-slate-800 italic leading-relaxed font-normal mb-8">
                &ldquo;We don&apos;t separate building software from being discovered. A beautifully engineered application is useless if invisible on Google and AI assistants, and search optimization fails without high-performance software architecture. We build both with equal technical rigor from the very first line of code.&rdquo;
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Integral Labs Collective
                  </h4>
                  <p className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider mt-0.5">
                    Senior Engineering &amp; Search Architecture
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-mono text-blue-700 font-bold uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  STUDIO_AUTH_TOKEN: ACTIVE
                </div>
              </div>
            </motion.div>

            {/* Operating Manifesto Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                From fast-growing SaaS startups to established corporate enterprises, clients partner with Integral Labs because we eliminate the friction between creative concept and production execution. 
              </p>
              <p>
                Every project benefits from direct senior attention. We inspect your data models, design your interaction flows, test edge cases under latency stress, and deliver turnkey solutions ready to scale.
              </p>
            </div>

            {/* Direct Action Link */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group"
              >
                <span>Read Full Studio Principles &amp; Roadmap</span>
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* Studio Engineering Disciplines Grid (Zero Individual Profiles) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {STUDIO_DISCIPLINES.map((discipline, index) => {
            const Icon = discipline.icon;
            return (
              <motion.div
                key={discipline.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black">
                      <Icon size={20} />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-mono uppercase font-semibold">
                      {discipline.focus}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {discipline.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600 font-mono mt-1 mb-4">
                    {discipline.role}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {discipline.description}
                  </p>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider mb-2">
                    Specialized Competencies
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-100">
                    {discipline.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-[11px] font-mono text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3 Studio Operating Pillars */}
        <div className="mb-24">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Operating Standards
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              How Integral Labs executes high-stakes engineering engagements with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STUDIO_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={pillar.title}
                  className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Client Testimonials Banner */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
                  Verified Reviews
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                What Partners Say About Working With Us.
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Direct feedback from founders, product leads, and executive teams we&apos;ve collaborated with.
              </p>

              {/* Navigation arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous Testimonial"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-colors border border-slate-700 cursor-pointer"
                >
                  <ArrowLeft size={15} />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next Testimonial"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-colors border border-slate-700 cursor-pointer"
                >
                  <ArrowRight size={15} />
                </button>
                <span className="text-xs font-mono text-slate-400 ml-2">
                  0{currentTestimonial + 1} / 0{TESTIMONIALS.length}
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-800/60 rounded-2xl p-6 sm:p-8 border border-slate-700/80">
              <p className="text-base sm:text-lg text-slate-200 italic leading-relaxed mb-6 font-light">
                &ldquo;{activeReview.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-slate-700/60">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                  {activeReview.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    {activeReview.client}
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    {activeReview.designation}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
