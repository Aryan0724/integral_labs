/**
 * Uttarakhand city-market content for /dehradun, /haldwani, /rudrapur, /nainital.
 *
 * Single source of truth consumed by:
 *  - components/geo/CityPageClient.tsx (visible page)
 *  - app/[city]/page.tsx wrappers (metadata + JSON-LD)
 *  - app/sitemap.ts, lib/indexnow.ts, footer "Areas We Serve" links
 *
 * Content rules (do not break):
 *  - No prices. Cost questions always funnel to a discovery call.
 *  - Honest remote-delivery positioning from our Bhimtal HQ — never claim
 *     offices we don't have.
 *  - Every answer must be self-contained so FAQPage schema extracts cleanly.
 */
export interface CityFaq {
  question: string;
  answer: string;
}

export interface City {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  heroLabel: string;
  h1: string;
  intro: string;
  /** Exactly 4 pillar blurbs in the canonical pillar order (web, software, SEO, AEO). */
  pillars: string[];
  industries: string[];
  nearbyAreas: string[];
  /** project ids featured as proof (from lib/data/projects). */
  featured: string[];
  faqs: CityFaq[];
}

export const CITIES: City[] = [
  {
    slug: "dehradun",
    city: "Dehradun",
    metaTitle: "Web Development Company in Dehradun | Next.js, SEO & AEO",
    metaDescription:
      "Integral Labs engineers high-performance websites and custom software for Dehradun businesses from its Uttarakhand HQ. Next.js builds, Technical SEO & AEO. Exact quote within 24 hours.",
    heroLabel: "Serving Dehradun · Uttarakhand",
    h1: "Web & Software Development Company in Dehradun",
    intro:
      "Dehradun runs Uttarakhand — its schools, coaching institutes, hospitals, the Mussoorie hospitality circuit and a fast-growing startup scene. Integral Labs serves Dehradun remotely from our Bhimtal engineering HQ (with on-site meetings when a project genuinely needs them), bringing Next.js-grade engineering and search architecture that template agencies can't match.",
    pillars: [
      "Marketing sites, school portals and booking engines for Dehradun businesses — sub-second loads, schema-rich markup, built to rank.",
      "Admissions systems, clinic and retail software, and internal tools for Dehradun operations. You own 100% of the code.",
      "Core Web Vitals engineering and Dehradun keyword architecture so your site outranks the region's template builds.",
      "Structured so ChatGPT, Perplexity and Gemini cite your Dehradun business when buyers ask for recommendations.",
    ],
    industries: [
      "Schools, Coaching & EdTech",
      "Hotels, Homestays & Tours (Mussoorie Circuit)",
      "Clinics & Healthcare",
      "Retail & Wholesale",
      "Startups & Product Teams",
      "Professional Services (Legal, CA, Consulting)",
    ],
    nearbyAreas: [
      "Mussoorie",
      "Rishikesh",
      "Rajpur Road",
      "Clement Town",
      "Vikas Nagar",
      "Selaqui",
      "Doiwala",
      "Chakrata Road",
    ],
    featured: ["bro-uni", "exam-planner"],
    faqs: [
      {
        question: "Do you have an office in Dehradun?",
        answer:
          "Our engineering HQ is in Bhimtal, Uttarakhand — we serve Dehradun through scheduled video calls, shared project boards and weekly demos, and we plan in-person meetings when a project genuinely needs them. You work directly with the engineers building your project, not through account-manager layers.",
      },
      {
        question: "How much does website development in Dehradun cost?",
        answer:
          "We don't quote a number before understanding the problem. Book a discovery call, tell us what you're building, and you'll receive an exact, milestone-based quote within 24 hours — scope-driven pricing with no surprise line items.",
      },
      {
        question: "How fast can you launch a project?",
        answer:
          "Lean marketing sites and MVPs typically launch in 3–4 weeks; fullstack platforms with custom architectures take 6–10 weeks. Delivery runs through structured weekly milestones with senior engineering attention on every demo.",
      },
      {
        question:
          "My current website was built in WordPress by a local agency. Can you take it over?",
        answer:
          "Yes. We start with a codebase and performance audit, then migrate you to a modern Next.js build with SEO-preserving redirects, fresh schema and Core Web Vitals fixes — rankings protected through the migration, not reset.",
      },
      {
        question: "Can you rank my Dehradun business on Google and in AI answers?",
        answer:
          "Yes — Technical SEO (semantic HTML5, JSON-LD schema, crawl architecture) is engineered directly into the build, and an Answer Engine Optimization layer (llms.txt, ai.txt, machine-readable Q&A) is included so ChatGPT, Perplexity and Gemini can find and cite your business.",
      },
    ],
  },

  {
    slug: "haldwani",
    city: "Haldwani",
    metaTitle: "App & Web Development Company in Haldwani, Kumaon",
    metaDescription:
      "App and web development for Haldwani, Kathgodam & Kumaon — engineered in Bhimtal, 30 minutes up the road. Next.js platforms, custom software, SEO & AEO. Exact quote in 24 hours.",
    heroLabel: "Serving Haldwani · Kumaon Gateway",
    h1: "App & Software Development Company in Haldwani",
    intro:
      "Haldwani is Kumaon's commercial capital — the mandi trade, hospitals, schools and the Nainital tourist circuit all converge here, with Kathgodam's railway line carrying the logistics. Integral Labs is based 30 minutes up the road in Bhimtal, which means Haldwani clients get a genuinely local engineering partner with global-grade delivery: modern Next.js platforms, custom software, and search+AEO architecture built in from day one.",
    pillars: [
      "Mobile-first web apps and commerce platforms for Haldwani's retail, trade and hospital ecosystems — install-ready (PWA) and blazing fast.",
      "CRMs, billing suites and internal tools for Haldwani businesses, with role-based dashboards and 100% source-code ownership.",
      "Sub-second performance and Haldwani/Kathgodam keyword architecture that outrank the region's template shops on Google.",
      "Entity and Q&A engineering so AI assistants recommend your Haldwani business when buyers ask locally-relevant questions.",
    ],
    industries: [
      "Retail, Wholesale & Mandi Trade",
      "Hospitals & Clinics",
      "Hospitality (Nainital Tourist Circuit)",
      "Schools & Coaching",
      "Logistics & Transport (Kathgodam)",
      "Local Startups & Founder Ventures",
    ],
    nearbyAreas: [
      "Kathgodam",
      "Bhimtal (Our HQ)",
      "Nainital",
      "Kichha",
      "Pantnagar",
      "Gaulapar",
      "Kusumkhera",
      "Kaladhungi",
    ],
    featured: ["ukdrip", "atozprints"],
    faqs: [
      {
        question: "Do you work with Haldwani businesses in person?",
        answer:
          "Yes, easily — we're in Bhimtal, roughly 30–40 minutes from Haldwani. Most work runs over video calls and weekly demos; when a project needs face-to-face scoping or training, we come to you.",
      },
      {
        question: "How much does an app or website for a Haldwani business cost?",
        answer:
          "Every build is scoped, not packaged. After a short discovery call you receive an exact, milestone-based quote within 24 hours — you'll know the full number and the delivery plan before any work begins.",
      },
      {
        question: "Can you build a mobile app for Android?",
        answer:
          "We build mobile-first web applications (PWAs) that install on Android and iOS home screens with native-grade speed, plus API-ready backends that support fully native app shells when a project needs store distribution.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Most Haldwani client platforms land in 3–4 weeks of scope; complex multi-role systems take 6–10 weeks. You see a working demo every week — progress you can click, not status decks.",
      },
      {
        question: "Can you help our business show up when customers search?",
        answer:
          "Yes — Technical SEO is built directly into the source (semantic markup, JSON-LD schema, sitemap infrastructure), and an Answer Engine Optimization layer makes ChatGPT, Perplexity and Gemini reference your business. It's engineering, not an expensive monthly package.",
      },
    ],
  },

  {
    slug: "rudrapur",
    city: "Rudrapur",
    metaTitle: "Software Development Company in Rudrapur (SIDCUL)",
    metaDescription:
      "Custom software for Rudrapur's SIDCUL manufacturers & dealers: order-to-invoice systems, dealer portals, POS & HRMS — built from Bhimtal HQ. Exact milestone quote within 24 hours.",
    heroLabel: "Serving Rudrapur · SIDCUL Industrial Belt",
    h1: "Software Development Company in Rudrapur",
    intro:
      "Rudrapur runs on manufacturing. The SIDCUL industrial estate anchors Uttarakhand's economy with plants, dealers, distributors and logistics fleets that live and die by quotation sheets, purchase orders and delivery challans. Integral Labs builds the software layer that replaces those spreadsheets — order-to-invoice systems, dealer and distributor portals, POS and HRMS tools — remotely from our Bhimtal HQ, with on-site visits when a plant walkthrough genuinely helps.",
    pillars: [
      "Quotation→order→invoice pipelines, dealer portals and distributor systems built around how Rudrapur manufacturers actually run.",
      "POS, inventory and HRMS-lite suites for retail floors and plant offices — multi-terminal, role-aware, fully owned by you.",
      "Credible, fast, schema-rich websites that win tenders and rank against the region's aging WordPress builds.",
      "Structured product and service data so procurement teams asking AI assistants find your Rudrapur company first.",
    ],
    industries: [
      "SIDCUL Manufacturers (Orders & Billing)",
      "Dealers & Distributors (Portals)",
      "Warehousing & Logistics",
      "Retail & POS Operations",
      "Education & Training Institutes",
      "Transport & Fleet Operators",
    ],
    nearbyAreas: [
      "SIDCUL Industrial Estate",
      "Kichha",
      "Sitarganj",
      "Khatima",
      "Kashipur",
      "Bazpur",
      "Jaspur",
      "Pantnagar",
    ],
    featured: ["atozprints", "bro-uni"],
    faqs: [
      {
        question: "Do you visit SIDCUL factories and offices in person?",
        answer:
          "When it matters, yes. Most discovery and delivery runs over video calls, shared boards and weekly demos; for plant walkthroughs, shift-based training or hardware-linked work (biometrics, POS setups) we schedule on-site visits to Rudrapur.",
      },
      {
        question: "What does custom software for a Rudrapur business cost?",
        answer:
          "It depends on scope — modules, users, integrations and hardware. That's why we run a discovery call first, then return a fixed, milestone-based quote within 24 hours. No retainer padding, no surprise change orders.",
      },
      {
        question: "We already bought an off-the-shelf ERP. Can you still help?",
        answer:
          "Often the honest answer is custom-first: we build the thin layer your ERP can't — dealer portals, quotation workflows, reporting dashboards — and integrate with the systems you keep. You decide what stays.",
      },
      {
        question: "Who owns the software you build?",
        answer:
          "You do, completely. On final milestone approval the code, design assets and deployment credentials transfer entirely to your organisation — zero licence fees or vendor lock-in.",
      },
      {
        question: "Can you deliver within a production timeline?",
        answer:
          "Focused internal tools ship in 4–8 weeks; dealer and distributor platforms in 6–10. Weekly working demos mean plant and office teams evaluate the system continuously instead of waiting for a launch reveal.",
      },
    ],
  },

  {
    slug: "nainital",
    city: "Nainital",
    metaTitle: "Website Designing Company in Nainital & Bhimtal",
    metaDescription:
      "Websites for Nainital's hotels, homestays, tours & schools — designed and engineered in Bhimtal itself. Booking-ready, fast on hill connections, built for Google & AI search.",
    heroLabel: "Serving Nainital & the Kumaon Lake Circuit",
    h1: "Website Designing & Web Development Company in Nainital & Bhimtal",
    intro:
      "This is our home turf — our engineering HQ sits in Bhimtal, in the Nainital district itself. Hotels, homestays, tour operators, schools and cafés across the lake circuit get something no out-of-district agency can offer: a local engineering partner with global-grade standards. Every build is engineered for the realities of hill connectivity (sub-second loads matter more here than anywhere) and optimised to win both Google and AI-assistant recommendations when travellers ask.",
    pillars: [
      "Booking-ready websites for hotels, homestays and tour operators — enquiry flows, gallery performance and season-proof architecture.",
      "School portals, admission systems and brand platforms for institutions across the Nainital–Bhimtal–Bhowali belt.",
      "Performance-first builds tuned for patchy hill bandwidth: aggressive asset budgets, edge delivery, real-device testing.",
      "Travellers increasingly ask ChatGPT and Perplexity where to stay — we structure your property so AI cites you, not the aggregator.",
    ],
    industries: [
      "Hotels, Resorts & Homestays",
      "Tour & Travel Operators",
      "Schools & Educational Institutions",
      "Cafés, Retail & Local Brands",
      "Adventure, Wellness & Retreats",
      "Real Estate & Property",
    ],
    nearbyAreas: [
      "Bhimtal (Our HQ)",
      "Nainital — Mallital & Tallital",
      "Bhowali",
      "Sattal",
      "Mukteshwar",
      "Ramgarh",
      "Kathgodam",
      "Naukuchiatal",
    ],
    featured: ["ukdrip", "atozprints"],
    faqs: [
      {
        question: "You're actually based in Bhimtal? Can we meet in person?",
        answer:
          "Yes — Bhimtal is our HQ, minutes from Nainital's lake belt around Bhowali and Sattal. We particularly enjoy projects we can walk through in person; just book a call to schedule a site visit.",
      },
      {
        question: "How much does a website cost for my hotel, café or shop?",
        answer:
          "It depends on booking flows, rooms/content and integrations. We scope first on a short discovery call, then send an exact milestone-based quote within 24 hours — pricing follows scope, never a padded package.",
      },
      {
        question: "Can you integrate room bookings and enquiry management?",
        answer:
          "Yes — enquiry forms, booking pathways, admin dashboards and (where useful) third-party booking integrations. We build the flow around how your property actually handles guests, high season included.",
      },
      {
        question: "Will the site be fast on slow internet connections?",
        answer:
          "That's our speciality. Hill-bandwidth performance is engineered in from the start: tight asset budgets, edge-cached pages and image pipelines that keep large photo galleries usable even on weak connections.",
      },
      {
        question: "Can travellers find us through ChatGPT or Perplexity?",
        answer:
          "Increasingly, yes — that's how trip planning is shifting. We implement FAQ schema, llms.txt/ai.txt entity files and consistent location data so AI assistants can accurately recommend your property, alongside classic Google rankings.",
      },
    ],
  },
  {
    slug: "haridwar",
    city: "Haridwar",
    metaTitle: "Web Development Company in Haridwar",
    metaDescription:
      "Websites & custom software for Haridwar hotels, retailers and manufacturers — engineered remotely from our Uttarakhand HQ, performance-tuned for pilgrim-season surges. Exact quote within 24 hours.",
    heroLabel: "Serving Haridwar · Ganga Corridor",
    h1: "Web & Software Development Company in Haridwar",
    intro:
      "Haridwar lives two lives at once: by the Ganga, pilgrims, dharamshalas and shopkeepers ride seasons that can double or triple overnight — from the Kanwar rush to Kumbh years; a few kilometres inland, the industrial belt's plants, dealers and logistics operators run on quotation sheets and delivery challans. Integral Labs engineers software and websites for both economies, delivered remotely from our Uttarakhand HQ with on-site visits when a project genuinely needs them.",
    pillars: [
      "Booking engines, multi-language pages and high-traffic websites for hotels, dharamshalas and tour operators — engineered for pilgrim-season surges, not just average Tuesdays.",
      "Quotation, billing and dealer systems for Haridwar's industries, plus retail and clinic software for the bazaar trade around Har ki Pauri.",
      "Technical SEO that wins \"in Haridwar\" searches on engineering merit — semantic markup, schema graphs and Core Web Vitals the template shops can't match.",
      "Structured, machine-readable answers so AI assistants cite your Haridwar business when travellers ask where to stay or buyers ask who supplies.",
    ],
    industries: [
      "Hotels, Dharamshalas & Pilgrim Tourism",
      "Manufacturers (Haridwar Industrial Belt)",
      "Retail, Ayurveda & Bazaar Trade",
      "Schools & Coaching Institutes",
      "Healthcare & Wellness",
      "Event & Wedding Services",
    ],
    nearbyAreas: [
      "Har Ki Pauri",
      "Jwalapur",
      "Kankhal",
      "BHEL Industrial Area",
      "Rishikesh",
      "Roorkee",
      "Devpura",
      "Ranipur More",
    ],
    featured: ["bro-uni", "atozprints"],
    faqs: [
      {
        question: "Do you have an office in Haridwar?",
        answer:
          "Our engineering HQ is in Bhimtal — on the Kumaon side of Uttarakhand — so we serve Haridwar remotely through scheduled video calls, shared project boards and weekly working demos. When a project needs in-person scoping or on-site training, we plan visits deliberately. You deal directly with the engineers building your product, which is why timing and quality hold.",
      },
      {
        question: "How much does website development in Haridwar cost?",
        answer:
          "We don't quote before we understand the problem. Book a discovery call and describe what you're building; within 24 hours you receive a fixed, milestone-based quote covering scope, timeline and number — no package padding, no surprise line items.",
      },
      {
        question: "Can your website handle Kumbh-scale traffic spikes?",
        answer:
          "That's an engineering question, and we treat it as one: edge-cached static pages, incremental regeneration and image pipelines sized for surge patterns like the Kanwar rush and festival years. Your site stays fast on the days your entire year depends on.",
      },
      {
        question:
          "Our current site was built by a local agency in WordPress. Can you take it over?",
        answer:
          "Yes. We audit the codebase and performance, then migrate to a modern Next.js build with SEO-preserving redirects, structured data and Core Web Vitals fixes — protecting your accumulated Google rankings through the transition.",
      },
      {
        question: "Will we rank on Google — and in AI assistants' answers?",
        answer:
          "Both are engineered into the build: Technical SEO (semantic HTML5, JSON-LD schema, crawl architecture) secures classic rankings, while our Answer Engine Optimization layer — llms.txt, ai.txt and machine-readable Q&A — makes ChatGPT, Perplexity and Gemini able to cite you. No monthly mystery retainers required.",
      },
    ],
  },
];

export function getCity(slug: string): City {
  const city = CITIES.find((c) => c.slug === slug);
  if (!city) {
    throw new Error(`Unknown city slug: ${slug}`);
  }
  return city;
}
