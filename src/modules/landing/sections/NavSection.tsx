"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Logo } from "../components/Logo";
import { NAV_LINKS } from "../data/content";
import { useLanding } from "../context/LandingProvider";
import { onHashLinkClick } from "../utils/smoothScroll";

function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: "dark" | "light";
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
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
  );
}

export function NavSection() {
  const barRef = useRef<HTMLDivElement>(null);
  const {
    theme,
    toggleTheme,
    menuOpen,
    toggleMenu,
    closeMenu,
    isDesktop,
    isMobile,
    isNarrow,
  } = useLanding();

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const updateNavHeight = () => {
      document.documentElement.style.setProperty(
        "--dw-nav-height",
        `${bar.getBoundingClientRect().height}px`
      );
    };

    updateNavHeight();
    const observer = new ResizeObserver(updateNavHeight);
    observer.observe(bar);
    window.addEventListener("resize", updateNavHeight, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateNavHeight);
    };
  }, []);

  return (
    <nav
      data-landing-nav
      className="sticky top-0 z-[60] border-b border-[var(--dw-border)] bg-[var(--dw-nav-bg)] backdrop-blur-2xl transition-[background-color,border-color] duration-[450ms]"
    >
      <div
        ref={barRef}
        className="relative mx-auto flex max-w-[1200px] items-center justify-between gap-5 px-[clamp(20px,5vw,40px)] py-[15px]"
      >
        <Link
          href="#top"
          onClick={(e) => onHashLinkClick(e, "#top")}
          className="shrink-0 text-[var(--dw-text)] no-underline"
        >
          <Logo />
        </Link>

        {isDesktop && (
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => onHashLinkClick(e, link.href)}
                className="text-[15px] font-medium text-[var(--dw-muted)] no-underline transition-colors hover:text-[var(--dw-text)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        <div className="flex shrink-0 items-center gap-3">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />

          {!isNarrow && (
            <Link
              href="#cta"
              onClick={(e) => onHashLinkClick(e, "#cta")}
              className="landing-btn-outline text-sm"
            >
              Start Your AI Project
            </Link>
          )}

          {isMobile && (
            <button
              type="button"
              onClick={toggleMenu}
              aria-label="Menu"
              aria-expanded={menuOpen}
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
        <div className="absolute left-0 right-0 top-full z-[61] border-b border-[var(--dw-border)] bg-[var(--dw-nav-bg)] px-[clamp(20px,5vw,40px)] pb-[18px] pt-2 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.55)] backdrop-blur-xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => onHashLinkClick(e, link.href, closeMenu)}
              className="block py-[11px] text-base font-medium text-[var(--dw-text)] no-underline"
            >
              {link.label}
            </Link>
          ))}

          {isNarrow && (
            <div className="mt-2 border-t border-[var(--dw-border)] pt-4">
              <Link
                href="#cta"
                onClick={(e) => onHashLinkClick(e, "#cta", closeMenu)}
                className="landing-btn-outline text-sm"
              >
                Start Your AI Project
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
