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
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? "#ffffff" : "transparent",
        transition: "background-color 0.3s ease, height 0.3s ease",
        boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
        height: "80px", // Keep height fixed
        overflow: "hidden", // Prevent content from increasing height
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%", // Match the header height
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "#333",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "24px",
            fontWeight: "bold",
          }}
          onClick={handleLinkClick}
        >
          <img
            src={Logo}
            alt="Horchen Africa Logo"
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
          />
          Horchen Africa
        </Link>

        {/* Hamburger Button */}
        <button
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "30px",
            height: "24px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 1001,
          }}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span
            style={{
              width: "100%",
              height: "3px",
              backgroundColor: "#333",
              transform: isNavOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "none",
              transition: "transform 0.3s ease",
            }}
          ></span>
          <span
            style={{
              width: "100%",
              height: "3px",
              backgroundColor: "#333",
              opacity: isNavOpen ? 0 : 1,
              transition: "opacity 0.3s ease",
            }}
          ></span>
          <span
            style={{
              width: "100%",
              height: "3px",
              backgroundColor: "#333",
              transform: isNavOpen
                ? "rotate(-45deg) translate(5px, -5px)"
                : "none",
              transition: "transform 0.3s ease",
            }}
          ></span>
        </button>

        {/* Side Navbar */}
        <nav
          style={{
            position: "fixed",
            top: 0,
            right: isNavOpen ? "0" : "-100%",
            width: "250px",
            height: "100vh",
            backgroundColor: "#ffffff",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            transition: "right 0.3s ease",
            zIndex: 1000,
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: "40px 20px 20px",
              margin: 0,
            }}
          >
            {[
              { path: "/", label: "Home" },
              { path: "/destinations", label: "Destinations" },
              { path: "/about", label: "About" },
              { path: "/gallery", label: "Gallery" },
              { path: "/contact", label: "Contact" },
              { path: "/packages", label: "Packages" },
            ].map(({ path, label }) => (
              <li key={path} style={{ marginBottom: "15px" }}>
                <Link
                  to={path}
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "18px",
                    fontWeight: "500",
                    transition: "color 0.3s ease",
                  }}
                  onClick={handleLinkClick}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Overlay */}
        {isNavOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
            }}
            onClick={() => setIsNavOpen(false)}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;
