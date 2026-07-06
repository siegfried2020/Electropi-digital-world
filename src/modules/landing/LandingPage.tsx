"use client";

import "./landing.css";
import { LandingProvider, useLanding } from "./context/LandingProvider";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import { CtaSection } from "./sections/CtaSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { HowWeWorkSection } from "./sections/HowWeWorkSection";
import { IndustriesSection } from "./sections/IndustriesSection";
import { NavSection } from "./sections/NavSection";
import { SolutionsSection } from "./sections/SolutionsSection";
import { TrustedPartnerSection } from "./sections/TrustedPartnerSection";
import { UseCasesSection } from "./sections/UseCasesSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

function LandingContent() {
  const { theme } = useLanding();
  useRevealOnScroll();

  return (
    <div className="landing" data-theme={theme}>
      <div className="landing-hero-glow" />
      <NavSection />
      <HeroSection />
      <TrustedPartnerSection />
      <SolutionsSection />
      <HowWeWorkSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <UseCasesSection />
      <CtaSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}

export function LandingPage() {
  return (
    <LandingProvider>
      <LandingContent />
    </LandingProvider>
  );
}
