import React, { useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";
import list from "./data";

const TodoList = () => {
  const [tasks, setTasks] = useState(list);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title: title, done: false }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo">
      <h1>TODO LIST</h1>
      <TodoForm addTask={addTask} />
      <div className="todo-panel">
        <TodoFilter />
        <div className="todo-list">
          {tasks.map((task) => (
            <TodoItem key={task.id} task={task} removeTask={removeTask} />
          ))}
        </div>
        <div>{tasks.filter(task => task.done).length} from { tasks.length}</div>
      </div>
    </div>
  );
};

export default TodoList;
