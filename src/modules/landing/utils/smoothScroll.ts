import type { MouseEvent } from "react";

const SCROLL_DURATION_MS = 1000;

let activeScrollFrame = 0;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function getNavOffset() {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--dw-nav-height")
    .trim();
  const parsed = Number.parseFloat(raw);
  return Number.isFinite(parsed) ? parsed : 64;
}

function animateScrollTo(top: number, durationMs: number) {
  cancelAnimationFrame(activeScrollFrame);

  const startY = window.scrollY;
  const distance = top - startY;

  if (Math.abs(distance) < 1) return;

  const startTime = performance.now();

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / durationMs, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));

    if (progress < 1) {
      activeScrollFrame = requestAnimationFrame(step);
    }
  };

  activeScrollFrame = requestAnimationFrame(step);
}

export function scrollToHash(href: string) {
  if (!href.startsWith("#")) return false;

  const target = document.querySelector(href);
  if (!(target instanceof HTMLElement)) return false;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const top = Math.max(
    0,
    target.getBoundingClientRect().top + window.scrollY - getNavOffset()
  );

  if (prefersReducedMotion) {
    window.scrollTo(0, top);
  } else {
    animateScrollTo(top, SCROLL_DURATION_MS);
  }

  window.history.pushState(null, "", href);
  return true;
}

export function onHashLinkClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  after?: () => void
) {
  if (!href.startsWith("#")) return;

  event.preventDefault();
  scrollToHash(href);
  after?.();
}
