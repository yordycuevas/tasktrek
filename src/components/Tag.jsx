import PropTypes from "prop-types";
import "./Tag.css";

const Tag = ({tagName}) => {
  return <button className="tag">{tagName}</button>;
};

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
};

export default Tag;
