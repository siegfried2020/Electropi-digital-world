"use client";

import { useEffect, useRef } from "react";
import { useLanding } from "../context/LandingProvider";

export function useGlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useLanding();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const N = 460;
    const K = 3;
    const pts: { x: number; y: number; z: number }[] = [];
    const inc = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const phi = i * inc;
      pts.push({ x: Math.cos(phi) * r, y, z: Math.sin(phi) * r });
    }

    const edgeSet = new Set<number>();
    const edges: [number, number][] = [];

    for (let i = 0; i < N; i++) {
      const distances: [number, number][] = [];
      for (let j = 0; j < N; j++) {
        if (i === j) continue;
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        const dz = pts[i].z - pts[j].z;
        distances.push([dx * dx + dy * dy + dz * dz, j]);
      }
      distances.sort((a, b) => a[0] - b[0]);
      for (let k = 0; k < K; k++) {
        const j = distances[k][1];
        const a = Math.min(i, j);
        const b = Math.max(i, j);
        const key = a * N + b;
        if (!edgeSet.has(key)) {
          edgeSet.add(key);
          edges.push([a, b]);
        }
      }
    }

    const accent = new Set<number>();
    for (let i = 0; i < N; i += 41) accent.add(i);

    let W = 0;
    let H = 0;
    let cx = 0;
    let cy = 0;
    let R = 0;
    let px = 0;
    let py = 0;
    let tx = 0;
    let ty = 0;
    let ang = 0.4;
    let raf = 0;

    const tilt = 0.42;
    const st = Math.sin(tilt);
    const ct = Math.cos(tilt);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      if (W === 0 || H === 0) return;
      canvas.width = Math.round(W * DPR);
      canvas.height = Math.round(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      cx = W * 0.5;
      cy = H * 0.44;
      R = Math.min(H * 0.62, W * 0.42);
    };

    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const draw = () => {
      if (W === 0 || H === 0) resize();
      ctx.clearRect(0, 0, W, H);
      ang += 0.0016;
      px += (tx - px) * 0.05;
      py += (ty - py) * 0.05;
      const ox = px * 11;
      const oy = py * 8;
      const sin = Math.sin(ang);
      const cos = Math.cos(ang);
      const proj: { sx: number; sy: number; a: number }[] = [];

      for (let i = 0; i < N; i++) {
        const p = pts[i];
        const x = p.x * cos - p.z * sin;
        const z1 = p.x * sin + p.z * cos;
        const y2 = p.y * ct - z1 * st;
        const z2 = p.y * st + z1 * ct;
        proj[i] = { sx: cx + ox + x * R, sy: cy + oy + y2 * R, a: (z2 + 1) / 2 };
      }

      const light = theme === "light";
      const lineRGB = "3,110,217";
      const lineBase = light ? 0.04 : 0.025;
      const lineMul = 0.22;
      const dotRGB = light ? "3,110,217" : "150,205,255";
      const dotBase = 0.1;
      const dotMul = light ? 0.46 : 0.5;
      const accRGB = light ? "8,161,127" : "15,240,179";

      for (const [aIdx, bIdx] of edges) {
        const a = proj[aIdx];
        const b = proj[bIdx];
        const depth = (a.a + b.a) / 2;
        if (depth < 0.16) continue;
        ctx.strokeStyle = `rgba(${lineRGB},${lineBase + depth * lineMul})`;
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.moveTo(a.sx, a.sy);
        ctx.lineTo(b.sx, b.sy);
        ctx.stroke();
      }

      for (let i = 0; i < N; i++) {
        const p = proj[i];
        if (accent.has(i)) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(${accRGB},${0.45 + p.a * 0.5})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = `rgba(${accRGB},0.8)`;
          ctx.arc(p.sx, p.sy, 1.4 + p.a * 1.8, 0, 6.2832);
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          ctx.beginPath();
          ctx.fillStyle = `rgba(${dotRGB},${dotBase + p.a * dotMul})`;
          ctx.arc(p.sx, p.sy, 0.5 + p.a * 1.7, 0, 6.2832);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [theme]);

  return canvasRef;
}
