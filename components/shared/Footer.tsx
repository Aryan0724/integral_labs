"use client";

import React from "react";
import Link from "next/link";
import { Code, ExternalLink, Globe, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-black rotate-45" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Integral Labs</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              The software engineering and intelligent automation division of Integral Group.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-white/40 hover:text-white transition-colors"><Code className="w-5 h-5" /></Link>
              <Link href="#" className="text-white/40 hover:text-white transition-colors"><ExternalLink className="w-5 h-5" /></Link>
              <Link href="#" className="text-white/40 hover:text-white transition-colors"><Globe className="w-5 h-5" /></Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest text-[10px]">Division Services</h4>
            <ul className="space-y-4">
              {["Web Development", "SaaS Platforms", "Machine Learning", "Automation Systems"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground text-sm hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest text-[10px]">Ecosystem</h4>
            <ul className="space-y-4">
              {["Integral Group", "Integral Media", "Integral OS", "Labs Registry"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground text-sm hover:text-white transition-colors flex items-center gap-1">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-30" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest text-[10px]">Legal & Contact</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted-foreground text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground text-sm hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-muted-foreground text-sm hover:text-white transition-colors">Contact Engineering</Link></li>
              <li><span className="text-muted-foreground text-sm">© 2024 Integral Labs</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
            Precision Engineering • Intelligent Automation • Scalable Systems
          </div>
          <div className="text-white/20 text-[10px] font-mono">
            BUILD_VERSION: 1.0.4-STABLE
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
