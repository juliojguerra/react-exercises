import React, { useState } from "react";
import uuid from "uuid";

const ToDoForm = ({ addTask }) => {
  const [currentTask, setCurrentTask] = useState("");

  const handleChange = e => {
    setCurrentTask(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault(); // para hacerlo asincrono
    addTask({ name: currentTask, id: uuid(), isDone: false });
    setCurrentTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Task to add: </label>
      <input type="text" onChange={handleChange} value={currentTask} />
    </form>
  );
};

export default ToDoForm;
