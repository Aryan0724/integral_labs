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
  const [activeIndustry, setActiveIndustry] = React.useState(0);
  const [showAllMobile, setShowAllMobile] = React.useState(false);

  return (
    <section 
      id="industries-section"
      className="py-24 md:py-32 bg-white border-t border-slate-200/80"
    >
      <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[720px] mb-12 md:mb-16">
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

        {/* Mobile Industry Dropdown & Switcher (Visible on < md, reduces scroll height drastically) */}
        <div className="block md:hidden mb-8">
          <div className="flex items-center justify-between gap-2 mb-3">
            <label htmlFor="mobile-industry-select" className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              Select Industry:
            </label>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setActiveIndustry((prev) => Math.max(0, prev - 1))}
                disabled={activeIndustry === 0}
                aria-label="Previous Industry"
                className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg border border-slate-200 bg-white text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
              >
                ← Prev
              </button>
              <button
                type="button"
                onClick={() => setActiveIndustry((prev) => Math.min(industriesData.length - 1, prev + 1))}
                disabled={activeIndustry === industriesData.length - 1}
                aria-label="Next Industry"
                className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg border border-slate-200 bg-white text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
              >
                Next →
              </button>
            </div>
          </div>

          {/* Dropdown Menu */}
          <div className="relative mb-3">
            <select
              id="mobile-industry-select"
              value={activeIndustry}
              onChange={(e) => {
                setActiveIndustry(Number(e.target.value));
                setShowAllMobile(false);
              }}
              className="w-full appearance-none bg-white border border-slate-300 rounded-xl px-4 py-2.5 pr-10 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
            >
              {industriesData.map((ind, idx) => (
                <option key={ind.id} value={idx}>
                  {ind.title}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>

          {/* Quick Industry Pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {industriesData.map((ind, idx) => (
              <button
                key={ind.id}
                type="button"
                onClick={() => {
                  setActiveIndustry(idx);
                  setShowAllMobile(false);
                }}
                className={`py-1 px-2.5 rounded-lg text-center font-mono text-[11px] font-semibold transition-all ${
                  activeIndustry === idx && !showAllMobile
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-slate-50 border border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                {ind.title.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Single Card View on Mobile (when showAllMobile is false) */}
          {!showAllMobile ? (
            <div>
              {(() => {
                const ind = industriesData[activeIndustry];
                const Icon = ind.icon;
                return (
                  <div className="bg-slate-50/90 rounded-2xl border-2 border-blue-500/80 p-6 shadow-md flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                          <Icon size={22} />
                        </div>
                        <span className="text-[10px] font-mono text-blue-600 font-bold uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                          Industry 0{activeIndustry + 1} of 0{industriesData.length}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {ind.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                        {ind.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {ind.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                      <Link
                        href="/work"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
                      >
                        <span>Explore cases</span>
                        <ArrowRight size={13} />
                      </Link>
                      <button
                        type="button"
                        onClick={() => setShowAllMobile(true)}
                        className="text-xs font-mono text-slate-500 hover:text-blue-600 underline cursor-pointer"
                      >
                        View all 6
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowAllMobile(false)}
                  className="text-xs font-mono text-blue-600 font-bold hover:underline cursor-pointer"
                >
                  ← Collapse to Single Card
                </button>
              </div>
              {industriesData.map((ind) => {
                const Icon = ind.icon;
                return (
                  <div key={ind.id} className="bg-slate-50/70 rounded-2xl border border-slate-200/80 p-5 shadow-xs">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-base font-bold text-slate-900">
                        {ind.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {ind.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {ind.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Desktop 3x2 Grid (Visible on md and desktop, untouched) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
