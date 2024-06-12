import { useState } from "react";
import FlowerName from "./FlowerName"
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const images = [
  { name: "children-exploring-nature (1)", fileName: "children-exploring-nature (1)-stockcake.jpg" },
  { name: "children-exploring-nature", fileName: "children-exploring-nature-stockcake.jpg" },
  { name: "curious-nature-exploration", fileName: "curious-nature-exploration-stockcake.jpg" },
  { name: "dynamic-nature-display", fileName: "dynamic-nature-display-stockcake.jpg" },
  { name: "enchanting-forest-stairs", fileName: "enchanting-forest-stairs-stockcake.jpg" },
  { name: "hiker-examining-nature", fileName: "hiker-examining-nature-stockcake.jpg" },
  { name: "nature-exploration-kids", fileName: "nature-exploration-kids-stockcake.jpg" },
  { name: "nature-reclaims-trolley", fileName: "nature-reclaims-trolley-stockcake.jpg" },
  { name: "nature-sketching-session", fileName: "nature-sketching-session-stockcake.jpg" },
  { name: "nature-study-session", fileName: "nature-study-session-stockcake.jpg" },
  { name: "photographer-in-nature", fileName: "photographer-in-nature-stockcake.jpg" },
  { name: "serene-rubber-plantation", fileName: "serene-rubber-plantation-stockcake.jpg" },
  { name: "urban-garden-view", fileName: "urban-garden-view-stockcake.jpg" },
  { name: "urban-jungle-beauty", fileName: "urban-jungle-beauty-stockcake.jpg" },
  { name: "verdant-pathway-serenity", fileName: "verdant-pathway-serenity-stockcake.jpg" },
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
      <Link to="/Box">
        <div className="btn-primary">
          <span className="arrow">
            {" "}
            <FaArrowLeft />
          </span>
          Go Back
        </div>
      </Link>
    </div>
  );
};

export default Box;