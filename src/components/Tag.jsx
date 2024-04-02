import PropTypes from "prop-types";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#f16529" },
    CSS: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
  selectTag: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

export default Tag;
