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
  Cpu, 
  Code2, 
  ShoppingBag, 
  Palette, 
  Zap, 
  Cloud,
  GraduationCap,
  Store,
  UtensilsCrossed,
  Microscope,
  Building2,
  ExternalLink,
  LucideIcon
} from "lucide-react";

export interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  icon: LucideIcon;
  sublinks: string[];
  href: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "custom-software",
    title: "Custom Web & SaaS Development",
    shortDesc: "End-to-end fullstack platforms, scalable microservices, and bespoke cloud architectures.",
    icon: Code2,
    sublinks: [
      "Custom SaaS Platforms",
      "Fullstack Web Applications",
      "API & Microservice Design",
      "Database Optimization & Architecture"
    ],
    href: "/services"
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning Solutions",
    shortDesc: "Integrating predictive models, generative AI pipelines, and custom neural workflows.",
    icon: Cpu,
    sublinks: [
      "Predictive Analytics & Forecasting",
      "LLM & RAG Pipeline Engineering",
      "Automated Vision & Data Extraction",
      "Custom Model Training & Fine-Tuning"
    ],
    href: "/services"
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Digital Storefronts",
    shortDesc: "High-speed conversion engines, headless shopping experiences, and catalog systems.",
    icon: ShoppingBag,
    sublinks: [
      "Headless E-Commerce Solutions",
      "Custom Marketplace Architectures",
      "Payment & Checkout Optimization",
      "Real-time Inventory Synchronization"
    ],
    href: "/services"
  },
  {
    id: "ui-ux",
    title: "UI/UX Design Systems & Motion",
    shortDesc: "Pixel-perfect interface design, interactive design systems, and fluid micro-interactions.",
    icon: Palette,
    sublinks: [
      "Design Systems & Token Architecture",
      "High-Fidelity Interactive Prototypes",
      "Motion Design & Smooth Physics",
      "Accessibility & Multi-device UX"
    ],
    href: "/services"
  },
  {
    id: "automation",
    title: "Intelligent Workflow Automation",
    shortDesc: "Self-healing cron infrastructure, cross-platform webhook pipes, and business engines.",
    icon: Zap,
    sublinks: [
      "Autonomous Workflow Engines",
      "Custom Webhook & API Pipes",
      "Operational ETL Pipelines",
      "Legacy Process Modernization"
    ],
    href: "/services"
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    shortDesc: "Production-ready deployments, containerization, real-time observability, and security.",
    icon: Cloud,
    sublinks: [
      "Zero-downtime CI/CD Pipelines",
      "AWS & Cloudflare Edge Routing",
      "Infrastructure Monitoring & Logging",
      "Security Auditing & Hardening"
    ],
    href: "/services"
  }
];

