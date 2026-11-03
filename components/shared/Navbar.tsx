"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Menu, 
  ChevronDown, 
  ArrowRight, 
  Code2, 
  Cpu, 
  Search, 
  Sparkles, 
  ArrowUpRight
} from "lucide-react";
import Logo from "./Logo";

export interface ServiceCategory {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
}

const CORE_PILLARS: ServiceCategory[] = [
  {
    id: "web-dev",
    title: "Web Development",
    badge: "Next.js & Frontend",
    shortDesc: "High-performance marketing sites, web applications, and headless e-commerce.",
    icon: Code2,
    href: "/#services-section"
  },
  {
    id: "custom-software",
    title: "Custom Software",
    badge: "Cloud SaaS & APIs",
    shortDesc: "Bespoke business platforms, multi-tenant SaaS, and resilient API architectures.",
    icon: Cpu,
    href: "/#services-section"
  },
  {
    id: "seo",
    title: "Technical SEO",
    badge: "Organic Search",
    shortDesc: "Core Web Vitals tuning, semantic schema graphs, and crawler architecture.",
    icon: Search,
    href: "/#services-section"
  },
  {
    id: "aeo",
    title: "Answer Engine Optimization (AEO)",
    badge: "AI Discoverability",
    shortDesc: "Semantic structuring for citations on ChatGPT, Perplexity, Claude, and Gemini.",
    icon: Sparkles,
    href: "/#services-section"
  }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  const openContact = () => {
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3.5" 
            : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4.5"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 flex items-center justify-between">
          
          {/* Brand Logo (Authentic Integral Logo Mark) */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            
            {/* Services Dropdown (4 Pillars) */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`text-[13px] font-semibold tracking-wider uppercase flex items-center gap-1.5 transition-colors cursor-pointer ${
                  servicesDropdownOpen ? "text-blue-600" : "text-slate-700 hover:text-slate-950"
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                  }`} 
                />
              </button>

              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full -left-12 w-[620px] bg-white rounded-2xl border border-slate-200 shadow-xl p-5 mt-2 z-50"
                  >
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {CORE_PILLARS.map((pillar) => {
                        const Icon = pillar.icon;
                        return (
                          <Link
                            key={pillar.id}
                            href={pillar.href}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="p-3.5 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all group flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                  <Icon size={16} />
                                </div>
                                <span className="text-[9px] font-mono font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                                  {pillar.badge}
                                </span>
                              </div>
                              <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                {pillar.title}
                              </h4>
                              <p className="text-[11px] text-slate-500 leading-snug mt-1">
                                {pillar.shortDesc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between px-1">
                      <span className="text-xs text-slate-400 font-medium">
                        Collective development &amp; search authority
                      </span>
                      <Link 
                        href="/#services-section" 
                        onClick={() => setServicesDropdownOpen(false)}
                        className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                      >
                        Explore all capabilities <ArrowRight size={12} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Navigation Links */}
            <Link 
              href="/work" 
              className="text-[13px] font-semibold tracking-wider uppercase text-slate-700 hover:text-slate-950 transition-colors"
            >
              Work
            </Link>

            <Link 
              href="/#process" 
              className="text-[13px] font-semibold tracking-wider uppercase text-slate-700 hover:text-slate-950 transition-colors"
            >
              Process
            </Link>

            <Link 
              href="/#ecosystem" 
              className="text-[13px] font-semibold tracking-wider uppercase text-slate-700 hover:text-slate-950 transition-colors"
            >
              Ecosystem
            </Link>

            <Link 
              href="/about" 
              className="text-[13px] font-semibold tracking-wider uppercase text-slate-700 hover:text-slate-950 transition-colors"
            >
              About
            </Link>

            <Link 
              href="/aeo" 
              className="text-[13px] font-semibold tracking-wider uppercase text-slate-700 hover:text-slate-950 transition-colors"
            >
              SEO &amp; AEO
            </Link>

            <Link 
              href="/blog" 
              className="text-[13px] font-semibold tracking-wider uppercase text-slate-700 hover:text-slate-950 transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* Right Action Elements */}
          <div className="hidden sm:flex items-center gap-3.5">
            {/* Pill Link to Parent: INTEGRAL GROUPS */}
            <Link 
              href="/groups"
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 transition-all select-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-blue-600 transition-colors" />
              <span className="text-[11px] font-mono tracking-wider font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
                INTEGRAL GROUPS
              </span>
              <ArrowUpRight size={12} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
            </Link>

            {/* Primary Action Button */}
            <button
              onClick={openContact}
              className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold tracking-wider uppercase shadow-xs hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>Discuss Project</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed top-[69px] left-0 right-0 z-40 bg-white border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="max-w-[1240px] mx-auto px-6 py-6 flex flex-col gap-5">
              
              <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-slate-400">
                Core Services
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CORE_PILLARS.map((pillar) => (
                  <Link
                    key={pillar.id}
                    href={pillar.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800 flex items-center justify-between"
                  >
                    <span>{pillar.title}</span>
                    <span className="text-[10px] font-mono text-blue-600">{pillar.badge}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
                <Link
                  href="/work"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold text-slate-800 hover:text-blue-600 py-1"
                >
                  Portfolio & Work
                </Link>
                <Link
                  href="/#process"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold text-slate-800 hover:text-blue-600 py-1"
                >
                  Our Process
                </Link>
                <Link
                  href="/aeo"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold text-slate-800 hover:text-blue-600 py-1"
                >
                  SEO &amp; AEO (AI Search)
                </Link>
                <Link
                  href="/#ecosystem"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold text-slate-800 hover:text-blue-600 py-1"
                >
                  Integral Groups Ecosystem
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold text-slate-800 hover:text-blue-600 py-1"
                >
                  About Studio
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold text-slate-800 hover:text-blue-600 py-1"
                >
                  Engineering Blog
                </Link>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
                <button
                  onClick={openContact}
                  className="w-full py-3 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider text-center shadow-sm"
                >
                  Discuss Project
                </button>
                <Link
                  href="/groups"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center text-xs font-mono text-slate-500 hover:text-slate-800"
                >
                  Part of Integral Groups ↗
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
