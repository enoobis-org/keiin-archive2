import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([newTask, ...tasks]);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={addTask}>Добавить</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
