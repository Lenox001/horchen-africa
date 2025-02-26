import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo-Horchen.png"; // Adjust extension if needed


const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "active" : ""}`}>
      <div className="container">
        <Link
          to="/"
          className="logo"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <img
            src={Logo}
            alt="Horchen Africa Logo"
            style={{ width: "100px", height: "100px" }} // Increased size
          />
          Horchen Africa
        </Link>

        {/* Hamburger Button (Hidden when menu opens) */}
        <button
          className={`nav-open-btn ${isNavOpen ? "hidden" : ""}`}
          onClick={() => setIsNavOpen(true)}
          aria-label="Open menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Side Navbar */}
        <nav className={`navbar ${isNavOpen ? "active" : ""}`}>
          {/* Close Button (X) */}
          <button
            className="nav-close-btn"
            onClick={() => setIsNavOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>

          <ul className="navbar-list">
            <li>
              <Link
                to="/"
                className="navbar-link"
                onClick={() => setIsNavOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/destinations"
                className="navbar-link"
                onClick={() => setIsNavOpen(false)}
              >
                Destinations
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="navbar-link"
                onClick={() => setIsNavOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="navbar-link"
                onClick={() => setIsNavOpen(false)}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="navbar-link"
                onClick={() => setIsNavOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Overlay (Click to Close) */}
        <div
          className={`overlay ${isNavOpen ? "active" : ""}`}
          onClick={() => setIsNavOpen(false)}
        ></div>
      </div>
    </header>
  );
};

export default Header;
