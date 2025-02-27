import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const API_BASE_URL = "https://horchenafrica.pythonanywhere.com/api";

const DestinationDetail = () => {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/destinations/${slug}/`);
        if (!response.ok)
          throw new Error("Failed to fetch destination details");

        const data = await response.json();
        setDestination(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, [slug]);

  if (loading)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ textAlign: "center", marginTop: "8rem", color: "#f0f0f0" }}
      >
        <h2>Loading...</h2>
      </motion.div>
    );

  if (error)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ textAlign: "center", color: "#ff6b6b", marginTop: "8rem" }}
      >
        <h2>{error}</h2>
      </motion.div>
    );

  if (!destination)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ textAlign: "center", marginTop: "8rem", color: "#f0f0f0" }}
      >
        <h2>Destination not found!</h2>
      </motion.div>
    );

  const featuresList = destination.features
    ? destination.features.split(",")
    : [];

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 0",
      }}
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        style={{
          textAlign: "center",
          padding: "30px 20px",
          maxWidth: "800px",
          backgroundColor: "black",
          color: "#f0f0f0",
          borderRadius: "12px",
          boxShadow: "0 0 15px rgba(255, 165, 0, 0.6)",
          border: "2px solid rgba(255, 165, 0, 0.5)",
        }}
        aria-labelledby="destination-label"
      >
        <h2
          id="destination-label"
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
          }}
        >
          {destination.title}
        </h2>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.6",
            marginBottom: "2rem",
          }}
        >
          <strong>Description:</strong> {destination.description}
        </p>

        {featuresList.length > 0 && (
          <div style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            <strong>Features:</strong>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "10px 0",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              {featuresList.map((feature, index) => (
                <li
                  key={index}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#333",
                    borderRadius: "20px",
                  }}
                >
                  {feature.trim()}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <img
            src={destination.image}
            alt={destination.title}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
            }}
            loading="lazy"
          />
          <p style={{ fontSize: "1.2rem", marginTop: "1.5rem" }}>
            <strong>Highlights:</strong> {destination.highlights}
          </p>
        </div>

        {destination.best_time_to_visit && (
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            <strong>Best Time to Visit:</strong>{" "}
            {destination.best_time_to_visit}
          </p>
        )}

        <Link
          to="/destinations"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "14px 28px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            textDecoration: "none",
            background: "linear-gradient(45deg, orange, blue, yellow, green)",
            color: "white",
            borderRadius: "50px",
            boxShadow: "0 6px 10px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            cursor: "pointer",
            marginTop: "2rem",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ion-icon
            name="arrow-back"
            style={{ marginRight: "8px" }}
            aria-hidden="true"
          ></ion-icon>
          Back to Destinations
        </Link>
      </motion.section>
    </div>
  );
};

export default DestinationDetail;
