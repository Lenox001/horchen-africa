import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://horchenafrica.pythonanywhere.com/api/about/")
      .then((response) => response.json())
      .then((data) => {
        setAboutData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching about data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ color: "#fff", textAlign: "center" }}>Loading...</p>;
  }

  if (!aboutData) {
    return (
      <p style={{ color: "#fff", textAlign: "center" }}>No data available.</p>
    );
  }

  return (
    <section
      className="section about"
      aria-label="about"
      id="about"
      style={{
        backgroundColor: "#1a1a1a", // Darker theme
        color: "#fff", // Lighter text
      }}
    >
      <div className="container" style={{ paddingTop: "40px" }}>
        <div className="wrapper">
          {aboutData.about_img1 && (
            <figure
              className="about-banner about-banner-1 img-holder"
              style={{
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)", // Glow effect
                animation: "fadeIn 1s ease-in-out", // Animation
              }}
            >
              <img
                src={aboutData.about_img1}
                width="600"
                height="480"
                loading="lazy"
                alt="Safari vehicle driving through the savannah"
                className="img-cover"
                style={{
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </figure>
          )}

          <h2
            className="h2 section-title"
            style={{
              color: "#fff", // Lighter text
              animation: "fadeIn 1s ease-in-out", // Animation
            }}
          >
            {aboutData.title}
          </h2>
        </div>

        {aboutData.about_img2 && (
          <figure
            className="about-banner about-banner-2 img-holder"
            style={{
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)", // Glow effect
              animation: "fadeIn 1s ease-in-out", // Animation
            }}
          >
            <img
              src={aboutData.about_img2}
              width="500"
              height="700"
              loading="lazy"
              alt="Luxury tented camp under the African sky"
              className="img-cover"
              style={{
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </figure>
        )}

        <div className="about-content">
          <h3
            className="h2 section-title"
            style={{
              color: "#fff", // Lighter text
              animation: "fadeIn 1s ease-in-out", // Animation
            }}
          >
            {aboutData.subtitle}
          </h3>
          <p
            className="section-text"
            style={{
              color: "#ddd", // Lighter text
              animation: "fadeIn 1s ease-in-out", // Animation
            }}
          >
            {aboutData.description}
          </p>

          <Link
            to="/packages"
            className="btn"
            style={{
              backgroundColor: "#ff6b6b",
              color: "#fff",
              boxShadow: "0 0 15px rgba(255, 107, 107, 0.5)", // Glow effect
              animation: "fadeIn 1s ease-in-out", // Animation
              transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ff4c4c";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(255, 107, 107, 0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ff6b6b";
              e.currentTarget.style.boxShadow =
                "0 0 15px rgba(255, 107, 107, 0.5)";
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="span">Explore Our Safaris</span>
            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </Link>

          {aboutData.about_img3 && (
            <figure
              className="about-banner about-banner-3 img-holder"
              style={{
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)", // Glow effect
                animation: "fadeIn 1s ease-in-out", // Animation
              }}
            >
              <img
                src={aboutData.about_img3}
                width="850"
                height="420"
                loading="lazy"
                alt="Tourists observing wildlife from a safari jeep"
                className="img-cover"
                style={{
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </figure>
          )}
        </div>
      </div>

      {/* Global CSS for animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default About;
