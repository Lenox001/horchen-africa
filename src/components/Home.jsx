import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import featureIcon1 from "../assets/images/feature-icon-1.svg";
import featureIcon2 from "../assets/images/feature-icon-2.svg";
import featureIcon3 from "../assets/images/feature-icon-3.svg";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://horchenafrica.pythonanywhere.com/api/homepage/")
      .then((response) => response.json())
      .then((result) => {
        setData(result[0]); // Assuming the API returns an array
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="preloader">
        <div className="loading-text">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    );

  if (!data) return <div style={{ color: "#fff" }}>Error loading content</div>;

  return (
    <>
      {/* Animated Background */}
      <div className="animated-background" />

      {/* Hero Section */}
      <section
        className="section hero"
        aria-label="home"
        id="home"
        style={{ backgroundColor: "#1a1a1a", color: "#e0e0e0" }}
      >
        <div className="container">
          <div className="hero-content">
            <h1
              className="h1 hero-title animate-text"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "yellow",
              }}
            >
              {(() => {
                const words = data.hero_title.split(" ");
                if (words.length < 4) return data.hero_title;
                return (
                  <>
                    {words[0]}{" "}
                    <span className="span" style={{ color: "#ffcc00" }}>
                      {words.slice(1, -1).join(" ")}
                    </span>{" "}
                    {words[words.length - 1]}
                  </>
                );
              })()}
            </h1>
            <p
              className="section-text animate-text"
              style={{ color: "#e0e0e0" }}
            >
              {data.hero_subtitle}
            </p>
            <Link
              to="/packages"
              className="btn animate-text"
              style={{
                border: "2px solid #ffcc00",
                boxShadow: "0 0 10px #ffcc00",
                fontFamily: "'Poppins', sans-serif",
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="span" style={{ color: "#ffcc00" }}>
                Explore Our Safaris
              </span>
              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </Link>
          </div>
          <div className="wrapper">
            <div
              className="hero-banner-1 img-holder animate-float"
              style={{
                border: "2px solid #ffcc00",
                boxShadow: "0 0 10px #ffcc00",
              }}
            >
              <img
                src={data.hero_image1}
                width="400"
                height="550"
                alt="Luxury safari lodge with African landscape"
                loading="lazy"
                className="img-cover"
              />
            </div>
            <div
              className="hero-banner-2 img-holder animate-float"
              style={{
                border: "2px solid #ffcc00",
                boxShadow: "0 0 10px #ffcc00",
              }}
            >
              <img
                src={data.hero_image2}
                width="500"
                height="850"
                alt="Wildlife safari scene with elephants and savannah"
                loading="lazy"
                className="img-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section
        className="feature"
        aria-label="features"
        style={{ backgroundColor: "#1a1a1a", color: "#e0e0e0" }}
      >
        <div
          className="feature-banner has-bg-image has-after"
          style={{
            backgroundImage: `url(${data.feature_background})`,
            borderRadius: "20px",
            borderLeft: "2px solid #ffcc00",
            boxShadow: "-10px 0 10px #ffcc00",
            marginLeft: "30px",
            marginRight: "30px",
          }}
        ></div>
        <div className="section feature-content">
          <div className="container">
            <h2
              className="h2 section-title animate-text"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {data.feature_title}
            </h2>
            {data.extra_paragraph1 && (
              <p
                className="section-text animate-text"
                style={{ color: "#e0e0e0" }}
              >
                {data.extra_paragraph1}
              </p>
            )}
            <ul className="feature-list">
              {[featureIcon1, featureIcon2, featureIcon3].map((icon, index) => (
                <li
                  key={index}
                  className="animate-float"
                  style={{
                    borderLeft: "2px solid #ffcc00",
                    boxShadow: "-10px 0 10px #ffcc00",
                    borderRadius: "10px",
                    margin: "10px",
                    padding: "10px",
                  }}
                >
                  <div className="feature-list-card">
                    <div className="card-icon">
                      <img
                        src={icon}
                        width="45"
                        height="45"
                        loading="lazy"
                        alt="feature icon"
                      />
                    </div>
                    <div>
                      <h3
                        className="h4 card-title animate-text"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {data[`feature${index + 1}_title`]}
                      </h3>
                      <p
                        className="card-description animate-text"
                        style={{ color: "#e0e0e0" }}
                      >
                        {data[`feature${index + 1}_description`]}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {data.extra_paragraph2 && (
              <p
                className="section-text animate-text"
                style={{ color: "#e0e0e0" }}
              >
                {data.extra_paragraph2}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="contact"
        aria-label="contact"
        style={{
          backgroundColor: "#1a1a1a",
          color: "#e0e0e0",
          padding: "40px 0",
          textAlign: "center",
          borderTop: "2px solid #ffcc00",
          boxShadow: "0 -5px 10px #ffcc00",
        }}
      >
        <div className="container">
          <h2
            className="h2 section-title animate-text"
            style={{ fontFamily: "'Poppins', sans-serif", color: "#ffcc00" }}
          >
            Contact Us
          </h2>
          <p
            className="section-text animate-text"
            style={{ fontSize: "1.2rem", color: "#e0e0e0" }}
          >
            Have questions? Feel free to reach out!
          </p>
          <p
            className="contact-info animate-text"
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#ffcc00",
              marginTop: "10px",
            }}
          >
            📞 +254 722 233 065
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
