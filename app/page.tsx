import Hero from "@/components/home/Hero";
import IntegralStandard from "@/components/home/IntegralStandard";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import Process from "@/components/home/Process";
import WhyUs from "@/components/home/WhyUs";
import Founders from "@/components/home/Founders";
import CTA from "@/components/home/CTA";
import InteractiveBackground from "@/components/shared/InteractiveBackground";
import SystemSandbox from "@/components/home/SystemSandbox";

export default function Home() {
  return (
    <>
      <InteractiveBackground />
      <div className="relative z-10">
        <Hero />
        <IntegralStandard />
        <SystemSandbox />
        <ProjectShowcase />
        <Process />
        <WhyUs />
        <Founders />
        <CTA />
      </div>
    </>
  );
}
