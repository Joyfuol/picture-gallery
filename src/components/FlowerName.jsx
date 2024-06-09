import PropTypes from "prop-types";

const FlowerName = ({ image }) => {
  return (
    <div className="image-card">
      <img src={`/${image.fileName}`} alt={image.name} />
      <p>{image.name}</p>
    </div>
  );
};

FlowerName.propTypes = {
  image: PropTypes.shape({
    fileName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
export default FlowerName;
