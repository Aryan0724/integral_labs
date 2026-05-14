"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Target, Rocket, Shield, Users } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      {/* Subtle background */}
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none" />

      <div className="container relative z-10">
        {/* Hero Section */}
        <div className="max-w-[720px] mb-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge mb-6"
          >
            Our Identity
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="text-display text-[40px] sm:text-[56px] text-white mb-8 leading-[1.1]"
          >
            We Are The
            <br />
            Engineering Standard.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-[16px] text-[#888] leading-[1.8] max-w-[600px]"
          >
            Integral Labs is a high-performance collective of engineers, 
            designers, and product specialists dedicated to building the industrial-grade 
            infrastructure of modern digital platforms.
          </motion.p>
        </div>

        {/* Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {[
            {
              icon: <Target className="w-5 h-5 text-[#6366f1]" />,
              title: "The Mission",
              desc: "To accelerate business execution by deploying intelligent software systems that solve complex operational challenges."
            },
            {
              icon: <Rocket className="w-5 h-5 text-[#6366f1]" />,
              title: "The Vision",
              desc: "Becoming the primary architectural layer for the world's most advanced digital ecosystems and AI-driven platforms."
            },
            {
              icon: <Shield className="w-5 h-5 text-[#6366f1]" />,
              title: "The Standard",
              desc: "Uncompromising quality, scalable architecture, and performance that defines the benchmark of modern software."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="surface-2 p-10 rounded-2xl border border-white/5 group hover:border-white/10 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#111] border border-white/8 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-white mb-3 tracking-tight">{item.title}</h3>
              <p className="text-[13px] text-[#666] leading-[1.7]">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Row - Minimalist */}
        <div className="relative rounded-2xl border border-white/6 bg-[#0d0d0d] p-10 md:p-16 mb-32 overflow-hidden">
          <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Lines Deployed", value: "2.4M+", suffix: "Optimized" },
              { label: "Uptime Avg", value: "99.99%", suffix: "Reliable" },
              { label: "Client Retain", value: "100%", suffix: "Retention" },
              { label: "Active Sprints", value: "14", suffix: "Continuous" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[11px] font-medium text-[#6366f1] mb-2 tracking-wide uppercase">{stat.label}</span>
                <span className="text-[32px] md:text-[44px] font-semibold text-white leading-none tracking-tight mb-1">{stat.value}</span>
                <span className="text-[11px] text-[#444] font-medium uppercase tracking-widest">{stat.suffix}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Preview CTA */}
        <div className="flex flex-col items-center text-center max-w-[600px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display text-[28px] md:text-[36px] text-white mb-8"
          >
            Meet the Architects.
          </motion.h2>
          <Link 
            href="/team"
            className="btn-primary py-3 px-10 text-[14px]"
          >
            View Studio Team
            <Users className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
