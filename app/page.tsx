import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import Industries from "@/components/home/Industries";
import Process from "@/components/home/Process";
import WhyUs from "@/components/home/WhyUs";
import Founders from "@/components/home/Founders";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import InteractiveBackground from "@/components/shared/InteractiveBackground";

export default function Home() {
  return (
    <>
      <InteractiveBackground />
      <div className="relative z-10">
        <Hero />
        <Services />
        <ProjectShowcase />
        <Industries />
        <Process />
        <WhyUs />
        <Founders />
        <FAQ />
        <CTA />
      </div>
    </>
  );
}
