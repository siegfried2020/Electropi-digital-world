"use client";

import Link from "next/link";
import { useState } from "react";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { SOLUTIONS } from "../data/content";
import { useLanding } from "../context/LandingProvider";

export function UseCasesSection() {
  const { isMobile } = useLanding();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="usecases"
      className="landing-surface relative z-[1] overflow-hidden"
    >
      <div className="pointer-events-none absolute -left-[6%] -top-[8%] h-[460px] w-[540px] bg-[radial-gradient(circle,var(--dw-blue-glow),transparent_64%)] opacity-50" />

      <div className="relative mx-auto max-w-[1180px] px-[clamp(20px,5vw,40px)] py-[clamp(64px,9vw,120px)]">
        <div data-reveal className="mb-[clamp(44px,6vw,80px)] max-w-[720px]">
          <SectionEyebrow className="mb-[18px] tracking-[0.06em]">
            Flagship Solutions
          </SectionEyebrow>
          <h2 className="font-heading m-0 max-w-[18ch] text-[clamp(31px,4.6vw,50px)] font-bold leading-[1.06] tracking-[-0.025em]">
            The products we build,{" "}
            <span className="text-[var(--dw-muted)]">in the wild</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {SOLUTIONS.map((solution, index) => {
            const isActive = activeIndex === index;

            return (
              <Link
                key={solution.num}
                href="#cta"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className="relative block border-t border-[var(--dw-border)] py-[clamp(34px,4.6vw,60px)] text-inherit no-underline transition-[padding-left] duration-[550ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  paddingLeft: isActive
                    ? "clamp(8px,1.6vw,28px)"
                    : "0px",
                }}
              >
                <span
                  className="pointer-events-none absolute -left-[8%] top-1/2 h-[280px] w-[420px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--dw-blue-glow),transparent_64%)] transition-opacity duration-[550ms]"
                  style={{ opacity: isActive ? 1 : 0 }}
                />

                <div
                  className="relative grid items-baseline gap-[clamp(14px,3vw,48px)]"
                  style={{
                    gridTemplateColumns: isMobile
                      ? "auto 1fr auto"
                      : "minmax(0,90px) 1fr minmax(0,70px)",
                  }}
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      className="font-heading text-[clamp(15px,1.4vw,18px)] font-bold tracking-[0.04em] transition-[color,-webkit-text-stroke-color] duration-[450ms]"
                      style={{
                        color: isActive ? "var(--dw-mint)" : "transparent",
                        WebkitTextStroke: isActive
                          ? "transparent"
                          : "1px var(--dw-border-strong)",
                      }}
                    >
                      {solution.num}
                    </span>
                  </div>

                  <div>
                    <div
                      className="mb-3.5 text-xs font-bold uppercase tracking-[0.07em] transition-colors duration-[450ms]"
                      style={{
                        color: isActive ? "var(--dw-mint)" : "var(--dw-muted)",
                      }}
                    >
                      {solution.tag}
                    </div>
                    <h3 className="font-heading m-0 text-[clamp(34px,6vw,78px)] font-bold leading-none tracking-[-0.03em]">
                      <span
                        className="transition-colors duration-[450ms]"
                        style={{
                          color: isActive ? "var(--dw-mint)" : "var(--dw-text)",
                        }}
                      >
                        {solution.name}
                      </span>
                    </h3>
                    <div
                      className="overflow-hidden transition-[max-height,opacity] duration-[550ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{
                        maxHeight: isActive ? "180px" : "0",
                        opacity: isActive ? 1 : 0,
                      }}
                    >
                      <p className="m-0 mt-5 max-w-[58ch] text-[clamp(15px,1.5vw,18px)] leading-[1.65] text-[var(--dw-muted)]">
                        {solution.desc}
                      </p>
                      <div className="mt-4 text-[13.5px] font-medium tracking-[0.01em] text-[var(--dw-text)]">
                        {solution.caps}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <span
                      className="inline-flex h-[clamp(44px,4vw,54px)] w-[clamp(44px,4vw,54px)] items-center justify-center rounded-full border border-[var(--dw-border-strong)] text-[var(--dw-muted)] transition-[border-color,color,transform] duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{
                        borderColor: isActive
                          ? "var(--dw-mint)"
                          : "var(--dw-border-strong)",
                        color: isActive ? "var(--dw-mint)" : "var(--dw-muted)",
                        transform: isActive
                          ? "translate(3px,-3px)"
                          : "translate(0,0)",
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M7 17L17 7M17 7H9M17 7v8" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
          <div className="border-t border-[var(--dw-border)]" />
        </div>
      </div>
    </section>
  );
}
