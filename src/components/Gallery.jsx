import blog1 from "../assets/images/blog-1.jpg";
import blog2 from "../assets/images/blog-2.jpg";
import blog3 from "../assets/images/blog-3.jpg";
import blog4 from "../assets/images/blog-4.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      title: "Exploring Africa's Hidden Safari Gems",
      image: blog1,
      alt: "Exploring Africa's Hidden Safari Gems",
      date: "October 12, 2022",
    },
    {
      title: "The Ultimate Guide to the Great Migration",
      image: blog2,
      alt: "The Ultimate Guide to the Great Migration",
      date: "November 5, 2022",
    },
    {
      title: "Top 5 Safari Lodges for a Luxury Experience",
      image: blog3,
      alt: "Top 5 Safari Lodges for a Luxury Experience",
      date: "December 18, 2022",
    },
    {
      title: "Essential Safari Tips for First-Time Travelers",
      image: blog4,
      alt: "Essential Safari Tips for First-Time Travelers",
      date: "January 8, 2023",
    },
  ];

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

        <ul className="grid-list">
          {galleryItems.map((item, index) => (
            <li key={index}>
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
                    alt={item.alt}
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h4">{item.title}</h3>

                  <time className="card-meta-wrapper" dateTime={item.date}>
                    <ion-icon
                      name="calendar-clear-outline"
                      aria-hidden="true"
                    ></ion-icon>
                    <span className="span">{item.date}</span>
                  </time>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
