import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { FaqAccordion } from "@/components/common/FaqAccordion";

export const metadata: Metadata = {
  title: "PIGHALITADHATU_FAQ's",
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

export default function FaqsPage() {
  return (
    <SiteShell pageClass="page-faqs" effects="main">
      <section className="faq-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <FaqAccordion />
            <div className="faq-cta">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h3>Still Have Questions?</h3>
                  <p>Our team of experts is ready to help you find the perfect die casting solution for your project.</p>
                </div>
                <div className="col-lg-4 text-lg-end"><Link href="/contact" className="btn-cta">Contact Us Today</Link></div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
