import React, { useState } from "react";
import "../App.css";
function TaskList(props) {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <Task
              todo={todo}
              onChange={props.onChangeTodo}
              onDelete={props.onDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

const Task = ({ todo, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  let todoContent;

  if (isEditing) {
    todoContent = (
      <>
        <input
          type="text"
          value={todo.title}
          onChange={(e) => {
            onChange({ ...todo, title: e.target.value });
          }}
        />
        <button className="btnSave" onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        <p className="todoText">{todo.title}</p>
        <div className="btns">
          <button className="btnEdit" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className="btnDelete" onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="AddedTodo">
      <label htmlFor="" className="AddedTodo-in">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={(e) => onChange({ ...todo, done: e.target.checked })}
        />
        {todoContent}
      </label>
    </div>
  );
};
export default TaskList;
