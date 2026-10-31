"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Send, CheckCircle2 } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#0B1120] text-white pt-20 pb-12 border-t border-slate-800">
      <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block mb-4">
              <Logo dark={true} />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-[240px] mb-6">
              Building digital products, AI systems, and scalable web platforms for forward-thinking organizations.
            </p>
            <div className="text-[11px] font-mono text-slate-500">
              © 2026 Integral Labs. All rights reserved.
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Cloud & DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/work" className="hover:text-blue-400 transition-colors">
                  Retail & E-commerce
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-blue-400 transition-colors">
                  Hospitality & Dining
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-blue-400 transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-blue-400 transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-blue-400 transition-colors">
                  Finance
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-blue-400 transition-colors">
                  Logistics & Mobility
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 mb-6">
              <li>
                <Link href="/team" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-blue-400 transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-blue-400 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>

            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Legal
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/legal" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-blue-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-blue-400 transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Stay Updated (Newsletter & Socials) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Stay Updated
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Get the latest engineering insights, architecture patterns, and product updates.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400">
                <CheckCircle2 size={16} />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative mb-6">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-4 pr-11 py-2.5 rounded-full bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1.5 w-7 h-7 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors shadow-xs"
                >
                  <ArrowRight size={13} />
                </button>
              </form>
            )}

            {/* Social Links */}
            <div className="flex items-center gap-3 text-slate-400">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="GitHub"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors"
              >
                <span className="font-mono text-xs font-bold">gh</span>
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="X (Twitter)"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors"
              >
                <span className="font-bold text-xs">𝕏</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors"
              >
                <span className="font-bold text-xs">in</span>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors"
              >
                <span className="font-bold text-xs">yt</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            Integral Labs Studio // Modern Fullstack &amp; Intelligent Systems
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>A Division of <strong className="text-white font-medium">Integral Groups</strong></span>
          </div>
        </div>

      </div>
    </footer>
  );
}
