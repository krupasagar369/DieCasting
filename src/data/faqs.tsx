import type { ReactNode } from "react";

export interface FaqItem {
  id: string;
  number: string;
  question: string;
  /** plain text of the answer, used by the search box */
  text: string;
  answer: ReactNode;
}

export const faqItems: FaqItem[] = [
  {
    id: "faq1",
    number: "01",
    question: "What die casting services does PIGHALITADHATU INNOVATIVE SOLUTIONS offer?",
    text: "PIGHALITADHATU INNOVATIVE SOLUTIONS PRIVATE LIMITED specializes in high-precision die casting manufacturing for multiple industries. Our comprehensive services include: Aluminum & Zinc Die Casting: High-pressure die casting for complex geometries Precision CNC Machining: Post-casting machining for tight tolerances Surface Finishing: Powder coating, anodizing, and plating services Custom Tooling Design: In-house mold design and manufacturing Quality Inspection: Complete dimensional verification and testing We serve aerospace, automotive, oil & gas, energy, hydraulic, and auto electrical industries with ISO 9001:2015 certified processes.",
    answer: (
      <>
        <p>
          PIGHALITADHATU INNOVATIVE SOLUTIONS PRIVATE LIMITED specializes in high-precision die casting
          manufacturing for multiple industries. Our comprehensive services include:
        </p>
        <ul>
          <li>
            <strong>Aluminum &amp; Zinc Die Casting:</strong>
            {" "}
            High-pressure die casting for complex geometries
          </li>
          <li>
            <strong>Precision CNC Machining:</strong>
            {" "}
            Post-casting machining for tight tolerances
          </li>
          <li>
            <strong>Surface Finishing:</strong>
            {" "}
            Powder coating, anodizing, and plating services
          </li>
          <li>
            <strong>Custom Tooling Design:</strong>
            {" "}
            In-house mold design and manufacturing
          </li>
          <li>
            <strong>Quality Inspection:</strong>
            {" "}
            Complete dimensional verification and testing
          </li>
        </ul>
        <p>
          We serve aerospace, automotive, oil &amp; gas, energy, hydraulic, and auto electrical industries
          with ISO 9001:2015 certified processes.
        </p>
      </>
    ),
  },
  {
    id: "faq2",
    number: "02",
    question: "What industries does PIGHALITADHATU serve with die casting solutions?",
    text: "We serve diverse industries with specialized die casting solutions: Aerospace Precision aircraft components meeting stringent aviation standards Automotive Safety belt components and structural parts Oil & Gas Industrial valve systems and pressure components Energy Power distribution parts and electrical housings Hydraulic Flow control meters and fluid system components Auto Electrical Electronics housings and connectors Our 20,000 square feet state-of-the-art facility delivers components that meet the most stringent industry standards across all sectors.",
    answer: (
      <>
        <p>We serve diverse industries with specialized die casting solutions:</p>
        <div className="industry-grid">
          <div className="industry-card">
            <i className="fas fa-plane"></i>
            <h5>Aerospace</h5>
            <p>Precision aircraft components meeting stringent aviation standards</p>
          </div>
          <div className="industry-card">
            <i className="fas fa-car"></i>
            <h5>Automotive</h5>
            <p>Safety belt components and structural parts</p>
          </div>
          <div className="industry-card">
            <i className="fas fa-oil-can"></i>
            <h5>Oil &amp; Gas</h5>
            <p>Industrial valve systems and pressure components</p>
          </div>
          <div className="industry-card">
            <i className="fas fa-bolt"></i>
            <h5>Energy</h5>
            <p>Power distribution parts and electrical housings</p>
          </div>
          <div className="industry-card">
            <i className="fas fa-tint"></i>
            <h5>Hydraulic</h5>
            <p>Flow control meters and fluid system components</p>
          </div>
          <div className="industry-card">
            <i className="fas fa-plug"></i>
            <h5>Auto Electrical</h5>
            <p>Electronics housings and connectors</p>
          </div>
        </div>
        <p className="mt-3">
          Our 20,000 square feet state-of-the-art facility delivers components that meet the most stringent
          industry standards across all sectors.
        </p>
      </>
    ),
  },
  {
    id: "faq3",
    number: "03",
    question: "What is the typical lead time for custom die casting projects?",
    text: "Lead times at PIGHALITADHATU vary based on project complexity and requirements: 1 Design & Quotation 1-2 weeks for design review and detailed quotation 2 Tooling Development 4-8 weeks for mold design and manufacturing 3 Sample Production 1-2 weeks for first article inspection 4 Mass Production 2-3 weeks after tooling approval Our team of 100+ skilled engineers works efficiently to meet tight deadlines. Contact us with your specific requirements for an accurate project timeline.",
    answer: (
      <>
        <p>Lead times at PIGHALITADHATU vary based on project complexity and requirements:</p>
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-marker">1</div>
            <div className="timeline-content">
              <h6>Design &amp; Quotation</h6>
              <p>1-2 weeks for design review and detailed quotation</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">2</div>
            <div className="timeline-content">
              <h6>Tooling Development</h6>
              <p>4-8 weeks for mold design and manufacturing</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">3</div>
            <div className="timeline-content">
              <h6>Sample Production</h6>
              <p>1-2 weeks for first article inspection</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">4</div>
            <div className="timeline-content">
              <h6>Mass Production</h6>
              <p>2-3 weeks after tooling approval</p>
            </div>
          </div>
        </div>
        <p className="mt-3">
          Our team of 100+ skilled engineers works efficiently to meet tight deadlines. Contact us with your
          specific requirements for an accurate project timeline.
        </p>
      </>
    ),
  },
  {
    id: "faq4",
    number: "04",
    question: "What quality certifications does PIGHALITADHATU hold?",
    text: "PIGHALITADHATU INNOVATIVE SOLUTIONS is ISO 9001:2015 certified , ensuring comprehensive quality management throughout our manufacturing processes. Our Quality Assurance Framework: Rigorous inspection protocols at every production stage Dimensional verification using advanced CMM equipment Material testing and chemical composition analysis Complete traceability for all components Statistical process control for consistency First article inspection reports (FAIR) Our commitment to quality has enabled us to successfully complete 500+ projects across critical industries where precision and reliability are paramount.",
    answer: (
      <>
        <p>
          <strong>PIGHALITADHATU INNOVATIVE SOLUTIONS is ISO 9001:2015 certified</strong>
          , ensuring comprehensive quality management throughout our manufacturing processes.
        </p>
        <h6 className="mt-3 mb-3">Our Quality Assurance Framework:</h6>
        <div className="quality-features">
          <div className="quality-item">
            <i className="fas fa-check-circle"></i>
            {" "}
            <span>Rigorous inspection protocols at every production stage</span>
          </div>
          <div className="quality-item">
            <i className="fas fa-check-circle"></i>
            {" "}
            <span>Dimensional verification using advanced CMM equipment</span>
          </div>
          <div className="quality-item">
            <i className="fas fa-check-circle"></i>
            {" "}
            <span>Material testing and chemical composition analysis</span>
          </div>
          <div className="quality-item">
            <i className="fas fa-check-circle"></i>
            {" "}
            <span>Complete traceability for all components</span>
          </div>
          <div className="quality-item">
            <i className="fas fa-check-circle"></i>
            {" "}
            <span>Statistical process control for consistency</span>
          </div>
          <div className="quality-item">
            <i className="fas fa-check-circle"></i>
            {" "}
            <span>First article inspection reports (FAIR)</span>
          </div>
        </div>
        <p className="mt-3">
          Our commitment to quality has enabled us to successfully complete 500+ projects across critical
          industries where precision and reliability are paramount.
        </p>
      </>
    ),
  },
  {
    id: "faq5",
    number: "05",
    question: "What materials can PIGHALITADHATU use for die casting components?",
    text: "We work with various die casting alloys to meet diverse application requirements: Aluminum Alloys A380: Excellent fluidity, most commonly used for general purpose A383: Superior die filling, ideal for complex thin-walled parts ADC12: High strength and corrosion resistance Zinc Alloys Zamak 3: Excellent balance of strength and ductility Zamak 5: Higher strength with good creep resistance Magnesium Alloys Lightweight solutions for aerospace and automotive applications Material Selection Factors: Our engineering team considers strength requirements, weight constraints, corrosion resistance, thermal properties, electrical conductivity, cost considerations, and surface finish requirements to recommend the optimal material for your specific application.",
    answer: (
      <>
        <p>We work with various die casting alloys to meet diverse application requirements:</p>
        <div className="material-section">
          <h6>
            <i className="fas fa-cube"></i>
            {" "}
            Aluminum Alloys
          </h6>
          <ul>
            <li>
              <strong>A380:</strong>
              {" "}
              Excellent fluidity, most commonly used for general purpose
            </li>
            <li>
              <strong>A383:</strong>
              {" "}
              Superior die filling, ideal for complex thin-walled parts
            </li>
            <li>
              <strong>ADC12:</strong>
              {" "}
              High strength and corrosion resistance
            </li>
          </ul>
        </div>
        <div className="material-section">
          <h6>
            <i className="fas fa-cube"></i>
            {" "}
            Zinc Alloys
          </h6>
          <ul>
            <li>
              <strong>Zamak 3:</strong>
              {" "}
              Excellent balance of strength and ductility
            </li>
            <li>
              <strong>Zamak 5:</strong>
              {" "}
              Higher strength with good creep resistance
            </li>
          </ul>
        </div>
        <div className="material-section">
          <h6>
            <i className="fas fa-cube"></i>
            {" "}
            Magnesium Alloys
          </h6>
          <ul>
            <li>Lightweight solutions for aerospace and automotive applications</li>
          </ul>
        </div>
        <p className="mt-3">
          <strong>Material Selection Factors:</strong>
          {" "}
          Our engineering team considers strength requirements, weight constraints, corrosion resistance,
          thermal properties, electrical conductivity, cost considerations, and surface finish requirements to
          recommend the optimal material for your specific application.
        </p>
      </>
    ),
  },
  {
    id: "faq6",
    number: "06",
    question: "How does PIGHALITADHATU ensure precision in die casting manufacturing?",
    text: "Precision is at the core of everything we do at PIGHALITADHATU. Our multi-layered approach ensures consistent quality: Advanced Equipment State-of-the-art CNC machining centers and automated die casting machines with computerized controls Inspection Technology Coordinate Measuring Machines (CMM), optical comparators, and digital micrometers Process Control Statistical Process Control (SPC) for real-time monitoring and adjustment Skilled Team 100+ experienced engineers and technicians with expertise in precision manufacturing We maintain tight tolerances of ±0.05mm or better depending on part geometry, with comprehensive quality checks at every production stage to deliver high-precision components consistently.",
    answer: (
      <>
        <p>
          Precision is at the core of everything we do at PIGHALITADHATU. Our multi-layered approach ensures
          consistent quality:
        </p>
        <div className="precision-grid">
          <div className="precision-card">
            <div className="precision-icon"><i className="fas fa-cogs"></i></div>
            <h6>Advanced Equipment</h6>
            <p>State-of-the-art CNC machining centers and automated die casting machines with computerized controls</p>
          </div>
          <div className="precision-card">
            <div className="precision-icon"><i className="fas fa-ruler-combined"></i></div>
            <h6>Inspection Technology</h6>
            <p>Coordinate Measuring Machines (CMM), optical comparators, and digital micrometers</p>
          </div>
          <div className="precision-card">
            <div className="precision-icon"><i className="fas fa-chart-line"></i></div>
            <h6>Process Control</h6>
            <p>Statistical Process Control (SPC) for real-time monitoring and adjustment</p>
          </div>
          <div className="precision-card">
            <div className="precision-icon"><i className="fas fa-users"></i></div>
            <h6>Skilled Team</h6>
            <p>100+ experienced engineers and technicians with expertise in precision manufacturing</p>
          </div>
        </div>
        <p className="mt-3">
          We maintain tight tolerances of ±0.05mm or better depending on part geometry, with comprehensive
          quality checks at every production stage to deliver high-precision components consistently.
        </p>
      </>
    ),
  },
  {
    id: "faq7",
    number: "07",
    question: "Can PIGHALITADHATU handle both prototype and large-scale production?",
    text: "Yes, absolutely! PIGHALITADHATU INNOVATIVE SOLUTIONS accommodates projects of all scales with the same commitment to quality and precision. Rapid Prototyping Quick-turn prototype tooling for design validation Short-run production for testing and market evaluation Design iteration support with engineering feedback Material and process optimization recommendations High-Volume Production Large-scale manufacturing with consistent quality Automated production systems for efficiency Inventory management and just-in-time delivery Cost optimization for volume orders Our 20,000 square feet facility is equipped with flexible manufacturing systems that seamlessly transition from low-volume custom orders to high-volume production runs. With 500+ completed projects, we have the experience to scale according to your needs.",
    answer: (
      <>
        <p>
          <strong>Yes, absolutely!</strong>
          {" "}
          PIGHALITADHATU INNOVATIVE SOLUTIONS accommodates projects of all scales with the same commitment to
          quality and precision.
        </p>
        <div className="production-types">
          <div className="production-type">
            <h6>
              <i className="fas fa-flask"></i>
              {" "}
              Rapid Prototyping
            </h6>
            <ul>
              <li>Quick-turn prototype tooling for design validation</li>
              <li>Short-run production for testing and market evaluation</li>
              <li>Design iteration support with engineering feedback</li>
              <li>Material and process optimization recommendations</li>
            </ul>
          </div>
          <div className="production-type">
            <h6>
              <i className="fas fa-industry"></i>
              {" "}
              High-Volume Production
            </h6>
            <ul>
              <li>Large-scale manufacturing with consistent quality</li>
              <li>Automated production systems for efficiency</li>
              <li>Inventory management and just-in-time delivery</li>
              <li>Cost optimization for volume orders</li>
            </ul>
          </div>
        </div>
        <p className="mt-3">
          Our 20,000 square feet facility is equipped with flexible manufacturing systems that seamlessly
          transition from low-volume custom orders to high-volume production runs. With 500+ completed
          projects, we have the experience to scale according to your needs.
        </p>
      </>
    ),
  },
  {
    id: "faq8",
    number: "08",
    question: "What makes PIGHALITADHATU different from other die casting manufacturers?",
    text: "Founded in 2024, PIGHALITADHATU INNOVATIVE SOLUTIONS combines cutting-edge technology with innovative approaches to deliver exceptional die casting solutions. Our Competitive Advantages: 500+ Successful Projects Proven track record across diverse industries and applications Complete In-House Capabilities From tooling design to finishing - everything under one roof Customer-Centric Approach On-time delivery, responsive communication, and dedicated support Experience the PIGHALITADHATU difference! Partner with us for innovative die casting solutions that meet your exact specifications.",
    answer: (
      <>
        <p>
          Founded in 2024, PIGHALITADHATU INNOVATIVE SOLUTIONS combines cutting-edge technology with
          innovative approaches to deliver exceptional die casting solutions.
        </p>
        <h6 className="mt-3 mb-3">Our Competitive Advantages:</h6>
        <div className="advantage-list">
          <div className="advantage-item">
            <div className="advantage-icon"><i className="fas fa-project-diagram"></i></div>
            <div className="advantage-content">
              <h6>500+ Successful Projects</h6>
              <p>Proven track record across diverse industries and applications</p>
            </div>
          </div>
          <div className="advantage-item">
            <div className="advantage-icon"><i className="fas fa-tools"></i></div>
            <div className="advantage-content">
              <h6>Complete In-House Capabilities</h6>
              <p>From tooling design to finishing - everything under one roof</p>
            </div>
          </div>
          <div className="advantage-item">
            <div className="advantage-icon"><i className="fas fa-handshake"></i></div>
            <div className="advantage-content">
              <h6>Customer-Centric Approach</h6>
              <p>On-time delivery, responsive communication, and dedicated support</p>
            </div>
          </div>
        </div>
        <div className="cta-box mt-4">
          <p>
            <strong>Experience the PIGHALITADHATU difference!</strong>
            {" "}
            Partner with us for innovative die casting solutions that meet your exact specifications.
          </p>
        </div>
      </>
    ),
  },
];
