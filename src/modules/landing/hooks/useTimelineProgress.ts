"use client";

import { useEffect, useRef } from "react";

export function useTimelineProgress() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const timelineEl = timelineRef.current;
    if (!sectionEl || !timelineEl) return;

    const updateTimeline = () => {
      const rect = sectionEl.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      let p = (vh * 0.78 - rect.top) / (vh * 0.56);
      p = Math.max(0, Math.min(1, p));

      const steps = timelineEl.querySelectorAll<HTMLElement>("[data-tl-step]");
      const n = steps.length || 4;
      const lit = Math.round(p * n);

      steps.forEach((step, i) => {
        const node = step.querySelector<HTMLElement>("[data-tl-node]");
        const num = step.querySelector<HTMLElement>("[data-tl-num]");
        const on = i < lit;

        if (node) {
          if (on) {
            node.style.borderColor = "var(--dw-mint)";
            node.style.background = "var(--dw-mint)";
            node.style.boxShadow = "0 0 14px var(--dw-mint)";
            node.style.transform = "scale(1.04)";
          } else {
            node.style.borderColor = "var(--dw-border-strong)";
            node.style.background = "var(--dw-bg)";
            node.style.boxShadow = "none";
            node.style.transform = "scale(1)";
          }
        }
        if (num) {
          num.style.color = on ? "var(--dw-text)" : "transparent";
          num.style.webkitTextStrokeColor = on
            ? "transparent"
            : "var(--dw-border-strong)";
          num.style.opacity = on ? "1" : "0.85";
        }
      });

      const fill = timelineEl.querySelector<HTMLElement>("[data-tl-fill]");
      const pulse = timelineEl.querySelector<HTMLElement>("[data-tl-pulse]");
      const track = timelineEl.querySelector<HTMLElement>("[data-tl-track]");

      if (steps.length && track) {
        const trackRect = track.getBoundingClientRect();
        const frontier = Math.max(0, Math.min(steps.length - 1, lit - 1));
        const frontierNode = steps[frontier]?.querySelector<HTMLElement>(
          "[data-tl-node]"
        );
        let pct = 0;

        if (lit > 0 && frontierNode) {
          const nodeRect = frontierNode.getBoundingClientRect();
          pct =
            ((nodeRect.left + nodeRect.width / 2 - trackRect.left) /
              trackRect.width) *
            100;
        }

        if (fill) {
          fill.style.width = `${lit > 0 ? pct : 0}%`;
          fill.style.backgroundSize = `${trackRect.width}px 100%`;
        }
        if (pulse) {
          pulse.style.left = `${pct}%`;
          pulse.style.opacity =
            lit > 0 && lit < steps.length ? "1" : "0";
        }
      }
    };

    updateTimeline();
    const timers = [
      setTimeout(updateTimeline, 200),
      setTimeout(updateTimeline, 700),
    ];
    window.addEventListener("scroll", updateTimeline, { passive: true });
    window.addEventListener("resize", updateTimeline, { passive: true });

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("scroll", updateTimeline);
      window.removeEventListener("resize", updateTimeline);
    };
  }, []);

  return { sectionRef, timelineRef };
}
