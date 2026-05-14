"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Menu, X, ArrowRight, Zap } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-700",
      scrolled ? "py-4" : "py-8"
    )}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={cn(
          "flex items-center justify-between transition-all duration-700 rounded-full px-4 md:px-10 h-20",
          scrolled 
            ? "bg-black/40 backdrop-blur-3xl border border-white/10 shadow-[0_0_50px_-12px_rgba(124,58,237,0.3)]" 
            : "bg-transparent border border-transparent"
        )}>
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-purple-600 rounded-2xl rotate-45 group-hover:rotate-[135deg] transition-all duration-700 opacity-20 blur-sm" />
              <div className="relative w-10 h-10 bg-white rounded-xl flex items-center justify-center group-hover:rotate-[15deg] transition-transform duration-500 shadow-2xl">
                <div className="w-5 h-5 bg-black rotate-45 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col -gap-1">
              <span className="font-black text-xl tracking-tighter text-white uppercase italic leading-none">Integral</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-purple-500 leading-none">Labs</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 relative group",
                  pathname === link.href ? "text-white" : "text-white/40 hover:text-white"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-purple-500 transition-all duration-500",
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/contact"
              className="group relative bg-white text-black px-8 h-12 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 group-hover:text-white transition-colors">Start Project</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 group-hover:text-white transition-all" />
            </Link>
          </div>

          <button 
            className="md:hidden text-white w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-[120px] left-6 right-6 bg-black/90 backdrop-blur-3xl border border-white/10 rounded-[40px] p-10 md:hidden overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "text-4xl font-black uppercase tracking-tighter transition-colors",
                        pathname === link.href ? "text-purple-500" : "text-white/40 hover:text-white"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="bg-white text-black w-full py-6 rounded-3xl text-center font-black text-xl uppercase tracking-widest flex items-center justify-center gap-3"
                  onClick={() => setIsOpen(false)}
                >
                  Start Project
                  <Zap className="w-6 h-6 fill-black" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

