import React from "react";
import ToDoItem from "../ToDoItem";

const DoneList = ({ tasks, updateTask }) => {
  const doneTasks = tasks.filter(task => {
    return task.isDone;
  });

  return (
    <div>
      <h2>Done List</h2>
      <ul>
        {doneTasks.map(task => (
          <ToDoItem key={task.id} task={task} updateTask={updateTask} />
        ))}
      </ul>
    </div>
  );
};

export default DoneList;
