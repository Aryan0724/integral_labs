"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  ShoppingBag, 
  UtensilsCrossed, 
  Cpu, 
  Building2, 
  Car,
  ArrowRight,
  LucideIcon
} from "lucide-react";
import Link from "next/link";

interface IndustryItem {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  provenCase: string;
  deliverables: string[];
  link: string;
}

const industriesList: IndustryItem[] = [
  {
    id: "edtech",
    title: "EdTech & Academic Infrastructure",
    icon: GraduationCap,
    description: "Virtual learning environments, syllabus tracking platforms, and admissions portals engineered for thousands of concurrent students.",
    provenCase: "EduReach Suite & Bro University",
    deliverables: ["Live lecture synchronization", "Student progress dashboards", "Certification verification workflows"],
    link: "/work"
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Digital Retail",
    icon: ShoppingBag,
    description: "High-speed storefront architectures with instant catalog search, low cart abandonment, and automated inventory sync.",
    provenCase: "AtoZ Platform & UK Drip",
    deliverables: ["Headless checkout architecture", "Catalog search indexing", "Dynamic product variation state"],
    link: "/work"
  },
  {
    id: "hospitality",
    title: "Hospitality & Dining Systems",
    icon: UtensilsCrossed,
    description: "Sensory digital menus, real-time table booking systems, and walk-in mobile portals that convert casual diners into regulars.",
    provenCase: "Spice & Fire & Cafe Max",
    deliverables: ["Interactive digital menus", "Table reservation automation", "Fast mobile-first walk-in pages"],
    link: "/work"
  },
  {
    id: "ai-tech",
    title: "AI, Machine Learning & Analytics",
    icon: Cpu,
    description: "Predictive machine learning engines that parse big dataset metadata to deliver real-time simulations and traction forecasting.",
    provenCase: "Preyt Platform & Nexus Foundry",
    deliverables: ["Custom ML prediction pipelines", "Video reach simulation", "FastAPI + React analytical suites"],
    link: "/work"
  },
  {
    id: "business-advisory",
    title: "Enterprise Advisory & SaaS Portals",
    icon: Building2,
    description: "High-authority corporate web presences and multi-tenant portals engineered to establish immediate institutional credibility.",
    provenCase: "Vantage Strategic & Labs Portal",
    deliverables: ["Investor presentation portals", "Multi-tenant client dashboards", "High-trust conversion pathways"],
    link: "/work"
  },
  {
    id: "logistics",
    title: "Mobility & Booking Logistics",
    icon: Car,
    description: "Fleet booking dashboards featuring vehicle attribute filtering, live availability scheduling, and friction-free checkouts.",
    provenCase: "Travicars & Roz Cars",
    deliverables: ["Fleet telemetry & rate scannability", "Dynamic vehicle search filters", "Sub-minute booking flow"],
    link: "/work"
  }
];

export default function Industries() {
  return (
    <section 
      id="industries-section"
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
                Domain Versatility
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[38px] sm:text-[54px] md:text-[62px] text-white tracking-tight leading-[1.0]"
            >
              One Technical Standard —{" "}
              <span className="italic font-light text-white/50">Diverse Verticals.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] sm:text-[15px] text-white/50 leading-relaxed font-light max-w-[380px]"
          >
            Our core engineering foundation adapts to specialized compliance, operational workflows, and domain expectations across diverse sectors.
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industriesList.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl p-7 sm:p-8 border border-white/[0.08] bg-[#0b0b0b]/90 hover:bg-[#121212] hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      Live Portfolio Proof
                    </span>
                  </div>

                  <h3 className="text-[20px] font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-purple-300 transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-[13px] text-white/50 leading-relaxed font-light mb-6">
                    {ind.description}
                  </p>

                  <div className="space-y-1.5 pt-4 border-t border-white/5 mb-6">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 block mb-2">
                      Key Competencies
                    </span>
                    {ind.deliverables.map((deliv) => (
                      <div key={deliv} className="flex items-center gap-2 text-[12px] text-white/70">
                        <div className="w-1 h-1 rounded-full bg-purple-400" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest block">Reference Systems</span>
                    <span className="text-[12px] font-medium text-white/80">{ind.provenCase}</span>
                  </div>

                  <Link
                    href={ind.link}
                    className="p-2 rounded-lg bg-white/5 text-white/40 group-hover:text-white group-hover:bg-purple-500/20 transition-all"
                  >
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
