import { useState } from "react";
import FlowerName from "./FlowerName";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";

const images = [
  { name: "Elegant-floral-art", fileName: "elegant-floral-art-stockcake.jpg" },
  { name: "tropical-leaf-pattern", fileName: "tropical-leaf-pattern-stockcake.jpg" },
  { name: "floral-pattern-elegance", fileName: "floral-pattern-elegance-stockcake.jpg" },
  { name: "floral-pattern-elegance(2)", fileName: "floral-pattern-elegance-stockcake (2).jpg" },
  { name: "rose-pattern-elegance", fileName: "rose-pattern-elegance-stockcake.jpg" },
  { name: "floral-wallpaper-design", fileName: "floral-wallpaper-design-stockcake.jpg" },
  { name: "elegant-floral-wallpaper (2) (1)", fileName: "elegant-floral-wallpaper-stockcake (2) (1).jpg" },
  { name: "elegant-paisley-print", fileName: "elegant-paisley-print-stockcake.jpg" },
  { name: "elegant-floral-wallpaper", fileName: "elegant-floral-wallpaper-stockcake.jpg" },
  { name: "autumn-leaves-pattern", fileName: "autumn-leaves-pattern-stockcake.jpg" },
  { name: "floral-decor-elegance", fileName: "floral-decor-elegance-stockcake.jpg" },
  { name: "floral-blessing-art", fileName: "floral-blessing-art-stockcake (1).jpg" },
  { name: "elegant-rose-pattern", fileName: "elegant-rose-pattern-stockcake.jpg" },
  { name: "floral-vintage-wallpaper (1)", fileName: "floral-vintage-wallpaper-stockcake.jpg" },
  { name: "floral-wallpaper-elegance", fileName: "floral-wallpaper-elegance-stockcake.jpg" },
];

const Box = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredImages = images.filter((image) =>
    image.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="gallery">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="image-grid">
        {filteredImages.map((image) => (
          <FlowerName key={image.fileName} image={image} />
        ))}
      </div>
      <div className="galleryOthers">
      <Link to="/">
          <div className="btn-primary">
            <span className="arrow">
              {" "}
              <FaArrowLeft />
            </span>
            Go Back
          </div>
        </Link>
        <Link to="/nature">
          <div className="btn-primary">
            <span className="arrow">
              {" "}
              <FaCircleArrowRight />
            </span>
            View More
          </div>
        </Link>
    </div>
      </div>
  );
};

export default Box;
