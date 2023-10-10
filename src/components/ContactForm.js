import React, { useState, useEffect } from "react";
import Draggable from "react-draggable"; // Import Draggable
import "../styles/ContactForm.css"; // Import the CSS file

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" }); // Reset form fields
      onClose(); // Close the contact form
    }, 1500);
  };

  return (
    <Draggable>
      <div className="contact-form">
        {!submitted ? (
          <>
            <h4>Get in Touch</h4>

            <div className="form-group">
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message"></label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
            <button className="close-button" onClick={onClose}>
              Close
            </button>
          </>
        ) : (
          <div className="thank-you-message">
            <h3>Thank You, I will get back to you!</h3>
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default ContactForm;
