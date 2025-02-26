/* eslint-disable react/no-unescaped-entities */
import quoteIcon from "../assets/images/quote.svg"; // Import the image

const Testimonial = () => {
  return (
    <section className="section testi" aria-label="client testimonials">
      <div className="container" style={{ paddingTop: "60px" }}>
        <div className="testi-card">
          <p className="card-text">
            "My safari experience was absolutely incredible! The breathtaking
            landscapes, close-up wildlife encounters, and seamless organization
            made it an unforgettable adventure. Highly recommended!"
          </p>

          <p className="client-name">Edward</p>
          <p className="client-title">Safari Enthusiast</p>

          <img
            src={quoteIcon} // Use the imported image
            width="50"
            height="50"
            loading="lazy"
            className="icon"
            alt="quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
