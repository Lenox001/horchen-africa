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

  const handleLinkClick = () => {
    setIsNavOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`header ${isScrolled ? "active" : ""}`}>
      <div className="container">
        <Link
          to="/"
          className="logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "flex-start",
            marginLeft: "0",
          }}
          onClick={handleLinkClick}
        >
          <img
            src={Logo}
            alt="Horchen Africa Logo"
            style={{ width: "100px", height: "100px" }}
          />
          Horchen Africa
        </Link>

        {/* Hamburger Button */}
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
          {/* Close Button */}
          <button
            className="nav-close-btn"
            onClick={() => setIsNavOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>

          <ul className="navbar-list">
            {[
              { path: "/", label: "Home" },
              { path: "/destinations", label: "Destinations" },
              { path: "/about", label: "About" },
              { path: "/gallery", label: "Gallery" },
              { path: "/contact", label: "Contact" },
              { path: "/packages", label: "Packages" },
            ].map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="navbar-link"
                  onClick={handleLinkClick}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Overlay */}
        <div
          className={`overlay ${isNavOpen ? "active" : ""}`}
          onClick={() => setIsNavOpen(false)}
        ></div>
      </div>
    </header>
  );
};

export default Header;
