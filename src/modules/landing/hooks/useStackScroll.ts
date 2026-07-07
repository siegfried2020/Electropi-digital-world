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

      const vh = window.innerHeight || 800;
      const vp = stackEl.querySelector<HTMLElement>("[data-stack-vp]");
      stackEl.style.height = "";
      if (vp) {
        vp.style.position = "";
        vp.style.height = "";
        vp.style.display = "";
        vp.style.flexDirection = "";
        vp.style.gap = "";
        vp.style.overflow = "";
      }

      const rect = stackEl.getBoundingClientRect();
      const scrollable = rect.height - vh;
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
        const ty = (1 - ease) * vh * 0.92;
        const cover =
          i === n - 1 ? 0 : Math.max(0, Math.min(1, (p - i * seg) / seg));
        const ce = cover * cover * (3 - 2 * cover);
        const lift = ce * vh * 0.045;
        const scale = 1 - ce * 0.08;

        card.style.position = "";
        card.style.left = "";
        card.style.top = "";
        card.style.width = "";
        card.style.willChange = "";
        card.style.transition = "";
        card.style.transform = `translate(-50%, calc(-50% + ${(ty - lift).toFixed(1)}px))`;
        card.style.opacity = incoming < 0.02 ? "0" : "1";

        if (inner) {
          inner.style.transform = `scale(${scale.toFixed(4)})`;
          inner.style.filter =
            ce > 0.01 ? `blur(${(ce * 6).toFixed(2)}px)` : "none";
        }
        if (dim) dim.style.opacity = (ce * 0.5).toFixed(3);
      });
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
