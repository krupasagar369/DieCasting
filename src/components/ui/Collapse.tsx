"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Phase = "collapsed" | "expanding" | "expanded" | "collapsing";

interface CollapseProps {
  open: boolean;
  id?: string;
  className?: string;
  children: ReactNode;
  /** Bootstrap uses a 350ms height transition for .collapsing */
  durationMs?: number;
}

/**
 * React replacement for Bootstrap's collapse plugin (navbar menu + FAQ accordion).
 * Re-uses Bootstrap's own `.collapse`, `.collapsing` and `.show` CSS so the look is unchanged.
 */
export function Collapse({ open, id, className, children, durationMs = 350 }: CollapseProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>(open ? "expanded" : "collapsed");
  const [height, setHeight] = useState<number | undefined>(undefined);
  const mounted = useRef(false);

  useEffect(() => {
    // Skip the initial mount: the initial phase already reflects `open`.
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let timer = 0;
    const startHeight = el.getBoundingClientRect().height;

    raf = requestAnimationFrame(() => {
      if (open) {
        setPhase("expanding");
        setHeight(0);
        raf = requestAnimationFrame(() => {
          setHeight(el.scrollHeight);
          timer = window.setTimeout(() => {
            setPhase("expanded");
            setHeight(undefined);
          }, durationMs);
        });
      } else {
        setPhase("collapsing");
        setHeight(startHeight);
        raf = requestAnimationFrame(() => {
          setHeight(0);
          timer = window.setTimeout(() => {
            setPhase("collapsed");
            setHeight(undefined);
          }, durationMs);
        });
      }
    });

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, [open, durationMs]);

  const stateClass =
    phase === "expanded" ? "collapse show" : phase === "collapsed" ? "collapse" : "collapsing";
  const style: CSSProperties | undefined = height === undefined ? undefined : { height };

  return (
    <div ref={ref} id={id} className={[className, stateClass].filter(Boolean).join(" ")} style={style}>
      {children}
    </div>
  );
}
