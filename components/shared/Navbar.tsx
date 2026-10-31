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
  Smartphone, 
  Palette, 
  Sparkles, 
  Cloud, 
  Rocket, 
  ShoppingBag, 
  UtensilsCrossed, 
  GraduationCap, 
  HeartPulse, 
  ShieldCheck, 
  Truck,
  ExternalLink,
  CornerDownLeft
} from "lucide-react";
import Logo from "./Logo";

export interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  icon: any;
  href: string;
}

const servicesList: ServiceCategory[] = [
  {
    id: "web-dev",
    title: "Web Development",
    shortDesc: "Custom websites and web applications built for performance, scalability and business growth.",
    icon: Code2,
    href: "/services"
  },
  {
    id: "mobile-dev",
    title: "Mobile Applications",
    shortDesc: "Native and cross-platform mobile apps for iOS and Android.",
    icon: Smartphone,
    href: "/services"
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    shortDesc: "User-centred design for better engagement and conversion.",
    icon: Palette,
    href: "/services"
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    shortDesc: "Intelligent systems with cutting-edge machine learning.",
    icon: Sparkles,
    href: "/services"
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    shortDesc: "Scalable infrastructure and seamless deployment pipelines.",
    icon: Cloud,
    href: "/services"
  },
  {
    id: "product-strategy",
    title: "Product Strategy & MVP",
    shortDesc: "From idea to launch, build the right product with a lean roadmap.",
    icon: Rocket,
    href: "/services"
  }
];

