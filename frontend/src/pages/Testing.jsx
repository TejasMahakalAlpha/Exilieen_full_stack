import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Testing.css";
import testing from "../assets/testing/testing.jpg";
import { FaClipboardList, FaHandshake, FaRegClock, FaUserAlt } from "react-icons/fa";

const Testing = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const facilities = [
    "Soil Analysis.",
    "Irrigation Water Analysis.",
    "Plant & Leaf Analysis.",
    "Fertilizer (Compost & Water Soluble) Analysis.",
    "Drinking Water Analysis. (Portable Water)",
    "Food Analysis.",
    "Microbiological Sample Analysis. (Food Sample)",
    "Industrial Water and Waste Water Analysis.",
    "Microbiological Sample Analysis. (Water And Waste Water)",
    "Ambient Air and Stack Monitoring Analysis.",
    "Pesticide Detection.",
    "Polymer Sample Analysis.",
    "Pharmaceutical Sample Analysis.",
    "GMO Analysis.",
    "Heavy & Toxic Metal Analysis.",
    "Other Tailor made Sample Analysis."
  ];

  return (
    <div className="testing-section">
      <div className="breadcrumb" data-aos="fade-in">
        <span>Home &gt; Services &gt; Testing Facilities</span>
      </div>

      <div className="testing-container">
        <h1 className="section-title" data-aos="fade-up">Testing Facilities</h1>

        <div className="facilities-wrapper">
          <div className="facilities-left" data-aos="fade-right">
            <h2>Analytical Facilities</h2>
            <ul className="facility-list">
              {facilities.map((item, index) => (
                <li key={index}>
                  <span className="tick">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="facilities-right" data-aos="fade-left">
            <img src={testing} alt="Testing Facilities" />
          </div>
        </div>

        <p className="note" data-aos="fade-up">
          <strong>NOTE:</strong> All Parameters are <u>not</u> included under laboratory NABL approved scope.
          For MIT CARS approved NABL parameter scope, please check the <a href="#">link</a>.
        </p>

        <div className="consultancy-stats" data-aos="fade-up">
          <div className="stat-item">
            <span className="stat-number">14</span>
            <div className="stat-label">
              <FaClipboardList className="stat-icon" />
              <div>PROJECTS COMPLETED</div>
            </div>
          </div>

          <div className="stat-item">
            <span className="stat-number">4789</span>
            <div className="stat-label">
              <FaHandshake className="stat-icon" />
              <div>HAPPY CLIENTS</div>
            </div>
          </div>

          <div className="stat-item">
            <span className="stat-number">0 lac</span>
            <div className="stat-label">
              <FaRegClock className="stat-icon" />
              <div>SOIL HEALTH CARD Distributed</div>
            </div>
          </div>

          <div className="stat-item">
            <span className="stat-number">13</span>
            <div className="stat-label">
              <FaUserAlt className="stat-icon" />
              <div>OUR EXPERTS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testing;
