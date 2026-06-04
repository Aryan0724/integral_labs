export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  liveLink: string;
  intro: string;
  challenge: string;
  solution: string;
  impact: string;
  techStack: string[];
  founderQuote: {
    text: string;
    name: string;
    role: string;
  };
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: "edu-platform-premium",
    title: "EduReach Premium",
    category: "EdTech Platform",
    year: "2025",
    image: "/projects/edu-med.png",
    liveLink: "https://education-med.vercel.app/",
    intro: "A premium educational platform engineered for high-performance learning, combining expert mentorship, interactive live classes, and a global community for academic and professional growth.",
    challenge: "Creating a scalable and visually engaging educational platform that works seamlessly across devices, with smooth performance for live sessions and course management.",
    solution: "Built a feature-rich Next.js platform with glassmorphism UI, dark/light mode, real-time course tracking, live class integration, and verified certification workflows.",
    impact: "The platform enables institutions to host 200+ courses, manage 10,000+ students, and track progress in real time — resulting in a 98% student satisfaction rate.",
    techStack: ["Next.js", "React", "TailwindCSS", "TypeScript", "Node.js"],
    founderQuote: {
      text: "Integral Labs built exactly what we envisioned — a cutting-edge platform that made our educational content feel as premium as it is.",
      name: "Tanuj Bisht",
      role: "Co-Founder, Integral Labs",
    },
    screenshots: [
      "/projects/edu-med.png",
    ],
  },
  {
    id: "edu-platform-accessible",
    title: "EduReach Lite",
    category: "EdTech Platform",
    year: "2025",
    image: "/projects/edu-easy.png",
    liveLink: "https://education-easy.vercel.app/",
    intro: "A clean, accessible educational website built for institutions that need simplicity and performance. Optimized for conversions, clear navigation, and fast load times.",
    challenge: "Many educational institutions needed a web presence that was fast, accessible, and easy to maintain without a large development team.",
    solution: "Designed a clean, conversion-optimized educational site with clear CTAs, accessible design patterns, and a lightweight architecture for maximum performance.",
    impact: "Delivered a fully functional educational web presence with a Lighthouse performance score of 97+ and a 40% improvement in user engagement over prior sites.",
    techStack: ["Next.js", "React", "CSS Modules", "TypeScript"],
    founderQuote: {
      text: "This project proved that simplicity and elegance can coexist. The result was a website that just works, beautifully.",
      name: "Aryan Bisht",
      role: "Co-Founder, Integral Labs",
    },
    screenshots: [
      "/projects/edu-easy.png",
    ],
  },
  {
    id: "integral-labs-v2",
    title: "Spice & Fire",
    category: "Restaurant Website",
    year: "2025",
    image: "/projects/il2.png",
    liveLink: "https://integral-labs2-mcaf.vercel.app/",
    intro: "A vibrant, full-featured Indian restaurant website with a loading screen, interactive digital menu, table reservation system, gallery, testimonials, and EmailJS-powered contact — all built for an immersive dining experience.",
    challenge: "The client needed a rich, modern restaurant web presence that could handle menu browsing, table reservations, and customer communication without a backend — all in a static deployment.",
    solution: "Built a multi-section restaurant site with dynamic menu rendering via JavaScript, a reservation form powered by EmailJS, a photo gallery, and an animated loading screen using the Cinzel and Poppins font pairing.",
    impact: "The site gave the restaurant a professional digital identity, enabling online table bookings and menu discovery, resulting in increased footfall and customer engagement.",
    techStack: ["HTML5", "CSS3", "JavaScript", "EmailJS", "Font Awesome"],
    founderQuote: {
      text: "We built this to show what a restaurant website can feel like — warm, immersive, and alive. Food deserves a digital experience as rich as the flavours.",
      name: "Tanuj Bisht",
      role: "Co-Founder, Integral Labs",
    },
    screenshots: [
      "/projects/il2.png",
    ],
  },
  {
    id: "integral-labs-v1",
    title: "Mamta Bhojnalaya",
    category: "Restaurant Website",
    year: "2024",
    image: "/projects/il1.png",
    liveLink: "https://integral-labs1.vercel.app/",
    intro: "A feature-rich Indian food restaurant website with a filterable menu (Breakfast, Lunch, Dinner), swiper-powered gallery and team sliders, table booking section, and a fancybox video player — showcasing authentic home-style Indian cuisine.",
    challenge: "The client, a cherished Indian eatery established since 1976, needed a modern, engaging web presence that honoured their heritage while offering features like online menu browsing and table booking.",
    solution: "Delivered a Bootstrap-based multi-section site with Swiper.js sliders for the gallery and chef team, a filterable dish menu with add-to-cart interaction, a table booking form, and fancybox video integration.",
    impact: "The website gave a legacy restaurant its first professional digital identity, presenting their story, menu, and team in a way that resonated with both loyal regulars and new customers.",
    techStack: ["HTML5", "Bootstrap", "CSS3", "JavaScript", "Swiper.js", "FancyBox"],
    founderQuote: {
      text: "Every restaurant has a soul. This project was about translating decades of tradition and warmth into a digital experience that felt just as inviting.",
      name: "Aryan Bisht",
      role: "Co-Founder, Integral Labs",
    },
    screenshots: [
      "/projects/il1.png",
    ],
  },
  {
    id: "business-consulting-premium",
    title: "Vantage Strategic",
    category: "Business Website",
    year: "2025",
    image: "/projects/biz-top.png",
    liveLink: "https://business-top.vercel.app/",
    intro: "An ultra-premium investment and strategic consulting website with a luxury black-and-gold aesthetic, designed for a high-end global advisory firm targeting fortune-level clientele.",
    challenge: "Conveying trust, authority, and extreme prestige through a digital presence that matches the caliber of a world-class investment advisory firm.",
    solution: "Crafted a bespoke dark luxury website with gold gradient typography, cinematic hero sections, a refined services grid, and an elite inquiry form — all optimized for high-net-worth client conversions.",
    impact: "The site elevated the firm's digital presence, reflecting its stature in managing $12B+ in assets across 45+ countries.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Font Awesome"],
    founderQuote: {
      text: "The website Integral Labs built for us is exactly what we needed — it commands respect the moment you land on it.",
      name: "Tanuj Bisht",
      role: "Co-Founder, Integral Labs",
    },
    screenshots: [
      "/projects/biz-top.png",
    ],
  },
  {
    id: "business-consulting-mid",
    title: "Nexus Foundry",
    category: "Tech Research Website",
    year: "2025",
    image: "/projects/biz-med.png",
    liveLink: "https://business-med.vercel.app/",
    intro: "A premium dark-mode technology research foundry website for an AI and advanced computing company, featuring a futuristic hero, capabilities grid (Cognitive AI, Adaptive Robotics, Quantum Security, Bio-Computation), and a project showcase.",
    challenge: "The client, a cutting-edge tech research firm, needed a site that projected authority and scientific gravitas — something that felt as advanced as their actual research.",
    solution: "Built an avant-garde dark site using Plus Jakarta Sans and Outfit fonts, with a full-bleed futuristic hero image, animated scroll reveals, a glass-morphism contact form, and Lucide icons throughout for a cohesive, high-tech aesthetic.",
    impact: "The site gave the research firm a digital presence matching its ambition — attracting talent, partners, and investors through a web identity as innovative as its technology.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Lucide Icons", "Google Fonts"],
    founderQuote: {
      text: "A tech research company's website should make visitors feel like they're stepping into the future. That was our only brief — and we delivered it.",
      name: "Aryan Bisht",
      role: "Co-Founder, Integral Labs",
    },
    screenshots: [
      "/projects/biz-med.png",
    ],
  },
  {
    id: "business-solutions-lite",
    title: "Quantum Integral",
    category: "Tech Research Website",
    year: "2024",
    image: "/projects/biz-low.png",
    liveLink: "https://business-low.vercel.app/",
    intro: "A sleek, minimal dark-mode website for an AI and quantum computing research company, featuring a bold hero, a Core Disciplines section (Neural Architectures, Quantum Ledger, Digital Twins), and an About section highlighting 50+ PhD researchers.",
    challenge: "Designing a minimal yet technically impressive site for a research company that needed to communicate expertise and vision without overwhelming visitors with complexity.",
    solution: "Built a clean, scroll-driven single-page site using the Outfit typeface and Phosphor icons, with a glass-morphism card layout, a striking hero gradient, and a focused contact CTA that emphasises collaboration.",
    impact: "Delivered a sharp, credibility-building site that communicates high-level research capabilities at a glance — ideal for attracting institutional partnerships and top-tier engineering talent.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Phosphor Icons", "Google Fonts"],
    founderQuote: {
      text: "The best tech sites don't try to explain everything. They make you feel the intelligence. This one does exactly that.",
      name: "Tanuj Bisht",
      role: "Co-Founder, Integral Labs",
    },
    screenshots: [
      "/projects/biz-low.png",
    ],
  },
];