const industriesList = [
  {
    id: "retail",
    title: "Retail & E-commerce",
    shortDesc: "Scale your online business with modern platforms.",
    icon: ShoppingBag,
    href: "/work"
  },
  {
    id: "hospitality",
    title: "Hospitality & Dining",
    shortDesc: "Enhance guest experiences with digital solutions.",
    icon: UtensilsCrossed,
    href: "/work"
  },
  {
    id: "education",
    title: "Education",
    shortDesc: "Build better learning experiences with technology.",
    icon: GraduationCap,
    href: "/work"
  },
  {
    id: "healthcare",
    title: "Healthcare",
    shortDesc: "Improve patient care with smart systems.",
    icon: HeartPulse,
    href: "/work"
  },
  {
    id: "finance",
    title: "Finance",
    shortDesc: "Secure and scalable financial solutions.",
    icon: ShieldCheck,
    href: "/work"
  },
  {
    id: "logistics",
    title: "Logistics & Mobility",
    shortDesc: "Optimize operations and delivery pipelines.",
    icon: Truck,
    href: "/work"
  }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (menu: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const openContact = () => {
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3" 
            : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center gap-1.5 text-[13px] font-semibold tracking-wider uppercase transition-colors py-2 ${
                  activeDropdown === "services" ? "text-blue-600" : "text-slate-700 hover:text-slate-950"
                }`}
                aria-expanded={activeDropdown === "services"}
              >
                <span>Services</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180 text-blue-600" : "text-slate-400"}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full -left-20 w-[720px] bg-white rounded-2xl border border-slate-200 shadow-xl p-6 mt-1 z-50 grid grid-cols-12 gap-6"
                  >
                    {/* Featured Highlight Card */}
                    <div className="col-span-5 bg-slate-900 rounded-xl p-6 text-white flex flex-col justify-between">
                      <div>
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-400 text-[10px] font-mono uppercase tracking-wider mb-4">
                          <Code2 size={12} />
                          <span>Core Capability</span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Web Development</h4>
                        <p className="text-xs text-slate-300 leading-relaxed mb-4">
                          Custom websites and web applications built for performance, scalability and business growth.
                        </p>
                        <ul className="space-y-1.5 text-[11px] text-slate-300">
                          <li className="flex items-center gap-2">• Business Websites</li>
                          <li className="flex items-center gap-2">• Web Applications</li>
                          <li className="flex items-center gap-2">• API Integrations</li>
                          <li className="flex items-center gap-2">• Maintenance & Support</li>
                        </ul>
                      </div>
                      <Link 
                        href="/services" 
                        className="inline-flex items-center gap-1.5 text-xs text-blue-400 font-semibold hover:text-blue-300 mt-6"
                      >
                        View all services <ArrowRight size={13} />
                      </Link>
                    </div>

                    {/* Services Grid List */}
                    <div className="col-span-7 grid grid-cols-2 gap-3.5">
                      {servicesList.slice(1).map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.id}
                            href={s.href}
                            className="p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/80 transition-all group flex flex-col justify-between"
                          >
                            <div className="flex items-center gap-2.5 mb-1.5">
                              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Icon size={14} />
                              </div>
                              <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                {s.title}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">
                              {s.shortDesc}
                            </p>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center gap-1.5 text-[13px] font-semibold tracking-wider uppercase transition-colors py-2 ${
                  activeDropdown === "industries" ? "text-blue-600" : "text-slate-700 hover:text-slate-950"
                }`}
                aria-expanded={activeDropdown === "industries"}
              >
                <span>Industries</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === "industries" ? "rotate-180 text-blue-600" : "text-slate-400"}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "industries" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full -left-10 w-[540px] bg-white rounded-2xl border border-slate-200 shadow-xl p-5 mt-1 z-50"
                  >
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {industriesList.map((ind) => {
                        const Icon = ind.icon;
                        return (
                          <Link
                            key={ind.id}
                            href={ind.href}
                            className="p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/80 transition-all group flex items-start gap-3"
                          >
                            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0 mt-0.5">
                              <Icon size={15} />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                {ind.title}
                              </div>
                              <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                                {ind.shortDesc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">Bespoke software across industry verticals</span>
                      <Link href="/work" className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                        View all industries <ArrowRight size={12} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Links */}
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
              href="/#about" 
              className="text-[13px] font-semibold tracking-wider uppercase text-slate-700 hover:text-slate-950 transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Right Action Elements */}
          <div className="hidden sm:flex items-center gap-3.5">
            {/* Dark Pill Badge: INTEGRAL GROUPS */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-[11px] font-mono tracking-wider shadow-xs select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="font-semibold uppercase tracking-wider text-[10px]">Integral Groups</span>
            </div>

            {/* Start Project CTA Button */}
            <button
              onClick={openContact}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              <span>START PROJECT</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={openContact}
              className="sm:hidden bg-blue-600 text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full"
            >
              START
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <Logo />
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-900"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                <Link
                  href="/services"
                  className="block text-lg font-bold text-slate-900 py-2 border-b border-slate-50"
                >
                  SERVICES
                </Link>
                <Link
                  href="/work"
                  className="block text-lg font-bold text-slate-900 py-2 border-b border-slate-50"
                >
                  CASES & WORK
                </Link>
                <Link
                  href="/work"
                  className="block text-lg font-bold text-slate-900 py-2 border-b border-slate-50"
                >
                  INDUSTRIES
                </Link>
                <Link
                  href="/#process"
                  className="block text-lg font-bold text-slate-900 py-2 border-b border-slate-50"
                >
                  PROCESS
                </Link>
                <Link
                  href="/#about"
                  className="block text-lg font-bold text-slate-900 py-2 border-b border-slate-50"
                >
                  ABOUT US
                </Link>
                <Link
                  href="/contact"
                  className="block text-lg font-bold text-slate-900 py-2 border-b border-slate-50"
                >
                  CONTACT
                </Link>
              </div>
            </div>

            <div className="pt-8 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openContact();
                }}
                className="w-full py-3.5 rounded-full bg-[#BBF7D0] hover:bg-[#A7F3D0] text-emerald-950 font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <span>Let's connect</span>
                <CornerDownLeft size={16} />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openContact();
                }}
                className="w-full py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <span>START PROJECT</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
