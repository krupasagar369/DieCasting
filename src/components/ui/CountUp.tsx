"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  as?: "span" | "h3";
  className?: string;
  suffix?: string;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
}

/** Counts from 0 to `target` the first time the element scrolls into view (replaces the `data-target` scripts). */
export function CountUp({
  target,
  as = "span",
  className,
  suffix = "",
  duration = 2000,
  threshold = 0.5,
  rootMargin = "0px",
}: CountUpProps) {
  const ref = useRef<HTMLHeadingElement & HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(progress < 1 ? Math.floor(progress * target) : target);
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold, rootMargin },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration, threshold, rootMargin]);

  const text = `${value.toLocaleString()}${suffix}`;
  return as === "h3" ? (
    <h3 ref={ref} className={className}>
      {text}
    </h3>
  ) : (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
