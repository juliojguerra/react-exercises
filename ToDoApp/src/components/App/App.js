import React, { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import DoneList from "./DoneList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);

  const updateTask = task => {
    const updatedTasks = tasks.map(currentTask => {
      if (currentTask.id === task.id) {
        return task;
      }
      return currentTask;
    });
    setTasks(updatedTasks);
  };

  const addTask = task => {
    setTasks(tasks.concat(task));
  };

  useEffect(() => {
    document.title = count;
  });

  return (
    <div>
      <h1>ToDo App</h1>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} updateTask={updateTask} />
      <DoneList tasks={tasks} updateTask={updateTask} />
    </div>
  );
};

export default App;
