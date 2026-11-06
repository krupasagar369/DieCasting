import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { FacilityGallery } from "@/components/facility/FacilityGallery";

export const metadata: Metadata = {
  title: "PIGHALITADHATU_Our Facility",
  description: "Take a look at the machines, equipment and infrastructure at the Pighalitadhatu die casting facility.",
};

export default function FacilityPage() {
  return (
    <SiteShell pageClass="page-facility" effects="main">
      <section className="facility-banner">
        <div className="container">
          <h1>Our Facility</h1>
          <p>Machines, equipment and infrastructure that power our precision die casting.</p>
        </div>
      </section>
      <section className="facility-section">
        <div className="container">
          <FacilityGallery />
        </div>
      </section>
    </SiteShell>
  );
}
