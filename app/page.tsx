import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import WhyUs from "@/components/home/WhyUs";
import Industries from "@/components/home/Industries";
import AreasWeServe from "@/components/home/AreasWeServe";
import Process from "@/components/home/Process";
import Ecosystem from "@/components/home/Ecosystem";
import Founders from "@/components/home/Founders";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import InteractiveBackground from "@/components/shared/InteractiveBackground";
import { getFaqJsonLd, getServicesJsonLd, safeJsonLdReplacer } from "@/lib/json-ld";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(getFaqJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(getServicesJsonLd()) }}
      />
      <InteractiveBackground />
      <div className="relative z-10">
        <Hero />
        <Services />
        <ProjectShowcase />
        <WhyUs />
        <Process />
        <Ecosystem />
        <Industries />
        <AreasWeServe />
        <Founders />
        <FAQ />
        <CTA />
      </div>
    </>
  );
}
