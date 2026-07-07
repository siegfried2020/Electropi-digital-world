"use client";

import { useState } from "react";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { WHY_US } from "../data/content";
import { useLanding } from "../context/LandingProvider";

export function WhyChooseUsSection() {
  const { isMobile } = useLanding();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = WHY_US[activeIndex];

  return (
    <section
      id="why"
      className="relative z-[1] mx-auto max-w-[1200px] px-[clamp(20px,5vw,40px)] py-[clamp(64px,9vw,120px)]"
    >
      <div
        data-reveal
        className="mx-auto mb-[clamp(40px,5vw,60px)] max-w-[640px] text-center"
      >
        <SectionEyebrow centered className="mb-4 justify-center">
          Why Choose Us
        </SectionEyebrow>
        <h2 className="font-heading m-0 text-[clamp(30px,4.5vw,46px)] font-bold leading-[1.1] tracking-[-0.02em]">
          Built for outcomes,{" "}
          <span className="text-[var(--dw-muted)]">not templates</span>
        </h2>
      </div>

      <div
        className="grid items-center gap-[clamp(32px,5vw,72px)]"
        style={{ gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr" }}
      >
        <div
          data-reveal
          className={`relative flex items-center justify-center px-0 py-[clamp(10px,3vw,40px)] ${isMobile ? "order-2 mb-0" : "mb-6"}`}
        >
          <div className="absolute left-[46%] top-1/2 aspect-square w-[min(420px,90%)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--dw-blue-glow),transparent_66%)]" />
          <div className="relative flex w-[min(380px,100%)] min-h-[clamp(380px,42vw,460px)] flex-col overflow-hidden rounded-[26px] bg-gradient-to-br from-[#0b8bdf] via-[var(--dw-blue)] to-[var(--dw-teal)] px-[clamp(26px,3.4vw,38px)] py-[clamp(26px,3.4vw,38px)] shadow-[0_34px_70px_-26px_var(--dw-blue)]">
            <svg
              viewBox="0 0 320 320"
              className="pointer-events-none absolute -right-5 -top-2.5 h-[280px] w-[280px] opacity-50"
            >
              <g
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.4"
                fill="none"
                strokeLinecap="round"
              >
                <path d="M250 60h-46l-26 26" />
                <path d="M250 110h-70l-22 22" />
                <path d="M40 220l28-28h60" />
              </g>
              <g fill="#fff">
                <circle cx="178" cy="86" r="3.5" />
                <circle cx="158" cy="132" r="3.5" />
                <circle cx="128" cy="192" r="3.5" />
              </g>
            </svg>

            <div className="relative mb-[26px] flex h-[52px] w-[52px] items-center justify-center rounded-[15px] bg-white/20 text-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[25px] w-[25px]"
              >
                <path d={active.icon} />
              </svg>
            </div>
            <div className="relative text-[15px] font-semibold text-white/90">
              {active.label}
            </div>
            <div className="relative mt-1.5 font-heading text-[clamp(56px,7vw,76px)] font-bold leading-[0.95] tracking-[-0.03em] text-white">
              {active.value}
            </div>
            <div className="relative mt-3.5 max-w-[30ch] text-sm leading-relaxed text-white/85">
              {active.caption}
            </div>

            <div
              className="relative z-10 mt-[clamp(20px,3vw,28px)] flex w-fit items-center gap-3 rounded-2xl bg-white px-[17px] py-[13px] shadow-[0_22px_44px_-16px_rgba(4,30,40,0.5)]"
              style={{ animation: "dw-floaty 6.5s ease-in-out infinite" }}
            >
              <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[rgba(8,161,127,0.14)]">
                <span
                  className="h-[11px] w-[11px] rounded-full bg-[var(--dw-teal)] shadow-[0_0_9px_var(--dw-teal)]"
                  style={{ animation: "dw-blink 1.8s ease-in-out infinite" }}
                />
              </span>
              <div className="leading-[1.3]">
                <div className="text-[13.5px] font-bold text-[#041e28]">
                  Automated Tasks
                </div>
                <div className="text-xs text-[#4a6671]">{active.pill}</div>
              </div>
            </div>
          </div>
        </div>

        <div className={`flex flex-col ${isMobile ? "order-1" : ""}`}>
          {WHY_US.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={item.title}
                data-reveal
                role="button"
                tabIndex={0}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveIndex(index);
                  }
                }}
                className={`relative flex items-center gap-5 border-t border-[var(--dw-border)] px-2 py-[clamp(18px,2vw,24px)] transition-[padding-left] duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobile ? "cursor-pointer" : "cursor-default"}`}
                style={{ paddingLeft: isActive ? "18px" : "8px" }}
                aria-pressed={isActive}
              >
                <span
                  className="absolute bottom-[10%] left-0 top-[10%] w-0.5 origin-top rounded-sm bg-gradient-to-b from-[var(--dw-blue)] to-[var(--dw-mint)] transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ transform: isActive ? "scaleY(1)" : "scaleY(0)" }}
                />
                <span
                  className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border border-[var(--dw-border)] bg-[var(--dw-card)] transition-[border-color,background,transform] duration-[350ms]"
                  style={{
                    color: item.accent,
                    borderColor: isActive ? "var(--dw-mint)" : "var(--dw-border)",
                    background: isActive ? "var(--dw-card-2)" : "var(--dw-card)",
                    transform: isActive ? "scale(1.06)" : "scale(1)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-[22px] w-[22px]"
                  >
                    <path d={item.icon} />
                  </svg>
                </span>
                <div className="flex-1">
                  <h3 className="font-heading m-0 text-[clamp(17px,1.6vw,20px)] font-semibold tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <span
                    className="mt-2.5 block h-0.5 origin-left rounded-sm bg-gradient-to-r from-[var(--dw-blue)] to-[var(--dw-mint)] transition-[transform,width] duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      width: isActive ? "64px" : "48px",
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    }}
                  />
                </div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[18px] w-[18px] shrink-0 text-[var(--dw-mint)] transition-[opacity,transform] duration-[350ms]"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateX(0)" : "translateX(-6px)",
                  }}
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
            );
          })}
          <div className="border-t border-[var(--dw-border)]" />
        </div>
      </div>
    </section>
  );
}
