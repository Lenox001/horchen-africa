import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_BASE_URL = "https://horchenafrica.pythonanywhere.com/api"; // Update if needed

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/destinations/`);
        if (!response.ok) throw new Error("Failed to fetch destinations");

        const data = await response.json();
        setDestinations(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) return <h2 className="text-center">Loading...</h2>;
  if (error) return <h2 className="text-center">{error}</h2>;

  return (
    <section
      className="section collection text-center"
      aria-labelledby="collection-label"
    >
      <div className="container" style={{ paddingTop: "20px" }}>
        <h2 className="h2 section-title" id="collection-label">
          Discover Africa’s Finest Safari Destinations
        </h2>
        <p className="section-text">
          From luxurious lodges to thrilling game drives, explore the best
          safari experiences Africa has to offer.
        </p>

        <ul className="grid-list">
          {destinations.map((item) => (
            <li key={item.id || item.slug}>
              {" "}
              {/* Ensure a unique key */}
              <div className="collection-card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 500, "--height": 550 }}
                >
                  <img
                    src={item.image}
                    width="500"
                    height="550"
                    loading="lazy"
                    alt={item.title}
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">{item.title}</h3>
                  <p className="card-text">{item.highlights}</p>

                  <Link
                    to={`/destinations/${item.slug}`}
                    className="btn"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    <span className="span">More Info</span>
                    <ion-icon
                      name="arrow-forward"
                      aria-hidden="true"
                    ></ion-icon>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <Link
            to="/testimonial"
            className="btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="span">See Reviews</span>
            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
