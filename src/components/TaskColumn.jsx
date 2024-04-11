import "./TaskColumn.css";
import PropTypes from "prop-types";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks, status }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" />
        {title}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard key={index} title={task.task} tags={task.tags} />
          )
      )}
    </section>
  );
};

TaskColumn.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
};

export default TaskColumn;
