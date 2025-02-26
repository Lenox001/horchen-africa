import { Link, useParams } from "react-router-dom";
import collection1 from "../assets/images/collection-1.jpg";
import collection2 from "../assets/images/collection-2.jpg";
import collection3 from "../assets/images/collection-3.jpg";

const destinationsData = {
  "safari-lodges": {
    title: "Luxury Safari Lodges",
    images: [
      {
        src: collection1,
        title: "Panoramic Views",
        description:
          "Enjoy breathtaking views of the African savannah right from your lodge.",
      },
      {
        src: collection2,
        title: "Exclusive Wildlife Encounters",
        description: "Watch the Big Five roam freely near your accommodation.",
      },
      {
        src: collection3,
        title: "Unmatched Luxury",
        description:
          "Experience world-class comfort while being surrounded by nature.",
      },
    ],
    details:
      "Nestled in stunning landscapes, our lodges blend comfort with adventure. Enjoy guided safaris, gourmet dining, and world-class amenities in the middle of the wild.",
  },
  "wildlife-safaris": {
    title: "Wildlife Safaris",
    images: [
      {
        src: collection2,
        title: "The Big Five",
        description:
          "Get up close with lions, elephants, rhinos, buffalo, and leopards.",
      },
      {
        src: collection3,
        title: "Scenic Landscapes",
        description:
          "Explore breathtaking savannahs, forests, and rivers on guided tours.",
      },
      {
        src: collection1,
        title: "Sunrise Game Drives",
        description: "Witness Africa’s wildlife come alive as the sun rises.",
      },
    ],
    details:
      "Our safaris cater to both first-time explorers and seasoned adventurers, with private game drives, expert-led tours, and authentic cultural experiences.",
  },
  "bush-camping": {
    title: "Bush Camping",
    images: [
      {
        src: collection3,
        title: "Under the Stars",
        description: "Experience the magic of sleeping in the open wilderness.",
      },
      {
        src: collection1,
        title: "Campfire Evenings",
        description:
          "Share stories under the night sky while enjoying traditional meals.",
      },
      {
        src: collection2,
        title: "Wildlife Sightings",
        description:
          "Encounter animals in their natural habitat, just steps from your tent.",
      },
    ],
    details:
      "We provide secure and comfortable camping setups, ensuring you enjoy the raw beauty of nature while staying safe and cozy.",
  },
};

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = destinationsData[id];

  if (!destination) {
    return <h2 className="text-center">Destination not found!</h2>;
  }

  return (
    <section
      className="section collection text-center"
      aria-labelledby="destination-label"
    >
      <div className="container" style={{ paddingTop: "20px" }}>
        <h2 className="h2 section-title" id="destination-label">
          {destination.title}
        </h2>

        <p className="section-text">{destination.details}</p>

        <div className="grid-list">
          {destination.images.map((image, index) => (
            <div className="collection-card" key={index}>
              <h3 className="h3 card-title">{image.title}</h3>
              <figure
                className="card-banner img-holder"
                style={{ "--width": 400, "--height": 300 }}
              >
                <img
                  src={image.src}
                  width="400"
                  height="300"
                  loading="lazy"
                  alt={image.title}
                  className="img-cover"
                />
              </figure>
              <p className="card-text">{image.description}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <Link
            to="/destinations"
            className="btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="span">Back to Destinations</span>
            <ion-icon name="arrow-back" aria-hidden="true"></ion-icon>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationDetail;
