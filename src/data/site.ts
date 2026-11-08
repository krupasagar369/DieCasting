import type { NavEntry } from "@/types";

export const BRAND = {
  name: "PIGHALITADHATU",
  legalName: "INNOVATIVE SOLUTIONS PRIVATE LIMITED",
  motto: "Precision. Power. Prosperity",
  logo: "/assets/Piglithadathu_Final_Logo_RAJ.png",
} as const;

export interface SocialLink {
  label: string;
  icon: string;
  /** full profile URL, or "" to hide this icon */
  href: string;
}

/** Put your real profile links here. Empty href = icon is not shown. */
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQH12sW9vta7eQAAAaGwNSO4LtXk9fPiOBZsN5Rru8gceFE5eCimSROWKWpK7nieGg5JlnhBwzVh6TtKc7qpZ50hEVRqXoLu1RLFWxo3dh0kZ1ASWFg_LB0_okji00qc9CAYYtk=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fpighalitadhatu-innovative-solutions-private-limited%2Fabout%2F%3FviewAsMember%3Dtrue" },
  { label: "Twitter / X", icon: "fab fa-twitter", href: "" },
  { label: "Facebook", icon: "fab fa-facebook-f", href: "" },
  { label: "Instagram", icon: "fab fa-instagram", href: "" },
  // { label: "YouTube", icon: "fab fa-youtube", href: "" },
  {
  label: "WhatsApp",
  icon: "fab fa-whatsapp",
  href: "https://wa.me/917899961306?text=Hello%2C%20I%20am%20interested%20in%20your%20services."
},
];

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
        { label: "All Products", href: "/products", description: "Everything we manufacture" },
        { label: "Engineering", href: "/aerospace", description: "Where Innovation Meets Industrial Strength" },
        { label: "Oil and Gas", href: "/oil-and-gas", description: "Industrial valve systems" },
        { label: "Automotive", href: "/automotive", description: "Safety belt components" },
        { label: "Energy", href: "/energy", description: "Power distribution parts" },
        { label: "Hydraulic", href: "/hydraulic", description: "Flow control meters" },
        { label: "Auto Electrical", href: "/auto-electrical", description: "Electronics & connectors" },
      ],
    },
    { type: "link", label: "Our Facility", href: "/facility" },
    { type: "link", label: contactLabel, href: "/contact" },
  ];
}