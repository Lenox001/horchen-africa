import { Link } from "react-router-dom";
import heroBanner1 from "../assets/images/hero-banner-1.jpg";
import heroBanner2 from "../assets/images/hero-banner-2.jpg";
import heroShape from "../assets/images/hero-shape.png";
import featureBanner from "../assets/images/feature-banner.jpg";
import playIcon from "../assets/images/play.svg";
import featureIcon1 from "../assets/images/feature-icon-1.svg";
import featureIcon2 from "../assets/images/feature-icon-2.svg";
import featureIcon3 from "../assets/images/feature-icon-3.svg";

const Home = () => {
  const features = [
    {
      icon: featureIcon1,
      alt: "wildlife protection icon",
      title: "Sustainable Safaris",
      description:
        "Eco-friendly experiences that preserve wildlife and protect the natural beauty of Africa.",
    },
    {
      icon: featureIcon2,
      alt: "local guides icon",
      title: "Expert Local Guides",
      description:
        "Discover hidden gems and iconic landscapes with experienced guides who know every corner of the wild.",
    },
    {
      icon: featureIcon3,
      alt: "luxury camping icon",
      title: "Luxury in the Wild",
      description:
        "Enjoy the perfect blend of adventure and comfort with our handpicked safari lodges and camps.",
    },
  ];

  return (
    <>
      <section className="section hero" aria-label="home" id="home">
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 hero-title">
              Discover <span className="span">Safari Wonders</span> with Horchen
              Africa
            </h1>
            <p className="section-text">
              Experience breathtaking landscapes, luxury safari lodges, and
              unforgettable wildlife adventures. Horchen Africa brings you
              closer to nature with eco-friendly and immersive safari
              experiences.
            </p>
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
                src={heroBanner1}
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
                src={heroBanner2}
                width="500"
                height="850"
                alt="Wildlife safari scene with elephants and savannah"
                className="img-cover"
              />
            </div>
            <img
              src={heroShape}
              width="570"
              height="676"
              alt="African tribal pattern decoration"
              className="shape"
            />
          </div>
        </div>
      </section>

      <section className="feature" aria-label="features">
        <div
          className="feature-banner has-bg-image has-after"
          style={{ backgroundImage: `url(${featureBanner})` }}
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
            <h2 className="h2 section-title">
              Experience the Wild Like Never Before
            </h2>
            <p className="section-text">
              Journey through breathtaking landscapes, encounter majestic
              wildlife, and immerse yourself in the heart of Africa’s
              wilderness.
            </p>
            <ul className="feature-list">
              {features.map((feature, index) => (
                <li key={index}>
                  <div className="feature-list-card">
                    <div className="card-icon">
                      <img
                        src={feature.icon}
                        width="45"
                        height="45"
                        loading="lazy"
                        alt={feature.alt}
                      />
                    </div>
                    <div>
                      <h3 className="h4 card-title">{feature.title}</h3>
                      <p className="card-text">{feature.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <p>
              From thrilling game drives to tranquil sunset safaris, Horchen
              Africa ensures an unforgettable adventure in the wild.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
