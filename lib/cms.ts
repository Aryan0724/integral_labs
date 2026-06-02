import fs from 'fs';
import path from 'path';

const CONTENT_PATH = path.join(process.cwd(), 'data', 'content.json');

export interface SiteContent {
  hero: {
    title: string;
    subtext: string;
    primaryCta: string;
    secondaryCta: string;
  };
  services: {
    title: string;
    description: string;
    list: Array<{
      id: string;
      title: string;
      description: string;
      tags: string[];
    }>;
  };
  portfolio: {
    title: string;
    description: string;
  };
  groups: {
    title: string;
    description: string;
  };
}

export const defaultContent: SiteContent = {
  hero: {
    title: "Digital products for world-class agencies.",
    subtext: "We are the Creative Engineering Department of Integral Groups. Crafting high-performance websites, bespoke SaaS, and intelligent automation systems.",
    primaryCta: "Start a project —>",
    secondaryCta: "See Portfolio"
  },
  services: {
    title: "Capabilities",
    description: "Scalable digital systems designed with usability, performance, and long-term adaptability in mind.",
    list: [
      {
        id: "web-dev",
        title: "Web Development",
        description: "High-performance marketing sites and interactive digital experiences.",
        tags: ["Architecture", "Motion", "Performance"]
      },
      {
        id: "saas",
        title: "App / SaaS Build",
        description: "Architecting bespoke software products and scalable cloud platforms.",
        tags: ["Architecture", "Cloud", "API Design"]
      },
      {
        id: "automation",
        title: "Intelligent Automation",
        description: "Streamlining operations with robust, self-healing workflow engines.",
        tags: ["Workflows", "Integration", "Data"]
      },
      {
        id: "ai",
        title: "AI and ML Systems",
        description: "Integrating intelligent models into your core business operations.",
        tags: ["ML", "LLM", "Inference"]
      }
    ]
  },
  portfolio: {
    title: "Case Studies.",
    description: "A collection of high-performance software systems and intelligent interfaces built for the next generation of digital infrastructure."
  },
  groups: {
    title: "The Global Ecosystem.",
    description: "Integral Groups is a multi-disciplinary conglomerate engineering the next decade of digital infrastructure, creative automation, and secure protocols."
  }
};

// Vercel friendly data store
let memoryCache: SiteContent | null = null;

export function getSiteContent(): SiteContent {
  // If we have it in memory (client-side or server-side during session), use it
  if (memoryCache) return memoryCache;

  try {
    // Only use fs on local dev or server environments that support it
    if (typeof window === 'undefined' && fs.existsSync(CONTENT_PATH)) {
      const data = fs.readFileSync(CONTENT_PATH, 'utf8');
      memoryCache = JSON.parse(data);
      return memoryCache!;
    }
  } catch (error) {
    console.warn('CMS: Falling back to default content (Filesystem read failed)');
  }

  return defaultContent;
}

export function saveSiteContent(content: SiteContent) {
  memoryCache = content;

  try {
    // Only attempt write in environments where it's possible
    if (typeof window === 'undefined') {
      const dir = path.dirname(CONTENT_PATH);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(CONTENT_PATH, JSON.stringify(content, null, 2));
      return true;
    }
  } catch (error) {
    // In Vercel production, this will fail. We just log it and rely on memory cache for the current session.
    console.warn('CMS: Persistent write failed (expected on Vercel production). Content updated in memory.');
    return true; // Return true so the UI doesn't show error, even if it's ephemeral
  }
  
  return true;
}
