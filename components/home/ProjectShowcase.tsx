"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, ArrowUpRight } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  categoryTag: string;
  categoryFilter: string;
  description: string;
  image: string;
  link: string;
}

const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "findmyinterior",
    title: "FindMyInterior",
    categoryTag: "Interior Design Platform",
    categoryFilter: "web",
    description: "A platform that helps users discover and visualize interior designs for their spaces.",
    image: "/projects/lumina.png",
    link: "/work/findmyinterior"
  },
  {
    id: "truedial",
    title: "TrueDial",
    categoryTag: "Business Communication",
    categoryFilter: "ai",
    description: "A smart communication platform for modern business connectivity and telephony automation.",
    image: "/projects/vortex.png",
    link: "/work/truedial"
  },
  {
    id: "website-audit",
    title: "Website Audit",
    categoryTag: "AI-Powered Audit Tool",
    categoryFilter: "web",
    description: "AI-powered tool to analyze and audit websites for speed, accessibility, SEO, and security.",
    image: "/projects/aether.png",
    link: "/work/audit-tool"
  }
];

const CATEGORY_TABS = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "ai", label: "AI" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "education", label: "Education" },
];

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (activeTab === "all") return true;
    return p.categoryFilter === activeTab;
  });

  return (
    <section 
      id="work-section"
      className="relative py-24 md:py-32 bg-white border-t border-slate-200/80"
    >
      <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 inline-block" />
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                Our Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Featured Projects
            </h2>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors shrink-0 group"
          >
            <span>View All Projects</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 select-none ${
                  isActive
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 3 Horizontal Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                href={project.link}
                className="group block bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300"
              >
                {/* Image Container with Mockup Aspect */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Card Body */}
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {project.categoryTag}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured Case Study Banner (Dark Navy high-contrast card as shown in reference) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-[#0B132B] via-[#0F172A] to-[#1E293B] rounded-3xl p-8 sm:p-12 text-white overflow-hidden shadow-xl border border-slate-800"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-sm bg-blue-500 inline-block" />
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
                  Case Study
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
                Tender Management Platform
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-8 max-w-[420px]">
                A comprehensive enterprise platform for managing government and commercial tenders with advanced status tracking, document parsing, and automated workflow triggers.
              </p>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all group"
              >
                <span>View Case Study</span>
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Right Dashboard Mockup Graphic (TenderPro) */}
            <div className="lg:col-span-7">
              <div className="bg-white/95 rounded-2xl p-6 shadow-2xl border border-white/20 text-slate-900">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                      T
                    </div>
                    <span className="text-xs font-bold text-slate-900">TenderPro // Dashboard</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-mono text-slate-400 font-medium">LIVE_MONITOR</span>
                  </div>
                </div>

                {/* KPI Metrics Row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="text-[11px] font-medium text-slate-500">Active Tenders</div>
                    <div className="text-2xl font-black text-slate-900 mt-0.5">24</div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="text-[11px] font-medium text-slate-500">Shortlisted</div>
                    <div className="text-2xl font-black text-blue-600 mt-0.5">12</div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="text-[11px] font-medium text-slate-500">Awarded</div>
                    <div className="text-2xl font-black text-emerald-600 mt-0.5">8</div>
                  </div>
                </div>

                {/* Interactive Chart Graphic */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
                    <span>Performance Analytics</span>
                    <span className="text-emerald-600 font-bold">+28.4% Efficiency</span>
                  </div>
                  {/* SVG Line Chart */}
                  <svg viewBox="0 0 400 90" className="w-full h-16 stroke-blue-600 fill-none">
                    <path
                      d="M0,70 Q60,20 120,55 T240,30 T320,40 T400,10"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0,70 Q60,20 120,55 T240,30 T320,40 T400,10 L400,90 L0,90 Z"
                      fill="url(#chartGrad)"
                      opacity="0.15"
                      stroke="none"
                    />
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563EB" />
                        <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
