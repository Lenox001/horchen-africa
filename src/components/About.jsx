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
    return <p>Loading...</p>;
  }

  if (!aboutData) {
    return <p>No data available.</p>;
  }

  return (
    <section className="section about" aria-label="about" id="about">
      <div className="container" style={{ paddingTop: "40px" }}>
        <div className="wrapper">
          {aboutData.about_img1 && (
            <figure className="about-banner about-banner-1 img-holder">
              <img
                src={aboutData.about_img1} // ✅ Full URL is now used
                width="600"
                height="480"
                loading="lazy"
                alt="Safari vehicle driving through the savannah"
                className="img-cover"
              />
            </figure>
          )}

          <h2 className="h2 section-title">{aboutData.title}</h2>
        </div>

        {aboutData.about_img2 && (
          <figure className="about-banner about-banner-2 img-holder">
            <img
              src={aboutData.about_img2} // ✅ Full URL is now used
              width="500"
              height="700"
              loading="lazy"
              alt="Luxury tented camp under the African sky"
              className="img-cover"
            />
          </figure>
        )}

        <div className="about-content">
          <h3 className="h2 section-title">{aboutData.subtitle}</h3>
          <p className="section-text">{aboutData.description}</p>

          <Link
            to="/packages"
            className="btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="span">Explore Our Safaris</span>
            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </Link>

          {aboutData.about_img3 && (
            <figure className="about-banner about-banner-3 img-holder">
              <img
                src={aboutData.about_img3} // ✅ Full URL is now used
                width="850"
                height="420"
                loading="lazy"
                alt="Tourists observing wildlife from a safari jeep"
                className="img-cover"
              />
            </figure>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
