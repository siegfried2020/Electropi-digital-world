"use client";

import { useEffect, useRef } from "react";

export function useStackScroll() {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stackEl = stackRef.current;
    if (!stackEl) return;

    const updateStack = () => {
      const cards = stackEl.querySelectorAll<HTMLElement>("[data-stack]");
      const n = cards.length;
      if (!n) return;

      const isMobile = window.innerWidth < 860;
      const navEl = document.querySelector<HTMLElement>("[data-landing-nav]");
      const navHeight = isMobile
        ? navEl?.getBoundingClientRect().height ?? 64
        : 0;
      const vh = window.innerHeight || 800;
      const scrollVh = isMobile ? Math.max(vh - navHeight, 1) : vh;
      const topPad = isMobile ? 8 : 0;
      const vp = stackEl.querySelector<HTMLElement>("[data-stack-vp]");
      stackEl.style.height = "";
      stackEl.style.paddingBottom = "";
      if (vp) {
        vp.style.position = "";
        vp.style.height = "";
        vp.style.display = "";
        vp.style.flexDirection = "";
        vp.style.gap = "";
        vp.style.overflow = "";
      }

      const rect = stackEl.getBoundingClientRect();
      const scrollable = rect.height - scrollVh;
      let p = scrollable > 0 ? -rect.top / scrollable : 0;
      p = Math.max(0, Math.min(1, p));
      const trans = n > 1 ? n - 1 : 1;
      const seg = 1 / trans;

      cards.forEach((card, i) => {
        const inner = card.querySelector<HTMLElement>("[data-stack-inner]");
        const dim = card.querySelector<HTMLElement>("[data-stack-dim]");
        const incoming =
          i === 0 ? 1 : Math.max(0, Math.min(1, (p - (i - 1) * seg) / seg));
        const ease = 1 - Math.pow(1 - incoming, 3);
        const ty = (1 - ease) * scrollVh * 0.92;
        const cover =
          i === n - 1 ? 0 : Math.max(0, Math.min(1, (p - i * seg) / seg));
        const ce = cover * cover * (3 - 2 * cover);
        const lift = ce * scrollVh * 0.045;
        const scale = 1 - ce * 0.08;

        card.style.position = "";
        card.style.left = "";
        card.style.top = "";
        card.style.width = "";
        card.style.willChange = "";
        card.style.transition = "";
        card.style.opacity = incoming < 0.02 ? "0" : "1";

        if (isMobile) {
          card.style.top = `${topPad}px`;
          card.style.transform = `translate(-50%, ${(ty - lift).toFixed(1)}px)`;
        } else {
          card.style.top = "50%";
          card.style.transform = `translate(-50%, calc(-50% + ${(ty - lift).toFixed(1)}px))`;
        }

        if (inner) {
          inner.style.transform = `scale(${scale.toFixed(4)})`;
          inner.style.filter =
            ce > 0.01 ? `blur(${(ce * 6).toFixed(2)}px)` : "none";
        }
        if (dim) dim.style.opacity = (ce * 0.5).toFixed(3);
      });

      if (isMobile && cards.length) {
        const maxCardHeight = Math.max(
          ...Array.from(cards).map((card) => card.offsetHeight)
        );
        const extraSpace = Math.max(96, maxCardHeight - scrollVh + 64);
        stackEl.style.paddingBottom = `${extraSpace}px`;
      }
    };

    updateStack();
    const timer = setTimeout(updateStack, 200);
    window.addEventListener("scroll", updateStack, { passive: true });
    window.addEventListener("resize", updateStack, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", updateStack);
      window.removeEventListener("resize", updateStack);
    };
  }, []);

  return stackRef;
}
