import type { NavEntry } from "@/types";

export const BRAND = {
  name: "PIGHALITADHATU",
  legalName: "INNOVATIVE SOLUTIONS PRIVATE LIMITED",
  motto: "Precision. Power. Prosperity",
  logo: "/assets/Piglithadathu_Final_Logo_RAJ.png",
} as const;

export const SOCIAL_ICONS = ["fab fa-linkedin-in", "fab fa-twitter", "fab fa-facebook-f", "fab fa-instagram"] as const;

export function buildNav(contactLabel: string): NavEntry[] {
  return [
    { type: "link", label: "Home", href: "/home" },
    {
      type: "dropdown",
      label: "About Us",
      items: [
        { label: "Our Company", href: "/about" },
        { label: "Leadership", href: "/leaders" },
      ],
    },
    {
      type: "dropdown",
      label: "Our Products/Services",
      items: [
        { label: "Engineering", href: "/aerospace", description: "Where Innovation Meets Industrial Strength" },
        { label: "Oil and Gas", href: "/oil-and-gas", description: "Industrial valve systems" },
        { label: "Automotive", href: "/automotive", description: "Safety belt components" },
        { label: "Energy", href: "/energy", description: "Power distribution parts" },
        { label: "Hydraulic", href: "/hydraulic", description: "Flow control meters" },
        { label: "Auto Electrical", href: "/auto-electrical", description: "Electronics & connectors" },
        { label: "All Products", href: "/products", description: "Everything we manufacture" },
      ],
    },
    { type: "link", label: "Our Facility", href: "/facility" },
    { type: "link", label: contactLabel, href: "/contact" },
  ];
}
