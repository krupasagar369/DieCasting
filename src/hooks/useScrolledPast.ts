"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/** true once window.scrollY is greater than `threshold` (SSR-safe, no hydration mismatch). */
export function useScrolledPast(threshold: number): boolean {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > threshold,
    () => false,
  );
}

/** Current window.scrollY (0 on the server). */
export function useScrollY(): number {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY,
    () => 0,
  );
}
