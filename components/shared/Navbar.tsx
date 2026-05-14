"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Products", href: "/work" },
  { label: "Build", href: "/services" },
  { label: "Philosophy", href: "/about" },
  { label: "Process", href: "/team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3"
            : "py-5"
        }`}
      >
        <div className="container">
          <div className={`flex items-center justify-between rounded-xl transition-all duration-300 px-4 h-12 ${
            scrolled
              ? "glass shadow-lg shadow-black/20"
              : "bg-transparent"
          }`}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-95 transition-transform">
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                  <rect x="2" y="2" width="5" height="12" rx="1" fill="#080808" />
                  <rect x="9" y="8" width="5" height="6" rx="1" fill="#080808" />
                  <rect x="9" y="2" width="5" height="4" rx="1" fill="#6366f1" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-white tracking-tight">
                Integral Labs
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-sm transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-white bg-white/5"
                      : "text-[#888] hover:text-[#ccc]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="flex items-center gap-1.5 text-sm font-medium text-white bg-[#6366f1] hover:bg-[#5558e8] transition-colors px-4 py-1.5 rounded-lg"
              >
                Start A Project
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-[#888] hover:text-white transition-colors p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-xl glass p-4 shadow-xl shadow-black/40 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm text-[#888] hover:text-white hover:bg-white/5 transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 pt-2 border-t border-white/5">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-[#6366f1] hover:bg-[#5558e8] transition-colors px-4 py-2.5 rounded-lg"
                >
                  Start A Project
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
