/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaTiktok,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  const [socialLinks, setSocialLinks] = useState({
    instagram: "",
    whatsapp: "",
    facebook: "",
    tiktok: "",
  });

  const [notification, setNotification] = useState("");

  useEffect(() => {
    // Fetch social media links from API
    fetch("https://horchenafrica.pythonanywhere.com/api/social-media/")
      .then((response) => response.json())
      .then((data) => setSocialLinks(data))
      .catch((error) => console.error("Error fetching social links:", error));
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://horchenafrica.pythonanywhere.com/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setNotification("Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setNotification("An error occurred. Please try again.");
    }

    // Hide notification after 3 seconds
    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <section
      className="contact-section"
      id="contact"
      style={{ paddingTop: "120px" }}
    >
      <div className="contact-container" style={{ marginTop: "20px" }}>
        <h2 className="contact-title">Plan Your Safari Adventure</h2>
        <p className="contact-description">
          Ready to explore the wild? Let's make your dream safari a reality!
          Reach out to us for bookings and inquiries.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-input-group">
            <label htmlFor="name" className="contact-label">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="contact-input"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-input-group">
            <label htmlFor="phone" className="contact-label">
              Phone Number
            </label>
            <div className="contact-input-icon">
              <FaPhoneAlt className="icon" />
              <input
                type="tel"
                id="phone"
                name="phone"
                className="contact-input"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="contact-input-group">
            <label htmlFor="email" className="contact-label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="contact-input"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-input-group">
            <label htmlFor="message" className="contact-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="contact-textarea"
              placeholder="Tell us about your safari plans..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
            <span>Book Your Safari</span>
          </button>
        </form>

        {/* Notification */}
        {notification && <div className="notification">{notification}</div>}

        {/* Social Media Links */}
        <div className="social-links">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaWhatsapp />
          </a>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaFacebook />
          </a>
          <a
            href={socialLinks.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
