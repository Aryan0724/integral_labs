"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Zap, Globe, Shield, Rocket, Target, Users } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/50">Our Identity</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-display text-5xl md:text-8xl font-black text-white mb-10 leading-[0.9]"
          >
            WE ARE THE <br />
            <span className="text-gradient-purple italic font-medium">ENGINEERING</span> <br />
            STANDARD.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/50 leading-relaxed max-w-2xl font-light tracking-tight"
          >
            Integral Labs is more than a studio. We are a high-performance collective of engineers, 
            designers, and AI specialists dedicated to building the industrial-grade infrastructure 
            of the digital future.
          </motion.p>
        </div>

        {/* Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {[
            {
              icon: <Target className="w-8 h-8 text-purple-500" />,
              title: "THE MISSION",
              desc: "To accelerate human progress by deploying intelligent, industrial-grade software systems that solve complex global challenges."
            },
            {
              icon: <Rocket className="w-8 h-8 text-blue-500" />,
              title: "THE VISION",
              desc: "Becoming the primary architectural layer for the world's most advanced digital ecosystems and AI-driven platforms."
            },
            {
              icon: <Shield className="w-8 h-8 text-purple-500" />,
              title: "THE STANDARD",
              desc: "Uncompromising quality, military-grade security, and performance that defines the absolute edge of what's possible."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass p-10 rounded-[40px] border-white/5 hover:border-purple-500/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-widest uppercase">{item.title}</h3>
              <p className="text-white/40 leading-relaxed tracking-tight">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="relative glass p-12 md:p-24 rounded-[60px] overflow-hidden mb-40 border-white/5">
          <div className="absolute inset-0 bg-purple-glow opacity-30" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
            {[
              { label: "Code Deployed", value: "2.4M+", suffix: "LINES" },
              { label: "Active Nodes", value: "12K+", suffix: "GLOBAL" },
              { label: "System Uptime", value: "99.99", suffix: "PERCENT" },
              { label: "Successful Sprints", value: "850+", suffix: "RELEASES" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.4em] mb-4">{stat.label}</span>
                <span className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-2">{stat.value}</span>
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{stat.suffix}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Preview CTA */}
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-6xl font-black text-white mb-12 uppercase tracking-tighter"
          >
            MEET THE <span className="text-gradient-purple italic">ARCHITECTS</span>
          </motion.h2>
          <Link 
            href="/team"
            className="group h-24 bg-white text-black px-16 rounded-full flex items-center justify-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-2xl"
          >
            <span className="text-sm font-black uppercase tracking-widest">View Studio Team</span>
            <Users className="w-5 h-5 group-hover:rotate-[15deg] transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
