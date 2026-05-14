"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Code, ExternalLink, Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Stack", href: "#tech-stack" },
    { name: "Work", href: "#work" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
      scrolled ? "py-4" : "py-8"
    )}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={cn(
          "flex items-center justify-between transition-all duration-500 rounded-full px-8 h-20",
          scrolled ? "bg-black/60 backdrop-blur-3xl border border-white/10 shadow-2xl" : "bg-transparent border border-transparent"
        )}>
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center group-hover:rotate-[15deg] transition-transform duration-500">
              <div className="w-5 h-5 bg-black rotate-45" />
            </div>
            <span className="font-bold text-xl tracking-tighter text-white uppercase italic">Integral Labs</span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="https://github.com" className="text-white/40 hover:text-white transition-colors">
              <Code className="w-5 h-5" />
            </Link>
            <Link
              href="#contact"
              className="group bg-white text-black px-6 h-12 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-purple-600 hover:text-white transition-all duration-500"
            >
              Start Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <button 
            className="md:hidden text-white w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center" 
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-[120px] left-6 right-6 bg-black/90 backdrop-blur-3xl border border-white/10 rounded-[40px] p-10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-bold text-white/50 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="bg-white text-black px-8 py-5 rounded-3xl text-center font-bold text-xl"
                onClick={() => setIsOpen(false)}
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
