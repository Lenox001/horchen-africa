import { Link } from "react-router-dom";

// Import images the correct way
import collection1 from "../assets/images/collection-1.jpg";
import collection2 from "../assets/images/collection-2.jpg";
import collection3 from "../assets/images/collection-3.jpg";

const Destinations = () => {
  const collectionItems = [
    {
      id: "safari-lodges",
      imgSrc: collection1,
      altText: "Safari Lodge Retreat",
      title: "Luxury Safari Lodges",
      description:
        "Immerse yourself in the wild with breathtaking views and world-class comfort in our handpicked lodges.",
    },
    {
      id: "wildlife-safaris",
      imgSrc: collection2,
      altText: "Scenic Wildlife Safari",
      title: "Wildlife Safaris",
      description:
        "Embark on thrilling game drives and witness Africa’s iconic wildlife in their natural habitat.",
    },
    {
      id: "bush-camping",
      imgSrc: collection3,
      altText: "Bush Camping Experience",
      title: "Bush Camping",
      description:
        "Experience the raw beauty of the African savannah with our fully equipped and guided bush camping adventures.",
    },
  ];

  return (
    <section
      className="section collection text-center"
      aria-labelledby="collection-label"
    >
      <div className="container">
        <h2 className="h2 section-title" id="collection-label">
          Discover Africa’s Finest Safari Destinations
        </h2>

        <p className="section-text">
          From luxurious lodges to thrilling game drives, explore the best
          safari experiences Africa has to offer.
        </p>

        <ul className="grid-list">
          {collectionItems.map((item, index) => (
            <li key={index}>
              <div className="collection-card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 500, "--height": 550 }}
                >
                  <img
                    src={item.imgSrc}
                    width="500"
                    height="550"
                    loading="lazy"
                    alt={item.altText}
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">{item.title}</h3>
                  <p className="card-text">{item.description}</p>

                  <Link to={`/destinations/${item.id}`} className="btn">
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
          <Link to="/testimonial" className="btn">
            <span className="span">See Reviews</span>
            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
