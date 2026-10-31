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
    id: "preyt-platform",
    title: "Preyt Platform",
    category: "Machine Learning / AI",
    year: "2025",
    image: "/projects/real/preyt-platform.png",
    liveLink: "https://preyt.integralgroups.in/",
    intro: "An intelligent ML forecasting system that predicts the potential reach, audience growth, and performance metrics of a YouTube video before its launch.",
    challenge: "Designing a predictive model that parses multiple video attributes (such as thumbnail style, title metadata, and tags) and returns performance simulations in real time.",
    solution: "Engineered an advanced predictive pipeline using custom ML regression models trained on YouTube API data metrics, wrapped in a responsive client panel.",
    impact: "Provides creators with real-time predictions on video traction and growth potential, boosting pre-launch optimization efficiency.",
    techStack: ["Python", "FastAPI", "React", "TypeScript", "Scikit-Learn"],
    founderQuote: {
      text: "Preyt takes the guesswork out of publishing. We built it to let creators optimize their content strategy through machine learning before hitting upload.",
      name: "Aryan Tiwari",
      role: "Co-Founder, Integral Labs",
    },
    screenshots: [
      "/projects/real/preyt-platform.png",
    ],
  },
  {
    id: "edu-platform-premium",
    title: "EduReach Premium",
    category: "EdTech Platform",
    year: "2025",
    image: "/projects/real/edu-platform-premium.png",
    liveLink: "https://education-med.vercel.app/",
    intro: "A premium educational platform engineered for high-performance learning, combining expert mentorship, interactive live classes, and a global community for academic and professional growth.",
    challenge: "Creating a scalable and visually engaging educational platform that works seamlessly across devices, with smooth performance for live sessions and course management.",
    solution: "Built a feature-rich Next.js platform with glassmorphism UI, dark/light mode, real-time course tracking, live class integration, and verified certification workflows.",
    impact: "Engineered a scalable multi-cohort learning architecture supporting interactive course catalogs, verified certification pathways, and streamlined student-instructor engagement.",
    techStack: ["Next.js", "React", "TailwindCSS", "TypeScript", "Node.js"],
    founderQuote: {
      text: "Integral Labs built exactly what we envisioned — a cutting-edge platform that made our educational content feel as premium as it is.",
      name: "Tanuj Pargai",
      role: "Co-Founder, Integral Labs",
    },
    screenshots: [
      "/projects/real/edu-platform-premium.png",
    ],
  },
  {
    id: "integral-labs-v2",
    title: "Spice & Fire",
    category: "Restaurant Website",
    year: "2025",
    image: "/projects/real/integral-labs-v2.png",
    liveLink: "https://integral-labs2-mcaf.vercel.app/",
    intro: "A vibrant, full-featured Indian restaurant website with a loading screen, interactive digital menu, table reservation system, gallery, testimonials, and EmailJS-powered contact — all built for an immersive dining experience.",
    challenge: "The client needed a rich, modern restaurant web presence that could handle menu browsing, table reservations, and customer communication without a backend — all in a static deployment.",
    solution: "Built a multi-section restaurant site with dynamic menu rendering via JavaScript, a reservation form powered by EmailJS, a photo gallery, and an animated loading screen using the Cinzel and Poppins font pairing.",
    impact: "The site gave the restaurant a professional digital identity, enabling online table bookings and menu discovery, resulting in increased footfall and customer engagement.",
    techStack: ["HTML5", "CSS3", "JavaScript", "EmailJS", "Font Awesome"],
    founderQuote: {
      text: "We built this to show what a restaurant website can feel like — warm, immersive, and alive. Food deserves a digital experience as rich as the flavours.",
      name: "Tanuj Pargai",
      role: "Co-Founder, Integral Labs",
    },
    screenshots: [
      "/projects/real/integral-labs-v2.png",
    ],
  },
  {
    id: "business-consulting-premium",
    title: "Vantage Strategic",
    category: "Business Advisory",
    year: "2025",
    image: "/projects/real/business-consulting-premium.png",
    liveLink: "https://business-top.vercel.app/",
    intro: "A top-tier business consulting website engineered with dynamic case study portfolios, strategic advisory showcases, and verified client testimonials.",
    challenge: "Translating sophisticated strategic consulting services into an intuitive, conversion-focused digital layout with high visual credibility.",
    solution: "Developed an authoritative corporate web experience using modern typography, interactive case study tabs, and strategic consultation booking flows.",
    impact: "Elevated executive brand perception, streamlining client consultation inquiries and providing clear proof of advisory impact across sectors.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Font Awesome", "Google Fonts"],
    founderQuote: {
      text: "The website Integral Labs built for us is exactly what we needed — it commands respect the moment you land on it.",
      name: "Tanuj Pargai",
      role: "Co-Founder, Integral Labs",
    },
    screenshots: [
      "/projects/real/business-consulting-premium.png",
    ],
  },
  {
    id: "cafe-max-premium",
    title: "Cafe Max Premium",
    category: "Hospitality Web App",
    year: "2025",
    image: "/projects/real/cafe-max-premium.png",
    liveLink: "https://portfoliosite-labs-cafe-max-4dls.vercel.app/",
    intro: "A luxury cafe website featuring interactive digital table ordering, dynamic menus, and reservation workflows.",
    challenge: "Conveying the culinary style of a luxury brand while providing complex reservation and digital menu filtering features.",
    solution: "Implemented custom typography grids, fancy galleries, and dynamic menu tab state mapping.",
    impact: "Elevated table reservation conversions and brand engagement through interactive digital menus and an intuitive booking interface.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Google Fonts"],
    founderQuote: {
      text: "A hospitality site is the visual appetizer. We wanted it to look premium and feel incredibly easy to book a table.",
      name: "Tanuj Pargai",
      role: "Co-Founder, Integral Labs",
    },
    screenshots: [
      "/projects/real/cafe-max-premium.png",
    ],
  },
  {
    id: "travicars",
    title: "Travicars Fleet",
    category: "Vehicle Rental Platform",
    year: "2025",
    image: "/projects/real/travicars.png",
    liveLink: "https://travicars-demo-3wa9.vercel.app/",
    intro: "An interactive travel and vehicle booking application with modern search filters, booking confirmation, and fleet management.",
    challenge: "Providing a unified booking dashboard that integrates map coordinates, vehicle attributes, and live availability schedules.",
    solution: "Engineered a map-first client hub displaying filtering states (SUV, Sedan, luxury) and simple digital checkout flows.",
    impact: "Streamlined the user scheduling journey, reducing the steps required to book a vehicle down to less than a minute.",
    techStack: ["Next.js", "TailwindCSS", "Framer Motion", "Lucide Icons"],
    founderQuote: {
      text: "Getting a car rental should be as fast as buying coffee. We stripped out the administrative friction from the front end.",
      name: "Tanuj Pargai",
      role: "Co-Founder, Integral Labs",
    },
    screenshots: [
      "/projects/real/travicars.png",
    ],
  },
  {
    id: "atozprints",
    title: "AtoZ Prints",
    category: "E-Commerce & Merch",
    year: "2025",
    image: "/projects/real/atozprints.png",
    liveLink: "https://atozprints.com",
    intro: "A custom printing and merchandise e-commerce platform offering personalized apparel, commercial print orders, and rapid checkout.",
    challenge: "Developing a streamlined ordering experience for customized print runs, merchandise previews, and transparent pricing tiers.",
    solution: "Built a responsive online storefront with real-time product previews, dynamic quantity discount calculators, and seamless ordering flows.",
    impact: "Streamlined bulk and retail print ordering, providing customers with transparent quotes and an intuitive digital portal for design submissions.",
    techStack: ["Next.js", "TailwindCSS", "Node.js", "PostgreSQL"],
    founderQuote: {
      text: "AtoZ Prints makes ordering custom merchandise effortless. We engineered the platform for instant product visualization and painless checkouts.",
      name: "Aryan Tiwari",
      role: "Co-Founder, Integral Labs",
    },
    screenshots: [
      "/projects/real/atozprints.png",
    ],
  },
  {
    id: "bro-uni",
    title: "Bro University",
    category: "University Portal",
    year: "2025",
    image: "/projects/real/bro-uni.png",
    liveLink: "https://bro-uni-2.vercel.app/",
    intro: "A comprehensive academic portal for soon-to-be universities, featuring course management, student admission pathways, and faculty systems.",
    challenge: "Designing an elegant, highly structured portal capable of handling diverse content ranging from academic papers to online admissions without clutter.",
    solution: "Crafted a custom typography-first academic portal focusing on clarity, clean spacing, and intuitive form pathways.",
    impact: "Delivered an authoritative academic layout optimized across form factors, driving consistent prospectus inquiries and streamlined program exploration.",
    techStack: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
    founderQuote: {
      text: "Higher education websites should feel academic but forward-looking. We merged academic structured layouts with a premium digital design.",
      name: "Tanuj Pargai",
      role: "Co-Founder, Integral Labs",
    },
    screenshots: [
      "/projects/real/bro-uni.png",
    ],
  },
  {
    id: "ukdrip",
    title: "UK Drip",
    category: "Streetwear & Fashion",
    year: "2025",
    image: "/projects/real/ukdrip.png",
    liveLink: "https://ukdrip-seven.vercel.app/",
    intro: "A high-fashion urban streetwear lookbook and online shop featuring limited edition clothing drops, lifestyle galleries, and modern typography.",
    challenge: "Conveying the cultural identity and exclusivity of urban fashion while keeping page weights minimal for rapid mobile browsing.",
    solution: "Constructed a bold, typography-driven e-commerce visual architecture emphasizing seasonal collection previews and high-contrast imagery.",
    impact: "Elevated customer engagement and viral social traffic conversions during limited seasonal merchandise releases.",
    techStack: ["Next.js", "CSS Modules", "TailwindCSS", "Framer Motion"],
    founderQuote: {
      text: "Fashion is all about presentation. We built UK Drip to present street collections in a way that feels curated and premium.",
      name: "Tanuj Pargai",
      role: "Co-Founder, Integral Labs",
    },
    screenshots: [
      "/projects/real/ukdrip.png",
    ],
  },
  {
    id: "exam-planner",
    title: "Exam Planner OG",
    category: "Academic Productivity",
    year: "2025",
    image: "/projects/real/exam-planner.png",
    liveLink: "https://examplanner-og.vercel.app/",
    intro: "A strategic study scheduler helping students track syllabus milestones, plan study sessions, and optimize exam preparation.",
    challenge: "Designing a scheduler that makes parsing vast academic topics and tracking task completion deadlines simple.",
    solution: "Created an interactive checklist and timeline layout with dynamic progress dials and milestone mapping.",
    impact: "Successfully improved study routine planning for students, aiding milestone management during peak testing weeks.",
    techStack: ["React", "TailwindCSS", "Framer Motion", "Lucide Icons"],
    founderQuote: {
      text: "Study systems should keep you focused, not add task friction. This scheduler makes planning routine milestones visual.",
      name: "Tanuj Pargai",
      role: "Co-Founder, Integral Labs",
    },
    screenshots: [
      "/projects/real/exam-planner.png",
    ],
  },
];
