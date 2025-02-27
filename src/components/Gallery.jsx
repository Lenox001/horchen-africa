import { useState, useEffect } from "react";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    fetch("https://horchenafrica.pythonanywhere.com/api/gallery/")
      .then((response) => response.json())
      .then((data) => setGalleryItems(data))
      .catch((error) => console.error("Error fetching gallery data:", error));
  }, []);

  return (
    <section
      className="section blog"
      aria-labelledby="gallery-label"
      id="gallery"
      style={{
        padding: "80px 0",
        background: "#1a1a1a",
        color: "#fff",
        marginTop: "3rem",
        textAlign: "center",
      }}
    >
      <div
        className="container"
        style={{
          paddingTop: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <h2
          className="h2 section-title"
          id="gallery-label"
          style={{
            fontSize: "3rem",
            color: "#fff",
            marginBottom: "20px",
            textTransform: "uppercase",
            letterSpacing: "2px",
            animation: "fadeIn 2s ease-in-out",
          }}
        >
          Safari Gallery
        </h2>

        <p
          className="section-text"
          style={{
            fontSize: "1.3rem",
            color: "#ccc",
            marginBottom: "40px",
            animation: "fadeIn 2.5s ease-in-out",
          }}
        >
          A collection of breathtaking safari moments and wildlife encounters.
        </p>

        {galleryItems.length > 0 && (
          <ul
            className="grid-list"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "25px",
              padding: "0",
              listStyle: "none",
            }}
          >
            {galleryItems.map((item) => (
              <li key={item.id}>
                <div
                  className="blog-card"
                  style={{
                    background: "#333",
                    borderRadius: "15px",
                    overflow: "hidden",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                  }}
                >
                  <figure
                    className="card-banner img-holder"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "220px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={item.image}
                      width="1024"
                      height="683"
                      loading="lazy"
                      alt={item.caption}
                      className="animated-img"
                      onLoad={(e) => e.target.classList.add("fade-in")}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.8)",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </figure>

                  <div
                    className="card-content"
                    style={{ padding: "20px", textAlign: "center" }}
                  >
                    <time
                      className="card-meta-wrapper"
                      dateTime={item.date_posted}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        fontSize: "1rem",
                        color: "#aaa",
                      }}
                    >
                      <span className="span">
                        {new Date(item.date_posted).toDateString()}
                      </span>
                    </time>

                    <p
                      className="caption"
                      style={{
                        fontSize: "1.4rem",
                        color: "#fff",
                        marginTop: "10px",
                        fontWeight: "600",
                      }}
                    >
                      {item.caption}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ✅ Add Image Animation */}
      <style>
        {`
          .animated-img {
            opacity: 0;
            transform: translateY(20px);
          }

          .animated-img.fade-in {
            animation: fadeInUp 0.8s ease-in-out forwards;
          }

          .blog-card:hover img {
            transform: scale(1.05);
            filter: brightness(1);
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Gallery;
