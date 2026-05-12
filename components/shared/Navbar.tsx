"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Code, ExternalLink, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-black rotate-45" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Integral Labs</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {["Services", "Process", "Tech Stack", "Work"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="https://github.com" className="text-muted-foreground hover:text-white transition-colors">
            <Code className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com" className="text-muted-foreground hover:text-white transition-colors">
            <ExternalLink className="w-5 h-5" />
          </Link>
          <Link
            href="#contact"
            className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-all"
          >
            Start a Project
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 right-0 bg-background border-b border-white/5 p-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {["Services", "Process", "Tech Stack", "Work"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-lg font-medium text-muted-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-white text-black px-4 py-3 rounded-xl text-center font-bold"
              onClick={() => setIsOpen(false)}
            >
              Start a Project
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
