"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  {
    label: "Product",
    links: [
      { label: "Work", href: "/work" },
      { label: "Services", href: "/services" },
      { label: "Process", href: "/process" },
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
    label: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: "#0a0a0a" }}
    >
      {/* Top section */}
      <div className="container py-20">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          {/* Brand */}
          <div className="max-w-[260px]">
            <Link href="/" className="flex items-center gap-2.5 mb-6 group">
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center"
                style={{
                  background: "rgba(139, 92, 246, 0.1)",
                  border: "1px solid rgba(139, 92, 246, 0.25)",
                }}
              >
                <svg viewBox="0 0 12 12" fill="none" className="w-3.5 h-3.5">
                  <path d="M2 2H5V10H2z" fill="#8b5cf6" opacity="0.8" />
                  <path d="M6.5 6.5H9.5V10H6.5z" fill="#8b5cf6" />
                  <path d="M6.5 2H9.5V5.5H6.5z" fill="rgba(255,255,255,0.2)" />
                </svg>
              </div>
              <span
                className="text-[14px] font-medium tracking-tight"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Integral Labs
              </span>
            </Link>
            <p
              className="text-[13px] leading-[1.65]"
              style={{ color: "rgba(255,255,255,0.2)", fontWeight: 300 }}
            >
              Modern engineering studio building the next generation of software systems.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex gap-16 md:gap-20">
            {footerLinks.map((col) => (
              <div key={col.label}>
                <div
                  className="font-mono text-[9px] tracking-[0.25em] uppercase mb-6"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  {col.label}
                </div>
                <ul className="space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13px] transition-colors duration-200"
                        style={{ color: "rgba(255,255,255,0.25)", fontWeight: 300 }}
                        onMouseEnter={(e) =>
                          ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)")
                        }
                        onMouseLeave={(e) =>
                          ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.25)")
                        }
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider with measurement label */}
      <div
        className="relative"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 px-4"
          style={{ background: "#0a0a0a" }}
        >
          <span className="blueprint-label">integral-labs.io</span>
        </div>
      </div>

      {/* Massive wordmark */}
      <div className="relative overflow-hidden py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center select-none"
        >
          <span
            className="font-display inline-block"
            style={{
              fontSize: "clamp(80px, 18vw, 240px)",
              fontWeight: 300,
              letterSpacing: "-0.05em",
              lineHeight: "0.85",
              color: "rgba(255,255,255,0.05)",
              whiteSpace: "nowrap",
            }}
          >
            INTEGRAL
          </span>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div
        className="relative"
        style={{ borderTop: "1px solid rgba(255,255,255,0.03)" }}
      >
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="font-mono text-[10px]"
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            © 2026 Integral Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["GitHub", "LinkedIn", "Twitter"].map((social) => (
              <Link
                key={social}
                href="#"
                className="font-mono text-[10px] transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.15)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.15)")
                }
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
