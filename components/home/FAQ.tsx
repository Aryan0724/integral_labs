"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What technologies do you use?",
    answer: "We engineer fullstack systems primarily with Next.js 16, React 19, TypeScript, Tailwind CSS, Python/FastAPI for machine learning pipelines, and PostgreSQL or Supabase for relational data architectures. Deployments are orchestrated on Vercel Edge and AWS."
  },
  {
    question: "How long does a project take?",
    answer: "Typical client projects range from 3 to 10 weeks depending on scope. Lean MVPs can launch within 3–4 weeks, while complex fullstack SaaS platforms with custom AI models or multi-tenant architectures take between 6 to 10 weeks."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, every deployment includes 30 days of complimentary post-launch warranty, monitoring, and operational bug-fixing. We also offer ongoing monthly maintenance agreements for infrastructure updates, model fine-tuning, and feature iteration."
  },
  {
    question: "What is Answer Engine Optimization (AEO), and how is it different from SEO?",
    answer: "Traditional SEO focuses on ranking blue links on search results pages through keywords, technical speed, and markup. Answer Engine Optimization (AEO) structures your data, semantic entities, and technical architecture so conversational AI models (such as ChatGPT, Perplexity, Claude, and Gemini) synthesize and directly cite your business as the authoritative answer to user queries. We engineer both simultaneously."
  },
  {
    question: "What is the relationship between Integral Labs and Integral Groups?",
    answer: "Integral Labs is the specialized software engineering and search architecture division within Integral Groups. While Labs focuses exclusively on custom codebases, web platforms, and discoverability, our parent ecosystem encompasses Integral Media (content & branding), Integral Marketing (performance & CRO), and Department of Products (proprietary SaaS incubation)."
  },
  {
    question: "Who owns the code and design?",
    answer: "You do. Upon project completion and final milestone approval, 100% of the intellectual property, repository access, design assets, and production deployment credentials transfer entirely to your organization with zero lock-in."
  },
  {
    question: "Can you help with existing projects?",
    answer: "Absolutely. We routinely conduct codebase audits, UI/UX redesigns, security hardenings, and legacy migrations to modern Next.js/React architectures without interrupting existing business operations."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq-section"
      className="py-24 md:py-32 bg-slate-50/70 border-t border-slate-200/80"
    >
      <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="max-w-[720px] mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 inline-block" />
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Your Questions, Answered
          </h2>
          <p className="text-base text-slate-500 mt-3">
            Find answers to common questions about our engineering process, pricing, and delivery.
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="max-w-[840px] space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-50 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
