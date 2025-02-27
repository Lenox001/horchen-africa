import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Packages = () => {
  const [safaris, setSafaris] = useState([]);

  useEffect(() => {
    fetch("https://horchenafrica.pythonanywhere.com/api/safaris/")
      .then((response) => response.json())
      .then((data) => setSafaris(data))
      .catch((error) => console.error("Error fetching safaris:", error));
  }, []);

  return (
    <section
      className="gallery"
      id="gallery"
      style={{
        backgroundColor: "#000", // Pure black background
        padding: "40px 20px",
        color: "#ffffff",
        marginTop: "11rem", // Adjusted margin-top
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Flickering Lights Effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, transparent 10.01%)",
          backgroundSize: "20px 20px",
          animation: "flicker 2s infinite",
          pointerEvents: "none", // Ensure it doesn't block interactions
        }}
      ></div>

      <ul
        className="gallery-list"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          listStyle: "none",
          padding: 0,
          position: "relative",
          zIndex: 1, // Ensure content is above the flickering effect
        }}
      >
        {safaris.map((safari) => (
          <li
            key={safari.slug}
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 8px 16px rgba(255, 255, 255, 0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              background: "#111", // Dark card background
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 12px 24px rgba(255, 255, 255, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 8px 16px rgba(255, 255, 255, 0.2)";
            }}
          >
            <div
              className="gallery-card has-bg-image has-after"
              style={{
                backgroundImage: `url(${
                  safari.images.length > 0
                    ? safari.images[0].image
                    : "/default-image.jpg"
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px", // Increased height for better image visibility
                position: "relative",
                display: "flex",
                alignItems: "flex-end",
                padding: "20px",
              }}
            >
              <div
                className="card-content"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent overlay
                  padding: "20px",
                  borderRadius: "10px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <h3
                  className="h3 card-title"
                  style={{
                    margin: "0 0 15px 0",
                    fontSize: "2rem",
                    color: "#fff",
                    fontWeight: "bold",
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {safari.title}
                </h3>

                <Link
                  to={`/safari-detail/${safari.slug}`}
                  className="btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "12px 24px",
                    backgroundColor: "#ff6f61", // Vibrant button color
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "25px",
                    transition:
                      "background-color 0.3s ease, transform 0.3s ease",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ff3b2f";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#ff6f61";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <span className="span">View More</span>
                  <ion-icon
                    name="arrow-forward"
                    aria-hidden="true"
                    style={{ marginLeft: "8px" }}
                  ></ion-icon>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Flicker Animation Keyframes */}
      <style>
        {`
          @keyframes flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }
        `}
      </style>
    </section>
  );
};

export default Packages;
