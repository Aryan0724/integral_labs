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
    <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 text-white">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-[720px] mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-6"
          >
            <Users size={13} className="text-purple-400" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-purple-300 font-bold">
              Leadership &amp; Engineering Collective
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[42px] sm:text-[62px] md:text-[76px] text-white tracking-tight leading-[0.98] mb-8"
          >
            The Architects Behind{" "}
            <span className="italic font-light text-white/50">Every System.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-[16px] sm:text-[18px] text-white/50 leading-relaxed font-light"
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
              className="rounded-3xl border border-white/[0.08] bg-[#0d0d0d]/90 p-8 sm:p-10 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/5 bg-[#141414] mb-8 group">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover opacity-85 group-hover:scale-[1.03] transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 560px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <div>
                      <span className="font-mono text-[10px] text-purple-300 uppercase tracking-widest block mb-1">
                        FOUNDING PARTNER
                      </span>
                      <h3 className="text-2xl font-bold text-white tracking-tight">{member.name}</h3>
                    </div>
                  </div>
                </div>

                <div className="font-mono text-[11px] text-purple-400 uppercase tracking-wider mb-4">
                  {member.role}
                </div>

                <p className="text-[14px] text-white/60 leading-relaxed font-light mb-8">
                  {member.bio}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40">
                <span className="uppercase tracking-wider">Direct Engagement</span>
                <span className="text-emerald-400">Available For Sprint 1</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Operating Pillars */}
        <div className="rounded-3xl border border-white/10 bg-[#0e0e0e] p-8 sm:p-12 mb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-purple-400 font-mono text-[11px] uppercase tracking-wider mb-3">
              <ShieldCheck size={16} />
              <span>Direct Founder Involvement</span>
            </div>
            <p className="text-[13px] text-white/50 leading-relaxed font-light">
              You communicate directly with Tanuj &amp; Aryan. No telephone game through layers of account managers.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-purple-400 font-mono text-[11px] uppercase tracking-wider mb-3">
              <Terminal size={16} />
              <span>Strict Technical Standards</span>
            </div>
            <p className="text-[13px] text-white/50 leading-relaxed font-light">
              All codebases adhere to TypeScript strict mode, clean modular component boundaries, and documented database schemas.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-purple-400 font-mono text-[11px] uppercase tracking-wider mb-3">
              <Award size={16} />
              <span>Full IP Ownership</span>
            </div>
            <p className="text-[13px] text-white/50 leading-relaxed font-light">
              100% of repositories, tokens, schemas, and deployed environments belong unconditionally to your organization.
            </p>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="text-center">
          <Link
            href="/contact"
            className="btn-sweep btn-sweep-primary px-8 py-4 text-[12px] font-bold tracking-[0.14em] uppercase"
          >
            <span>Consult With The Founders</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
