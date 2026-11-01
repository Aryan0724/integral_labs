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
    intro: "Flagship AI Work: An intelligent ML forecasting system that predicts the potential reach, audience growth, and performance metrics of a YouTube video before its launch.",
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
    id: "atozprints",
    title: "AtoZ Prints",
    category: "E-Commerce & Merch",
    year: "2025",
    image: "/projects/real/atozprints.png",
    liveLink: "https://atozprints.in",
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
