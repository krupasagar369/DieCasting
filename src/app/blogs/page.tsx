import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  title: "Die Casting Pro - Precision Die Casting Excellence",
  description:
    "Die Casting Pro - Leading manufacturer of high-precision die-cast components for aerospace, automotive, oil & gas, energy, hydraulic and electronics industries. ISO 9001:2015 certified with 30+ years experience.",
  keywords:
    "die casting, precision die casting, aerospace components, automotive parts, die cast manufacturing, ISO certified die casting, high precision components",
  authors: [{ name: "Die Casting Pro" }],
  openGraph: {
    title: "Die Casting Pro - Precision Die Casting Excellence",
    description:
      "Leading manufacturer of high-precision die-cast components with 30+ years of experience. Serving aerospace, automotive, and industrial sectors.",
    type: "website",
  },
};

export default function BlogsPage() {
  return (
    <SiteShell effects="main">
      <main>
        <h1>Blog page</h1>
      </main>
    </SiteShell>
  );
}
