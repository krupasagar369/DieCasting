import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { AnimatedStat } from "@/components/ui/AnimatedStat";

export const metadata: Metadata = {
  title: "PIGHALITADHATU_About Our Company",
  description:
    "Learn about Pighalitadhatu, a leading die casting foundry in Karnataka. Established in 2025, we specialize in aluminium, zinc, and magnesium die casting with precision and quality.",
  keywords:
    "die casting manufacturer, die casting foundry, die casting company Karnataka, about die casting, precision die casting, aluminium die casting company Bengaluru, die casting supplier India, OEM die casting supplier",
  authors: [{ name: "Pighalitadhatu" }],
  openGraph: {
    title: "About Pighalitadhatu - Expert Die Casting Manufacturer in Karnataka",
    description:
      "Discover Pighalitadhatu's journey as a modern die casting foundry offering quality aluminium, zinc, and magnesium die casting services in Karnataka, India.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <SiteShell pageClass="page-about" effects="about" fadeIn>
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">About Our Company</h1>
          <p className="hero-subtitle">Leading the investment die casting industry with precision, innovation and reliability.</p>
        </div>
      </section>
      <section className="overview-section section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Company Overview</h2>
            <div className="title-underline"></div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <p className="overview-text">
                Founded in 2025,
                <strong><Link href="/home" style={{ color: 'orange' }}>Pighalitadhatu</Link></strong>
                has rapidly evolved into a trusted name in investment die casting manufacturing, serving both
                domestic and global markets. Our unwavering commitment to quality, innovation, and customer
                satisfaction enables us to support a wide range of industries, including
                {" "}
                <strong>Automotive</strong>
                ,
                {" "}
                <strong>Heavy Engineering</strong>
                ,
                {" "}
                <strong>Aerospace</strong>
                ,
                {" "}
                <strong>Oil &amp; Gas</strong>
                ,
                {" "}
                <strong>Railways</strong>
                , and
                {" "}
                <strong>Energy</strong>
                .
              </p>
              <p className="overview-text">
                Backed by state-of-the-art facilities spanning over 20,000 square feet and a skilled team of 25+
                Technical Team of mechanical Eningeers and Metallurgists with 30+ years of engineers and
                technicians, we deliver high-precision components that meet the most stringent industry standards.
              </p>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="stats-grid">
                <div className="stat-card">
                  <AnimatedStat value="2025" />
                  <div className="stat-label">Founded</div>
                </div>
                <div className="stat-card">
                  <AnimatedStat value="25 +" />
                  <div className="stat-label">Engineers</div>
                </div>
                <div className="stat-card">
                  <AnimatedStat value="20K" />
                  <div className="stat-label">Sq. Feet Facility</div>
                </div>
                <div className="stat-card">
                  <AnimatedStat value="15 +" />
                  <div className="stat-label">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mv-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="mv-card">
                <div className="mv-icon"><i className="fas fa-bullseye"></i></div>
                <h3 className="mv-title">Our Mission</h3>
                <p className="mv-text">
                  To deliver world-class die casting solutions that exceed customer expectations through continuous
                  innovation, precision engineering, and unwavering commitment to quality.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="mv-card">
                <div className="mv-icon"><i className="fas fa-trophy"></i></div>
                <h3 className="mv-title">Our Vision</h3>
                <p className="mv-text">
                  To be the most trusted and innovative die casting manufacturer globally, setting industry benchmarks
                  for quality, sustainability, and technological advancement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-section section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Business Portfolio</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">Comprehensive investment die casting solutions for diverse industries</p>
          </div>
          <div className="row mb-5">
            <div className="col-lg-5 mb-4">
              <div className="portfolio-logo-container">
                <img src="/assets/Piglithadathu_Final_Logo_RAJ.png" alt="Pighalitadhatu Logo" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-7 mb-4">
              <h3 className="portfolio-heading">PIGHALITADHATU Innovative Solutions Private Limited</h3>
              <p className="tagline">&quot;Precision, Power, Prosperity&quot;</p>
              <p className="portfolio-text">
                PIGHALITADHATU Innovative Solutions Private Limited stands at the forefront of investment casting
                excellence, delivering precision-engineered components that power industries across the globe.
                Backed by state-of-the-art manufacturing capabilities and an unwavering commitment to quality, we
                transform molten metal into high-performance engineering solutions.
              </p>
              <p className="portfolio-text">
                Driven by innovation and operational excellence, we cater to diverse sectors with components that
                meet the most demanding technical and quality standards. Our name, derived from the Sanskrit term
                for “molten metal,” reflects both our deep-rooted heritage and our progressive vision—blending
                traditional strength with modern engineering to shape the future of manufacturing.
              </p>
            </div>
          </div>
          <div className="capabilities-section mb-5">
            <h3 className="sub-section-title text-center mb-4">Core Capabilities</h3>
            <div className="row">
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="capability-card h-100">
                  <i className="bi bi-fire capability-icon"></i>
                  <h4>Investment Die Casting</h4>
                  <p>
                    High-precision casting with complex geometry and superior surface finish using steel, stainless
                    steel, aluminum, and superalloys. Tolerance control: 0.1–0.5 mm.
                  </p>
                  <p>
                    <strong>Size:</strong>
                    {" "}
                    0.3 kg to 40 kg | Min thickness: 5mm
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="capability-card h-100">
                  <i className="bi bi-arrow-repeat capability-icon"></i>
                  <h4>Centrifugal Casting</h4>
                  <p>
                    Produces dense, defect-free cylindrical components by pouring molten metal into a rapidly rotating
                    mold ensuring high integrity.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="capability-card h-100">
                  <i className="bi bi-cpu capability-icon"></i>
                  <h4>CNC Machining</h4>
                  <ul className="capability-list">
                    <li>3-axis to 5-axis</li>
                    <li>High precision tolerances</li>
                    <li>Complex geometry production</li>
                    <li>Automation &amp; efficiency</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="capability-card h-100">
                  <i className="bi bi-lightbulb capability-icon"></i>
                  <h4>Reverse Engineering &amp; R&amp;D</h4>
                  <p>
                    In-house R&amp;D team focused on innovation, design optimization, and continuous improvement for
                    high-performance casting solutions.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="capability-card h-100">
                  <i className="bi bi-pencil-square capability-icon"></i>
                  <h4>CAD Designing &amp; Scanning</h4>
                  <p>
                    Advanced CAD tools and 3D scanning technologies to capture, analyze, and recreate complex components
                    with high accuracy.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="capability-card h-100">
                  <i className="bi bi-box-seam capability-icon"></i>
                  <h4>Prototype Building</h4>
                  <p>
                    End-to-end prototype development enabling quick conversion of CAD designs into functional models
                    with performance validation.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="capability-card h-100">
                  <i className="bi bi-gear-wide-connected capability-icon"></i>
                  <h4>Manufacturing &amp; Quality Control</h4>
                  <p>
                    Robust quality systems including process monitoring, dimensional inspection, and material validation
                    ensuring industry standards.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="capability-card h-100">
                  <i className="bi bi-tree capability-icon"></i>
                  <h4>Agricultural Product Manufacturing</h4>
                  <p>
                    Innovative agricultural solutions designed for durability, efficiency, and performance supporting
                    modern farming needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="industries-section mb-5">
            <h3 className="sub-section-title text-center mb-4">Industries We Serve</h3>
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="industry-item text-center">
                  <i className="fas fa-car fa-2x mb-2"></i>
                  {" "}
                  <span>Automotive</span>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="industry-item text-center">
                  <i className="fas fa-oil-can fa-2x mb-2"></i>
                  {" "}
                  <span>Oil &amp; Gas</span>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="industry-item text-center">
                  <i className="fas fa-cogs fa-2x mb-2"></i>
                  {" "}
                  <span>Industrial Equipment&apos;s</span>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="industry-item text-center">
                  <i className="fas fa-plane fa-2x mb-2"></i>
                  {" "}
                  <span>Aerospace &amp; Defense</span>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="industry-item text-center">
                  <i className="fas fa-train fa-2x mb-2"></i>
                  {" "}
                  <span>Railway Sector</span>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="industry-item text-center">
                  <i className="fas fa-industry fa-2x mb-2"></i>
                  {" "}
                  <span>Heavy Engineering</span>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="industry-item text-center">
                  <i className="fas fa-home fa-2x mb-2"></i>
                  {" "}
                  <span>Consumer Appliances</span>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="industry-item text-center">
                  <i className="fas fa-microchip fa-2x mb-2"></i>
                  {" "}
                  <span>Electronics &amp; Telecommunication</span>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="industry-item text-center">
                  <i className="fas fa-bolt fa-2x mb-2"></i>
                  {" "}
                  <span>Energy Sector</span>
                </div>
              </div>
            </div>
          </div>
          <div className="technical-section">
            <h3 className="sub-section-title">Technical Specifications</h3>
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="tech-card h-100">
                  <h4>
                    <i className="fas fa-industry"></i>
                    {" "}
                    Manufacturing Capacity
                  </h4>
                  <ul>
                    <li>
                      <strong>Production Capacity:</strong>
                      {" "}
                      80+ tons per month
                    </li>
                    <li>
                      <strong>Furnaces:</strong>
                      {" "}
                      100 kg &amp; 250 kg
                    </li>
                    <li>
                      <strong>Tolerance Levels:</strong>
                      {" "}
                      ±0.01 mm
                    </li>
                    <li>
                      <strong>Wall Thickness:</strong>
                      {" "}
                      2.5 mm
                    </li>
                    <li>
                      <strong>Max Part Weight:</strong>
                      {" "}
                      40 kg
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="tech-card h-100">
                  <h4>
                    <i className="fas fa-cubes"></i>
                    {" "}
                    Materials Expertise
                  </h4>
                  <ul>
                    <li>
                      <strong>Ferrous:</strong>
                      {" "}
                      All Stainless Steel
                    </li>
                    <li><strong>Chromium Steel</strong></li>
                    <li><strong>Tool Steel</strong></li>
                    <li><strong>Aluminium Alloys</strong></li>
                    <li><strong>Zinc Alloys</strong></li>
                    <li><strong>Magnesium Alloys</strong></li>
                    <li>
                      <strong>Surface Treatment:</strong>
                      {" "}
                      As per requirement
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="advantages-section mt-5">
            <h3 className="sub-section-title">Competitive Advantages</h3>
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="advantage-card">
                  <div className="advantage-icon">✓</div>
                  <h5>Precision Engineering</h5>
                  <p>Tolerance capabilities that exceed industry standards</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="advantage-card">
                  <div className="advantage-icon">✓</div>
                  <h5>Integrated Solutions</h5>
                  <p>End-to-end manufacturing under one roof</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="advantage-card">
                  <div className="advantage-icon">✓</div>
                  <h5>Speed to Market</h5>
                  <p>Rapid tooling and flexible production</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="advantage-card">
                  <div className="advantage-icon">✓</div>
                  <h5>Cost Optimization</h5>
                  <p>Value engineering without compromising quality</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="advantage-card">
                  <div className="advantage-icon">✓</div>
                  <h5>Technical Expertise</h5>
                  <p>Experienced metallurgists and engineers</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="advantage-card">
                  <div className="advantage-icon">✓</div>
                  <h5>Global Standards</h5>
                  <p>International quality and safety compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
