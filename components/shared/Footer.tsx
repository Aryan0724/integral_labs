"use client";

import React from "react";
import Link from "next/link";
import { Code, ExternalLink, Globe, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-32 bg-transparent border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <div className="w-5 h-5 bg-black rotate-45" />
              </div>
              <span className="font-bold text-2xl tracking-tighter text-white uppercase italic">Integral Labs</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs font-light">
              The software engineering and intelligent automation division of Integral Group. Building high-performance systems for modern scale.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
                <Code className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
                <ExternalLink className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
                <Globe className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.4em] mb-10">Engineering</h4>
            <ul className="space-y-4">
              {["Web Development", "SaaS Platforms", "Machine Learning", "Automation Systems"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/40 text-sm hover:text-white transition-colors font-light">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.4em] mb-10">Ecosystem</h4>
            <ul className="space-y-4">
              {["Integral Group", "Integral Media", "Integral OS", "Labs Registry"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/40 text-sm hover:text-white transition-colors flex items-center gap-1 font-light">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-20" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.4em] mb-10">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-white/40 text-sm hover:text-white transition-colors font-light">Privacy Policy</Link></li>
              <li><Link href="#" className="text-white/40 text-sm hover:text-white transition-colors font-light">Terms of Service</Link></li>
              <li><Link href="#" className="text-white/40 text-sm hover:text-white transition-colors font-light">Contact Engineering</Link></li>
              <li><span className="text-white/20 text-[10px] font-mono mt-4 block">© 2024 INTEGRAL_LABS_v1.0</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.5em] text-white/10">
            Precision Engineering • Intelligent Automation • Scalable Systems
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse" />
              <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">Network: STABLE</span>
            </div>
            <div className="text-white/10 text-[9px] font-mono uppercase tracking-widest">
              BUILD: 0x2A9F4B
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
