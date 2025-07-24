import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!document.getElementById("sw0k8zWg6nNPK7Hyq7-mt")) {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "sw0k8zWg6nNPK7Hyq7-mt";
      script.setAttribute("domain", "www.chatbase.co");
      document.body.appendChild(script);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://exilieen-full-stack.onrender.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("❌ Server did not return JSON.");
      }

      const data = await response.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      setStatus(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <h1 className="section-title">Get in Touch</h1>

        <div className="contact-content">
          <div className="contact-box">
            <h3>EXILIEEN SCIENTIFIC RESEARCH LLP</h3>
            <p>
              FLNO-G-2,PLNO-10,G.NO-44<br />
              BE BAJAJ HOS GURUKRUPA AP<br />
              AURANGABAD CITY, 431001, MAHARASHTRA
            </p>
            <br />
            <p>📞 011-9423008651</p>
            <p>✉️ deepakbornare@gmail.com</p>
          </div>

          <div className="contact-map">
            <h4>Our Location</h4>
            <iframe
              title="Exilieen Scientific Research LLP Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.750727637616!2d75.31550469999999!3d19.850497500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb99b6a8fcc2c1%3A0x828e80fa35facf01!2sExilieen%20Scientific%20Research%20LLP!5e0!3m2!1sen!2sin!4v1753331263333!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
            <p className="status-msg">{status}</p>
          </form>
        </div>

        {/* Chatbot Section (Visual Box, not actual widget) */}
        <div className="chatbot-box">
          <h3>Need Help Instantly?</h3>
          <p>Chat with our AI Assistant — just tap the chat icon below.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
