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
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      style={{
        textAlign: "center",
        padding: "40px 20px",
        maxWidth: "1200px",
        margin: "7rem auto",
        marginTop: "10rem",
        backgroundColor: "#1a1a1a",
        color: "#f0f0f0",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
      }}
      aria-labelledby="destination-label"
    >
      <h2
        id="destination-label"
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#f0f0f0",
          marginBottom: "1.5rem",
          textAlign: "left",
          padding: "0 20px",
        }}
      >
        {destination.title}
      </h2>

      <p
        style={{
          fontSize: "1.5rem",
          color: "#f0f0f0",
          lineHeight: "1.6",
          marginBottom: "2rem",
          textAlign: "left",
          padding: "0 20px",
        }}
      >
        <strong>Description:</strong> {destination.description}
      </p>

      {featuresList.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: "1.5rem",
            color: "#f0f0f0",
            marginBottom: "2rem",
            textAlign: "left",
            padding: "0 20px",
          }}
        >
          <strong>Features:</strong>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "10px 0",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
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
                  fontSize: "1.2rem",
                  color: "#f0f0f0",
                }}
              >
                {feature.trim()}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <div style={{ maxWidth: "600px", width: "100%" }}>
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
          <p
            style={{
              fontSize: "1.5rem",
              color: "#f0f0f0",
              marginTop: "1.5rem",
              textAlign: "left",
              padding: "0 20px",
            }}
          >
            <strong>Highlights:</strong> {destination.highlights}
          </p>
        </div>
      </motion.div>

      {destination.best_time_to_visit && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            fontSize: "1.5rem",
            color: "#f0f0f0",
            marginBottom: "2rem",
            textAlign: "left",
            padding: "0 20px",
          }}
        >
          <strong>Best Time to Visit:</strong> {destination.best_time_to_visit}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        style={{ marginTop: "2rem", textAlign: "left", padding: "0 20px" }}
      >
        <Link
          to="/destinations"
          className="btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "12px 24px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            textDecoration: "none",
            backgroundColor: "#3498db",
            color: "white",
            borderRadius: "30px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
            transition: "background-color 0.3s ease",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#2980b9")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#3498db")}
        >
          <ion-icon
            name="arrow-back"
            style={{ marginRight: "8px" }}
            aria-hidden="true"
          ></ion-icon>
          Back to Destinations
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default DestinationDetail;
