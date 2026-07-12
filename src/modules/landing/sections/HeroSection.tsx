"use client";

import Link from "next/link";
import { useGlobeCanvas } from "../hooks/useGlobeCanvas";
import { onHashLinkClick } from "../utils/smoothScroll";

export function HeroSection() {
  const canvasRef = useGlobeCanvas();

  return (
    <header
      id="top"
      className="relative z-[1] flex min-h-[clamp(660px,94vh,1000px)] items-center justify-center overflow-hidden text-center"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <canvas
          ref={canvasRef}
          className="block h-full w-full"
        />
        <div
          className="absolute inset-0 transition-[background] duration-[450ms]"
          style={{
            background:
              "radial-gradient(58% 56% at 50% 42%, transparent 0%, transparent 30%, var(--dw-bg) 82%)",
          }}
        />
      </div>

      <div className="relative z-[2] mx-auto flex w-full max-w-[1000px] flex-col items-center px-[clamp(20px,5vw,44px)] py-[clamp(56px,8vw,96px)]">
        <div
          data-reveal
          className="mb-[30px] inline-flex items-center gap-[9px] whitespace-nowrap rounded-full border border-[var(--dw-border-strong)] bg-[var(--dw-card)] px-[17px] py-2 text-[12.5px] font-semibold uppercase tracking-[0.06em] text-[var(--dw-muted)]"
        >
          <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-[var(--dw-mint)] shadow-[0_0_10px_var(--dw-mint)]" />
          The Applied AI Company
        </div>

        <h1
          data-reveal
          className="font-heading m-0 max-w-[15ch] text-balance text-[clamp(42px,7vw,86px)] font-bold leading-[1.02] tracking-[-0.035em]"
        >
          Engineering intelligence for the{" "}
          <span className="landing-gradient-text">real world</span>
        </h1>

        <p
          data-reveal
          className="mx-auto mt-7 max-w-[60ch] text-[clamp(16px,1.7vw,19px)] leading-[1.7] text-[var(--dw-muted)]"
        >
          Digital World builds AI learning systems, sales agents, customer
          experience, industrial AI, and intelligent automation — custom-built
          and production-ready for ambitious teams.
        </p>

        <div
          data-reveal
          className="mt-10 flex flex-wrap justify-center gap-3.5"
        >
          <Link
            href="#cta"
            onClick={(e) => onHashLinkClick(e, "#cta")}
            className="landing-btn-primary"
          >
            Start Your AI Project <span className="text-lg leading-none">→</span>
          </Link>
          <Link
            href="#solutions"
            onClick={(e) => onHashLinkClick(e, "#solutions")}
            className="landing-btn-secondary"
          >
            Explore Solutions
          </Link>
        </div>
      </div>
    </header>
  );
}
