"use client";

import { useState } from "react";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { INDUSTRIES } from "../data/content";
import { useLanding } from "../context/LandingProvider";

export function IndustriesSection() {
  const { isMobile } = useLanding();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="industries"
      className="landing-surface relative z-[1] overflow-hidden"
    >
      <div className="pointer-events-none absolute -right-[6%] -top-[10%] h-[480px] w-[560px] bg-[radial-gradient(circle,var(--dw-blue-glow),transparent_64%)] opacity-50" />

      <div className="relative mx-auto max-w-[1240px] px-[clamp(20px,5vw,40px)] py-[clamp(64px,9vw,120px)]">
        <div data-reveal className="mb-[clamp(36px,4.5vw,56px)] max-w-[720px]">
          <SectionEyebrow className="mb-[18px] tracking-[0.06em]">
            Industries We Serve
          </SectionEyebrow>
          <h2 className="font-heading m-0 max-w-[18ch] text-[clamp(31px,4.6vw,50px)] font-bold leading-[1.06] tracking-[-0.025em]">
            Transforming real industries{" "}
            <span className="text-[var(--dw-muted)]">through applied AI</span>
          </h2>
        </div>

        <div
          className="grid gap-[clamp(12px,1.4vw,18px)]"
          style={{
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gridAutoRows: isMobile
              ? "clamp(210px,56vw,280px)"
              : "clamp(168px,17.5vw,224px)",
          }}
        >
          {INDUSTRIES.map((industry, index) => {
            const isActive = activeIndex === index;
            const featured = !isMobile && industry.featured;

            return (
              <article
                key={industry.name}
                data-reveal
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className="relative overflow-hidden rounded-[clamp(16px,1.6vw,22px)] border border-[var(--dw-border-strong)] shadow-[var(--dw-shadow)]"
                style={{
                  background: industry.gradient,
                  gridColumn: isMobile ? "auto" : industry.gridColumn,
                  gridRow: isMobile ? "auto" : industry.gridRow,
                }}
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ transform: isActive ? "scale(1.06)" : "scale(1)" }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ background: industry.gradient }}
                  />
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.06) 1px,transparent 1px)",
                      backgroundSize: "34px 34px",
                    }}
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(4,16,22,0.92)] via-[rgba(4,16,22,0.12)] to-transparent" />

                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0"
                  style={{
                    padding: featured
                      ? "clamp(24px,2.6vw,34px)"
                      : "clamp(18px,1.8vw,22px)",
                  }}
                >
                  <span className="mb-[11px] inline-flex items-center gap-[7px] whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.06em] text-[#0ff0b3]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0ff0b3] shadow-[0_0_9px_#0ff0b3]" />
                    {industry.impact}
                  </span>
                  <h3
                    className="font-heading m-0 font-bold leading-[1.05] tracking-[-0.02em] text-white"
                    style={{
                      fontSize: featured
                        ? "clamp(28px,3.2vw,40px)"
                        : "clamp(19px,1.7vw,23px)",
                    }}
                  >
                    {industry.name}
                  </h3>
                  <div
                    className="overflow-hidden transition-[max-height,opacity,margin-top] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      maxHeight: isActive ? "160px" : "0",
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? "10px" : "0",
                    }}
                  >
                    <p
                      className="m-0 max-w-[46ch] leading-[1.55] text-[rgba(234,243,245,0.86)]"
                      style={{
                        fontSize: featured ? "clamp(15px,1.4vw,16.5px)" : "13.5px",
                      }}
                    >
                      {industry.desc}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
