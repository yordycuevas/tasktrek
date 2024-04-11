import "./TaskCard.css";
import Tag from "./Tag";
import PropTypes from 'prop-types';
import delectIcon from "../assets/delete.svg";

const TaskCard = ({title, tags}) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {
            tags.map((tag, index) => (
              <Tag key={index} tagName={tag} selected={true} />
            ))
          }
        </div>
        <div className="task_delete">
          <img src={delectIcon} className="delete_icon" alt="Delete icon" />
        </div>
      </div>
    </article>
  );
};

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TaskCard;
