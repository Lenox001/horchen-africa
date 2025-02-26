/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import quoteIcon from "../assets/images/quote.svg"; // Import the image

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState(null);

  useEffect(() => {
    fetch("https://horchenafrica.pythonanywhere.com/api/testimonial/") // Corrected local API endpoint
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setTestimonial(data[0]); // Use the first testimonial
        }
      })
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <section className="section testi" aria-label="client testimonials">
      <div className="container" style={{ paddingTop: "60px" }}>
        <div className="testi-card">
          <p className="card-text">
            {testimonial ? `"${testimonial.text}"` : "Loading testimonial..."}
          </p>

          <p className="client-name">
            {testimonial ? testimonial.name : "..."}
          </p>
          <p className="client-title">
            {testimonial ? testimonial.title : "..."}
          </p>

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
