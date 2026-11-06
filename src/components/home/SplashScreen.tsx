"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/cn";
import { heroSlides } from "@/components/home/heroSlides";

const SPLASH_MS = 5500; // original: redirect after the 5.5s intro animation
const FADE_MS = 700;

export function SplashScreen() {
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState(false);

  // While the intro plays, load the /home page code and the first hero image in the background
  useEffect(() => {
    router.prefetch("/home");
    const first = heroSlides[0];
    if (first) {
      const img = new window.Image();
      img.src = first.src;
    }
  }, [router]);

  useEffect(() => {
    let redirect = 0;
    const fade = window.setTimeout(() => {
      setFadeOut(true);
      redirect = window.setTimeout(() => router.push("/home"), FADE_MS);
    }, SPLASH_MS);
    return () => {
      window.clearTimeout(fade);
      window.clearTimeout(redirect);
    };
  }, [router]);

  return (
    <div className="splash-page">
      <div className={cn("splash-screen", fadeOut && "fade-out")} id="splashScreen">
        {/* `text-center mx-auto` of the original were Bootstrap classes that were never loaded on this page */}
        <div className="logo-container">
          <div className="logo-graphic">
            <div className="triangle-assembly">
              <div className="triangle-piece top-triangle">
                <img src="/assets/TopT.png" alt="Top Triangle" />
              </div>
              <div className="triangle-piece left-triangle">
                <img src="/assets/LeftTr.png" alt="Left Triangle" />
              </div>
              <div className="triangle-piece right-triangle">
                <img src="/assets/righttriangle.png" alt="Right Triangle" />
              </div>
              <div className="fire-container">
                <img src="/assets/fire.png" alt="Fire" />
              </div>
            </div>
          </div>
          <div className="text-content">
            <div className="company-name">PIGHALITADHATU</div>
            <div className="tagline">INNOVATIVE SOLUTIONS PRIVATE LIMITED</div>
            <div className="motto">Precision. Power. Prosperity.</div>
          </div>
        </div>
      </div>
    </div>
  );
}