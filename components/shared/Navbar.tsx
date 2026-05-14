"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Products", href: "/work" },
  { label: "Process", href: "/team" },
  { label: "Philosophy", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`flex items-center justify-between gap-8 px-4 h-11 rounded-full border border-white/8 transition-all duration-500 pointer-events-auto ${
            scrolled 
              ? "bg-[#0d0d0d]/80 backdrop-blur-xl shadow-lg shadow-black/20 w-[92%] max-w-[500px]" 
              : "bg-transparent w-[92%] max-w-[1100px]"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-5 h-5 rounded bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-95 transition-transform">
              <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
                <rect x="2" y="2" width="5" height="12" rx="1" fill="#080808" />
                <rect x="9" y="8" width="5" height="6" rx="1" fill="#080808" />
                <rect x="9" y="2" width="5" height="4" rx="1" fill="#6366f1" />
              </svg>
            </div>
            {!scrolled && (
              <span className="text-[13px] font-semibold text-white tracking-tight">
                Integral
              </span>
            )}
          </Link>

          {/* Centered Nav (Visible on Desktop) */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3 py-1 text-[13px] font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-white"
                    : "text-[#666] hover:text-[#aaa]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA / Right Side */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className={`hidden md:flex items-center gap-1 px-3 py-1 rounded-full text-[12px] font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-white text-black hover:bg-[#eee]"
                  : "bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              Start A Project
              <ArrowUpRight className="w-3 h-3" />
            </Link>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-[#888] hover:text-white transition-colors p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-4 right-4 bg-[#0d0d0d] border border-white/8 rounded-2xl p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-[18px] font-medium text-[#888] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-white/5">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 h-12 rounded-xl bg-white text-black font-semibold text-sm"
                  >
                    Start A Project
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
