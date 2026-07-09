import Link from "next/link";
import { Logo } from "../components/Logo";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { ECOSYSTEM } from "../data/content";

export function TrustedPartnerSection() {
  return (
    <section className="relative z-[1] mx-auto max-w-[1200px] px-[clamp(20px,5vw,40px)] py-[clamp(60px,8vw,110px)]">
      <div className="flex flex-wrap items-center gap-[clamp(36px,5vw,72px)]">
        <div data-reveal className="w-full min-w-0 flex-[1_1_350px] sm:min-w-[350px]">
          <SectionEyebrow className="mb-[18px]">Trusted AI Partner</SectionEyebrow>

          <h2 className="font-heading m-0 text-[clamp(28px,4vw,44px)] font-bold leading-[1.1] tracking-[-0.02em]">
            Your Partner in{" "}
            <span className="text-[var(--dw-muted)]">Practical AI Transformation</span>
          </h2>

          <p className="mt-[22px] max-w-[54ch] text-[17px] leading-[1.7] text-[var(--dw-muted)]">
            We help businesses automate operations, reduce manual work, improve
            decision-making, and launch intelligent digital products powered by
            secure and scalable AI systems.
          </p>
          <p className="mb-8 mt-5 max-w-[54ch] text-[17px] leading-[1.7] text-[var(--dw-muted)]">
            Every capability we build connects into one secure ecosystem — so your
            learning, sales, customer experience, operations, and automation work
            as a single intelligent system.
          </p>

          <Link href="#solutions" className="landing-btn-outline px-6 py-3.5 text-[15px]">
            Learn More <span className="text-[17px]">→</span>
          </Link>
        </div>

        <div
          data-reveal
          className="relative w-full min-h-[440px] min-w-0 flex-[1_1_350px] overflow-hidden rounded-3xl border border-[var(--dw-border-strong)] bg-gradient-to-b from-[var(--dw-card)] to-[var(--dw-bg-2)] p-[clamp(22px,2.6vw,30px)] shadow-[var(--dw-shadow)] sm:min-w-[350px]"
        >
          <div className="pointer-events-none absolute -right-[60px] -top-10 h-60 w-60 rounded-full bg-[radial-gradient(circle,var(--dw-blue-glow),transparent_64%)]" />

          <div className="relative mb-[clamp(18px,2.4vw,26px)] flex items-start justify-between gap-3.5">
            <div className="flex min-w-0 flex-col gap-2.5">
              <Logo size="md" />
              <div className="leading-[1.25]">
                <div className="font-heading text-[15px] font-bold">
                  Digital World Platform
                </div>
                <div className="text-[11.5px] text-[var(--dw-muted)]">
                  One connected AI ecosystem
                </div>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-[var(--dw-border-strong)] px-[11px] py-[5px] text-[10.5px] font-semibold text-[var(--dw-muted)]">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[var(--dw-mint)] shadow-[0_0_8px_var(--dw-mint)]"
                style={{ animation: "dw-blink 1.8s ease-in-out infinite" }}
              />
              Live
            </span>
          </div>

          <div className="relative flex flex-col gap-[clamp(9px,1.1vw,12px)]">
            <div className="absolute bottom-[8%] left-[19px] top-[8%] w-0.5 rounded-sm bg-gradient-to-b from-[var(--dw-blue)] to-[var(--dw-teal)] opacity-40" />
            <div
              className="absolute left-[15px] z-[4] h-[11px] w-[11px] rounded-full bg-[var(--dw-mint)] shadow-[0_0_12px_var(--dw-mint)]"
              style={{ animation: "dw-flow-y 4.4s ease-in-out infinite" }}
            />

            {ECOSYSTEM.map((item) => (
              <div
                key={item.name}
                className="group relative z-[2] flex items-start gap-[15px] rounded-[14px] border border-[var(--dw-border)] bg-[var(--dw-card-2)] px-4 py-[clamp(12px,1.4vw,15px)] transition-[transform,border-color,background] duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-1.5 hover:border-[var(--dw-mint)]"
              >
                <span
                  className="mt-1.5 h-3 w-3 shrink-0 rounded border-2 border-[var(--dw-card)] outline outline-2 outline-[var(--dw-card-2)]"
                  style={{
                    background: item.accent,
                    boxShadow: `0 0 10px -1px ${item.accent}`,
                  }}
                />
                <div className="min-w-0 flex-1">
                  <div className="font-heading text-[14.5px] font-semibold tracking-[-0.01em]">
                    {item.name}
                  </div>
                  <div className="mt-px text-[11.5px] text-[var(--dw-muted)]">
                    {item.role}
                  </div>
                  <span className="mt-1.5 inline-flex items-center gap-1.5 text-[10.5px] font-semibold text-[var(--dw-mint)]">
                    connected
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-[clamp(14px,1.8vw,20px)] flex items-center justify-between gap-3 rounded-[14px] bg-gradient-to-br from-[var(--dw-blue)] to-[var(--dw-teal)] px-[18px] py-3.5 shadow-[0_16px_34px_-16px_var(--dw-blue)]">
            <span className="text-[13.5px] font-semibold text-white">
              Unified, secure & scalable
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[18px] w-[18px] shrink-0"
            >
              <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
