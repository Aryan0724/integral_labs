/**
 * Single source of truth for customer-facing FAQs.
 * Consumed by:
 *  - components/home/FAQ.tsx (accordion UI)
 *  - lib/json-ld.ts::getFaqJsonLd (FAQPage structured data for rich results / AEO)
 * Keep answers concise, factual, and self-contained — answer engines
 * extract them verbatim.
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "What technologies do you use?",
    answer:
      "We engineer fullstack systems primarily with Next.js 16, React 19, TypeScript, Tailwind CSS, Python/FastAPI for machine learning pipelines, and PostgreSQL or Supabase for relational data architectures. Deployments are orchestrated on Vercel Edge and AWS.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Typical client projects range from 3 to 10 weeks depending on scope. Lean MVPs can launch within 3–4 weeks, while complex fullstack SaaS platforms with custom AI models or multi-tenant architectures take between 6 to 10 weeks.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, every deployment includes 30 days of complimentary post-launch warranty, monitoring, and operational bug-fixing. We also offer ongoing monthly maintenance agreements for infrastructure updates, model fine-tuning, and feature iteration.",
  },
  {
    question:
      "What is Answer Engine Optimization (AEO), and how is it different from SEO?",
    answer:
      "Traditional SEO focuses on ranking blue links on search results pages through keywords, technical speed, and markup. Answer Engine Optimization (AEO) structures your data, semantic entities, and technical architecture so conversational AI models (such as ChatGPT, Perplexity, Claude, and Gemini) synthesize and directly cite your business as the authoritative answer to user queries. We engineer both simultaneously.",
  },
  {
    question: "What is the relationship between Integral Labs and Integral Groups?",
    answer:
      "Integral Labs is the specialized software engineering and search architecture division within Integral Groups. While Labs focuses exclusively on custom codebases, web platforms, and discoverability, our parent ecosystem encompasses Integral Media (content & branding), Integral Marketing (performance & CRO), and Department of Products (proprietary SaaS incubation).",
  },
  {
    question: "Who owns the code and design?",
    answer:
      "You do. Upon project completion and final milestone approval, 100% of the intellectual property, repository access, design assets, and production deployment credentials transfer entirely to your organization with zero lock-in.",
  },
  {
    question: "Can you help with existing projects?",
    answer:
      "Absolutely. We routinely conduct codebase audits, UI/UX redesigns, security hardenings, and legacy migrations to modern Next.js/React architectures without interrupting existing business operations.",
  },
];
