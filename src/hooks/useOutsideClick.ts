"use client";

import { useEffect, type RefObject } from "react";

/** Calls `handler` for pointer presses outside `ref`, and for the Escape key. */
export function useOutsideClick(ref: RefObject<HTMLElement | null>, active: boolean, handler: () => void) {
  useEffect(() => {
    if (!active) return;
    const onPointer = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) handler();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handler();
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [ref, active, handler]);
}
