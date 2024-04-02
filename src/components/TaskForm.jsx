import { useState } from "react";

import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checktag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = (taskData.tags = taskData.tags.filter(
        (item) => item !== tag
      ));
      setTaskData((prevData) => {
        return {
          ...prevData,
          tags: filterTags,
        };
      });
    } else {
      setTaskData((prevData) => {
        return {
          ...prevData,
          tags: [...prevData.tags, tag],
        };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          className="task_input"
          placeholder="Add a task..."
          onChange={handleChange}
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checktag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checktag("CSS")}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checktag("JavaScript")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checktag("React")}
            />
          </div>
          <div>
            <select
              name="status"
              className="task_status"
              onChange={handleChange}
            >
              <option value="to do">To Do</option>
              <option value="in progress">In Progress</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
