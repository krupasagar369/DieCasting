"use client";

import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import { heroSlides } from "./heroSlides";
import { useScrollY } from "@/hooks/useScrolledPast";
import { useViewportHeight } from "@/hooks/useViewportHeight";
import { cn } from "@/lib/cn";

const INTERVAL_MS = 5000; // Bootstrap's default data-bs-interval
const FADE_MS = 600; // .carousel-item transition duration

interface CarouselState {
  active: number;
  /** slide that is mounted (opacity 0) one frame before it becomes active, so the CSS fade can run */
  entering: number | null;
  /** previous slide, kept visible while it fades out */
  leaving: number | null;
}

/**
 * Hero carousel of the home page. Re-implements Bootstrap's `carousel-fade` (auto-ride, indicators,
 * prev/next, pause on hover, swipe) in React state, plus the original scripts' viewport-height sizing
 * and scroll parallax. Bootstrap's carousel CSS and the site's own CSS are unchanged.
 */
export function HeroCarousel() {
  const count = heroSlides.length;
  const [state, setState] = useState<CarouselState>({ active: 0, entering: null, leaving: null });
  const [paused, setPaused] = useState(false);
  const viewportHeight = useViewportHeight();
  const scrollY = useScrollY();
  const touchStartX = useRef<number | null>(null);
  const leaveTimer = useRef(0);

  // After the page is up, download the remaining slide images in the background
  useEffect(() => {
    heroSlides.slice(1).forEach((slide) => {
      const img = new window.Image();
      img.src = slide.src;
    });
  }, []);

  const goTo = useCallback((next: number) => {
    setState((s) => (next === s.active || s.entering !== null ? s : { ...s, entering: next }));
  }, []);

  // phase 2: one frame after the new slide was mounted, flip it to active and start the fade
  useEffect(() => {
    if (state.entering === null) return;
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        setState((s) => (s.entering === null ? s : { active: s.entering, entering: null, leaving: s.active }));
        window.clearTimeout(leaveTimer.current);
        leaveTimer.current = window.setTimeout(() => setState((s) => ({ ...s, leaving: null })), FADE_MS);
      });
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [state.entering]);

  useEffect(() => () => window.clearTimeout(leaveTimer.current), []);

  // auto-ride, paused while hovered
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => goTo((state.active + 1) % count), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, state.active, count, goTo]);

  const next = () => goTo((state.active + 1) % count);
  const prev = () => goTo((state.active - 1 + count) % count);

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: TouchEvent) => {
    const startX = touchStartX.current;
    const endX = e.changedTouches[0]?.clientX;
    touchStartX.current = null;
    if (startX === null || endX === undefined) return;
    const delta = endX - startX;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) next();
    else prev();
  };

  // original script: parallax only while the hero is still on screen
  const parallax = scrollY < viewportHeight ? scrollY * 0.5 : undefined;

  return (
    <section id="home" className="hero-section">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="carousel-indicators">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              className={cn(i === state.active && "active")}
              aria-current={i === state.active ? "true" : undefined}
              aria-label={`Slide ${i + 1}`}
              onClick={() => goTo(i)}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {heroSlides.map((slide, i) => {
            const isActive = i === state.active;
            const isVisible = isActive || i === state.entering || i === state.leaving;
            return (
              <div
                key={slide.src}
                className={cn("carousel-item", isActive && "active")}
                style={{
                  display: isVisible ? "block" : undefined,
                  minHeight: viewportHeight ? `${viewportHeight}px` : undefined,
                }}
                aria-hidden={!isActive}
                inert={!isActive}
              >
                <div className="carousel-img-wrapper">
                  <img
                    src={slide.src}
                    className="d-block w-100"
                    alt={slide.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    fetchPriority={i === 0 ? "high" : "auto"}
                    decoding="async"
                    style={parallax === undefined ? undefined : { transform: `translateY(${parallax}px)` }}
                  />
                  <div className="carousel-overlay"></div>
                </div>
                {slide.caption}
              </div>
            );
          })}
        </div>

        <button className="carousel-control-prev" type="button" aria-label="Previous slide" onClick={prev}>
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" aria-label="Next slide" onClick={next}>
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
}