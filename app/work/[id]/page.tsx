import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CaseStudyClient from "./CaseStudyClient";
import { projects } from "@/lib/data/projects";
import {
  getBreadcrumbJsonLd,
  getCaseStudyJsonLd,
  safeJsonLdReplacer,
} from "@/lib/json-ld";

interface CaseStudyPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Case Study Not Found",
      description: "The requested project case study could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const clientProject = `${project.title} — ${project.category} case study by Integral Labs in ${project.year}. Built with ${project.techStack.slice(0, 3).join(", ")}.`;

  return {
    title: `${project.title} Case Study | ${project.category}`,
    description: clientProject,
    openGraph: {
      title: `${project.title} Case Study | Integral Labs`,
      description: clientProject,
      type: "article",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 800,
          alt: `${project.title} — ${project.category} platform built by Integral Labs`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} Case Study | Integral Labs`,
      description: clientProject,
      images: [project.image],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Work", url: "/work" },
    { name: project.title, url: `/work/${project.id}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLdReplacer(getCaseStudyJsonLd(project)),
        }}
      />
      <CaseStudyClient />
      <section className="py-16 bg-[#0f0f0f] border-t border-white/5 text-center">
        <Link
          href="/work"
          className="text-purple-400 hover:text-purple-300 transition-colors text-xs font-bold uppercase tracking-[0.2em]"
        >
          ← Back to all case studies
        </Link>
      </section>
    </>
  );
}
