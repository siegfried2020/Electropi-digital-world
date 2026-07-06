"use client";

import { SectionEyebrow } from "../components/SectionEyebrow";
import { STEPS } from "../data/content";
import { useTimelineProgress } from "../hooks/useTimelineProgress";

export function HowWeWorkSection() {
  const { sectionRef, timelineRef } = useTimelineProgress();

  return (
    <section
      id="how"
      ref={sectionRef}
      className="relative z-[1] mx-auto max-w-[1200px] px-[clamp(20px,5vw,40px)] py-[clamp(72px,10vw,140px)]"
    >
      <div data-reveal className="mb-[clamp(52px,7vw,84px)] max-w-[680px]">
        <SectionEyebrow className="mb-[18px] tracking-[0.06em]">
          How We Work
        </SectionEyebrow>
        <h2 className="font-heading m-0 max-w-[16ch] text-[clamp(31px,4.6vw,50px)] font-bold leading-[1.06] tracking-[-0.025em]">
          A mature process,{" "}
          <span className="text-[var(--dw-muted)]">from idea to scale</span>
        </h2>
      </div>

      <div ref={timelineRef} className="relative">
        <div
          data-tl-track
          className="absolute left-0 right-0 top-[clamp(44px,5.5vw,62px)] h-px bg-[var(--dw-border-strong)]"
        />
        <div
          data-tl-fill
          className="absolute left-0 top-[clamp(44px,5.5vw,62px)] h-px w-0 bg-gradient-to-r from-[var(--dw-blue)] to-[var(--dw-mint)] shadow-[0_0_12px_var(--dw-mint)] transition-[width] duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
        <div
          data-tl-pulse
          className="absolute top-[clamp(41px,5.5vw,59px)] left-0 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-[var(--dw-mint)] opacity-0 shadow-[0_0_14px_var(--dw-mint)] transition-[left,opacity] duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)]"
        />

        <div className="grid grid-cols-1 gap-[clamp(16px,3vw,40px)] md:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.n}
              data-reveal
              data-tl-step
              className="relative flex flex-col"
            >
              <div className="relative flex h-[clamp(88px,11vw,124px)] items-start">
                <span
                  data-tl-num
                  className="font-heading text-[clamp(52px,7.5vw,104px)] font-bold leading-[0.86] tracking-[-0.04em] text-transparent transition-[color,opacity,-webkit-text-stroke-color] duration-500"
                  style={{ WebkitTextStroke: "1.2px var(--dw-border-strong)" }}
                >
                  {step.n}
                </span>
              </div>
              <span
                data-tl-node
                className="absolute top-[clamp(38px,5.5vw,56px)] left-0 h-3.5 w-3.5 rounded-full border-[1.5px] border-[var(--dw-border-strong)] bg-[var(--dw-bg)] transition-[border-color,background,box-shadow,transform] duration-500"
              />
              <div className="mt-[clamp(24px,3vw,38px)] pr-3.5">
                <h3 className="font-heading m-0 mb-[9px] text-[clamp(17px,1.5vw,21px)] font-semibold tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="m-0 max-w-[30ch] text-[14.5px] leading-relaxed text-[var(--dw-muted)]">
                  {step.short}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
