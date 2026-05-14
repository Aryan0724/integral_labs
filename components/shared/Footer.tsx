"use client";

import React from "react";
import Link from "next/link";
import { Terminal, ArrowUpRight, Globe, Activity, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-24 bg-black border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-[0.02]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <div className="w-5 h-5 bg-black rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-tighter text-white uppercase italic leading-none">Integral Labs</span>
                <span className="text-[7px] uppercase tracking-[0.6em] text-white/40 font-bold">Engineering Division</span>
              </div>
            </Link>
            <p className="text-white/40 text-sm font-light leading-relaxed mb-8 max-w-xs">
              Elite software engineering and intelligent automation. Building the digital infrastructure of tomorrow, today.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/40 hover:text-white transition-all">
                <Globe className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/40 hover:text-white transition-all">
                <Activity className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/40 hover:text-white transition-all">
                <Code2 className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-10">Solutions</h4>
            <ul className="space-y-4">
              {["Web Platforms", "SaaS Ecosystems", "Machine Learning", "Automation"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/40 text-xs hover:text-white transition-colors font-light flex items-center gap-2 group">
                    {item} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-10">Company</h4>
            <ul className="space-y-4">
              {["Work", "About", "Insights", "Careers"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/40 text-xs hover:text-white transition-colors font-light flex items-center gap-2 group">
                    {item} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-10">Status</h4>
            <div className="glass p-6 rounded-3xl border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-widest font-bold text-white/20">System</span>
                <span className="text-[9px] uppercase tracking-widest font-bold text-green-500/60">Operational</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-widest font-bold text-white/20">Latency</span>
                <span className="text-[9px] uppercase tracking-widest font-bold text-white/60">12ms</span>
              </div>
              <div className="pt-2 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3 h-3 text-blue-500" />
                  <span className="text-[8px] font-mono text-white/10">0x2A9F4B_SECURED</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[9px] font-bold uppercase tracking-[0.5em] text-white/10">
            © 2024 INTEGRAL LABS • BUILT FOR SCALE
          </div>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20 hover:text-white transition-all">Privacy</Link>
            <Link href="#" className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20 hover:text-white transition-all">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
