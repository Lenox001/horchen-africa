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
    >
      <div className="container" style={{ paddingTop: "20px" }}>
        <h2 className="h2 section-title text-center" id="gallery-label">
          Safari Gallery
        </h2>

        <p className="section-text text-center">
          A collection of breathtaking safari moments and wildlife encounters.
        </p>

        {galleryItems.length > 0 ? (
          <ul className="grid-list">
            {galleryItems.map((item) => (
              <li key={item.id}>
                <div className="blog-card">
                  <figure
                    className="card-banner img-holder"
                    style={{ "--width": 1024, "--height": 683 }}
                  >
                    <img
                      src={item.image}
                      width="1024"
                      height="683"
                      loading="lazy"
                      alt={item.caption}
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <time
                      className="card-meta-wrapper bold-text"
                      dateTime={item.date_posted}
                    >
                      <ion-icon
                        name="calendar-clear-outline"
                        aria-hidden="true"
                      ></ion-icon>
                      <span className="span">
                        {new Date(item.date_posted).toDateString()}
                      </span>
                    </time>

                    <p className="caption bold-text">{item.caption}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
};

export default Gallery;
