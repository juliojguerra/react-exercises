import React from "react";

const ToDoItem = ({ task, updateTask }) => {
  const handleChange = e => {
    updateTask({ ...task, isDone: e.target.checked });
  };

  return (
    <li style={{ listStyleType: "none" }}>
      <input type="checkbox" onChange={handleChange} checked={task.isDone} />
      {task.name}
    </li>
  );
};

export default ToDoItem;
