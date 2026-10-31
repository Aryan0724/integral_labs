"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShoppingBag, 
  UtensilsCrossed, 
  GraduationCap, 
  HeartPulse, 
  ShieldCheck, 
  Truck,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const industriesData = [
  {
    id: "retail",
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    description: "Scale your online business with modern platforms, headless checkouts, and dynamic catalog syncing.",
    tags: ["Headless Commerce", "Payment Optimization", "Inventory Automation"]
  },
  {
    id: "hospitality",
    icon: UtensilsCrossed,
    title: "Hospitality & Dining",
    description: "Enhance guest experiences with digital solutions, contactless ordering, and real-time reservations.",
    tags: ["Digital Ordering", "Guest Management", "Live Kitchen Sync"]
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education",
    description: "Build better learning experiences with modern technology, student analytics, and curriculum portals.",
    tags: ["Student Portals", "Course Management", "Real-time Testing"]
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    title: "Healthcare",
    description: "Improve care with smart systems, HIPAA-compliant patient communication, and telemetry monitoring.",
    tags: ["Secure Telemetry", "Patient Portals", "Provider Scheduling"]
  },
  {
    id: "finance",
    icon: ShieldCheck,
    title: "Finance",
    description: "Secure and scalable financial solutions, encrypted transaction logs, and fraud detection workflows.",
    tags: ["FinTech APIs", "Audit Trails", "Multi-factor Vaults"]
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics & Mobility",
    description: "Optimize operations and delivery with route dispatching, fleet telemetry, and automated freight tracking.",
    tags: ["Fleet Telemetry", "Dispatch Engines", "Warehouse Ops"]
  }
];

export default function Industries() {
  return (
    <section 
      id="industries-section"
      className="py-24 md:py-32 bg-white border-t border-slate-200/80"
    >
      <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[720px] mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 inline-block" />
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              Industries
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            One Expertise — Different Industries
          </h2>
          <p className="text-base text-slate-500 mt-3 max-w-[620px]">
            We build solutions for a wide range of industries, understanding their unique challenges and goals.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-slate-50/70 rounded-2xl border border-slate-200/80 p-7 hover:bg-white hover:shadow-md hover:border-blue-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 text-slate-700 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shadow-xs">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {ind.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {ind.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white border border-slate-200/60 text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/work"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 group-hover:gap-2 transition-all mt-auto"
                >
                  <span>Explore industry cases</span>
                  <ArrowRight size={13} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
