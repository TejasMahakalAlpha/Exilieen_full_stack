import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import Certificate from './components/Certificate';
import Whatsapp from "./components/Whatsapp";

import Home from './pages/Home';
import AboutCompany from './pages/AboutCompany';
import Experts from './pages/Experts';
import Contact from './pages/Contact';
import Consultancy from './pages/Consultancy';
import Testing from './pages/Testing';
import Infrastructure from './pages/Infrastructure';
import Training from './pages/Training';
import Research from './pages/Research';

import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about/company" element={<AboutCompany />} />
        <Route path="/about/experts" element={<Experts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/aboutcompany" element={<AboutCompany />} />
        <Route path="/Consultancy" element={<Consultancy/>} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/research" element={<Research />} />
        <Route path="/training" element={<Training />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <Router>
      <ScrollToTop /> {/* ✅ Automatically scroll to top on route change */}
      <Header />
      <main style={{ padding: '20px' }}>
        <AnimatedRoutes />
      </main>
      <Footer />
      <Whatsapp />

      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: 'orange',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.05s ease-out',
          zIndex: 9999,
        }}
      ></div>
    </Router>
  );
}

export default App;
