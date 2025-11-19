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

  const toggleDone = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      } else return task;
    });
    setTasks(newTasks);
  };

  const changeTitle = (id, newTitle) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: newTitle };
      } else return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="todo">
      <h1>TODO LIST</h1>
      <TodoForm addTask={addTask} />
      <div className="todo-panel">
        <TodoFilter />
        <div className="todo-list">
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              removeTask={removeTask}
              toggleDone={toggleDone}
              changeTitle={changeTitle}
            />
          ))}
        </div>
        <div>
          {tasks.filter((task) => task.done).length} from {tasks.length}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
