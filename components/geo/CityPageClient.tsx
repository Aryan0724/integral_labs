"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Check,
  Code2,
  Cpu,
  Search,
  Sparkles,
  CornerDownLeft,
  Building2,
} from "lucide-react";
import { City } from "@/lib/data/cities";
import { projects } from "@/lib/data/projects";

const PILLAR_ICONS = [Code2, Cpu, Search, Sparkles];
const PILLAR_NAMES = [
  "Web Development",
  "Custom Software",
  "Technical SEO",
  "Answer Engine Optimization (AEO)",
];

const TRUST_POINTS = [
  "Next.js 16 & React 19 engineering",
  "100% IP & code ownership",
  "30-day post-launch warranty",
  "Exact quote within 24 hours",
];

const WHY_POINTS = [
  {
    title: "Senior engineers, direct line",
    text: "You work with the collective building your product — no account-manager telephone game between you and the code.",
  },
  {
    title: "Search built into the source",
    text: "Semantic markup, JSON-LD schema and Core Web Vitals engineering ship with the build, not as a bolt-on upsell later.",
  },
  {
    title: "You own everything at handoff",
    text: "Code, design assets and deployment credentials transfer completely on the final milestone. Zero lock-in, zero licence traps.",
  },
  {
    title: "AI-search ready from day one",
    text: "llms.txt, ai.txt and machine-readable Q&A files ship with every engagement so ChatGPT, Perplexity and Gemini can cite you.",
  },
];

export default function CityPageClient({ city }: { city: City }) {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* ═══ Hero ═══ */}
      <section className="relative pt-32 pb-16 md:pt-40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-blue-100/50 via-indigo-50/30 to-emerald-50/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-7 select-none"
          >
            <MapPin size={13} className="text-blue-600" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-blue-700 font-semibold">
              {city.heroLabel}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-slate-900 tracking-[-0.03em] leading-[1.08] mb-6 max-w-[880px]"
          >
            {city.h1}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[760px] mb-9"
          >
            {city.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] group"
            >
              <span>Book a Discovery Call</span>
              <CornerDownLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm sm:text-base px-7 py-4 rounded-full border border-slate-200 shadow-2xs hover:shadow-xs transition-all duration-200 active:scale-[0.98] group"
            >
              <span>See Our Work</span>
              <ArrowRight size={16} className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
            </Link>
          </motion.div>

          {/* Trust chips */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-x-6 gap-y-2 mt-9"
          >
            {TRUST_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2 text-xs text-slate-500">
                <Check size={13} className="text-blue-600 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ═══ What we build in {city} ═══ */}
      <section className="py-16 md:py-20 border-t border-slate-100">
        <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="max-w-[640px] mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              What We Build in {city.city}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Four Pillars, Engineered as Equals.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {city.pillars.map((blurb, i) => {
              const Icon = PILLAR_ICONS[i];
              return (
                <motion.div
                  key={city.slug + i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 hover:shadow-md hover:border-slate-300 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">{PILLAR_NAMES[i]}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{blurb}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Who we serve + nearby areas ═══ */}
      <section className="py-16 md:py-20 bg-slate-50/70 border-y border-slate-100">
        <div className="container max-w-[1240px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              Who We Serve
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3 mb-6">
              Built Around the {city.city} Economy.
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {city.industries.map((industry) => (
                <li
                  key={industry}
                  className="flex items-start gap-2.5 bg-white rounded-xl border border-slate-200/80 px-4 py-3.5 text-sm text-slate-700"
                >
                  <Building2 size={15} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>{industry}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              Areas we cover nearby
            </span>
            <h3 className="text-lg font-extrabold text-slate-900 tracking-tight mt-3 mb-5">
              Delivery reach from our HQ
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {city.nearbyAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs text-slate-600"
                >
                  <MapPin size={11} className="text-blue-500" />
                  {area}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mt-5">
              Remote-first delivery across all of Uttarakhand, with on-site visits when a project
              genuinely needs them. Global clients in the US, UK &amp; UAE on the same pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Proof: featured case studies ═══ */}
      <section className="py-16 md:py-20 border-b border-slate-100">
        <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="max-w-[640px] mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              Proof, Not Promises
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Deployed &amp; Live Platforms.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {city.featured.map((id, i) => {
              const project = projects.find((p) => p.id === id);
              if (!project) return null;
              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <Link
                    href={`/work/${project.id}`}
                    className="group block rounded-2xl overflow-hidden border border-slate-200/80 bg-white hover:shadow-lg hover:border-slate-300 transition-all"
                  >
                    <div className="relative aspect-[2/1] overflow-hidden bg-slate-100">
                      <Image
                        src={project.image}
                        alt={`${project.title} — ${project.category} built by Integral Labs`}
                        width={1200}
                        height={800}
                        className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">
                          {project.category} · {project.year}
                        </div>
                        <div className="text-sm font-bold text-slate-900">{project.title}</div>
                      </div>
                      <ArrowRight
                        size={16}
                        className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0"
                      />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Why Integral Labs ═══ */}
      <section className="py-16 md:py-20">
        <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="max-w-[640px] mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              Why Integral Labs
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              The Engineering Alternative to Template Agencies.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {WHY_POINTS.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-slate-200/80 p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">{point.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ City FAQ ═══ */}
      <section className="py-16 md:py-20 bg-slate-50/70 border-y border-slate-100">
        <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="max-w-[640px] mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
              Common Questions from {city.city} Clients.
            </h2>
          </div>
          <div className="max-w-[840px] space-y-4">
            {city.faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-slate-200/80 p-6"
              >
                <h3 className="text-base font-bold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="py-20 bg-white">
        <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="bg-gradient-to-r from-slate-900 to-slate-950 rounded-3xl p-10 sm:p-14 text-white">
            <div className="max-w-[660px]">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Building something in {city.city}? Talk to the engineers directly.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                Book a discovery call and receive architectural feedback plus an exact,
                milestone-based quote within 24 hours. No package padding — just scope, plan, number.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold uppercase tracking-wider transition-all shadow-md group"
              >
                <span>Book Your Discovery Call</span>
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
