"use client";

import React from "react";
import Link from "next/link";

const footerNav = [
  {
    label: "Product",
    links: [
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "Process", href: "/team" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "Philosophy", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/contact" },
    ],
  },
  {
    label: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 bg-[#080808]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="max-w-[240px]">
            <Link href="/" className="flex items-center gap-2.5 mb-6 group">
              <div className="w-5 h-5 rounded bg-white flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
                  <rect x="2" y="2" width="5" height="12" rx="1" fill="#080808" />
                  <rect x="9" y="8" width="5" height="6" rx="1" fill="#080808" />
                  <rect x="9" y="2" width="5" height="4" rx="1" fill="#6366f1" />
                </svg>
              </div>
              <span className="text-[14px] font-bold text-white tracking-tight">Integral</span>
            </Link>
            <p className="text-[13px] text-[#555] leading-[1.6]">
              Modern engineering studio building the next generation of software systems.
            </p>
          </div>

          {/* Nav */}
          <div className="flex gap-16 md:gap-24">
            {footerNav.map((col) => (
              <div key={col.label}>
                <div className="text-[11px] font-mono text-[#444] uppercase tracking-widest mb-6">{col.label}</div>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-[13px] text-[#555] hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-[#333]">© 2026 Integral Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[12px] text-[#333] hover:text-white transition-colors">GitHub</Link>
            <Link href="#" className="text-[12px] text-[#333] hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="text-[12px] text-[#333] hover:text-white transition-colors">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
