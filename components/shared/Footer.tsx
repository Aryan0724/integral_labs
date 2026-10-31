"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080808] border-t border-white/[0.08] text-white">
      {/* Hairline subtle top background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent pointer-events-none" />

      {/* Main Multi-Column Sitemap */}
      <div className="container max-w-[1240px] mx-auto px-5 sm:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          {/* Col 1 & 2: Brand & Contact Info */}
          <div className="lg:col-span-2 max-w-[380px]">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-block">
              <span className="font-display italic text-3xl text-purple-400 group-hover:text-purple-300 transition-colors">∫</span>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold tracking-[0.16em] text-white">INTEGRAL LABS</span>
                <span className="text-[8px] font-mono tracking-[0.25em] text-purple-400 uppercase">
                  ENGINEERING STUDIO
                </span>
              </div>
            </Link>

            <p className="text-[13px] text-white/50 leading-relaxed font-light mb-6">
              The creative engineering and intelligent systems studio under Integral Group. We build high-performance web applications, machine learning tools, and resilient software infrastructure.
            </p>

            <div className="space-y-2.5 text-[12px] font-mono text-white/40 mb-8">
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-purple-400" />
                <a href="mailto:contact@integralgroups.in" className="hover:text-white transition-colors">
                  contact@integralgroups.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-purple-400" />
                <span>Bhimtal, Uttarakhand, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={13} className="text-purple-400" />
                <Link href="/groups" className="hover:text-white transition-colors">
                  A Division of Integral Groups
                </Link>
              </div>
            </div>

            <Link
              href="/groups"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] font-mono text-purple-300 tracking-wider hover:bg-purple-500/20 transition-all"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span>PARENT CONGLOMERATE // INTEGRAL GROUPS</span>
            </Link>
          </div>

          {/* Col 3: Services Hub */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-6 font-bold">
              Capabilities
            </div>
            <ul className="space-y-3 text-[13px] text-white/60 font-light">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Custom SaaS &amp; Web Apps
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  AI &amp; Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  E-Commerce Storefronts
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  UI/UX Design Systems
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Cloud Architecture &amp; DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verticals & Industries */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-6 font-bold">
              Domain Verticals
            </div>
            <ul className="space-y-3 text-[13px] text-white/60 font-light">
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  EdTech &amp; Learning Suites
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  E-Commerce &amp; Retail
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Hospitality &amp; Dining
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Tech Research Foundries
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Enterprise Advisory
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Mobility &amp; Logistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Ecosystem */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-6 font-bold">
              Company
            </div>
            <ul className="space-y-3 text-[13px] text-white/60 font-light">
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Case Studies &amp; Work
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors">
                  Engineering Workflow
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About &amp; Leadership
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Start a Project
                </Link>
              </li>
              <li>
                <Link href="/groups" className="hover:text-white transition-colors">
                  Integral Groups
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-white/30 hover:text-white transition-colors">
                  Studio Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-footer Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] font-mono text-white/40">
          <div>
            <span>© {new Date().getFullYear()} Integral Labs. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Notice
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-white/20">|</span>
            <span className="text-purple-400/80">Integral Groups Entity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
