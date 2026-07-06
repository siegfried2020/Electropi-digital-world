"use client";

import { useState } from "react";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { FAQS } from "../data/content";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative z-[1] mx-auto max-w-[840px] px-[clamp(20px,5vw,40px)] pb-[clamp(64px,9vw,110px)] pt-[clamp(40px,5vw,70px)]"
    >
      <div
        data-reveal
        className="mx-auto mb-[clamp(36px,5vw,52px)] text-center"
      >
        <SectionEyebrow centered className="mb-4 justify-center">
          FAQ
        </SectionEyebrow>
        <h2 className="font-heading m-0 text-[clamp(28px,4.5vw,44px)] font-bold leading-[1.1] tracking-[-0.02em]">
          Questions, answered
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.q}
              data-reveal
              className="overflow-hidden rounded-2xl border border-[var(--dw-border)] bg-[var(--dw-card)] transition-[border-color] duration-300"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent px-[22px] py-5 text-left font-[family-name:var(--font-manrope)] text-[16.5px] font-semibold text-[var(--dw-text)]"
              >
                <span>{faq.q}</span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--dw-border-strong)] text-lg text-[var(--dw-mint)]">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                className="overflow-hidden transition-[max-height,opacity] duration-[400ms] ease-out"
                style={{
                  maxHeight: isOpen ? "320px" : "0",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <p className="m-0 px-[22px] pb-[22px] text-[15px] leading-[1.7] text-[var(--dw-muted)]">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
