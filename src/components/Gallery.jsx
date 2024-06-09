import { useState } from "react";
import FlowerName from "./FlowerName";

const images = [
  { name: "Home beauty flower", fileName: "karolina-grabowska.jpg" },
  { name: "Shelve flower vase", fileName: "kpaukshtite.jpg" },
  { name: "Perfect pink", fileName: "jill-wellington.jpg" },
  { name: "Love bond", fileName: "hazardos.jpg" },
  { name: "Clear love", fileName: "hngstrm.jpg" },
  { name: "Secret-garden", fileName: "secret-garden-1.jpg" },
  { name: "Proposal flower", fileName: "secret-garden-2.jpg" },
  { name: "Perfect beauty", fileName: "secret-garden-3.jpg" },
  { name: "Room beauty", fileName: "secret-garden-4.jpg" },
  { name: "Peachie love", fileName: "nubikini.jpg" },
];

const Gallery = () => {
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
    </div>
  );
};

export default Gallery;
