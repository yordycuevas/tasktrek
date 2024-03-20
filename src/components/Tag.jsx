import PropTypes from "prop-types";
import "./Tag.css";

const Tag = ({ tagName, selectTag }) => {
  return (
    <button type="button" className="tag" onClick={() => selectTag(tagName)}>
      {tagName}
    </button>
  );
};

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
  selectTag: PropTypes.func.isRequired,
};

export default Tag;
