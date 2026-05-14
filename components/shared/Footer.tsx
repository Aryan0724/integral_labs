"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GitHub, Twitter, LinkedIn } from "./SocialIcons";

const footerNav = [
  {
    label: "Products",
    links: [
      { label: "SaaS Platforms", href: "/services" },
      { label: "AI Products", href: "/services" },
      { label: "Automation", href: "/services" },
      { label: "Frontend Systems", href: "/services" },
    ],
  },
  {
    label: "Studio",
    links: [
      { label: "Work", href: "/work" },
      { label: "Process", href: "/about" },
      { label: "Philosophy", href: "/about" },
      { label: "Team", href: "/team" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/contact" },
    ],
  },
  {
    label: "Ecosystem",
    links: [
      { label: "Research", href: "/research" },
      { label: "Vision", href: "/vision" },
      { label: "Divisions", href: "/divisions" },
      { label: "Lab", href: "/team" },
    ],
  },
  {
    label: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080808]">
      <div className="container">
        {/* Top: logo + nav */}
        <div className="grid grid-cols-2 md:grid-cols-[1fr_repeat(4,auto)] gap-8 py-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 group mb-4">
              <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                  <rect x="2" y="2" width="5" height="12" rx="1" fill="#080808" />
                  <rect x="9" y="8" width="5" height="6" rx="1" fill="#080808" />
                  <rect x="9" y="2" width="5" height="4" rx="1" fill="#6366f1" />
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-white tracking-tight">Integral Labs</span>
            </Link>
            <p className="text-[12px] text-[#555] leading-[1.7] max-w-[220px] mb-5">
              A modern engineering and intelligent systems studio.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: GitHub, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: LinkedIn, href: "#" },
              ].map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="w-7 h-7 rounded-md border border-white/8 bg-[#111] flex items-center justify-center text-[#555] hover:text-white hover:border-white/15 transition-all"
                >
                  <Icon className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {footerNav.map((col) => (
            <div key={col.label}>
              <div className="text-[11px] font-medium text-[#444] uppercase tracking-wider mb-4">{col.label}</div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[#555] hover:text-[#999] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5 border-t border-white/5">
          <p className="text-[11px] text-[#444]">
            © 2026 Integral Labs. All rights reserved.
          </p>
          <Link
            href="/contact"
            className="flex items-center gap-1.5 text-[11px] text-[#555] hover:text-white transition-colors group"
          >
            hello@integralgroups.in
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
