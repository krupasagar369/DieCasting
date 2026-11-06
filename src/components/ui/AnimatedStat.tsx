"use client";

import { useEffect, useRef, useState } from "react";

/** "100+" -> {100, "+"}, "20K" -> {20, "K"}, "2025" -> {2025, ""} (same parsing as the original about.js). */
function parseStat(text: string): { target: number; suffix: string } | null {
  const trimmed = text.trim();
  const suffix = trimmed.includes("+") ? "+" : trimmed.includes("K") ? "K" : "";
  const target = parseInt(suffix ? trimmed.replace(/\D/g, "") : trimmed, 10);
  return Number.isNaN(target) || target <= 0 ? null : { target, suffix };
}

export function AnimatedStat({ value, duration = 1000 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    const parsed = parseStat(value);
    if (!el || !parsed) return;
    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setDisplay(`${progress < 1 ? Math.floor(progress * parsed.target) : parsed.target}${parsed.suffix}`);
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <div ref={ref} className="stat-number">
      {display}
    </div>
  );
}
