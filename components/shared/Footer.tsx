"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const openContact = () => {
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };

  return (
    <footer 
      style={{ backgroundColor: "#0b1120", color: "#ffffff" }}
      className="relative z-20 bg-slate-950 text-white pt-20 pb-12 border-t border-slate-800"
    >
      <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Top Section: Brand Statement & CTA Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-14 border-b border-slate-800/80">
          <div className="max-w-[620px]">
            <Link href="/" className="inline-block mb-4">
              <Logo dark={true} />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              The collective software engineering and search discoverability division of{" "}
              <strong className="text-white font-semibold">Integral Groups</strong>. Architecting high-performance web applications, bespoke business platforms, and search architectures engineered for Google SERPs and generative AI citations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <button
              onClick={openContact}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>Discuss a Project</span>
              <ArrowRight size={14} />
            </button>

            <Link
              href="/groups"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-700 hover:border-slate-600 bg-slate-900/60 hover:bg-slate-900 text-xs font-mono font-medium text-slate-300 transition-all"
            >
              <span>Integral Groups ↗</span>
            </Link>
          </div>
        </div>

        {/* 4-Column Navigation Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14 border-b border-slate-800/80">
          
          {/* Col 1: Four Core Pillars */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/#services-section" className="hover:text-blue-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/#services-section" className="hover:text-blue-400 transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="/#services-section" className="hover:text-blue-400 transition-colors">
                  Technical SEO & Core Web Vitals
                </Link>
              </li>
              <li>
                <Link href="/#services-section" className="hover:text-blue-400 transition-colors">
                  Answer Engine Optimization (AEO)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Integral Groups Ecosystem */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              Integral Groups Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <span className="text-white font-medium">Integral Labs</span>
                <span className="block text-[11px] text-slate-500">Software, Web & Search</span>
              </li>
              <li>
                <Link href="/groups" className="hover:text-blue-400 transition-colors">
                  Integral Media
                </Link>
                <span className="block text-[11px] text-slate-500">Content & Brand Cinematography</span>
              </li>
              <li>
                <Link href="/groups" className="hover:text-blue-400 transition-colors">
                  Integral Marketing
                </Link>
                <span className="block text-[11px] text-slate-500">Performance & CRO</span>
              </li>
              <li>
                <Link href="/groups" className="hover:text-blue-400 transition-colors">
                  Department of Products
                </Link>
                <span className="block text-[11px] text-slate-500">Proprietary SaaS & Tools</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Portfolio */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Company & Work
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/work" className="hover:text-blue-400 transition-colors">
                  Featured Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Book a Discovery Call
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-blue-400 transition-colors">
                  Engineering Process
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Studio &amp; Principles
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition-colors">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Coordinates */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              Inquiries
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <Mail size={15} className="text-blue-400 shrink-0 mt-0.5" />
                <a 
                  href="mailto:contact@integralgroups.in" 
                  className="hover:text-blue-400 transition-colors font-mono text-[11px]"
                >
                  contact@integralgroups.in
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-tight">
                  India (Leadership in New Delhi & Dehradun)
                </span>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Inquiries Monitored 24/7
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="font-mono text-[11px]">
            © {new Date().getFullYear()} Integral Labs. A division of Integral Groups. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-[11px] font-medium">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/admin/login" className="hover:text-slate-300 transition-colors font-mono">
              Admin Portal
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
