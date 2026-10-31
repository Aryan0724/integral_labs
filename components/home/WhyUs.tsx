"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhyUs() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Our Impact */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 inline-block" />
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                Our Impact
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Building innovative solutions across industries.
            </h3>
            
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-200/80">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  80+
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  Projects Delivered
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">
                  15+
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  Happy Clients
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  12+
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  Countries Covered
                </div>
              </div>
            </div>
          </div>

          {/* Right: Trusted By Industry Leaders */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Trusted By Industry Leaders
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Our work is trusted by forward-thinking companies.
                </p>
              </div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 self-start sm:self-auto">
                GLOBAL_TECH_STANDARDS
              </span>
            </div>

            {/* Tech & Cloud Ecosystem Badges */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center justify-items-center opacity-85">
              {/* AWS */}
              <div className="flex flex-col items-center gap-1 group">
                <span className="text-lg font-black text-slate-800 tracking-tighter">aws</span>
                <span className="text-[9px] font-mono text-slate-400">Cloud Engine</span>
              </div>

              {/* Vercel */}
              <div className="flex flex-col items-center gap-1 group">
                <div className="flex items-center gap-1 text-base font-bold text-slate-900">
                  <span className="text-sm">▲</span> Vercel
                </div>
                <span className="text-[9px] font-mono text-slate-400">Edge Global</span>
              </div>

              {/* Supabase */}
              <div className="flex flex-col items-center gap-1 group">
                <div className="flex items-center gap-1 text-base font-bold text-slate-900">
                  <span className="text-emerald-500 text-sm">⚡</span> supabase
                </div>
                <span className="text-[9px] font-mono text-slate-400">Realtime DB</span>
              </div>

              {/* Java */}
              <div className="flex flex-col items-center gap-1 group">
                <span className="text-base font-bold text-slate-800">Java</span>
                <span className="text-[9px] font-mono text-slate-400">Enterprise</span>
              </div>

              {/* Next.js */}
              <div className="flex flex-col items-center gap-1 group">
                <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
                  N
                </div>
                <span className="text-[9px] font-mono text-slate-400">Next.js 16</span>
              </div>

              {/* React */}
              <div className="flex flex-col items-center gap-1 group">
                <div className="text-blue-500 text-xl font-bold">⚛</div>
                <span className="text-[9px] font-mono text-slate-400">React 19</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
