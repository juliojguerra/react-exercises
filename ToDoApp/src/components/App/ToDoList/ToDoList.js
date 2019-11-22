import React from "react";
import ToDoItem from "../ToDoItem";

const ToDoList = ({ tasks, updateTask }) => {
  console.log({ tasks });

  return (
    <div>
      <h2>ToDo List</h2>
      <ul>
        {tasks.map((task, index) => (
          <ToDoItem key={index} task={task} updateTask={updateTask} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
