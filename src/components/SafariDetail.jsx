import { Link, useParams } from "react-router-dom";
import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";

const safariDetails = [
  {
    title: "Luxury Safari Experience",
    images: [gallery1, gallery2, gallery3],
    description:
      "Experience the ultimate in comfort, elegance, and wildlife encounters.",
  },
  {
    title: "Big Five Wildlife Adventure",
    images: [gallery2, gallery3, gallery4],
    description:
      "Spot Africa’s legendary Big Five on this thrilling wildlife adventure.",
  },
  {
    title: "Cultural & Tribal Encounters",
    images: [gallery3, gallery4, gallery1],
    description:
      "Immerse yourself in the traditions and heritage of local tribes.",
  },
  {
    title: "Great Migration Safari",
    images: [gallery4, gallery1, gallery2],
    description:
      "Witness the breathtaking migration of millions of wildebeest and zebras.",
  },
];

const SafariDetail = () => {
  const { id } = useParams();
  const safari = safariDetails[id];

  if (!safari) {
    return <h2 className="text-center">Safari not found!</h2>;
  }

  return (
    <section className="section collection text-center" id="safari-detail">
      <div className="container" style={{ paddingTop: "6rem" }}>
        <h2 className="h2 section-title">{safari.title}</h2>
        <p className="section-text">{safari.description}</p>

        <div className="grid-list">
          {safari.images.map((image, index) => (
            <div className="collection-card" key={index}>
              <figure
                className="card-banner img-holder"
                style={{ "--width": 400, "--height": 300 }}
              >
                <img
                  src={image}
                  width="400"
                  height="300"
                  loading="lazy"
                  alt={safari.title}
                  className="img-cover"
                />
              </figure>
              <p className="card-text">{safari.description}</p>
            </div>
          ))}
        </div>

        <div
          className="btn-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "4rem",
          }}
        >
          <Link to="/packages" className="btn">
            <span className="span">Back to Safaris</span>
            <ion-icon name="arrow-back" aria-hidden="true"></ion-icon>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SafariDetail;
