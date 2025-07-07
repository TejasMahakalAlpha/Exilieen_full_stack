import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import heroVideo from "../assets/home/hero.mp4";
import lab1 from "../assets/home/lab1.jpg";
import lab2 from "../assets/home/lab2.jpg";
import lab3 from "../assets/home/lab3.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <h1>Exilieen Scientific Research LLP</h1>
          <p>Innovating Tomorrow Through Science</p>
          <button className="hero-btn" onClick={() => navigate("/AboutCompany")}>
            KNOW MORE
          </button>
        </div>
      </section>

      <section className="services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src={lab1} alt="Consultancy" />
            <h3>CONSULTANCY</h3>
            <p>Expert guidance on food safety, nutrition labeling, lab setup & certifications.</p>
          </div>

          <div className="service-card">
            <img src={lab2} alt="Testing" />
            <h3>TESTING</h3>
            <p>Comprehensive testing for food, water, soil, and shelf life solutions.</p>
          </div>

          <div className="service-card">
            <img src={lab3} alt="Training" />
            <h3>TRAINING</h3>
            <p>Personalized sessions to build knowledge in standards, QA/QC, and audits.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
