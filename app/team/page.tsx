"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Mail, ArrowRight, ShieldCheck, Terminal, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const leadership = [
  {
    name: "Tanuj Bisht",
    role: "Co-Founder & Creative Systems Architect",
    image: "/founders.png",
    bio: "Focused on high-performance web systems, interface ergonomics, and robust application architecture. Leads frontend engineering, design systems, and client delivery across Integral Labs.",
  },
  {
    name: "Aryan Bisht",
    role: "Co-Founder & Lead Systems Engineer",
    image: "/founders.png",
    bio: "Specialized in scalable backend architectures, machine learning model integration, and cloud data infrastructure. Directs technical roadmap and algorithmic development.",
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white pt-36 pb-24 text-slate-900">
      <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-[720px] mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 bg-blue-50/70 mb-6"
          >
            <Users size={13} className="text-blue-600" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-blue-700 font-bold">
              Leadership &amp; Engineering Collective
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.02] mb-6"
          >
            The Architects Behind Every System.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-lg text-slate-600 leading-relaxed font-normal"
          >
            Integral Labs is driven directly by its founding partners. We do not pass client projects off to junior subcontractors; every system is designed, audited, and deployed by our senior leadership team.
          </motion.p>
        </div>

        {/* Founders Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {leadership.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-8 sm:p-10 hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 mb-8 group">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 560px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                    <div>
                      <span className="font-mono text-[10px] text-blue-300 uppercase tracking-widest block mb-1">
                        FOUNDING PARTNER
                      </span>
                      <h3 className="text-2xl font-bold text-white tracking-tight">{member.name}</h3>
                    </div>
                  </div>
                </div>

                <div className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">
                  {member.role}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-8">
                  {member.bio}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Integral Labs // Leadership</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>Connect with {member.name.split(" ")[0]}</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Operating Pillars */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12 mb-20 grid grid-cols-1 md:grid-cols-3 gap-8 shadow-xs">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck size={18} />
              <span>Direct Founder Involvement</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              You communicate directly with Tanuj &amp; Aryan. No telephone game through layers of account managers.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase tracking-wider mb-3">
              <Terminal size={18} />
              <span>Strict Technical Standards</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              All codebases adhere to TypeScript strict mode, clean modular component boundaries, and documented database schemas.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase tracking-wider mb-3">
              <Award size={18} />
              <span>Full IP Ownership</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              100% of repositories, tokens, schemas, and deployed environments belong unconditionally to your organization.
            </p>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            <span>Consult With The Founders</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
