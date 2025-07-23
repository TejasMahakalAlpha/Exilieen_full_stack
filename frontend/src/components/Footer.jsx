import React from "react";
import "./Footer.css";
import logo from "../assets/footer/logo.png";
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="CaWood Agriculture" className="footer-logo" />
          <p>
            NABL Accredited under QCI for Food & Water Testing. We help food
            manufacturers in product development, shelf life testing, and
            compliance.
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/feed/"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/contact" >Contact</Link>
          <Link to="/about/company">About Company</Link>
          <Link to="/certificate" >Certificate</Link>
         
        </div>

        <div className="footer-services">
         <Link to="/infrastructure">Infrastructure</Link>
                         <Link to="/testing">Testing</Link>
                         <Link to="/consultancy">Consultancy</Link>
                      <Link to="/research">Research</Link>
                         <Link to="/training">Training</Link>
        </div>

        <div className="footer-map">
          <h3>Find Us</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.615097937666!2d77.16217927512525!3d20.46502908103766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd0d7b15fd255ab%3A0xd7212a5576b3d2f0!2sKatepurna%20Wildlife%20Sanctuary!5e0!3m2!1sen!2sin!4v1718379193667!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>

      <div className="footer-contact">
        <div>
          <i className="fas fa-map-marker-alt"></i> FLNO-G-2,PLNO-10,G.NO-44
BE BAJAJ HOS GURUKRUPA AP
AURANGABAD
AURANGABAD CITY
AURANGABAD-431001
MAHARASHTRA
        </div>
        <div>
          <i className="fas fa-phone-alt"></i> 011-9423008651
        </div>
        <div>
          <i className="fas fa-envelope"></i> tejs.mahakal@gmail.com
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 Made with ❤️ by{" "}
          <a href="https://github.com/tejsmahakal" target="_blank" rel="noreferrer">
            <strong>Tejas Mahakal</strong>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
