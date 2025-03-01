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

  if (loading) return <div style={{ color: "#fff" }}>Loading...</div>;
  if (!data) return <div style={{ color: "#fff" }}>Error loading content</div>;

  return (
    <>
      <section
        className="section hero"
        aria-label="home"
        id="home"
        style={{ backgroundColor: "#1a1a1a", color: "#e0e0e0" }}
      >
        <div className="container">
          <div className="hero-content">
            <h1
              className="h1 hero-title"
              style={{ fontFamily: "'Poppins', sans-serif", color: "yellow" }}
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
            <p className="section-text" style={{ color: "#e0e0e0" }}>
              {data.hero_subtitle}
            </p>
            <Link
              to="/packages"
              className="btn"
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
              className="hero-banner-1 img-holder"
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
              className="hero-banner-2 img-holder"
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
              className="h2 section-title"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {data.feature_title}
            </h2>
            {data.extra_paragraph1 && (
              <p className="section-text" style={{ color: "#e0e0e0" }}>
                {data.extra_paragraph1}
              </p>
            )}
            <ul className="feature-list">
              {[
                {
                  icon: featureIcon1,
                  title: data.feature1_title,
                  description: data.feature1_description,
                },
                {
                  icon: featureIcon2,
                  title: data.feature2_title,
                  description: data.feature2_description,
                },
                {
                  icon: featureIcon3,
                  title: data.feature3_title,
                  description: data.feature3_description,
                },
              ].map((feature, index) => (
                <li
                  key={index}
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
                        src={feature.icon}
                        width="45"
                        height="45"
                        loading="lazy"
                        alt="feature icon"
                      />
                    </div>
                    <div>
                      <h3
                        className="h4 card-title"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="card-description"
                        style={{ color: "#e0e0e0" }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {data.extra_paragraph2 && (
              <p className="section-text" style={{ color: "#e0e0e0" }}>
                {data.extra_paragraph2}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
