import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  title: "PIGHALITADHATU_Leadership",
  description:
    "Meet the leadership team behind Pighalitadhatu, a leading die casting manufacturer in Karnataka. Expert team committed to quality die casting services and customer satisfaction.",
  keywords:
    "die casting company leadership, die casting manufacturer team, die casting foundry management, Pighalitadhatu team, die casting experts Karnataka, die casting company in Karnataka",
  authors: [{ name: "Pighalitadhatu" }],
};

export default function LeadersPage() {
  return (
    <SiteShell pageClass="page-about" effects="about" fadeIn>
      <section className="leadership-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="leader-card">
                <div className="leader-image"><img alt="Buddi K Gangadhara" src="https://ik.imagekit.io/f0ojavkeh/IMG_2289.JPG?updatedAt=1761912972787" /></div>
                <div className="leader-info">
                  <h4>Buddi K Gangadhara</h4>
                  <p className="leader-position">Managing Partner</p>
                  <p className="leader-bio">
                    BKG, with 21+ yrs of experience and an M.Sc. in Automotive Engg (UK), leads PBS to integrate talent,
                    tech &amp; innovation for sustainable growth.
                  </p>
                  <div className="leader-expertise">
                    <span className="expertise-tag">Strategic Leadership</span>
                    {" "}
                    <span className="expertise-tag">Business Development</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="leader-card">
                <div className="leader-image"><img alt="Renuka N B" src="https://ik.imagekit.io/f0ojavkeh/IMG_19982.JPG?updatedAt=1761912972991" /></div>
                <div className="leader-info">
                  <h4>Renuka N B</h4>
                  <p className="leader-position">Chief Technology Officer</p>
                  <p className="leader-bio">
                    Renuka, with 20+ yrs of expertise in Education, L&amp;D, and Sales, drives growth through strategy,
                    leadership, and people development for lasting impact.
                  </p>
                  <div className="leader-expertise">
                    <span className="expertise-tag">Technology Innovation</span>
                    {" "}
                    <span className="expertise-tag">Digital Learning</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="leader-card">
                <div className="leader-image"><img alt="Ramesh H" src="https://ik.imagekit.io/f0ojavkeh/IMG_2261.JPG?updatedAt=1761913638966" /></div>
                <div className="leader-info">
                  <h4>Ramesh H</h4>
                  <p className="leader-position">Chief Financial Officer</p>
                  <p className="leader-bio">
                    Ramesh H, Chief Financial Officer, drives financial strategy and ensures sustainable growth through
                    strong fiscal management and strategic planning.
                  </p>
                  <div className="leader-expertise">
                    <span className="expertise-tag">Financial Strategy</span>
                    {" "}
                    <span className="expertise-tag">Risk Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="leader-card">
                <div className="leader-image"><img alt="Dummy Name 1" src="https://avatar.iran.liara.run/public/boy?username=coo" /></div>
                <div className="leader-info">
                  <h4>Dummy Name 1</h4>
                  <p className="leader-position">Chief Operations Officer</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="leader-card">
                <div className="leader-image"><img alt="Dummy Name 2" src="https://avatar.iran.liara.run/public/boy?username=head" /></div>
                <div className="leader-info">
                  <h4>Dummy Name 2</h4>
                  <p className="leader-position">Head of Quality</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </SiteShell>
  );
}
