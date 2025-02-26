/* eslint-disable react/no-unescaped-entities */
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaTiktok,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Plan Your Safari Adventure</h2>

        <p className="contact-description">
          Ready to explore the wild? Let's make your dream safari a reality!
          Reach out to us for bookings and inquiries.
        </p>

        <form className="contact-form">
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
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
            <span>Book Your Safari</span>
          </button>
        </form>

        {/* Social Media Links */}
        <div className="social-links">
          
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaFacebook />
          </a>
          <a
            href="https://tiktok.com"
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
