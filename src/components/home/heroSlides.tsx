import type { ReactNode } from "react";
import { ButtonAnchor, ButtonLink } from "@/components/ui/ButtonLink";

export interface HeroSlide {
  src: string;
  alt: string;
  caption: ReactNode;
}

// Image URLs are the exact external URLs of the original home.html.
export const heroSlides: HeroSlide[] = [
  {
    src: "https://blog.transvalorusa.com/hubfs/AdobeStock_409750344.jpg",
    alt: "Precision Die Casting Components",
    caption: (
      <div className="carousel-caption-custom">
          <div className="container">
            <h1 className="display-3 fw-bold animate-slide-up text-orange">
              Investment Die Casting &amp;
              {" "}
              <span className="text-white">Foundry Pattern Excellence</span>
            </h1>
            <p className="lead mb-4 animate-slide-up-delay text-white">
              Leading manufacturer of Investment Casting, Foundry Patterns, and High-Performance Dies for
              Aerospace, Automotive &amp; Industrial Sectors
            </p>
            <div className="animate-slide-up-delay-2">
              <ButtonAnchor href="#products" variant="primary" size="lg" className="me-3">
                Explore Products
                {" "}
                <i className="fas fa-arrow-right ms-2"></i>
              </ButtonAnchor>
              {" "}
              <ButtonLink href="/contact" variant="outlineLight" size="lg">Contact Us</ButtonLink>
            </div>
          </div>
        </div>
    ),
  },
  {
    src: "https://www.investmentcastchina.com/wp-content/uploads/2021/07/Aluminum-Die-Casting.jpg",
    alt: "Aerospace Die Casting",
    caption: (
      <div className="carousel-caption-custom">
          <div className="container">
            <h1 className="display-3 fw-bold animate-slide-up text-white">
              General Engineering &amp;
              {" "}
              <span className="text-orange">Heavy Engineering innovation</span>
            </h1>
            <p className="lead mb-4 animate-slide-up-delay text-white">Where Innovation Meets Industrial Strength</p>
            <div className="animate-slide-up-delay-2">
              <ButtonAnchor href="#aerospace" variant="primary" size="lg" className="me-3">
                Engineering Solutions
                {" "}
                <i className="fas fa-arrow-right ms-2"></i>
              </ButtonAnchor>
              {" "}
              <ButtonLink href="/contact" variant="outlineLight" size="lg">Get Quote</ButtonLink>
            </div>
          </div>
        </div>
    ),
  },
  {
    src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&h=800&fit=crop",
    alt: "Automotive Die Casting",
    caption: (
      <div className="carousel-caption-custom">
          <div className="container">
            <h1 className="display-3 fw-bold animate-slide-up text-white">
              Automotive
              {" "}
              <span className="text-orange">innovation</span>
            </h1>
            <p className="lead mb-4 animate-slide-up-delay text-white">Scalable Investment Casting Solutions for the Evolving Automotive Industry</p>
            <div className="animate-slide-up-delay-2">
              <ButtonAnchor href="#automotive" variant="primary" size="lg" className="me-3">
                Automotive Products
                {" "}
                <i className="fas fa-arrow-right ms-2"></i>
              </ButtonAnchor>
              {" "}
              <ButtonLink href="/about" variant="outlineLight" size="lg">Learn More</ButtonLink>
            </div>
          </div>
        </div>
    ),
  },
  {
    src: "https://ik.imagekit.io/iq6dnzo5f/Oil%20&%20Gas%20Solutions.jpg",
    alt: "Industrial Die Casting",
    caption: (
      <div className="carousel-caption-custom">
          <div className="container">
            <h1 className="display-3 fw-bold animate-slide-up text-white">
              Oil &amp;
              {" "}
              <span className="text-orange">Gas Solutions</span>
            </h1>
            <p className="lead mb-4 animate-slide-up-delay text-white">
              Delivers high-performance investment cast components for the Oil &amp; Gas industry, engineered to
              withstand extreme conditions with superior reliability and precision
            </p>
            <div className="animate-slide-up-delay-2">
              <ButtonAnchor href="#about" variant="primary" size="lg" className="me-3">
                About Us
                {" "}
                <i className="fas fa-arrow-right ms-2"></i>
              </ButtonAnchor>
              {" "}
              <ButtonAnchor href="#contact" variant="outlineLight" size="lg">Request Consultation</ButtonAnchor>
            </div>
          </div>
        </div>
    ),
  },
    {
    src: "/facility/Hydraulic Flow Control.jpg",
    alt: "Hydraulic Flow Control Components",
    caption: (
      <div className="carousel-caption-custom">
        <div className="container">
          <h1 className="display-3 fw-bold animate-slide-up text-white">
            Hydraulic <span className="text-orange">Flow Control</span>
          </h1>
          <p className="lead mb-4 animate-slide-up-delay text-white">
            Precision cast flow control meters and fluid system components for reliable hydraulic performance
          </p>
          <div className="animate-slide-up-delay-2">
            <ButtonLink href="/hydraulic" variant="primary" size="lg" className="me-3">
              Hydraulic Products <i className="fas fa-arrow-right ms-2"></i>
            </ButtonLink>{" "}
            <ButtonLink href="/contact" variant="outlineLight" size="lg">
              Get Quote
            </ButtonLink>
          </div>
        </div>
      </div>
    ),
  },
  {
    src: "/facility/Auto Electrical Electronics & Connectors.jpg",
    alt: "Auto Electrical Electronics and Connectors",
    caption: (
      <div className="carousel-caption-custom">
        <div className="container">
          <h1 className="display-3 fw-bold animate-slide-up text-white">
            Auto Electrical <span className="text-orange">Electronics &amp; Connectors</span>
          </h1>
          <p className="lead mb-4 animate-slide-up-delay text-white">
            Die-cast housings and connector components built for heat dissipation and dependable performance
          </p>
          <div className="animate-slide-up-delay-2">
            <ButtonLink href="/auto-electrical" variant="primary" size="lg" className="me-3">
              Auto Electrical Products <i className="fas fa-arrow-right ms-2"></i>
            </ButtonLink>{" "}
            <ButtonLink href="/contact" variant="outlineLight" size="lg">
              Get Quote
            </ButtonLink>
          </div>
        </div>
      </div>
    ),
  },
];
