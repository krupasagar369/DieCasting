import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { ContactForm } from "@/components/common/ContactForm";

export const metadata: Metadata = {
  title: "PIGHALITADHATU_Contact Us",
  description:
    "Contact Pighalitadhatu for die casting services in Karnataka. Get a quote for aluminium die casting, zinc die casting, and custom die casting. Call, email, or visit us in Bengaluru.",
  keywords:
    "contact die casting company, get a quote die casting, request quote die casting services, die casting company near me, die casting company in Karnataka, aluminium die casting company in Bengaluru, buy die casting parts, custom die casting order, die casting supplier India",
  authors: [{ name: "Pighalitadhatu" }],
  robots: { index: true, follow: true },
};

/** Hero background: change the file name to use another photo from public/facility/ */
const HERO_IMAGE = "/facility/Picture16.jpg";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7337.703068104745!2d75.5522003!3d14.6654256!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDM5JzU1LjUiTiA3NcKwMzMnMjYuMCJF!5e1!3m2!1sen!2sin!4v1793863653144!5m2!1sen!2sin";

const MAP_PLACE_URL =
  "https://www.google.com/maps/place/14%C2%B039'55.5%22N+75%C2%B033'26.0%22E/@14.6654256,75.5522003,16z/data=!4m4!3m3!8m2!3d14.6654256!4d75.5572214?hl=en";

export default function ContactPage() {
  return (
    <SiteShell pageClass="page-contact" effects="main">
      <section
        className="contact-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.68)), url('${HERO_IMAGE}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          clipPath: "polygon(0 0, 100% 0, 100% 92%, 50% 100%, 0 92%)",
          paddingBottom: "40px",
        }}
      >
        <div className="banner-overlay" style={{ background: "transparent" }}>
          <h1>
            Contact <span style={{ color: "#ff6600" }}>Us</span>
          </h1>
          <p>Get in touch with our team for your die casting requirements</p>
          <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>
            <Link href="/home" style={{ color: "#fff", textDecoration: "none" }}>
              Home
            </Link>{" "}
            / <span style={{ color: "#ff6600" }}>Contact Us</span>
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Start Your Project</h2>
            <p>
              Ready to bring your manufacturing vision to life? Get in touch with our experts and begin your die
              casting journey today.
            </p>
          </div>
          <div className="contact-wrapper">
            <div className="contact-form-container">
              <h3>Get Your Free Consultation</h3>
              <ContactForm />
            </div>
            <div className="contact-info-cards">
              <div className="info-card">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h4>Manufacturing Location</h4>
                <p>MH84+4V4, Kajari, Karnataka 581115</p>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h4>Phone &amp; Email</h4>
                <p>
                  Call: <strong>+91 7899961306</strong>
                </p>
                <p>
                  Email: <strong>sales@pighalitadhatu.com</strong>
                </p>
                <p>
                  Email: <strong>info@pighalitadhatu.com</strong>
                </p>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h4>Business Hours</h4>
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: 12:00 PM - 5:00 PM</p>
              </div>
              <div className="info-card" style={{ padding: 0, overflow: "hidden" }}>
                <iframe
                  title="Pighalitadhatu location on Google Maps"
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="300"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
                <a
                  href={MAP_PLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", padding: "12px 20px", color: "#ff6600", fontWeight: 600 }}
                >
                  <i className="fas fa-map-marker-alt"></i> Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}