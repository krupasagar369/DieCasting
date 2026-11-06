"use client";

import { useCallback, useEffect, useState } from "react";
import { facilityImages } from "@/data/facility";

/** Responsive photo grid with a click-to-enlarge lightbox (Esc closes, arrow keys navigate). */
export function FacilityGallery() {
  const [active, setActive] = useState<number | null>(null);
  const count = facilityImages.length;

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + count) % count)),
    [count],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active, close, step]);

  if (count === 0) {
    return (
      <p className="facility-empty">
        Facility photos are coming soon. Add images to <code>public/facility</code> and list them in{" "}
        <code>src/data/facility.ts</code>.
      </p>
    );
  }

  const current = active === null ? null : facilityImages[active];

  return (
    <>
      <div className="row g-4">
        {facilityImages.map((img, i) => (
          <div className="col-lg-4 col-md-6" key={img.file}>
            <button type="button" className="facility-card" onClick={() => setActive(i)} aria-label={`View ${img.title}`}>
              <img src={`/facility/${img.file}`} alt={img.title} loading="lazy" />
              <span className="facility-caption">
                <strong>{img.title}</strong>
                {img.description ? <small>{img.description}</small> : null}
              </span>
            </button>
          </div>
        ))}
      </div>

      {current ? (
        <div className="facility-lightbox" role="dialog" aria-modal="true" aria-label={current.title} onClick={close}>
          <button type="button" className="lb-btn lb-close" aria-label="Close" onClick={close}>
            <i className="fas fa-times"></i>
          </button>
          {count > 1 ? (
            <button
              type="button"
              className="lb-btn lb-prev"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
          ) : null}
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={`/facility/${current.file}`} alt={current.title} />
            <figcaption>
              <strong>{current.title}</strong>
              {current.description ? <span>{current.description}</span> : null}
            </figcaption>
          </figure>
          {count > 1 ? (
            <button
              type="button"
              className="lb-btn lb-next"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
