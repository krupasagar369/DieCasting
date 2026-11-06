"use client";

import { useScrolledPast } from "@/hooks/useScrolledPast";
import { cn } from "@/lib/cn";

export function ScrollTopButton({ threshold }: { threshold: number }) {
  const show = useScrolledPast(threshold);
  return (
    <button
      id="scrollTopBtn"
      type="button"
      aria-label="Scroll to top"
      className={cn("scroll-top-btn", show && "show")}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}
