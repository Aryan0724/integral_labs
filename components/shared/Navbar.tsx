"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Products", href: "/work" },
  { label: "Systems", href: "/services" },
  { label: "Process", href: "/team" },
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
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`flex items-center justify-between px-4 h-11 rounded-full border border-white/8 transition-all duration-500 pointer-events-auto bg-black/60 backdrop-blur-xl ${
            scrolled ? "w-[92%] max-w-[480px] shadow-2xl" : "w-[92%] max-w-[1080px]"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-5 h-5 rounded bg-white flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
                <rect x="2" y="2" width="5" height="12" rx="1" fill="#000" />
                <rect x="9" y="8" width="5" height="6" rx="1" fill="#000" />
                <rect x="9" y="2" width="5" height="4" rx="1" fill="#6366f1" />
              </svg>
            </div>
            {!scrolled && (
              <span className="text-[13px] font-bold text-white tracking-tight">
                Integral Labs
              </span>
            )}
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3 py-1 text-[12px] font-semibold transition-colors duration-200 ${
                  pathname === link.href ? "text-white" : "text-[#777] hover:text-[#bbb]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-white text-black text-[11px] font-bold hover:bg-[#eee] transition-colors"
            >
              Start A Project
              <ArrowUpRight className="w-3 h-3" />
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-[#888] hover:text-white transition-colors p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md md:hidden flex items-center justify-center p-6"
            onClick={() => setMobileOpen(false)}
          >
            <motion.nav
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-xs flex flex-col gap-6 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-bold text-[#888] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 h-14 rounded-2xl bg-white text-black font-bold text-lg"
              >
                Start A Project
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
