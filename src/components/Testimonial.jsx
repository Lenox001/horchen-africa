import quoteIcon from "../assets/images/quote.svg"; // Import the image

const Testimonial = () => {
  return (
    <section className="section testi" aria-label="client testimonials">
      <div className="container">
        <div className="testi-card">
          <p className="card-text">
            "The architectural design exceeded my expectations! The precision,
            creativity, and functionality in every detail truly brought my
            vision to life. Highly recommended!"
          </p>

          <p className="client-name">Edward</p>
          <p className="client-title">Architectural Project Client</p>

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
