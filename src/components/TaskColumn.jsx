import "./TaskColumn.css";
import PropTypes from 'prop-types';
import TaskCard from './TaskCard'; 

const TaskColumn = ({ title, icon }) => {
    return (
        <section className="task_column">
            <h2 className="task_column_heading">
                <img className="task_column_icon" src={icon} alt="" />
                {title}
            </h2>
            <TaskCard /> 
        </section>
    );
};

TaskColumn.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};



export default TaskColumn;
