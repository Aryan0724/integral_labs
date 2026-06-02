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
    id: "vortex",
    title: "Vortex",
    category: "Intelligent Dashboard",
    year: "2024",
    image: "/projects/vortex.png",
    liveLink: "https://vortex.integralgroups.in",
    intro: "Vortex is a centralized intelligence hub designed for high-frequency industrial environments. It provides real-time oversight and predictive maintenance alerts for distributed sensor networks.",
    challenge: "The primary challenge was processing and visualizing over 100,000 data points per second with sub-millisecond latency while maintaining an intuitive user interface for operators.",
    solution: "We implemented a custom WebGL-based visualization engine and a robust WebSocket pipeline optimized for extreme throughput and minimal garbage collection.",
    impact: "Since deployment, Vortex has reduced unplanned downtime for our manufacturing clients by 42% and increased operational oversight accuracy by 3x.",
    techStack: ["Next.js", "WebGL", "Rust (WASM)", "TailwindCSS", "PostgreSQL"],
    founderQuote: {
      text: "The Integral team didn't just build a dashboard; they built a crystal ball for our operations. The speed and clarity are unlike anything we've used before.",
      name: "Marcus Thorne",
      role: "CTO, Industrial Dynamics",
    },
    screenshots: [
      "/projects/vortex_dashboard_ui.png",
      "/projects/vortex.png"
    ],
  },
  {
    id: "aether",
    title: "Aether",
    category: "SaaS Platform",
    year: "2024",
    image: "/projects/aether.png",
    liveLink: "https://aether.integralgroups.in",
    intro: "Aether is a next-generation collaboration platform for distributed engineering teams, focusing on architectural design and protocol standardization.",
    challenge: "Distributed teams often suffer from 'architectural drift'—where the implementation slowly diverges from the original design due to fragmented communication.",
    solution: "Aether integrates design-to-code syncing and automated documentation generation directly into the development workflow.",
    impact: "Teams using Aether report a 60% reduction in integration-phase bugs and 2x faster onboarding times for new engineers.",
    techStack: ["Next.js", "TypeScript", "Node.js", "Supabase", "Framer Motion"],
    founderQuote: {
      text: "Aether has become the backbone of our engineering culture. It keeps us aligned and ensures that our design integrity is never compromised.",
      name: "Elena Rossi",
      role: "VP Engineering, CloudPath",
    },
    screenshots: [
      "/projects/aether_system_interface.png",
      "/projects/aether.png"
    ],
  },
  {
    id: "lumina",
    title: "Lumina",
    category: "Digital Studio",
    year: "2023",
    image: "/projects/lumina.png",
    liveLink: "https://lumina.integralgroups.in",
    intro: "Lumina is a premium portfolio and brand-management platform tailored for world-class digital artists and boutique design agencies.",
    challenge: "The market was saturated with generic portfolio tools that lacked the cinematic polish and performance required by top-tier creative professionals.",
    solution: "We built a bespoke animation engine and a highly customizable design system that allows creators to tell their stories with surgical precision.",
    impact: "Lumina has enabled agencies to increase their project acquisition rates by 35% through more compelling and immersive digital presentations.",
    techStack: ["Next.js", "GSAP", "Three.js", "TailwindCSS", "Prisma"],
    founderQuote: {
      text: "With Lumina, our work finally looks as expensive as it is. The level of detail and motion fluidity is exactly what we were missing.",
      name: "Julian Kosta",
      role: "Creative Director, Studio Aura",
    },
    screenshots: [
      "/projects/lumina_creative_platform.png",
      "/projects/lumina.png"
    ],
  }
];
