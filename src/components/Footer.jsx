/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="section footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo">
              Horchen Africa
            </Link>

            <p className="footer-text">
              Explore Africa’s breathtaking landscapes and wildlife with our
              immersive safari experiences. Discover the wonders of nature with
              Horchen Africa.
            </p>

            <ul className="social-list">
              <li>
                <a
                  href="https://www.facebook.com/horchenafrica"
                  className="social-link"
                  style={{ color: "#1877F2", fontSize: "24px" }}
                >
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/horchenafrica"
                  className="social-link"
                  style={{ color: "#1DA1F2", fontSize: "24px" }}
                >
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/horchenafrica"
                  className="social-link"
                  style={{ color: "#E4405F", fontSize: "24px" }}
                >
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/horchenafrica"
                  className="social-link"
                  style={{ color: "#0077B5", fontSize: "24px" }}
                >
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-list">
            <p className="footer-list-title">Get in Touch</p>
            <p className="footer-text">
              Plan your next adventure with us. Experience luxury, wildlife, and
              nature like never before. Let’s make your dream safari a reality.
            </p>

            <Link
              to="/contact"
              className="btn"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="span">Contact Us</span>
              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            Copyright &copy; {new Date().getFullYear()} Horchen Africa. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
