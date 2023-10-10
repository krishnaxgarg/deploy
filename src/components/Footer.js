// Footer.js
import React, { useState } from "react";
import tornImage from "../assets/torn2.png";
import "../styles/Footer.css";
import ContactForm from "./ContactForm"; // Import the ContactForm component
import SocialHandles from "./SocialHandles"; // Import the SocialHandles component
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Footer = () => {
  const [showForm, setShowForm] = useState(false);

  const handleInquiryClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <div
      className="footer aos-init aos-animate"
      data-aos="fade-up"
      data-aos-duration="1200"
      style={{ backgroundImage: `url(${tornImage})` }}
      id="connect"
    >
      <h2>Let's Work Together!</h2>
      <button
        className="inquiry-button aos-init aos-animate"
        data-aos="fade-left"
        data-aos-duration="1200"
        onClick={handleInquiryClick}
      >
        Make an Inquiry
      </button>
      {showForm && <ContactForm onClose={handleClose} />}
      <div className="social-handles-fixed">
        <SocialHandles />
      </div>
    </div>
  );
};

export default Footer;
