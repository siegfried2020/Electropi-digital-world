"use client";

import { useEffect, useRef } from "react";

function styleTimelineNode(node: HTMLElement, on: boolean) {
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
          styleTimelineNode(node, on);
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
      const endNode = timelineEl.querySelector<HTMLElement>("[data-tl-end-node]");

      if (steps.length && track) {
        const trackRect = track.getBoundingClientRect();
        const nodes = Array.from(
          timelineEl.querySelectorAll<HTMLElement>(
            "[data-tl-node]:not([data-tl-end-node])"
          )
        );
        const complete = lit >= n;
        // Nodes start at step 02, so map lit steps → farthest visible node
        const litNodes = Math.max(0, lit - 1);
        const frontier = Math.max(0, Math.min(nodes.length - 1, litNodes - 1));
        let pct = 0;

        if (complete) {
          pct = 100;
        } else if (litNodes > 0 && nodes[frontier]) {
          const nodeRect = nodes[frontier].getBoundingClientRect();
          pct =
            ((nodeRect.left + nodeRect.width / 2 - trackRect.left) /
              trackRect.width) *
            100;
        }

        if (fill) {
          fill.style.width = `${pct}%`;
          fill.style.backgroundSize = `${trackRect.width}px 100%`;
        }
        if (pulse) {
          pulse.style.left = `${pct}%`;
          pulse.style.opacity =
            !complete && litNodes > 0 && litNodes < nodes.length ? "1" : "0";
        }

        if (endNode) {
          const lastStepIndex = steps.length - 1;
          styleTimelineNode(endNode, lastStepIndex < lit || pct >= 100);
        }
      } else if (endNode) {
        styleTimelineNode(endNode, false);
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
