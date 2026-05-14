import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import Process from "@/components/home/Process";
import WhyUs from "@/components/home/WhyUs";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ProjectShowcase />
      <Process />
      <WhyUs />
      <CTA />
    </>
  );
}
