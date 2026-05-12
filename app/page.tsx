import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import TechStack from "@/components/home/TechStack";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import WhyUs from "@/components/home/WhyUs";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <Process />
      <TechStack />
      <ProjectShowcase />
      <WhyUs />
      <CTA />
    </div>
  );
}
