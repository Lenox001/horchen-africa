import { Link } from "react-router-dom";
import aboutImg1 from "../assets/images/about-1.jpg";
import aboutImg2 from "../assets/images/about-2.jpg";
import aboutImg3 from "../assets/images/about-3.jpg";

const About = () => {
  return (
    <section className="section about" aria-label="about" id="about">
      <div className="container">
        <div className="wrapper">
          <figure
            className="about-banner about-banner-1 img-holder"
            style={{ "--width": 600, "--height": 480 }}
          >
            <img
              src={aboutImg1}
              width="600"
              height="480"
              loading="lazy"
              alt="Safari vehicle driving through the savannah"
              className="img-cover"
            />
          </figure>

          <h2 className="h2 section-title">Horchen Africa Safaris</h2>
        </div>

        <figure
          className="about-banner about-banner-2 img-holder"
          style={{ "--width": 500, "--height": 700 }}
        >
          <img
            src={aboutImg2}
            width="500"
            height="700"
            loading="lazy"
            alt="Luxury tented camp under the African sky"
            className="img-cover"
          />
        </figure>

        <div className="about-content">
          <h3 className="h2 section-title">Discover Africa’s Untamed Beauty</h3>

          <p className="section-text">
            Experience the thrill of the wild with Horchen Africa Safaris. From
            the breathtaking landscapes of the Serengeti to the vast plains of
            the Maasai Mara, our expertly guided tours bring you up close with
            Africa’s most spectacular wildlife. Whether you seek a luxury
            retreat or an off-the-grid adventure, we craft unforgettable
            journeys tailored just for you.
          </p>

          <Link to="/packages" className="btn">
            <span className="span">Explore Our Safaris</span>
            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </Link>

          <figure
            className="about-banner about-banner-3 img-holder"
            style={{ "--width": 850, "--height": 420 }}
          >
            <img
              src={aboutImg3}
              width="850"
              height="420"
              loading="lazy"
              alt="Tourists observing wildlife from a safari jeep"
              className="img-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
