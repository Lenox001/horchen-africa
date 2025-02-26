import { Link } from "react-router-dom";
import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";

const galleryItems = [
  {
    title: "Luxury Safari Experience",
    image: gallery1,
  },
  {
    title: "Big Five Wildlife Adventure",
    image: gallery2,
  },
  {
    title: "Cultural & Tribal Encounters",
    image: gallery3,
  },
  {
    title: "Great Migration Safari",
    image: gallery4,
  },
];

const Packages = () => {
  return (
    <section className="gallery" id="gallery">
      <ul className="gallery-list">
        {galleryItems.map((item, index) => (
          <li key={index}>
            <div
              className="gallery-card has-bg-image has-after"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="card-content">
                <h3 className="h3 card-title">{item.title}</h3>

                {/* ✅ Updated Link to pass unique ID */}
                <Link to={`/safari-detail/${index}`} className="btn-link">
                  <span className="span">View More</span>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Packages;
