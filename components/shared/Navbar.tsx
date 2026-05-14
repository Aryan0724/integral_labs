"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Products", href: "/work" },
  { label: "Systems", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
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
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-center justify-between px-5 h-11 rounded-full border border-white/[0.04] transition-all duration-700 pointer-events-auto bg-black/[0.6] backdrop-blur-xl ${
            scrolled ? "w-[92%] max-w-[500px] border-white/10 shadow-2xl" : "w-[92%] max-w-[1000px]"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-4 h-4 rounded-sm bg-white flex items-center justify-center transition-transform group-hover:scale-90">
              <svg viewBox="0 0 16 16" fill="none" className="w-2.5 h-2.5">
                <rect x="2" y="2" width="5" height="12" rx="0.5" fill="#000" />
                <rect x="9" y="8" width="5" height="6" rx="0.5" fill="#000" />
                <rect x="9" y="2" width="5" height="4" rx="0.5" fill="#6366f1" />
              </svg>
            </div>
            {!scrolled && (
              <span className="text-[12px] font-bold text-white tracking-tight">
                Integral
              </span>
            )}
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.div
                key={link.label}
                whileHover={{ y: -1 }}
                className="relative px-3 py-1"
              >
                <Link
                  href={link.href}
                  className={`text-[11px] font-semibold transition-colors duration-300 ${
                    pathname === link.href ? "text-white" : "text-[#71717a] hover:text-[#a1a1aa]"
                  }`}
                >
                  {link.label}
                </Link>
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-px bg-white/20"
                  />
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="px-3 py-1 rounded-full bg-white text-black text-[10px] font-bold hover:bg-[#f4f4f5] transition-all duration-300"
            >
              Start A Project
            </Link>

            <button
              className="md:hidden text-[#71717a] hover:text-white transition-colors p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
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
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col justify-center px-12"
            onClick={() => setMobileOpen(false)}
          >
            <nav className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-4xl font-bold text-[#3f3f46] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
