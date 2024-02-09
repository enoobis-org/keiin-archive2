import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";
import SearchTodo from "./SearchTodo";

const initialTodos = [{ id: 0, title: "Выучить React", done: true }];
let nextId = 1;

const Todo = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [searchedTodo, setSearchedTodo] = useState(null);

  const handleAddTodos = (description) => {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: description,
        done: false,
      },
    ]);
  };

  const handleChangeTodos = (nextTodo) => {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  };

  const handleDeleteTodos = (todoId) => {
    setTodos(todos.filter((t) => t.id !== todoId));
  };
  const handleSearchTodo = (searchId) => {
    const foundTodo = todos.find((t) => t.id === Number(searchId));
    setSearchedTodo(foundTodo);
  };

  const handleShowAll = () => {
    setSearchedTodo(null);
  };

  return (
    <div className="main">
      <AddTodo onAddTodo={handleAddTodos} />
      <SearchTodo onSearch={handleSearchTodo} onShowAll={handleShowAll} />
      <TaskList
        onChangeTodo={handleChangeTodos}
        onDelete={handleDeleteTodos}
        todos={searchedTodo ? [searchedTodo] : todos}
      />
    </div>
  );
};

export default Todo;
