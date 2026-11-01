export interface ArticleAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface TocItem {
  id: string;
  title: string;
  level: 2 | 3;
}

export interface ArticleSection {
  heading?: string;
  subheading?: string;
  paragraphs: string[];
  bulletPoints?: string[];
  callout?: {
    type: "note" | "tip" | "warning";
    text: string;
  };
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  author: ArticleAuthor;
  publishedAt: string; // ISO 8601
  updatedAt?: string;
  category: "Search Engineering" | "Web Architecture" | "SaaS Development" | "Performance";
  tags: string[];
  coverImage: string;
  coverAlt: string;
  readingTime: string;
  seoTitle: string;
  seoDescription: string;
  isPublished: boolean;
  tableOfContents: TocItem[];
  sections: ArticleSection[];
}

export const ARTICLES: Article[] = [
  {
    slug: "seo-vs-aeo-search-visibility-evolution",
    title: "SEO vs AEO: How Search Visibility Is Changing",
    excerpt:
      "Traditional search engines index pages based on keywords and crawl paths. Answer engines like ChatGPT, Perplexity, and Claude synthesize direct answers from structured entity relationships. Here is how modern technical teams adapt.",
    author: {
      name: "Integral Labs Engineering",
      role: "Search Architecture Division",
      avatar: "/integral-logo.png"
    },
    publishedAt: "2025-01-15T09:00:00.000Z",
    updatedAt: "2025-02-10T11:00:00.000Z",
    category: "Search Engineering",
    tags: ["SEO", "AEO", "AI Search", "Structured Data", "Schema.org"],
    coverImage: "/blog/seo-vs-aeo.svg",
    coverAlt: "Diagram comparing search engine index crawling with answer engine knowledge graph synthesis",
    readingTime: "7 min read",
    seoTitle: "SEO vs AEO: Understanding the Shift from Crawlers to Answer Engines",
    seoDescription:
      "Learn the core differences between traditional Search Engine Optimization (SEO) and Answer Engine Optimization (AEO), and how to architect web content for AI synthesis.",
    isPublished: true,
    tableOfContents: [
      { id: "traditional-search-mechanics", title: "The Mechanics of Traditional Search", level: 2 },
      { id: "the-emergence-of-answer-engines", title: "How Answer Engines Retrieve and Synthesize Information", level: 2 },
      { id: "key-differences", title: "Structural Differences: SEO vs AEO", level: 2 },
      { id: "actionable-architecture", title: "Engineering Requirements for AI Discoverability", level: 2 },
      { id: "conclusion", title: "Strategic Balance: Implementing Both Layers", level: 2 },
    ],
    sections: [
      {
        heading: "The Mechanics of Traditional Search",
        paragraphs: [
          "For more than two decades, search discovery has operated on a consistent paradigm: an autonomous web crawler requests HTML, parses document hierarchies, resolves internal links, and updates an inverted keyword index. When a user queries a search engine, an algorithmic ranking model evaluates relevance, page speed, domain authority, and anchor context to return a ranked list of blue links.",
          "This architecture rewarded pages optimized for specific keyword density, targeted backlink acquisition, and exhaustive topical coverage. The search engine acts primarily as an indexer and directory, pointing users outward toward third-party destinations."
        ]
      },
      {
        heading: "How Answer Engines Retrieve and Synthesize Information",
        paragraphs: [
          "Answer Engine Optimization (AEO) addresses an entirely different interaction pattern. Modern generative engines—such as Perplexity, ChatGPT Search, Claude, and Google's AI Overviews—do not simply present a list of links. Instead, they ingest query intent, execute vector-similarity retrieval against knowledge stores, and synthesize a single, cohesive natural-language answer with cited references.",
          "When an LLM synthesizes an answer, it evaluates facts, entities, and conceptual relationships. If your technical architecture publishes unstructured text without clear semantic schemas, answer engines struggle to parse exact claims, attribute authority, or extract clean excerpts for citation."
        ],
        callout: {
          type: "note",
          text: "AEO does not replace SEO. Rather, AEO builds on top of sound technical SEO fundamentals. Without clean crawlability and indexability, answer engines cannot retrieve your source documents in the first place."
        }
      },
      {
        heading: "Structural Differences: SEO vs AEO",
        paragraphs: [
          "Understanding the boundary between conventional search and generative synthesis requires examining four primary dimensions:",
        ],
        bulletPoints: [
          "Primary Output: SEO aims for position rankings on an 10-link SERP; AEO aims for inclusion as a named source or primary citation within a generated response.",
          "Content Consumption: Search engine crawlers parse HTML tokens and DOM hierarchy; LLM agents extract concise semantic triples (Subject-Predicate-Object) and factual propositions.",
          "Relevance Metric: SEO relies on keyword matching, dwell time, and backlink graphs; AEO emphasizes entity clarity, semantic consensus across authoritative sources, and verifiability.",
          "Query Complexity: SEO captures discrete long-tail strings ('best react cms 2025'); AEO handles multi-variable reasoning queries ('compare self-hosted cms options for 50k monthly visits with minimal maintenance')."
        ]
      },
      {
        heading: "Engineering Requirements for AI Discoverability",
        paragraphs: [
          "To position your platform for both algorithmic search crawlers and generative synthesis engines, engineering teams must implement specific architectural standards:",
          "First, embed unambiguous Schema.org JSON-LD structured data on every primary page. Entity types like Organization, WebSite, Article, and SoftwareApplication provide deterministic semantic grounding that models can parse without ambiguity.",
          "Second, adopt direct, claim-first editorial hierarchy. Place definitive answers, data summaries, and clear definitions at the start of sections rather than burying conclusions behind discursive introductions.",
          "Third, optimize document delivery. Answer engines executing live web fetches operate under aggressive latency budgets. Pages that render server-side with sub-second response times are substantially more likely to be retrieved and synthesized than slow client-rendered single page applications."
        ]
      },
      {
        heading: "Strategic Balance: Implementing Both Layers",
        paragraphs: [
          "The companies building sustainable digital footprints are not abandoning classic technical SEO in favor of speculative AI tactics. Instead, they treat clean web performance, semantic HTML markup, structured entity graphs, and substantive domain knowledge as a unified engineering discipline.",
          "By ensuring your website is effortlessly readable by both Googlebot and multi-modal AI agents, you safeguard your discoverability regardless of which interface your prospective clients use to find answers."
        ]
      }
    ]
  },
  {
    slug: "website-vs-custom-web-application",
    title: "How to Choose Between a Website and a Custom Web Application",
    excerpt:
      "A marketing website communicates information; a web application executes transactions, workflows, and stateful logic. Knowing the architectural differences prevents costly over-engineering or premature platform limitations.",
    author: {
      name: "Integral Labs Engineering",
      role: "Web Systems Division",
      avatar: "/integral-logo.png"
    },
    publishedAt: "2025-01-22T10:00:00.000Z",
    category: "Web Architecture",
    tags: ["Web Development", "Software Engineering", "Next.js", "Architecture", "SaaS"],
    coverImage: "/blog/website-vs-webapp.svg",
    coverAlt: "Technical diagram illustrating static informational sites versus stateful web application architectures",
    readingTime: "6 min read",
    seoTitle: "Website vs Web Application: Architectural Comparison for Technical Leaders",
    seoDescription:
      "Evaluate whether your organization needs a high-performance marketing website or a stateful custom web application before committing engineering budget.",
    isPublished: true,
    tableOfContents: [
      { id: "defining-the-boundary", title: "Defining the Architectural Boundary", level: 2 },
      { id: "when-a-website-is-the-correct-solution", title: "When a Website Is the Optimal Choice", level: 2 },
      { id: "when-you-require-a-custom-web-application", title: "When You Need a Custom Web Application", level: 2 },
      { id: "the-hybrid-reality", title: "The Modern Hybrid: Next.js and Hybrid Architectures", level: 2 },
      { id: "decision-framework", title: "A Practical Decision Framework", level: 2 },
    ],
    sections: [
      {
        heading: "Defining the Architectural Boundary",
        paragraphs: [
          "Business stakeholders frequently use the terms 'website' and 'web application' interchangeably. However, from a software engineering perspective, they represent distinctly different operational scopes, complexity curves, and maintenance models.",
          "A website's primary function is consumption: presenting structured content, establishing brand authority, and encouraging prospective clients to initiate contact. A web application's primary function is execution: managing user identity, persisting stateful data, orchestrating business logic, and processing complex multi-step workflows."
        ]
      },
      {
        heading: "When a Website Is the Optimal Choice",
        paragraphs: [
          "Organizations often over-engineer digital projects by architecting a heavy, reactive single-page app when an optimized content platform would deliver superior business outcomes.",
          "A marketing website is the right choice when your primary objectives are organic search rankings, brand positioning, fast page load speeds, and lead generation. In these scenarios, static site generation (SSG) or incremental static regeneration (ISR) delivers sub-second load times, minimal hosting infrastructure costs, and optimal crawlability for search engines."
        ]
      },
      {
        heading: "When You Require a Custom Web Application",
        paragraphs: [
          "You transition from a website to a web application the moment users need to interact with personalized data, collaborate in real time, or execute complex domain workflows.",
          "Key indicators that you require a custom web application include: user authentication and role-based access control (RBAC), transactional database read/write cycles, multi-tenant billing integrations, dashboard visualizations, and external API orchestration.",
          "Building a web application introduces deeper responsibilities around data security, session lifecycle management, database indexing, and regression testing."
        ],
        callout: {
          type: "warning",
          text: "Never build proprietary application features on top of a monolithic blogging CMS plugin stack if long-term scalability and intellectual property ownership matter to your organization."
        }
      },
      {
        heading: "The Modern Hybrid: Next.js and Hybrid Architectures",
        paragraphs: [
          "Fortunately, modern frameworks like Next.js App Router have bridged the historical divide between static websites and dynamic web applications.",
          "With React Server Components (RSC), marketing pages can be prerendered statically at build time for instant loading and pristine SEO, while authenticated user portals (`/dashboard` or `/portal`) can run dynamically with server-side authentication and streaming database queries under the exact same repository and deployment pipeline."
        ]
      },
      {
        heading: "A Practical Decision Framework",
        paragraphs: [
          "To determine your project scope, evaluate the user role: if your visitor is evaluating your credibility to make a purchasing decision, focus your budget on responsive typography, Core Web Vitals, and conversion pathways. If your user is logging in to complete their daily job, focus on schema design, state resilience, and intuitive workflow automation."
        ]
      }
    ]
  },
  {
    slug: "what-businesses-should-know-before-building-saas",
    title: "What Businesses Should Know Before Building a SaaS Product",
    excerpt:
      "Launching a software-as-a-service product involves far more than coding features. Technical leaders must evaluate multi-tenancy models, billing lifecycles, operational observability, and code ownership.",
    author: {
      name: "Integral Labs Architecture",
      role: "SaaS Product Division",
      avatar: "/integral-logo.png"
    },
    publishedAt: "2025-01-28T14:30:00.000Z",
    category: "SaaS Development",
    tags: ["SaaS", "Product Engineering", "Cloud", "Architecture", "Startups"],
    coverImage: "/blog/saas-architecture.svg",
    coverAlt: "Technical diagram of multi-tenant cloud architecture, billing webhooks, and secure database partitioning",
    readingTime: "8 min read",
    seoTitle: "What Businesses Must Know Before Building a SaaS Product | Technical Guide",
    seoDescription:
      "A strategic software engineering breakdown of multi-tenancy, billing logic, IP ownership, and operational overhead before building a SaaS platform.",
    isPublished: true,
    tableOfContents: [
      { id: "beyond-the-mvp-illusion", title: "Beyond the MVP Illusion", level: 2 },
      { id: "multi-tenancy-models", title: "Selecting the Right Multi-Tenancy Architecture", level: 2 },
      { id: "billing-and-subscription-infrastructure", title: "The Hidden Complexity of Subscription Billing", level: 2 },
      { id: "code-ownership-and-vendor-lockin", title: "100% Code Ownership vs Vendor Traps", level: 2 },
      { id: "observability-and-sla", title: "Operational Observability from Day One", level: 2 },
    ],
    sections: [
      {
        heading: "Beyond the MVP Illusion",
        paragraphs: [
          "The conventional startup advice of 'shipping fast and breaking things' often creates catastrophic technical debt for business software. While consumer apps can occasionally afford downtime, B2B SaaS platforms handling customer data or operational workflows cannot.",
          "Before writing the first component, technical stakeholders must define foundational system boundaries: how tenant data will be partitioned, how billing will be synchronized, and how the codebase will be maintained as requirements evolve."
        ]
      },
      {
        heading: "Selecting the Right Multi-Tenancy Architecture",
        paragraphs: [
          "Multi-tenancy defines how your software serves multiple client organizations while maintaining absolute data segregation. There are three primary patterns:",
          "1. Shared Database, Shared Schema: All tenant data resides in the same database tables, distinguished by a `tenant_id` column with row-level security (RLS). This offers maximum cost efficiency and simple migrations.",
          "2. Shared Database, Isolated Schemas: Each customer gets an isolated database schema within a shared database instance. This increases isolation for enterprise compliance while retaining unified connection pooling.",
          "3. Isolated Database per Tenant: Each enterprise tenant receives a dedicated database instance. This is required for highly regulated industries (healthcare, finance) but adds operational overhead for schema migrations."
        ]
      },
      {
        heading: "The Hidden Complexity of Subscription Billing",
        paragraphs: [
          "First-time SaaS founders frequently underestimate subscription infrastructure. Integrating Stripe or Lemon Squeezy is not merely calling a checkout endpoint. You must engineer robust, idempotent webhook handlers to handle payment failures, mid-cycle tier upgrades, seat prorations, usage-based metering, and tax compliance.",
          "If your database state desynchronizes from your payment processor because of an unhandled webhook timeout, manual customer support hours will skyrocket."
        ],
        callout: {
          type: "tip",
          text: "Always implement idempotent event handlers with transactional integrity. Every subscription event must verify that its unique event ID has not already been processed before mutating user permissions."
        }
      },
      {
        heading: "100% Code Ownership vs Vendor Traps",
        paragraphs: [
          "One of the most consequential decisions in early SaaS development is vendor lock-in. Many low-code platforms promise rapid launch times but hold your database schema and business logic hostage inside closed proprietary ecosystems.",
          "At Integral Labs, our non-negotiable policy is 100% client intellectual property ownership. Your software should be built on standard open technologies (Next.js, Node/Python, PostgreSQL, standard Docker/cloud configurations) committed directly to your own version-controlled GitHub repositories. If you decide to bring development in-house later, you inherit an enterprise-grade codebase rather than a disposable prototype."
        ]
      },
      {
        heading: "Observability and SLA",
        paragraphs: [
          "A production SaaS platform requires structured logging, performance metrics, and automated error tracking from the first release. When a user experiences an edge-case failure, your engineering team should have structured trace logs and user context before the customer even submits a support ticket."
        ]
      }
    ]
  },
  {
    slug: "core-web-vitals-performance-guide",
    title: "Core Web Vitals: What They Mean for Website Performance",
    excerpt:
      "Google's Core Web Vitals directly connect user experience metrics to search visibility. Understanding LCP, INP, and CLS allows engineering teams to optimize render paths and eliminate sluggish interactions.",
    author: {
      name: "Integral Labs Engineering",
      role: "Performance Architecture Division",
      avatar: "/integral-logo.png"
    },
    publishedAt: "2025-02-04T12:00:00.000Z",
    category: "Performance",
    tags: ["Core Web Vitals", "Performance", "Next.js", "SEO", "LCP", "INP"],
    coverImage: "/blog/core-web-vitals.svg",
    coverAlt: "Technical visualization of Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift metrics",
    readingTime: "6 min read",
    seoTitle: "Core Web Vitals Guide: Optimizing LCP, INP, and CLS for Technical Teams",
    seoDescription:
      "A developer-focused breakdown of Core Web Vitals: how to diagnose and resolve Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift.",
    isPublished: true,
    tableOfContents: [
      { id: "why-vitals-matter", title: "Why Core Web Vitals Are Non-Negotiable", level: 2 },
      { id: "largest-contentful-paint", title: "Largest Contentful Paint (LCP)", level: 2 },
      { id: "interaction-to-next-paint", title: "Interaction to Next Paint (INP)", level: 2 },
      { id: "cumulative-layout-shift", title: "Cumulative Layout Shift (CLS)", level: 2 },
      { id: "architectural-best-practices", title: "Engineering Practices for Sustained Performance", level: 2 },
    ],
    sections: [
      {
        heading: "Why Core Web Vitals Are Non-Negotiable",
        paragraphs: [
          "Website performance has evolved from an engineering vanity metric into a quantified ranking signal and direct driver of conversion rates. Google's Core Web Vitals program measures three critical stages of a visitor's experience: how fast the primary content loads, how promptly the interface responds to inputs, and how visually stable the layout remains during rendering.",
          "When a website achieves 'Good' thresholds across all three metrics in field data (Chrome User Experience Report), it benefits from ranking advantages and dramatically lower bounce rates."
        ]
      },
      {
        heading: "Largest Contentful Paint (LCP)",
        paragraphs: [
          "LCP measures perceived load speed: the time required to render the largest visible image, video poster, or text block within the initial viewport. The target threshold for a 'Good' rating is under 2.5 seconds.",
          "The most common causes of poor LCP include slow server response times (TTFB), client-side JavaScript execution blocking HTML rendering, and unoptimized hero images. By using Next.js automatic image optimization (`next/image` with `priority`), streaming server components, and edge CDN caching, LCP times can be brought well under 1.2 seconds."
        ]
      },
      {
        heading: "Interaction to Next Paint (INP)",
        paragraphs: [
          "INP replaced First Input Delay (FID) as an official Core Web Vital in March 2024. While FID only measured the delay of the initial interaction, INP evaluates the latency of every click, tap, and keypress across the entire lifecycle of the page. The target threshold is under 200 milliseconds.",
          "Poor INP is almost always caused by long JavaScript tasks occupying the main thread. When a user clicks a button or opens a modal, long synchronous computations delay the browser from painting the visual feedback. Breaking large tasks into micro-tasks and utilizing Web Workers or transitions resolves INP bottlenecks."
        ]
      },
      {
        heading: "Cumulative Layout Shift (CLS)",
        paragraphs: [
          "CLS measures visual stability: unexpected shifts of layout elements while the user is reading or attempting to tap. The target threshold is under 0.1.",
          "CLS occurs when dynamic elements (such as web fonts, promotional banners, or un-dimensioned images) suddenly push existing text downward. Specifying explicit `width` and `height` attributes on all media elements and reserving aspect-ratio placeholders prevents layout reflows completely."
        ]
      },
      {
        heading: "Engineering Practices for Sustained Performance",
        paragraphs: [
          "High performance is not achieved by running an optimization sprint before launch. It is sustained by engineering automated performance budgets into continuous integration (CI) workflows, eliminating unused third-party tracking scripts, and favoring semantic native CSS over heavy JavaScript animation libraries."
        ]
      }
    ]
  },
  {
    slug: "structured-data-and-entity-authority-guide",
    title: "Structured Data and Entity Authority: A Practical Introduction",
    excerpt:
      "Search engines and AI answer engines do not understand your brand through prose alone. Implementing explicit JSON-LD schema graphs provides the machine-readable foundation for search visibility and entity authority.",
    author: {
      name: "Integral Labs Engineering",
      role: "Search Architecture Division",
      avatar: "/integral-logo.png"
    },
    publishedAt: "2025-02-12T16:00:00.000Z",
    category: "Search Engineering",
    tags: ["Structured Data", "JSON-LD", "Entity SEO", "Knowledge Graph", "Schema.org"],
    coverImage: "/blog/structured-data.svg",
    coverAlt: "Graph diagram showing Organization, WebSite, and Article entities interconnected via Schema.org JSON-LD",
    readingTime: "7 min read",
    seoTitle: "Structured Data & Entity Authority: The Technical Guide to JSON-LD",
    seoDescription:
      "A developer's guide to building interconnected Schema.org JSON-LD graphs that establish entity authority for search crawlers and AI answer engines.",
    isPublished: true,
    tableOfContents: [
      { id: "the-shift-to-entity-based-search", title: "The Shift to Entity-Based Search", level: 2 },
      { id: "what-is-json-ld", title: "Why JSON-LD Is the Industry Standard", level: 2 },
      { id: "core-schema-types", title: "Core Schema Types for Technology Companies", level: 2 },
      { id: "building-an-interconnected-graph", title: "Interconnecting Schema Entities with @id", level: 2 },
      { id: "testing-and-validation", title: "Validation and Quality Assurance", level: 2 },
    ],
    sections: [
      {
        heading: "The Shift to Entity-Based Search",
        paragraphs: [
          "Early search engines operated purely on strings of text. If a page contained the string 'Next.js software development', the crawler assumed the page was relevant to those words. Today, modern search engines and AI models operate on things, not strings: interconnected knowledge graphs where entities have verified attributes, relationships, and organizational contexts.",
          "Establishing entity authority means communicating clearly: who your organization is, what parent company it belongs to, what software products it publishes, and what verified subjects its articles address."
        ]
      },
      {
        heading: "Why JSON-LD Is the Industry Standard",
        paragraphs: [
          "While microdata and RDFa embed metadata directly into HTML tag attributes, JSON-LD (JavaScript Object Notation for Linked Data) separates semantic metadata from presentation markup. Injected cleanly inside a `<script type=\"application/ld+json\">` element in the document `<head>`, JSON-LD is universally recommended by Google and readily parsed by AI crawlers without cluttering the component tree."
        ]
      },
      {
        heading: "Core Schema Types for Technology Companies",
        paragraphs: [
          "A robust technical organization should implement four fundamental Schema.org types:",
          "1. Organization: Identifies legal name, parent company, verified logo URL, and contact points.",
          "2. WebSite: Defines the primary domain, canonical name, and potential site search action.",
          "3. BlogPosting / Article: Details the publication timestamp, modification history, headline, and associated topic entities.",
          "4. SoftwareApplication: Documents proprietary platforms, operating requirements, and application categories."
        ]
      },
      {
        heading: "Interconnecting Schema Entities with @id",
        paragraphs: [
          "The most common mistake in structured data implementation is creating isolated, disconnected schemas. Instead of outputting an Article schema that defines an anonymous author string, use explicit `@id` URIs to link the Article's `publisher` to the canonical `Organization` entity.",
          "This interconnected graph enables search engines and LLM answer systems to trace lineage: this article was published by Integral Labs, which operates as the creative engineering division of Integral Groups."
        ],
        callout: {
          type: "tip",
          text: "Always use stable, canonical URIs (such as `https://labs.integralgroups.in/#organization`) as `@id` references across your structured data files."
        }
      },
      {
        heading: "Testing and Validation",
        paragraphs: [
          "Prior to deploying structured data to production, test outputs against Google's Rich Results Test and the Schema.org Validator. Ensure that all dates conform strictly to ISO 8601 formatting and that absolute URLs are generated for image assets."
        ]
      }
    ]
  },
  {
    slug: "draft-internal-architecture-preview",
    title: "Draft: Internal Microservice Communication Guidelines (Unpublished Preview)",
    excerpt:
      "An internal architectural review draft documenting gRPC vs REST benchmarks for internal services. This article is unpublished to test publication status gating.",
    author: {
      name: "Integral Labs Architecture",
      role: "Internal Systems Division",
      avatar: "/integral-logo.png"
    },
    publishedAt: "2025-02-20T08:00:00.000Z",
    category: "Web Architecture",
    tags: ["Internal", "Draft", "Architecture"],
    coverImage: "/blog/draft-preview.svg",
    coverAlt: "Draft placeholder image",
    readingTime: "4 min read",
    seoTitle: "Draft Architecture Preview",
    seoDescription: "Internal unpublished document for publication gating tests.",
    isPublished: false, // EXPLICITLY UNPUBLISHED TO VERIFY 404 AND SITEMAP EXCLUSION
    tableOfContents: [],
    sections: [
      {
        heading: "Internal Draft Only",
        paragraphs: [
          "This is a private staging document used to verify that draft articles are strictly gated from public routes, excluded from sitemaps, and excluded from structured data schemas."
        ]
      }
    ]
  }
];

// Query and validation helper functions
export function getAllArticles(): Article[] {
  return ARTICLES;
}

export function getPublishedArticles(): Article[] {
  return ARTICLES.filter((article) => article.isPublished);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

export function getPublishedArticleBySlug(slug: string): Article | undefined {
  const article = getArticleBySlug(slug);
  return article && article.isPublished ? article : undefined;
}

export function getRelatedArticles(currentSlug: string, limit: number = 3): Article[] {
  const current = getArticleBySlug(currentSlug);
  if (!current) return [];

  return getPublishedArticles()
    .filter((article) => article.slug !== currentSlug)
    .filter((article) => article.category === current.category || article.tags.some((t) => current.tags.includes(t)))
    .slice(0, limit);
}

export function getArticleCategories(): string[] {
  const categories = new Set(getPublishedArticles().map((a) => a.category));
  return Array.from(categories);
}
