"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Search } from "lucide-react";

const leftLinks = [
  { label: "SERVICES", href: "/services" },
  { label: "WORK", href: "/work" },
];

const rightLinks = [
  { label: "PROCESS", href: "/process" },
  { label: "ABOUT", href: "/about" },
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
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`pointer-events-auto flex items-center justify-between w-full max-w-[1200px] h-16 px-8 rounded-2xl border transition-all duration-500 shadow-2xl shadow-black/50 ${
            scrolled 
              ? "bg-black/90 backdrop-blur-md border-white/10 scale-[0.98]" 
              : "bg-black border-white/5"
          }`}
        >
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className="font-display italic text-2xl text-white">∫</span>
            <span className="text-[14px] font-bold tracking-[0.15em] text-white mt-1">NTEGRAL</span>
          </Link>

          {/* Desktop Navigation - Agency Relevant */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <Link
                href="/groups"
                className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-[9px] font-bold tracking-[0.1em] text-purple-400 hover:bg-purple-500/10 transition-all flex items-center gap-2"
              >
                <div className="w-1 h-1 rounded-full bg-purple-400 animate-pulse" />
                INTEGRAL GROUPS
              </Link>
              {leftLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[10px] font-bold tracking-[0.1em] text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="w-px h-4 bg-white/10 mx-2" />

            <div className="flex items-center gap-6">
              {rightLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[10px] font-bold tracking-[0.1em] text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="hidden sm:flex px-6 py-2 rounded-lg bg-white text-black text-[10px] font-bold tracking-[0.1em] hover:bg-white/90 transition-all"
            >
              START PROJECT
            </Link>

            <div className="flex items-center gap-4 text-white/40">
              <button className="hover:text-white transition-colors">
                <Search size={18} />
              </button>
              <div className="w-px h-6 bg-white/10" />
              <button 
                onClick={() => setMobileOpen(true)}
                className="hover:text-white transition-colors"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </motion.header>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black p-12 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <span className="font-display italic text-2xl text-white">∫</span>
                <span className="text-[14px] font-bold tracking-[0.15em] text-white mt-1">NTEGRAL</span>
              </div>
              <button onClick={() => setMobileOpen(false)} className="text-white/40">
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Link
                  href="/groups"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-bold tracking-[0.2em] text-purple-400 mb-4 inline-block"
                >
                  INTEGRAL GROUPS
                </Link>
              </motion.div>
              {[...leftLinks, ...rightLinks].map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-display text-white/40 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex flex-col gap-8">
               <Link href="/contact" className="w-full py-4 bg-white text-black text-center font-bold tracking-widest rounded-xl">
                  START PROJECT
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
