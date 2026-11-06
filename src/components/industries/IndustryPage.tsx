import { Fragment } from "react";
import Link from "next/link";
import type { IndustryData } from "@/types/industry";
import { SiteShell } from "@/components/layout/SiteShell";
import { CountUp } from "@/components/ui/CountUp";

/** Shared template of all industry pages (Aerospace, Automotive, Oil & Gas, ...). */
export function IndustryPage({ data }: { data: IndustryData }) {
  return (
    <SiteShell variant="industries" effects="industries" footerTagline={data.footerText}>
      <div className="breadcrumb-section">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/home">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Products/Services</a>
              </li>
              <li className="breadcrumb-item active">{data.breadcrumb}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="industry-hero">
        { }
        <img src={data.heroImage.src} alt={data.heroImage.alt} />
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <span className="hero-badge">
            <i className={`fas fa-${data.badge.icon} me-2`}></i>
            {data.badge.label}
          </span>
          <h1>
            {data.heading.map((part, i) =>
              typeof part === "string" ? <Fragment key={i}>{part}</Fragment> : <span key={i}>{part.highlight}</span>,
            )}
          </h1>
          <p>{data.intro}</p>
          <div className="hero-buttons">
            <Link href="/contact" className="btn-primary">
              Get a Quote <i className="fas fa-arrow-right ms-2"></i>
            </Link>
            <a href="#overview" className="btn-outline">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="overview" className="overview-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              { }
              <img src={data.overview.image.src} alt={data.overview.image.alt} className="overview-img" />
            </div>
            <div className="col-lg-6 overview-text">
              <h2>{data.overview.heading}</h2>
              {data.overview.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <ul className="feature-list">
                {data.overview.features.map((f) => (
                  <li key={f}>
                    <i className="fas fa-check-circle"></i> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">{data.products.title}</h2>
            <p className="text-muted mt-4">{data.products.subtitle}</p>
          </div>
          <div className="row g-4">
            {data.products.items.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.title}>
                <div className="product-card">
                  <div className="product-card-body">
                    <div className="product-card-icon">
                      <i className={`fas fa-${item.icon}`}></i>
                    </div>
                    <h5 className="product-card-title">{item.title}</h5>
                    <p className="product-card-text">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="row g-4">
            {data.stats.map((stat) => (
              <div className="col-lg-3 col-md-6" key={stat.label}>
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className={`fas fa-${stat.icon}`}></i>
                  </div>
                  <h3 className="stat-number">
                    {stat.target !== undefined ? (
                      <>
                        <CountUp target={stat.target} threshold={0.1} rootMargin="0px 0px -50px 0px" />
                        {stat.suffix}
                      </>
                    ) : (
                      stat.value
                    )}
                  </h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title" style={{ color: "var(--white)" }}>
              {data.why.title}
            </h2>
            <p className="mt-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              {data.why.subtitle}
            </p>
          </div>
          <div className="row g-4">
            {data.why.items.map((item) => (
              <div className="col-lg-4 col-md-6" key={item}>
                <div className="feature-item">
                  <i className="fas fa-check-circle feature-icon"></i>
                  <h5 className="feature-title">{item}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section text-center">
        <div className="container">
          <h2>{data.cta.title}</h2>
          <p>{data.cta.text}</p>
          <Link href="/contact" className="btn-dark-cta">
            {data.cta.button} <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
