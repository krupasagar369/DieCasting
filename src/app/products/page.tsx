import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "PIGHALITADHATU_Our Products",
  description:
    "Explore die-cast and precision cast components from Pighalitadhatu for engineering, oil and gas, automotive, energy, hydraulic, auto electrical and other industries.",
};

/** Hero / strengths background photos (files in public/facility/) */
const BANNER_IMAGE = "/facility/Picture2.jpg";
const STRENGTHS_IMAGE = "/facility/Picture13.jpg";

/** Order of the industry cards on the page (slugs from src/data/industries.ts) */
const ORDER = [
  "aerospace",
  "oil-and-gas",
  "automotive",
  "energy",
  "hydraulic",
  "auto-electrical",
  "railway",
  "heavy-engineering",
  "consumer-appliances",
  "electronics-and-telecom",
  "industrial-equipment",
];

const STRENGTHS = [
  { icon: "fa-cogs", title: "Adaptability", text: "Custom designs and flexible batch sizes" },
  { icon: "fa-users", title: "Committed Workforce", text: "Skilled team behind every casting" },
  { icon: "fa-tools", title: "Technical Expertise", text: "In-house machining and quality testing" },
  { icon: "fa-bullseye", title: "Customer Focus", text: "Built around your drawings and deadlines" },
];

export default function ProductsPage() {
  const items = ORDER.map((slug) => industries.find((i) => i.slug === slug)).filter(
    (i): i is NonNullable<typeof i> => i !== undefined,
  );

  return (
    <SiteShell pageClass="page-products" effects="main">
      <section
        className="products-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${BANNER_IMAGE}')`,
        }}
      >
        <div className="container">
          <h1>
            Our <span>Products</span>
          </h1>
          <p>Precision cast components for the industries that keep the world moving</p>
          <p className="crumbs">
            <Link href="/home">Home</Link> / <span>Products</span>
          </p>
        </div>
      </section>

      <section className="products-intro">
        <div className="container">
          <h2>What We Manufacture</h2>
          <p>
            From flow control meters to electronics housings, Pighalitadhatu produces precision die-cast and investment
            cast components. Choose an industry to see the parts we supply.
          </p>
        </div>
      </section>

      <section className="products-list">
        <div className="container">
          <div className="row g-4">
            {items.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.slug}>
                <article className="product-group">
                  <div className="product-group-img">
                    <img src={item.heroImage.src} alt={item.heroImage.alt} loading="lazy" />
                    <span className="product-group-badge">
                      <i className={`fas fa-${item.badge.icon}`}></i> {item.badge.label}
                    </span>
                  </div>
                  <div className="product-group-body">
                    <p>{item.intro}</p>
                    <ul>
                      {item.products.items.slice(0, 4).map((p) => (
                        <li key={p.title}>
                          <i className="fas fa-check-circle"></i> {p.title}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/${item.slug}`} className="product-group-link">
                      View Details <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="products-strengths"
        style={{
          backgroundImage: `linear-gradient(rgba(13, 52, 110, 0.88), rgba(13, 52, 110, 0.88)), url('${STRENGTHS_IMAGE}')`,
        }}
      >
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2>Core Strengths</h2>
              <div className="row g-4">
                {STRENGTHS.map((s) => (
                  <div className="col-sm-6" key={s.title}>
                    <div className="strength-item">
                      <div className="strength-icon">
                        <i className={`fas ${s.icon}`}></i>
                      </div>
                      <div>
                        <h5>{s.title}</h5>
                        <p>{s.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              <h2>Our Commitment</h2>
              <div className="strength-item">
                <div className="strength-icon strength-icon-lg">
                  <i className="fas fa-handshake"></i>
                </div>
                <div>
                  <p>
                    We commit to timely deliveries, consistent quality and continuous improvement of our technical
                    expertise, for every customer.
                  </p>
                  <Link href="/about" className="strength-link">
                    Learn more <i className="fas fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products-cta">
        <div className="container">
          <h2>Can&apos;t find what you need?</h2>
          <p>Send us your drawing or sample. We develop custom components.</p>
          <Link href="/contact" className="products-cta-btn">
            Request a Quote <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}