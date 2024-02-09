import React, { useState } from "react";
import "../App.css";

function AddTodo(props) {
  const [title, setTitle] = useState("");

  return (
    <div className="addTodos">
      <input
        className="AddTodo__input"
        type="text"
        placeholder="What task do you want to Add?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="btnAdd"
        onClick={() => {
          setTitle("");
          props.onAddTodo(title);
        }}
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTodo;
