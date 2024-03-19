import "./TaskCard.css";
import Tag from "./Tag";
import delectIcon from "../assets/delete.svg";

const TaskCard = () => {
  return (
    <article className="task_card">
      <p className="task_text">This is a simple text.</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag tagName="HTML" />
          <Tag tagName="CSS" />
          <Tag tagName="JavaScript" />
          <Tag tagName="React" />
        </div>
        <div className="task_delete">
          <img src={delectIcon} className="delete_icon" alt="Delete icon" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
