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
      const response = await fetch(
        "https://horchenafrica.pythonanywhere.com/api/contact/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

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
      id="contact"
      style={{
        paddingTop: "120px",
        backgroundColor: "#1a1a1a", // Dark background
        color: "#f0f0f0", // Light text
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          marginTop: "15rem", // Adjusted margin-top
          padding: "20px",
          backgroundColor: "#2a2a2a", // Slightly lighter dark container
          borderRadius: "10px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "20px",
            background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "fadeIn 2s ease-in-out", // Animation
          }}
        >
          Plan Your Safari Adventure
        </h2>
        <p
          style={{
            fontSize: "2rem",
            marginBottom: "30px",
            color: "#e0e0e0",
            animation: "slideIn 1.5s ease-in-out", // Animation
          }}
        >
          Ready to explore the wild? Let's make your dream safari a reality!
          Reach out to us for bookings and inquiries.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label htmlFor="name" style={{ color: "#f0f0f0" }}>
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #444",
                backgroundColor: "#333",
                color: "#f0f0f0",
                outline: "none",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)", // Glowing effect
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label htmlFor="phone" style={{ color: "#f0f0f0" }}>
              Phone Number
            </label>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FaPhoneAlt style={{ color: "#f0f0f0" }} />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #444",
                  backgroundColor: "#333",
                  color: "#f0f0f0",
                  outline: "none",
                  boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)", // Glowing effect
                }}
              />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label htmlFor="email" style={{ color: "#f0f0f0" }}>
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #444",
                backgroundColor: "#333",
                color: "#f0f0f0",
                outline: "none",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)", // Glowing effect
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label htmlFor="message" style={{ color: "#f0f0f0" }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your safari plans..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #444",
                backgroundColor: "#333",
                color: "#f0f0f0",
                outline: "none",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)", // Glowing effect
              }}
            ></textarea>
          </div>

          <button
            type="submit"
            style={{
              padding: "8px 16px", // Smaller button
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#4CAF50",
              width:"40%",
              alignSelf:"center",
              color: "#ffffff",
              cursor: "pointer",
              fontSize: "1.2rem",
              boxShadow: "0 0 10px rgba(76, 175, 80, 0.5)", // Glowing effect
              transition: "transform 0.2s, box-shadow 0.2s", // Hover effect
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 0 15px rgba(76, 175, 80, 0.8)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 0 10px rgba(76, 175, 80, 0.5)";
            }}
          >
            <span>Book Your Safari</span>
          </button>
        </form>

        {/* Notification */}
        {notification && (
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "#ffffff",
              borderRadius: "5px",
              textAlign: "center",
              animation: "fadeIn 0.5s ease-in-out", // Animation
            }}
          >
            {notification}
          </div>
        )}

        {/* Social Media Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#f0f0f0",
              fontSize: "1.5rem",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <FaInstagram />
          </a>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#f0f0f0",
              fontSize: "1.5rem",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <FaWhatsapp />
          </a>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#f0f0f0",
              fontSize: "1.5rem",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <FaFacebook />
          </a>
          <a
            href={socialLinks.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#f0f0f0",
              fontSize: "1.5rem",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <FaTiktok />
          </a>
        </div>
      </div>

      {/* Keyframes for animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideIn {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
