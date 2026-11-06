import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CountUp } from "@/components/ui/CountUp";

export const metadata: Metadata = {
  title: "PIGHALITADHATU_Home",
  description:
    "Pighalitadhatu offers expert die casting services in Karnataka, India. Specializing in aluminium die casting, high pressure die casting, and custom die casting parts. Get a quote today for precision die casting solutions.",
  keywords:
    "die casting company, die casting services, aluminium die casting, high pressure die casting, low pressure die casting, precision die casting, die casting manufacturer, die casting foundry, pressure die casting, custom die casting, die casting company in Karnataka, die casting company near me, aluminium die casting company in Bengaluru, non-ferrous die casting, zinc die casting, magnesium die casting, gravity die casting, die casting parts, die casting supplier India",
  authors: [{ name: "Pighalitadhatu" }],
};

export default function HomePage() {
  return (
    <SiteShell effects="main">
      <HeroCarousel />
      <section id="about" className="about-section py-5">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="section-title mb-4 fade-in">About Our Company</h2>
              <p className="lead text-muted fade-in-delay">
                Pighalitadhatu is a leading investment die casting company based in Karnataka, India, and a proud
                part of Pioneer Business Solutions. We specialize in delivering high-quality, precision-engineered
                casting solutions to a wide range of industries. With a strong commitment to excellence, we offer
                advanced capabilities in investment casting, shell casting, and customized die casting solutions,
                tailored to meet diverse and complex engineering requirements. Our focus on innovation, quality, and
                customer satisfaction enables us to consistently deliver reliable and high-performance components.
              </p>
              <br />
              <p className="lead text-muted fade-in-delay">
                At Pighalitadhatu, we combine modern manufacturing practices with deep industry expertise to
                transform molten metal into precision components that drive industrial growth and efficiency.
              </p>
              <br />
              <p className="lead text-muted fade-in-delay">
                We understand that every project is different. That is why we offer complete services from design
                and tooling to finishing and delivery. Get a quote today and experience quality die casting services
                that make a real difference to your business.
              </p>
              <ButtonLink href="/about" variant="primary" size="lg" className="mt-3 fade-in-delay-2">
                Learn More About Us
                {" "}
                <i className="fas fa-arrow-right ms-2"></i>
              </ButtonLink>
            </div>
          </div>
          <div className="row g-4 mt-5">
            <div className="col-lg-3 col-md-6">
              <div className="stat-card">
                <div className="stat-icon"><i className="fas fa-industry"></i></div>
                <CountUp as="h3" className="stat-number" target={20000} />
                <p className="stat-label">sq ft Advanced Facility</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-card">
                <div className="stat-icon"><i className="fas fa-award"></i></div>
                <h3 className="stat-number">Innovation</h3>
                <p className="stat-label">Trusted Excellence</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-card">
                <div className="stat-icon"><i className="fas fa-users"></i></div>
                <h3 className="stat-number">
                  <CountUp target={100} />
                  +
                </h3>
                <p className="stat-label">Engineers Expert Team</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-card">
                <div className="stat-icon"><i className="fas fa-chart-line"></i></div>
                <h3 className="stat-number">
                  <CountUp target={10000} />
                  +
                </h3>
                <p className="stat-label">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="industries" className="industries-section py-5">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="section-title mb-4">Industries We Serve</h2>
              <p className="lead text-muted">Delivering precision components across multiple high-performance sectors</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="industry-card">
                <div className="industry-icon"><i className="fas fa-plane" style={{ color: '#5b8fb9' }}></i></div>
                <h3 className="industry-title">Aerospace</h3>
                <p className="industry-description">Precision components for aerospace applications</p>
                <a href="#" className="industry-link"><i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="industry-card">
                <div className="industry-icon"><i className="fas fa-oil-can" style={{ color: '#4a90e2' }}></i></div>
                <h3 className="industry-title">Oil &amp; Gas</h3>
                <p className="industry-description">Precision components for oil &amp; gas applications</p>
                <a href="#" className="industry-link"><i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="industry-card">
                <div className="industry-icon"><i className="fas fa-car" style={{ color: '#e74c3c' }}></i></div>
                <h3 className="industry-title">Automotive</h3>
                <p className="industry-description">Precision components for automotive applications</p>
                <a href="#" className="industry-link"><i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="industry-card">
                <div className="industry-icon"><i className="fas fa-bolt" style={{ color: '#f39c12' }}></i></div>
                <h3 className="industry-title">Energy</h3>
                <p className="industry-description">Precision components for energy applications</p>
                <a href="#" className="industry-link"><i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="industry-card">
                <div className="industry-icon"><i className="fas fa-tint" style={{ color: '#3498db' }}></i></div>
                <h3 className="industry-title">Hydraulic</h3>
                <p className="industry-description">Precision components for hydraulic applications</p>
                <a href="#" className="industry-link"><i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="industry-card">
                <div className="industry-icon"><i className="fas fa-microchip" style={{ color: '#9b59b6' }}></i></div>
                <h3 className="industry-title">Electronics</h3>
                <p className="industry-description">Precision components for electronics applications</p>
                <a href="#" className="industry-link"><i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="why-choose" className="why-choose-section py-5">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="section-title text-white mb-4">Why Choose Us</h2>
              <p className="lead text-white-50">Experience the difference of working with industry leaders</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="feature-item">
                <i className="fas fa-check-circle feature-icon"></i>
                <h5 className="feature-title">Unmatched precision and quality control</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-item">
                <i className="fas fa-check-circle feature-icon"></i>
                <h5 className="feature-title">ISO 9001:2015 certified manufacturing</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-item">
                <i className="fas fa-check-circle feature-icon"></i>
                <h5 className="feature-title">Advanced automation and robotics</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-item">
                <i className="fas fa-check-circle feature-icon"></i>
                <h5 className="feature-title">Rapid prototyping capabilities</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-item">
                <i className="fas fa-check-circle feature-icon"></i>
                <h5 className="feature-title">Global delivery and support</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-item">
                <i className="fas fa-check-circle feature-icon"></i>
                <h5 className="feature-title">Competitive pricing and fast turnaround</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold text-white mb-4">Ready to Start Your Project?</h2>
              <p className="lead text-white mb-4">Get in touch with our team to discuss your die casting requirements</p>
              <ButtonLink href="/contact" variant="dark" size="lg">
                Contact Us Today
                {" "}
                <i className="fas fa-arrow-right ms-2"></i>
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
