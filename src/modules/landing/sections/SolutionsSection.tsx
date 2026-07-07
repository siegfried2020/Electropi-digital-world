"use client";

import { SectionEyebrow } from "../components/SectionEyebrow";
import { useLanding } from "../context/LandingProvider";
import { useStackScroll } from "../hooks/useStackScroll";
import { SolutionCards } from "./SolutionCards";

export function SolutionsSection() {
  const stackRef = useStackScroll();
  const { isMobile } = useLanding();

  return (
    <section
      id="solutions"
      className={`landing-surface relative z-[1] ${isMobile ? "overflow-visible" : "overflow-clip"}`}
    >
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[760px] -translate-x-1/2 bg-[radial-gradient(circle,var(--dw-blue-glow),transparent_62%)] opacity-70" />

      <div
        className={`relative mx-auto max-w-[1200px] px-[clamp(20px,5vw,40px)] ${
          isMobile
            ? "pb-32 pt-[clamp(64px,9vw,120px)]"
            : "py-[clamp(64px,9vw,120px)]"
        }`}
      >
        <div data-reveal className="mx-auto max-w-[680px] text-center">
          <SectionEyebrow centered className="mb-4 justify-center">
            AI Solutions
          </SectionEyebrow>
          <h2 className="font-heading m-0 text-[clamp(31px,4.6vw,50px)] font-bold leading-[1.08] tracking-[-0.025em]">
            Intelligence engineered for{" "}
            <span className="landing-gradient-text">real-world impact</span>
          </h2>
          <p className="mx-auto mt-[18px] max-w-[54ch] text-[17px] leading-relaxed text-[var(--dw-muted)]">
            Four disciplines where we put AI to work — each a real capability we
            design, build, and run.
          </p>
        </div>

        <div
          ref={stackRef}
          className={`relative ${isMobile ? "mt-10 h-[460vh]" : "mt-[clamp(32px,4vw,56px)] h-[340vh]"}`}
          style={
            {
              "--stack-cols": isMobile ? "1fr" : "0.92fr 1.08fr",
            } as React.CSSProperties
          }
        >
          <div
            data-stack-vp
            className={
              isMobile
                ? "sticky top-[var(--dw-nav-height)] flex h-[calc(100dvh-var(--dw-nav-height))] items-start justify-center overflow-visible px-1 py-5"
                : "sticky top-0 flex h-screen items-center justify-center overflow-hidden"
            }
          >
            <SolutionCards />
          </div>
        </div>
      </div>
    </section>
  );
}
