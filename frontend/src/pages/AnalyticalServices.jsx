import React from "react";
import "./AnalyticalServices.css";

// Image imports
import img2 from "../assets/AnalyticalService/2.png";
import img3 from "../assets/AnalyticalService/3.png";
import img4 from "../assets/AnalyticalService/4.png";
import img5 from "../assets/AnalyticalService/5.png";
import img6 from "../assets/AnalyticalService/6.png";
import img7 from "../assets/AnalyticalService/7.png";
import img8 from "../assets/AnalyticalService/8.png";

const data = [
  {
    title: "Analytical Services Business",
    text: "A comprehensive plan to establish a leader in mandatory and regulatory analytical services across multiple industries. We'll ensure efficiency, affordability, and innovation in compliance testing.",
    image: null,
  },
  {
    title: "Business Planning & Registration",
    image: img2,
    items: [
      { number: 1, subtitle: "Define Business Objectives", text: "Set value proposition and target industries: food, agriculture, fertilizers, environment, energy." },
      { number: 2, subtitle: "Register Company", text: "Establish as LLP or Private Limited under Startup India and MSME schemes." },
      { number: 3, subtitle: "Obtain Licenses", text: "Secure FSSAI, NABL accreditation, CPCB, MoEFCC, ISO 17025 compliance." },
    ]
  },
  {
    title: "Laboratory Partnerships",
    image: img3,
    items: [
      { number: 1, subtitle: "Identify Labs", text: "Collaborate with NABL-accredited and regulatory-approved laboratories across India." },
      { number: 2, subtitle: "Negotiate Agreements", text: "Ensure priority processing, quality compliance, and cost efficiency." },
      { number: 3, subtitle: "Establish Network", text: "Create sample collection and logistics network for smooth operations." },
    ]
  },
  {
    title: "Digital Infrastructure & Technology",
    image: img4,
    features: [
      { icon: "🌐", subtitle: "Web Platform", text: "Develop for online booking, sample tracking, and digital report access." },
      { icon: "🤖", subtitle: "AI Integration", text: "Implement AI-based analytics for faster, precise testing results." },
      { icon: "📶", subtitle: "IoT Solutions", text: "Enable smart sample testing for remote quality assessments." },
    ]
  },
  {
    title: "Regulatory Compliance & Service Portfolio",
    image: img5,
    features: [
      { subtitle: "Compliance", text: "Adhere to national and international standards (FSSAI, BIS, FDA, WHO). Establish legal team for client guidance." },
      { subtitle: "Services", text: "Offer food safety, soil analysis, environmental assessment, water quality, and pharmaceutical compliance testing." },
    ]
  },
  {
    title: "Market Research & Partnerships",
    image: img6,
    features: [
      { subtitle: "Conduct Research", text: "Identify target industries and customer pain points." },
      { subtitle: "Form Alliances", text: "Partner with agriculture, food processing, and environmental agencies." },
      { subtitle: "Logistics Partnership", text: "Collaborate for seamless sample transportation." },
    ]
  },
  {
    title: "Marketing & Team Development",
    image: img7,
    features: [
      { subtitle: "Marketing Campaign", text: "Launch targeted digital marketing, SEO, and industry conference presence." },
      { subtitle: "Client Engagement", text: "Develop corporate strategy through outreach, partnerships, and referrals." },
      { subtitle: "Expert Recruitment", text: "Hire specialists in chemistry, microbiology, compliance, AI/ML, and customer service." },
    ]
  },
  {
    title: "Pilot Testing & Future Expansion",
    image: img8,
    items: [
      { number: 1, subtitle: "Pilot Project", text: "Run initial tests in selected regions with partner laboratories." },
      { number: 2, subtitle: "Quality Assurance", text: "Conduct validation tests and gather client feedback." },
      { number: 3, subtitle: "Expansion", text: "Upgrade to international compliance and explore funding opportunities." },
    ]
  },
];

const AnalyticalServices = () => {
  return (
    <div className="analytical-wrapper">
      {data.map((section, index) => (
        <div key={index} className="section">
          {section.image && index % 2 === 0 ? (
            <>
              <img src={section.image} alt="" className="section-img" />
              <div className="section-text">
                <h2>{section.title}</h2>
                {section.items ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item.number}>
                        <strong>{item.number}. {item.subtitle}:</strong> {item.text}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="features">
                    {section.features?.map((feat, i) => (
                      <div key={i} className="feature-card">
                        <h4>{feat.icon} {feat.subtitle}</h4>
                        <p>{feat.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="section-text">
                <h2>{section.title}</h2>
                {section.text && <p>{section.text}</p>}
                {section.items && (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item.number}>
                        <strong>{item.number}. {item.subtitle}:</strong> {item.text}
                      </li>
                    ))}
                  </ul>
                )}
                {section.features && (
                  <div className="features">
                    {section.features.map((feat, i) => (
                      <div key={i} className="feature-card">
                        <h4>{feat.subtitle}</h4>
                        <p>{feat.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {section.image && <img src={section.image} alt="" className="section-img" />}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default AnalyticalServices;
