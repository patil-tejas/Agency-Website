
import Accordian from "@/components/Accordian";
import ContactPage from "@/components/Contact";
import HeroSection from "@/components/main/Hero";
import PricingSection from "@/components/PricingSection";

import Services from "@/components/Services";
import TeamPage from "@/components/Team";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Accordian/>
      <TeamPage/>
      <PricingSection/>
      <ContactPage/>

    </>
  );
}
