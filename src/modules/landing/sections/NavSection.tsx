"use client";

import Link from "next/link";
import { Logo } from "../components/Logo";
import { NAV_LINKS } from "../data/content";
import { useLanding } from "../context/LandingProvider";

export function NavSection() {
  const {
    theme,
    toggleTheme,
    menuOpen,
    toggleMenu,
    closeMenu,
    isDesktop,
    isMobile,
  } = useLanding();

  return (
    <nav className="sticky top-0 z-[60] border-b border-[var(--dw-border)] bg-[var(--dw-nav-bg)] backdrop-blur-2xl transition-[background-color,border-color] duration-[450ms]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-5 px-[clamp(20px,5vw,40px)] py-[15px]">
        <Link href="#top" className="shrink-0 text-[var(--dw-text)] no-underline">
          <Logo />
        </Link>

        {isDesktop && (
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-[var(--dw-muted)] no-underline transition-colors hover:text-[var(--dw-text)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative h-7 w-[52px] shrink-0 cursor-pointer rounded-full border border-[var(--dw-border-strong)] bg-[var(--dw-card)] p-0 transition-[background-color,border-color] duration-[450ms]"
          >
            <span
              className="absolute left-0.5 top-0.5 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-gradient-to-br from-[var(--dw-blue)] to-[var(--dw-mint)] transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: theme === "light" ? "translateX(24px)" : "translateX(0)",
              }}
            >
              <span
                className="absolute h-[9px] w-[9px] rounded-full shadow-[3px_-2px_0_0_#fff] transition-opacity duration-300"
                style={{ opacity: theme === "light" ? 0 : 1 }}
              />
              <span
                className="absolute h-2 w-2 rounded-full bg-white transition-opacity duration-300"
                style={{ opacity: theme === "light" ? 1 : 0 }}
              />
            </span>
          </button>

          <Link href="#cta" className="landing-btn-outline text-sm">
            Start Your AI Project
          </Link>

          {isMobile && (
            <button
              type="button"
              onClick={toggleMenu}
              aria-label="Menu"
              className="flex h-10 w-10 shrink-0 cursor-pointer flex-col items-center justify-center gap-1 rounded-[11px] border border-[var(--dw-border-strong)] bg-[var(--dw-card)]"
            >
              <span className="h-0.5 w-4 rounded-sm bg-[var(--dw-text)]" />
              <span className="h-0.5 w-4 rounded-sm bg-[var(--dw-text)]" />
              <span className="h-0.5 w-4 rounded-sm bg-[var(--dw-text)]" />
            </button>
          )}
        </div>
      </div>

      {isMobile && menuOpen && (
        <div className="flex flex-col gap-1 border-t border-[var(--dw-border)] bg-[var(--dw-nav-bg)] px-[clamp(20px,5vw,40px)] pb-[18px] pt-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="py-[11px] text-base font-medium text-[var(--dw-text)] no-underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
