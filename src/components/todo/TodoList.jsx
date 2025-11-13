import React from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";
import list from "./data";

const TodoList = () => {
  return (
    <div className="todo">
      <h1>TODO LIST</h1>
      <TodoForm />
      <div className="todo-panel">
        <TodoFilter />
        <div className="todo-list">
          {list.map((task) => (
              <TodoItem key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
