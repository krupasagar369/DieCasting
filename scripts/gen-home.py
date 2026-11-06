import re, sys, json
sys.path.insert(0, "scripts")
from html2jsx import load, to_jsx, children_jsx, main_content

O = "/home/claude/orig/die-casting-main/die-casting-main/"
soup = load(O + "home.html")

# ---- hero slides -> data file -------------------------------------------------------------------------
slides = []
for item in soup.select("#heroCarousel .carousel-item"):
    img = item.select_one(".carousel-img-wrapper img")
    cap = item.select_one(".carousel-caption-custom")
    cap_jsx = to_jsx(cap, 3)
    slides.append((img["src"], img["alt"], cap_jsx))

out = ['import type { ReactNode } from "react";', 'import { ButtonAnchor, ButtonLink } from "@/components/ui/ButtonLink";', "", 
       "export interface HeroSlide {", "  src: string;", "  alt: string;", "  caption: ReactNode;", "}", "",
       "// Image URLs are the exact external URLs of the original home.html.", "export const heroSlides: HeroSlide[] = ["]
for src, alt, cap in slides:
    out.append("  {")
    out.append(f'    src: "{src}",')
    out.append(f'    alt: "{alt}",')
    out.append("    caption: (")
    out.append(cap.replace("\n", "\n  ").rstrip())
    out.append("    ),")
    out.append("  },")
out.append("];")
open("src/components/home/heroSlides.tsx", "w").write("\n".join(out) + "\n")

# ---- rest of the page ---------------------------------------------------------------------------------
parts = []
for el in main_content(soup):
    if el.get("id") == "home":
        continue
    parts.append(to_jsx(el, 3))
body = "\n".join(parts)
body = re.sub(r'<h3 className="stat-number" data-target="(\d+)">0</h3>', r'<CountUp as="h3" className="stat-number" target={\1} />', body)
body = re.sub(r'<span data-target="(\d+)">0</span>', r'<CountUp target={\1} />', body)
open("/tmp/home-body.tsx", "w").write(body)
print("slides:", len(slides), "| body lines:", body.count("\n"))
