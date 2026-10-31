"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What technology stack does Integral Labs specialize in?",
    answer: "We engineer production systems primarily in the modern TypeScript ecosystem (Next.js 16, React 19, Tailwind CSS v4) paired with Python (FastAPI, PyTorch, Scikit-Learn) for machine learning services, PostgreSQL, Docker, and Cloudflare/AWS edge infrastructure."
  },
  {
    question: "How fast can we kick off a new engineering sprint?",
    answer: "Following our initial technical discovery call, we review requirements and deliver a detailed architecture blueprint, sprint milestones, and launch Sprint 1 within 5 to 7 business days."
  },
  {
    question: "Who owns the code, intellectual property, and design assets?",
    answer: "You own 100% of the intellectual property, git repositories, design tokens, database schemas, and documentation from day one. We never lock clients into proprietary closed-source systems."
  },
  {
    question: "Can you modernize or integrate with our existing infrastructure?",
    answer: "Yes. We frequently build headless frontend experiences, integrate custom REST/GraphQL APIs, and optimize slow legacy queries without requiring a total rip-and-replace of your core database."
  },
  {
    question: "What engagement models do you support?",
    answer: "We support both Milestone-Driven Fixed Scopes (ideal for well-defined MVPs and project redesigns) and Dedicated Engineering Retainers (for venture-backed startups and ongoing product iterations)."
  },
  {
    question: "What post-launch maintenance and support do you provide?",
    answer: "All production deployments include launch monitoring, edge failover configuration, and 30 days of complimentary hyper-care warranty. We also provide ongoing SLA-backed support retainers for continuous feature sprints."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section 
      id="faq-section"
      className="relative py-28 md:py-36 overflow-hidden bg-transparent border-t border-white/[0.05]"
    >
      <div className="container relative z-10 max-w-[1040px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-[650px] mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-5"
          >
            <HelpCircle size={13} className="text-purple-400" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-purple-400">
              Clear Answers
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[38px] sm:text-[52px] text-white tracking-tight leading-[1.0] mb-5"
          >
            Frequently Asked{" "}
            <span className="italic font-light text-white/50">Questions.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] sm:text-[15px] text-white/50 leading-relaxed font-light"
          >
            Transparent insights into how we partner, engineer, and deliver software.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "bg-[#121212] border-purple-500/30 shadow-lg shadow-purple-950/20" 
                    : "bg-[#0b0b0b]/80 border-white/[0.07] hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-[16px] sm:text-[17px] font-bold text-white tracking-tight leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-xl shrink-0 transition-colors ${
                    isOpen ? "bg-purple-500/20 text-purple-300" : "bg-white/5 text-white/40"
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-1 text-[14px] text-white/60 leading-relaxed font-light border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Extra Question Prompt */}
        <div className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-[15px] font-bold text-white tracking-tight">Have a specific question not covered here?</h4>
            <p className="text-[12px] text-white/40 font-light">Direct engineering inquiries receive responses within 24 hours.</p>
          </div>
          <Link
            href="/contact"
            className="btn-sweep btn-sweep-outline px-6 py-2.5 text-[11px] font-bold tracking-[0.1em] uppercase shrink-0"
          >
            <span>Ask Us Directly</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
