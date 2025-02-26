import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import playIcon from "../assets/images/play.svg";
import featureIcon1 from "../assets/images/feature-icon-1.svg";
import featureIcon2 from "../assets/images/feature-icon-2.svg";
import featureIcon3 from "../assets/images/feature-icon-3.svg";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://horchenafrica.pythonanywhere.com/api/homepage/")
      .then((response) => response.json())
      .then((result) => setData(result[0])) // Assuming the API returns an array
      .catch(() => setData(null)); // Ensure no data is displayed if fetching fails
  }, []);

  if (!data) return null; // Page remains blank if no data is available

  return (
    <>
      <section className="section hero" aria-label="home" id="home">
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 hero-title">
              {(() => {
                const words = data.hero_title.split(" ");
                if (words.length < 4) return data.hero_title; // If the title is too short, return it as is.

                return (
                  <>
                    {words[0]} {/* First word (not wrapped) */}
                    <span className="span">
                      {words.slice(1, words.length - 1).join(" ")}
                    </span>
                    {` ${words[words.length - 1]}`}{" "}
                    {/* Last word (not wrapped) */}
                  </>
                );
              })()}
            </h1>

            <p className="section-text">{data.hero_subtitle}</p>
            <Link
              to="/packages"
              className="btn"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="span">Explore Our Safaris</span>
              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </Link>
          </div>
          <div className="wrapper">
            <div
              className="hero-banner-1 img-holder"
              style={{ "--width": 400, "--height": 550 }}
            >
              <img
                src={data.hero_image1}
                width="400"
                height="550"
                alt="Luxury safari lodge with African landscape"
                className="img-cover"
              />
            </div>
            <div
              className="hero-banner-2 img-holder"
              style={{ "--width": 500, "--height": 850 }}
            >
              <img
                src={data.hero_image2}
                width="500"
                height="850"
                alt="Wildlife safari scene with elephants and savannah"
                className="img-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="feature" aria-label="features">
        <div
          className="feature-banner has-bg-image has-after"
          style={{
            backgroundImage: data ? `url(${data.feature_background})` : "none",
          }}
        >
          <button
            className="play-btn"
            aria-label="play video: safari experience"
          >
            <img
              src={playIcon}
              width="60"
              height="60"
              loading="lazy"
              alt="play icon"
            />
          </button>
        </div>

        <div className="section feature-content">
          <div className="container">
            <h2 className="h2 section-title">{data?.feature_title}</h2>

            {/* First extra paragraph (before feature list) */}
            {data?.extra_paragraph1 && (
              <p className="section-text">{data.extra_paragraph1}</p>
            )}

            <ul className="feature-list">
              {[
                {
                  icon: featureIcon1,
                  title: data?.feature1_title,
                  description: data?.feature1_description,
                },
                {
                  icon: featureIcon2,
                  title: data?.feature2_title,
                  description: data?.feature2_description,
                },
                {
                  icon: featureIcon3,
                  title: data?.feature3_title,
                  description: data?.feature3_description,
                },
              ].map((feature, index) => (
                <li key={index}>
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
                      <h3 className="h4 card-title">{feature.title}</h3>
                      <p className="card-description">
                        {feature.description}
                      </p>{" "}
                      {/* Added description */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Second extra paragraph (after feature list) */}
            {data?.extra_paragraph2 && (
              <p className="section-text">{data.extra_paragraph2}</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
