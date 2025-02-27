import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const API_BASE_URL = "https://horchenafrica.pythonanywhere.com/api";

const SafariDetail = () => {
  const { slug } = useParams();
  const [safari, setSafari] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSafariDetails = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/safaris/${slug}/`);
        if (!response.ok) throw new Error("Failed to fetch safari details");

        const data = await response.json();
        setSafari(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSafariDetails();
  }, [slug]);

  if (loading)
    return (
      <div style={styles.loadingContainer}>
        <h2 style={styles.loadingText}>Loading...</h2>
      </div>
    );

  if (error)
    return (
      <div style={styles.errorContainer}>
        <h2 style={styles.errorText}>{error}</h2>
      </div>
    );

  if (!safari)
    return (
      <div style={styles.errorContainer}>
        <h2 style={styles.errorText}>Safari not found!</h2>
      </div>
    );

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>{safari.title}</h2>
        <p style={styles.description}>{safari.description}</p>

        <div style={styles.priceContainer}>
          <span style={styles.priceLabel}>Price:</span>
          <span style={styles.priceValue}>
            {safari.price ? `$${safari.price}` : "Not available"}
          </span>
        </div>

        <div style={styles.imageContainer}>
          <img
            src={
              safari.images?.length > 0
                ? safari.images[0].image
                : "/default-image.jpg"
            }
            alt={safari.title}
            style={styles.image}
          />
        </div>

        {safari.itinerary?.length > 0 && (
          <div style={styles.itineraryContainer}>
            <h3 style={styles.itineraryTitle}>Itinerary</h3>
            <ul style={styles.itineraryList}>
              {safari.itinerary.map((day, index) => (
                <li key={index} style={styles.itineraryItem}>
                  <strong>Day {day.day_number}:</strong> {day.description}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div style={styles.buttonContainer}>
          <Link
            to="/packages"
            style={styles.button}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span style={styles.buttonText}>Back to Safaris</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SafariDetail;

// Styles
const styles = {
  section: {
    padding: "2rem",
    background: "linear-gradient(145deg, #1a1a1a, #333)",
    minHeight: "100vh",
    color: "#fff",
    fontFamily: "'Arial', sans-serif",
    textAlign: "left",
    fontSize: "1.5rem",
    marginTop: "2rem",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "2rem",

    background: "#222",
    borderRadius: "15px",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
    position: "relative",
    overflow: "hidden",
    marginTop: "11rem",
    fontSize: "1.5rem",
    textAlign: "left",
    borderLeft: "5px solid #00f",
    animation: "glow 1.5s infinite alternate",
  },
  "@keyframes glow": {
    "0%": { boxShadow: "0 0 5px #00f" },
    "100%": { boxShadow: "0 0 15px #00f" },
  },

  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#ff8a00",
    marginBottom: "1rem",
    textAlign: "center",
    textShadow: "0px 0px 10px rgba(255, 138, 0, 0.8)",
  },
  description: {
    fontSize: "1.8rem",
    lineHeight: "1.6",
    color: "#ddd",
    marginBottom: "2rem",
    textAlign: "ledt",
  },
  priceContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "2rem",
  },
  priceLabel: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#0f0",
    textShadow: "0px 0px 10px rgba(0, 255, 0, 0.8)",
  },
  priceValue: {
    fontSize: "1.8rem", // Increase size
    fontWeight: "bold",
    color: "#0f0",
    textShadow: "0px 0px 15px rgba(0, 255, 0, 1)", // Stronger glow effect
    letterSpacing: "1px", // Slight spacing for emphasis
  },

  imageContainer: {
    display: "flex", // Enable flexbox
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically (if needed)
    marginBottom: "2rem",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  },
  image: {
    width: "100%", // Ensure it fills the container
    maxWidth: "80%", // Limit max width for responsiveness
    height: "auto", // Maintain aspect ratio
    borderRadius: "10px", // Add rounded corners
  },
  itineraryContainer: {
    marginBottom: "2rem",
  },
  itineraryTitle: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#ff8a00",
    marginBottom: "1rem",
    textAlign: "center",
  },
  itineraryList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  itineraryItem: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#ddd",
    marginBottom: "0.5rem",
    padding: "0.5rem",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "5px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  },
  button: {
    padding: "1rem 1.5rem",
    background: "linear-gradient(145deg, #ff8a00, #e52e71)",
    color: "#222",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0px 4px 10px rgba(255, 138, 0, 0.5)",
    transition: "transform 0.3s ease",
  },
  buttonText: {
    fontSize: "1rem",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#1a1a1a",
  },
  loadingText: {
    fontSize: "2rem",
    color: "#ff8a00",
  },
  errorContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#1a1a1a",
  },
  errorText: {
    fontSize: "2rem",
    color: "#e52e71",
  },
};
