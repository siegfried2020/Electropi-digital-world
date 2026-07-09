"use client";

import Link from "next/link";
import { Logo } from "../components/Logo";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_RESOURCE_LINKS,
} from "../data/content";
import { onHashLinkClick } from "../utils/smoothScroll";

const SOCIAL_LINKS = ["in", "X", "f"] as const;

export function FooterSection() {
  return (
    <footer className="landing-surface relative z-[1] border-b-0">
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-[clamp(32px,5vw,64px)] px-[clamp(20px,5vw,40px)] pb-0 pt-[clamp(48px,6vw,72px)]">
        <div className="max-w-[360px] min-w-[280px] flex-[1_1_280px]">
          <div className="mb-[18px]">
            <Logo />
          </div>
          <p className="mb-5 m-0 text-[14.5px] leading-[1.7] text-[var(--dw-muted)]">
            Custom AI solutions, automation, and intelligent systems — designed
            and built for real business outcomes.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[13px] text-[var(--dw-muted)]">Social</span>
            {SOCIAL_LINKS.map((label) => (
              <span
                key={label}
                className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-[10px] border border-[var(--dw-border-strong)] text-sm font-bold text-[var(--dw-muted)] transition-[color,border-color] hover:border-[var(--dw-mint)] hover:text-[var(--dw-mint)]"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-[clamp(36px,5vw,72px)]">
          <FooterLinkGroup title="Company" links={FOOTER_COMPANY_LINKS} />
          <FooterLinkGroup title="Resources" links={FOOTER_RESOURCE_LINKS} />
        </div>
      </div>

      <div className="mx-auto mt-[clamp(40px,5vw,60px)] max-w-[1200px] border-t border-[var(--dw-border)] px-[clamp(20px,5vw,40px)] py-[22px] text-center text-[13.5px] text-[var(--dw-muted)]">
        © 2026 Digital World. All rights reserved.
      </div>
    </footer>
  );
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-[13px]">
      <span className="mb-1 text-[13px] font-bold uppercase tracking-[0.04em] text-[var(--dw-muted)]">
        {title}
      </span>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={(e) => onHashLinkClick(e, link.href)}
          className="text-[14.5px] text-[var(--dw-text)] no-underline transition-colors hover:text-[var(--dw-mint)]"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
