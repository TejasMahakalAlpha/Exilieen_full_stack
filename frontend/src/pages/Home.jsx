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
      {/* Hero Section */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <p>We are AgriTech Startup by DPIIT</p>
          <h1>Exilieen Scientific Research LLP</h1>
          <p>Innovating Tomorrow Through Science</p>
          <button className="hero-btn" onClick={() => navigate("/AboutCompany")}>
            KNOW MORE
          </button>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Why Choose Us Section */}
      <section className="services">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>INNOVATIVE SOLUTIONS</h3>
            <p>We utilize cutting-edge technology and scientific research to provide advanced, reliable services.</p>
          </div>
          <div className="service-card">
            <h3>INDUSTRY EXPERTISE</h3>
            <p>Our team brings deep expertise across agriculture, food safety, environment, and compliance sectors.</p>
          </div>
          <div className="service-card">
            <h3>CLIENT-CENTERED APPROACH</h3>
            <p>We tailor our services to each client's specific needs, ensuring quality and satisfaction at every step.</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-section">
        <div className="vision-content">
          <h2 className="section-title">Our Vision & Mission</h2>
          <p><strong>Vision:</strong> To be a global leader in scientific research and analytical services, driving sustainable development and food security.</p>
          <p><strong>Mission:</strong> Empower industries through reliable testing, expert consulting, and continuous innovation, while upholding excellence, integrity, and environmental stewardship.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
