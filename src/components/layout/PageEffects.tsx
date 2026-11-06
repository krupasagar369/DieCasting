"use client";

import { useEffect } from "react";

export type EffectsKind = "main" | "about" | "industries";

const FALLBACK_IMG =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif"%3EImage Not Available%3C/text%3E%3C/svg%3E';

const MAIN_REVEAL = ".fade-in, .fade-in-delay, .fade-in-delay-2, .stat-card, .industry-card, .feature-item";
const ABOUT_REVEAL = ".stat-card, .mv-card, .capability-card, .leader-card, .advantage-card, .tech-card, .industry-item";
const INDUSTRY_REVEAL = ".product-card, .app-card, .stat-card, .testimonial-card, .process-step, .feature-item";

function observeOnce(
  elements: Iterable<Element>,
  options: IntersectionObserverInit,
  onVisible: (el: HTMLElement) => void,
): () => void {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      onVisible(entry.target as HTMLElement);
      observer.unobserve(entry.target);
    }
  }, options);
  for (const el of elements) observer.observe(el);
  return () => observer.disconnect();
}

/**
 * Progressive-enhancement behaviours that the original site implemented with global scripts
 * (script.js / about.js / industries.js). Everything stateful (navbar, dropdowns, carousel, accordion,
 * counters, forms) lives in dedicated React components instead; this component only covers
 * scroll-reveal animations, smooth anchor scrolling and image fallbacks for server-rendered markup.
 */
export function PageEffects({ kind }: { kind: EffectsKind }) {
  useEffect(() => {
    const root = document.getElementById("page-root");
    if (!root) return;
    const cleanups: Array<() => void> = [];

    // ---- smooth scrolling for in-page anchors (script.js / about.js) -------------------------------
    if (kind !== "industries") {
      const onClick = (e: MouseEvent) => {
        const anchor = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
        if (!anchor) return;
        e.preventDefault();
        const href = anchor.getAttribute("href") ?? "#";
        if (href.length < 2) return;
        let target: Element | null = null;
        try {
          target = document.querySelector(href);
        } catch {
          return;
        }
        if (!target) return;
        const offset = kind === "about" ? 80 : (document.getElementById("navbar")?.offsetHeight ?? 0);
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
      };
      root.addEventListener("click", onClick);
      cleanups.push(() => root.removeEventListener("click", onClick));
    }

    // ---- image `loaded` class + broken-image placeholder (script.js) -------------------------------
    if (kind !== "industries") {
      const markLoaded = (img: HTMLImageElement) => img.classList.add("loaded");
      const applyFallback = (img: HTMLImageElement) => {
        if (img.dataset.fallbackApplied) return;
        img.dataset.fallbackApplied = "1";
        img.src = FALLBACK_IMG;
      };
      const onLoad = (e: Event) => {
        if (e.target instanceof HTMLImageElement) markLoaded(e.target);
      };
      const onError = (e: Event) => {
        if (e.target instanceof HTMLImageElement) applyFallback(e.target);
      };
      root.addEventListener("load", onLoad, true);
      root.addEventListener("error", onError, true);
      root.querySelectorAll("img").forEach((img) => {
        if (!img.complete) return;
        if (img.naturalWidth === 0 && img.getAttribute("src")) applyFallback(img);
        else markLoaded(img);
      });
      cleanups.push(() => {
        root.removeEventListener("load", onLoad, true);
        root.removeEventListener("error", onError, true);
      });
    }

    // ---- scroll reveal -------------------------------------------------------------------------------
    if (kind === "main") {
      const els = root.querySelectorAll<HTMLElement>(MAIN_REVEAL);
      root.querySelectorAll<HTMLElement>(".stat-card, .industry-card, .feature-item").forEach((el, i) => {
        el.style.animationDelay = `${i * 0.1}s`;
      });
      cleanups.push(
        observeOnce(els, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }, (el) => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }),
      );
    }

    if (kind === "about") {
      const els = root.querySelectorAll<HTMLElement>(ABOUT_REVEAL);
      els.forEach((el, i) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = `all 0.3s ease ${i * 0.02}s`;
      });
      cleanups.push(
        observeOnce(els, { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }, (el) => el.classList.add("animate-in")),
      );

      // touch feedback on cards
      const cardSel = ".stat-card, .mv-card, .capability-card, .leader-card, .advantage-card";
      let resetTimer = 0;
      const onTouchStart = (e: TouchEvent) => {
        const card = (e.target as Element | null)?.closest<HTMLElement>(cardSel);
        if (card) card.style.transform = "scale(0.98)";
      };
      const onTouchEnd = (e: TouchEvent) => {
        const card = (e.target as Element | null)?.closest<HTMLElement>(cardSel);
        if (!card) return;
        window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(() => {
          card.style.transform = "";
        }, 100);
      };
      root.addEventListener("touchstart", onTouchStart, { passive: true });
      root.addEventListener("touchend", onTouchEnd, { passive: true });
      cleanups.push(() => {
        window.clearTimeout(resetTimer);
        root.removeEventListener("touchstart", onTouchStart);
        root.removeEventListener("touchend", onTouchEnd);
      });

      // "Home" key scrolls to top (about.js) - not while typing in a field
      const onKey = (e: KeyboardEvent) => {
        const t = e.target as HTMLElement | null;
        if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
        if (e.key === "Home") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      };
      document.addEventListener("keydown", onKey);
      cleanups.push(() => document.removeEventListener("keydown", onKey));
    }

    if (kind === "industries") {
      const els = root.querySelectorAll<HTMLElement>(INDUSTRY_REVEAL);
      els.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      });
      root.querySelectorAll(".row").forEach((row) => {
        row.querySelectorAll<HTMLElement>(".product-card, .app-card, .stat-card").forEach((card, i) => {
          card.style.transitionDelay = `${i * 0.1}s`;
        });
      });
      cleanups.push(
        observeOnce(els, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }, (el) => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }),
      );
    }

    return () => cleanups.forEach((fn) => fn());
  }, [kind]);

  return null;
}
