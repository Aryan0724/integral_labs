"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
  Cpu
} from "lucide-react";

const FOUNDERS = [
  {
    name: "Tanuj Bisht",
    role: "Co-Founder & Lead Developer",
    focus: "Full-Stack Architecture & Cloud Infrastructure",
    bio: "Specializing in high-throughput Next.js systems, serverless microservices, distributed security models, and sub-second web performance. Oversees all engineering pipelines and production deployments.",
    skills: ["Next.js 16", "TypeScript", "Node.js", "Cloud Architecture", "System Security"]
  },
  {
    name: "Aryan Bisht",
    role: "Co-Founder & Lead Designer",
    focus: "Design Systems & Interactive UX Architecture",
    bio: "Pioneering conversion-driven UI systems, motion design ergonomics, and brand identity. Crafts interfaces that turn complex business workflows into seamless, tactile user experiences.",
    skills: ["Design Systems", "Figma", "Interaction Design", "Motion UI", "Brand Ergonomics"]
  }
];

const STUDIO_PILLARS = [
  {
    icon: Code2,
    title: "Direct Founder Execution",
    description: "No account managers or junior developers in between. Tanuj and Aryan personally architect, design, and code every single client engagement."
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
      className="relative py-24 md:py-36 bg-slate-50/60 border-t border-slate-200/90 overflow-hidden"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Section Top Header */}
        <div className="max-w-[780px] mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/80 mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
              About Us // Leadership &amp; Engineering
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6">
            Bridging Pure Engineering <br className="hidden sm:block" />
            <span className="text-slate-400 font-light">&amp; Visual Mastery.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Integral Labs was founded with a single, clear objective: to bridge the gap between absolute visual excellence and robust, production-grade engineering. We believe software should not only execute flawlessly under high load, but also delight users through fluid, organic, intuitive design.
          </p>
        </div>

        {/* Main Two-Column Showcase: Founders Story & Authentic Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Column: Authentic Founders Photo with Technical Framing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Outer technical accent frame */}
            <div className="relative rounded-3xl p-3 bg-white border border-slate-200/90 shadow-2xl">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-900 group">
                <Image
                  src="/founders.png"
                  alt="Tanuj Bisht and Aryan Bisht - Founders of Integral Labs"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 450px"
                  priority
                />
                
                {/* Tech overlay grad */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Corner Crosshairs */}
                <span className="absolute top-3 left-3 font-mono text-[9px] text-white/40 select-none pointer-events-none">+</span>
                <span className="absolute top-3 right-3 font-mono text-[9px] text-white/40 select-none pointer-events-none">+</span>
                <span className="absolute bottom-16 left-3 font-mono text-[9px] text-white/40 select-none pointer-events-none">+</span>
                <span className="absolute bottom-16 right-3 font-mono text-[9px] text-white/40 select-none pointer-events-none">+</span>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                      Founding Partners
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      Tanuj Bisht &amp; Aryan Bisht
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-mono text-emerald-300 font-bold uppercase">Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative caption */}
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono mt-3 px-2">
              <span>REF: CORE_SYS // FOUNDERS</span>
              <span>VERIFIED LEADERSHIP</span>
            </div>
          </motion.div>

          {/* Right Column: Authentic Philosophy & Founders Quote */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Founders Direct Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-lg mb-8"
            >
              <Quote size={40} className="text-blue-500/20 absolute top-6 right-6" />

              <p className="text-lg sm:text-xl text-slate-800 italic leading-relaxed font-normal mb-8">
                &ldquo;We don&apos;t build temporary code or short-lived systems. We design highly performant, custom-tailored visual infrastructures that survive time, scaling alongside your operational needs while maintaining extreme frame rates.&rdquo;
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Tanuj Bisht &amp; Aryan Bisht
                  </h4>
                  <p className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider mt-0.5">
                    Founding Partners &amp; Creative Engineers
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-mono text-blue-700 font-bold uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  FOUNDER_AUTH_TOKEN: ACTIVE
                </div>
              </div>
            </motion.div>

            {/* Operating Manifesto / Short Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                From fast-growing SaaS startups to established corporate enterprises, clients partner with Integral Labs because we eliminate the friction between creative concept and production execution. 
              </p>
              <p>
                Every project benefits from direct founder attention. We inspect your data models, design your interaction flows, test edge cases under latency stress, and deliver turnkey solutions ready to scale.
              </p>
            </div>

            {/* Direct Action Link */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group"
              >
                <span>Read Full Engineering Roadmap &amp; Team Page</span>
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* Individual Founder Profiles: Tanuj & Aryan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {FOUNDERS.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm">
                    {founder.name[0]}B
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-mono uppercase font-semibold">
                    {founder.focus}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {founder.name}
                </h3>
                <div className="text-xs font-semibold text-blue-600 font-mono mt-1 mb-4">
                  {founder.role}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {founder.bio}
                </p>
              </div>

              <div>
                <div className="text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider mb-2">
                  Specialized Competencies
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-100">
                  {founder.skills.map((skill) => (
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
          ))}
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
            {STUDIO_PILLARS.map((pillar, i) => {
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
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-colors border border-slate-700"
                >
                  <ArrowLeft size={15} />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next Testimonial"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-colors border border-slate-700"
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