const industries = [
  {
    name: "EdTech & Learning Platforms",
    desc: "Virtual classrooms, student portals, and course analytics.",
    icon: GraduationCap,
    href: "/work"
  },
  {
    name: "E-Commerce & Retail",
    desc: "Modern digital stores, dynamic pricing, and inventory flows.",
    icon: Store,
    href: "/work"
  },
  {
    name: "Hospitality & Booking Systems",
    desc: "Interactive menus, table reservations, and guest management.",
    icon: UtensilsCrossed,
    href: "/work"
  },
  {
    name: "Tech Research & Scientific Foundries",
    desc: "Deep tech research portals, data simulators, and portals.",
    icon: Microscope,
    href: "/work"
  },
  {
    name: "Enterprise SaaS & Business Advisory",
    desc: "Multi-tenant cloud suites, dashboards, and automated ops.",
    icon: Building2,
    href: "/work"
  }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"services" | "industries" | null>(null);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  const currentService = serviceCategories[selectedServiceIndex];
  const CurrentServiceIcon = currentService.icon;

  return (
    <>
      <div ref={navRef} className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
        <motion.header
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between w-full max-w-[1260px] h-16 md:h-[68px] px-5 sm:px-8 rounded-2xl border transition-all duration-300 shadow-2xl ${
            scrolled
              ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-white/10 shadow-black/80 scale-[0.99]"
              : "bg-[#0e0e0e]/80 backdrop-blur-md border-white/[0.08]"
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <span className="font-display italic text-2xl md:text-3xl text-purple-400 group-hover:text-purple-300 transition-colors">∫</span>
            <div className="flex flex-col">
              <span className="text-[13px] md:text-[14px] font-bold tracking-[0.16em] text-white">INTEGRAL</span>
              <span className="text-[8px] font-mono tracking-[0.25em] text-white/40 -mt-1 group-hover:text-purple-400 transition-colors">LABS // STUDIO</span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Mega-Menu */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Services with Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("services")}
            >
              <button
                onClick={() => setActiveMenu(activeMenu === "services" ? null : "services")}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-bold tracking-[0.12em] uppercase transition-colors ${
                  activeMenu === "services" || pathname.startsWith("/services")
                    ? "text-white bg-white/5"
                    : "text-white/60 hover:text-white hover:bg-white/[0.02]"
                }`}
              >
                Services
                <ChevronDown 
                  size={13} 
                  className={`transition-transform duration-200 ${activeMenu === "services" ? "rotate-180 text-purple-400" : "text-white/40"}`} 
                />
              </button>

              {/* Services Mega-Menu Dropdown */}
              <AnimatePresence>
                {activeMenu === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    onMouseLeave={() => setActiveMenu(null)}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[780px]"
                  >
                    <div className="rounded-2xl border border-white/10 bg-[#0d0d0d]/95 backdrop-blur-2xl p-6 shadow-2xl shadow-black/90 grid grid-cols-[1.25fr_1fr] gap-6">
                      {/* Left: Category List */}
                      <div className="flex flex-col gap-1 pr-4 border-r border-white/5">
                        <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/5">
                          <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/40">Capabilities Hub</span>
                          <Link 
                            href="/services" 
                            className="text-[10px] font-mono text-purple-400 hover:text-purple-300 flex items-center gap-1 uppercase tracking-wider"
                            onClick={() => setActiveMenu(null)}
                          >
                            All Services <ArrowRight size={11} />
                          </Link>
                        </div>

                        {serviceCategories.map((service, index) => {
                          const Icon = service.icon;
                          const isSelected = selectedServiceIndex === index;
                          return (
                            <div
                              key={service.id}
                              onMouseEnter={() => setSelectedServiceIndex(index)}
                              className={`group flex items-start gap-3 p-2.5 rounded-xl transition-all cursor-pointer ${
                                isSelected 
                                  ? "bg-white/[0.06] text-white border border-white/5" 
                                  : "text-white/60 hover:text-white hover:bg-white/[0.02]"
                              }`}
                            >
                              <div className={`p-2 rounded-lg shrink-0 transition-colors ${
                                isSelected ? "bg-purple-500/20 text-purple-400" : "bg-white/5 text-white/50 group-hover:text-white"
                              }`}>
                                <Icon size={16} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <Link 
                                  href={service.href}
                                  onClick={() => setActiveMenu(null)}
                                  className="text-[13px] font-semibold tracking-tight text-white block hover:text-purple-300 transition-colors"
                                >
                                  {service.title}
                                </Link>
                                <p className="text-[11px] text-white/40 line-clamp-1 font-light mt-0.5">
                                  {service.shortDesc}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Right: Sub-services Preview Panel */}
                      <div className="flex flex-col justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-purple-400">Featured Delivery Focus</span>
                          </div>
                          
                          <div className="flex items-center gap-2 mb-3">
                            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                              <CurrentServiceIcon size={18} />
                            </div>
                            <h4 className="text-[14px] font-bold text-white tracking-tight leading-tight">
                              {currentService.title}
                            </h4>
                          </div>

                          <p className="text-[12px] text-white/50 leading-relaxed font-light mb-5">
                            {currentService.shortDesc}
                          </p>

                          <div className="space-y-2">
                            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/30 block mb-2">Core Deliverables</span>
                            {currentService.sublinks.map((sublink) => (
                              <div key={sublink} className="flex items-center gap-2 text-[12px] text-white/70">
                                <div className="w-1 h-1 rounded-full bg-purple-400" />
                                <span>{sublink}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-5 mt-4 border-t border-white/5">
                          <Link
                            href="/contact"
                            onClick={() => setActiveMenu(null)}
                            className="btn-sweep btn-sweep-outline w-full py-2.5 text-[11px] font-bold tracking-[0.1em] uppercase"
                          >
                            <span>Consult on this scope</span>
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("industries")}
            >
              <button
                onClick={() => setActiveMenu(activeMenu === "industries" ? null : "industries")}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-bold tracking-[0.12em] uppercase transition-colors ${
                  activeMenu === "industries" 
                    ? "text-white bg-white/5" 
                    : "text-white/60 hover:text-white hover:bg-white/[0.02]"
                }`}
              >
                Industries
                <ChevronDown 
                  size={13} 
                  className={`transition-transform duration-200 ${activeMenu === "industries" ? "rotate-180 text-purple-400" : "text-white/40"}`} 
                />
              </button>

              <AnimatePresence>
                {activeMenu === "industries" && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    onMouseLeave={() => setActiveMenu(null)}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[460px]"
                  >
                    <div className="rounded-2xl border border-white/10 bg-[#0d0d0d]/95 backdrop-blur-2xl p-5 shadow-2xl shadow-black/90">
                      <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/5">
                        <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/40">Domain Specialization</span>
                        <span className="text-[9px] font-mono text-purple-400 uppercase tracking-widest">Active Verticals</span>
                      </div>

                      <div className="flex flex-col gap-1">
                        {industries.map((ind) => {
                          const Icon = ind.icon;
                          return (
                            <Link
                              key={ind.name}
                              href={ind.href}
                              onClick={() => setActiveMenu(null)}
                              className="group flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-white/[0.04] transition-all"
                            >
                              <div className="p-2 rounded-lg bg-white/5 text-white/50 group-hover:text-purple-400 group-hover:bg-purple-500/10 transition-colors">
                                <Icon size={16} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-[13px] font-medium text-white group-hover:text-purple-300 transition-colors">
                                  {ind.name}
                                </div>
                                <div className="text-[11px] text-white/40 font-light truncate">
                                  {ind.desc}
                                </div>
                              </div>
                              <ArrowRight size={13} className="text-white/20 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Links */}
            <Link
              href="/work"
              className={`px-3 py-2 rounded-lg text-[11px] font-bold tracking-[0.12em] uppercase transition-colors ${
                pathname.startsWith("/work")
                  ? "text-white bg-white/5"
                  : "text-white/60 hover:text-white hover:bg-white/[0.02]"
              }`}
            >
              Work
            </Link>

            <Link
              href="/process"
              className={`px-3 py-2 rounded-lg text-[11px] font-bold tracking-[0.12em] uppercase transition-colors ${
                pathname === "/process"
                  ? "text-white bg-white/5"
                  : "text-white/60 hover:text-white hover:bg-white/[0.02]"
              }`}
            >
              Process
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-lg text-[11px] font-bold tracking-[0.12em] uppercase transition-colors ${
                pathname === "/about"
                  ? "text-white bg-white/5"
                  : "text-white/60 hover:text-white hover:bg-white/[0.02]"
              }`}
            >
              About
            </Link>

            {/* Integral Groups Parent Link */}
            <Link
              href="/groups"
              className="ml-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-[9px] font-bold tracking-[0.14em] text-purple-300 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all flex items-center gap-1.5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              INTEGRAL GROUPS
            </Link>
          </nav>

          {/* Right Action: CTA Button with Zentix-Style Bottom-to-Top Sweep */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="btn-sweep btn-sweep-primary hidden sm:inline-flex px-5 py-2.5 text-[11px] font-bold tracking-[0.12em] uppercase"
            >
              <span>Start Project</span>
              <ArrowRight size={14} />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden p-2 rounded-lg bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
        </motion.header>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0a0a0a]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
          >
            {/* Header in Drawer */}
            <div className="flex justify-between items-center pb-6 border-b border-white/10">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                <span className="font-display italic text-2xl text-purple-400">∫</span>
                <span className="text-[14px] font-bold tracking-[0.18em] text-white">INTEGRAL LABS</span>
              </Link>
              <button 
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu" 
                className="p-2 rounded-full bg-white/5 text-white/70 hover:text-white"
              >
                <X size={22} />
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <nav className="py-8 flex flex-col gap-5">
              {/* Parent Group Badge */}
              <Link
                href="/groups"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] font-bold tracking-[0.15em] text-purple-300 w-fit"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                INTEGRAL GROUPS CONGLOMERATE
              </Link>

              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === "services" ? null : "services")}
                  className="flex items-center justify-between w-full text-left py-2 text-2xl font-display text-white"
                >
                  <span>Services</span>
                  <ChevronDown size={18} className={`transition-transform ${mobileExpandedSection === "services" ? "rotate-180 text-purple-400" : "text-white/40"}`} />
                </button>
                <AnimatePresence>
                  {mobileExpandedSection === "services" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 py-2 flex flex-col gap-2.5 border-l border-white/10 mt-2"
                    >
                      {serviceCategories.map((s) => (
                        <Link
                          key={s.id}
                          href={s.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-[13px] text-white/70 hover:text-white"
                        >
                          {s.title}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        onClick={() => setMobileOpen(false)}
                        className="text-[12px] font-mono uppercase tracking-wider text-purple-400 mt-1 flex items-center gap-1"
                      >
                        All Capabilities <ArrowRight size={12} />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Accordion */}
              <div>
                <button
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === "industries" ? null : "industries")}
                  className="flex items-center justify-between w-full text-left py-2 text-2xl font-display text-white"
                >
                  <span>Industries</span>
                  <ChevronDown size={18} className={`transition-transform ${mobileExpandedSection === "industries" ? "rotate-180 text-purple-400" : "text-white/40"}`} />
                </button>
                <AnimatePresence>
                  {mobileExpandedSection === "industries" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 py-2 flex flex-col gap-2.5 border-l border-white/10 mt-2"
                    >
                      {industries.map((ind) => (
                        <Link
                          key={ind.name}
                          href={ind.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-[13px] text-white/70 hover:text-white"
                        >
                          {ind.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/work"
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-display text-white/70 hover:text-white py-1"
              >
                Work & Cases
              </Link>

              <Link
                href="/process"
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-display text-white/70 hover:text-white py-1"
              >
                Process
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-display text-white/70 hover:text-white py-1"
              >
                About & Philosophy
              </Link>
            </nav>

            {/* Bottom Contact & Action */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-sweep btn-sweep-primary w-full py-4 text-center font-bold tracking-[0.15em] uppercase text-xs rounded-xl"
              >
                <span>Start A Project</span>
                <ArrowRight size={14} />
              </Link>

              <div className="flex flex-col sm:flex-row justify-between text-[11px] text-white/40 font-mono gap-1">
                <span>contact@integralgroups.in</span>
                <span>Bhimtal, Uttarakhand, India</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
