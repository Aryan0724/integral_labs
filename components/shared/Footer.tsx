"use client";

import React from "react";
import Link from "next/link";
import { Terminal, ArrowUpRight, Globe, Activity, Code2, Zap } from "lucide-react";
import { GitHub, Twitter, LinkedIn } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="relative py-32 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-[0.02]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-600/5 blur-[150px] rounded-full opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-4 mb-10 group">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-purple-600 rounded-2xl rotate-45 group-hover:rotate-[135deg] transition-all duration-700 opacity-20 blur-sm" />
                <div className="relative w-10 h-10 bg-white rounded-xl flex items-center justify-center group-hover:rotate-[15deg] transition-transform duration-500 shadow-2xl">
                  <div className="w-5 h-5 bg-black rotate-45 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter text-white uppercase italic leading-none">Integral</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-purple-500 font-black">Labs</span>
              </div>
            </Link>
            <p className="text-white/40 text-lg font-light leading-relaxed mb-10 max-w-sm tracking-tight">
              A premium digital studio crafting high-performance software and industrial-grade intelligence for the next generation of founders.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                <GitHub className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                <LinkedIn className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-10">Studio</h4>
            <ul className="space-y-6">
              {[
                { name: "Archive", href: "/work" },
                { name: "Services", href: "/services" },
                { name: "Our Story", href: "/about" },
                { name: "Architects", href: "/team" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/40 text-sm hover:text-white transition-colors font-medium flex items-center gap-2 group tracking-tight">
                    {item.name} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-10">Intelligence</h4>
            <ul className="space-y-6">
              {[
                { name: "Research", href: "/research" },
                { name: "Ecosystem", href: "/ecosystem" },
                { name: "Vision", href: "/vision" },
                { name: "Contact", href: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/40 text-sm hover:text-white transition-colors font-medium flex items-center gap-2 group tracking-tight">
                    {item.name} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Status Column */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-10">System Status</h4>
            <div className="glass p-8 rounded-[40px] border-white/5 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Zap className="w-12 h-12 text-purple-500" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/20">Studio Node</span>
                <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-black text-green-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Operational
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/20">Response Latency</span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/60">0.024 MS</span>
              </div>
              <div className="pt-6 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <Terminal className="w-4 h-4 text-purple-500" />
                  <span className="text-[9px] font-mono text-white/20 tracking-wider">SECURED_BY_INTEGRAL_SHIELD_v2.4</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white/10">
            © 2026 INTEGRAL LABS • BUILT FOR INDUSTRIAL SCALE
          </div>
          <div className="flex items-center gap-10">
            <Link href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-white transition-all">Privacy</Link>
            <Link href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-white transition-all">Terms</Link>
            <Link href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-white transition-all">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

