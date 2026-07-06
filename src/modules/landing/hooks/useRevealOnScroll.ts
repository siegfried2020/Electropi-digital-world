"use client";

import { useEffect } from "react";

export function useRevealOnScroll(rootSelector = ".landing") {
  useEffect(() => {
    const root = document.querySelector(rootSelector);
    if (!root) return;

    const checkReveal = () => {
      const vh = window.innerHeight || 800;
      root
        .querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])")
        .forEach((node) => {
          const rect = node.getBoundingClientRect();
          if (rect.top < vh * 0.92 && rect.bottom > 0) {
            node.setAttribute("data-revealed", "");
          }
        });
    };

    checkReveal();
    const timers = [
      setTimeout(checkReveal, 400),
      setTimeout(checkReveal, 700),
    ];

    window.addEventListener("scroll", checkReveal, { passive: true });
    window.addEventListener("resize", checkReveal, { passive: true });

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("scroll", checkReveal);
      window.removeEventListener("resize", checkReveal);
    };
  }, [rootSelector]);
}
