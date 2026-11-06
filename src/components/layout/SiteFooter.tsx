import Link from "next/link";
import { BRAND, SOCIAL_ICONS } from "@/data/site";
import type { ShellVariant } from "@/types";

interface FooterProps {
  variant: ShellVariant;
  /** industry pages customise the one-line company blurb */
  tagline?: string;
}

const MAIN_TEXT =
  "Leading manufacturer of precision die-cast components for aerospace, automotive, and industrial applications.";

function Brand() {
  return (
    <a className="navbar-brand" href="#">
      { }
      <img src={BRAND.logo} alt="Company Logo" className="companyfl" />
      <div className="brand-text-container">
        <span className="brand-text">{BRAND.name}</span>
        <p className="QUT">{BRAND.legalName}</p>
        <p className="gre">{BRAND.motto}</p>
      </div>
    </a>
  );
}

function Social({ className }: { className: string }) {
  return (
    <>
      {SOCIAL_ICONS.map((icon) => (
        <a key={icon} href="#" className={className} aria-label={icon.split(" ")[1]?.replace("fa-", "")}>
          <i className={icon}></i>
        </a>
      ))}
    </>
  );
}

export function SiteFooter({ variant, tagline }: FooterProps) {
  const isMain = variant === "main";
  return (
    <footer className={isMain ? "footer py-5" : "footer"}>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <Brand />
            <p className={isMain ? "footer-text" : "footer-text mt-2"}>{tagline ?? MAIN_TEXT}</p>
            <div className={isMain ? "social-links-footer mt-3" : "social-links-footer"}>
              <Social className="social-icon-footer" />
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <Link href="/about">About Us</Link>
              </li>
                <Link href="/products">Products</Link>
              <li>
                <Link href="/faqs">FAQs</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Industries</h5>
            {isMain ? (
              <ul className="footer-links">
                <li>
                  <a href="#aerospace">Aerospace</a>
                </li>
                <li>
                  <a href="#automotive">Automotive</a>
                </li>
                <li>
                  <a href="#oil-gas">Oil &amp; Gas</a>
                </li>
                <li>
                  <a href="#energy">Energy</a>
                </li>
              </ul>
            ) : (
              <ul className="footer-links">
                <li>
                  <Link href="/automotive">Automotive</Link>
                </li>
                <li>
                  <Link href="/aerospace">Aerospace &amp; Defense</Link>
                </li>
                <li>
                  <Link href="/oil-and-gas">Oil &amp; Gas</Link>
                </li>
                <li>
                  <Link href="/energy">Energy</Link>
                </li>
              </ul>
            )}
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Contact Us</h5>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-map-marker-alt"></i>{" "}
                {isMain ? "MH84+4V4, Kajari, Karnataka 581115" : "MH84+4V4, Kajari, Karnataka 581115"}
              </li>
              <li>
                <i className="fas fa-phone-alt"></i> {isMain ? "+91 7899961306" : "+91 7899961306"}
              </li>
              <li>
                <i className="fas fa-envelope"></i> {isMain ? "sales@pighalitadhatu.com" : "sales@pighalitadhatu.com"}
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider mt-5 mb-4" />

        <div className="row">
          <div className="col-md-12 text-center">
            <p className="footer-copyright mb-0">
              &copy; 2024 {isMain ? "Die Casting Pro" : "Pighalitadhatu Innovative Solutions Pvt. Ltd."}. All rights
              reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
