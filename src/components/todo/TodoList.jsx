import React, { act, useContext, useEffect, useReducer, useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";
import list from "./data";
import TaskReducer from "../../reducers/TaskReducer";
import I18nContext from "../../contexts/I18nContext";

const TodoList = () => {
  const [tasks, dispatch] = useReducer(TaskReducer, list);
  const [activeFilter, setActiveFilter] = useState("All tasks");
  const { currentTexts } = useContext(I18nContext);
  

  useEffect(() => {
    const tasksFromStorage = localStorage.getItem("tasks");
    if (tasksFromStorage) {
      dispatch({
        type: "fill",
        payload: JSON.parse(tasksFromStorage),
      });
    }
    
    const filterFromStorage = localStorage.getItem("filter");
    if (filterFromStorage) {
      setActiveFilter(filterFromStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("filter", activeFilter);
  }, [activeFilter]);

  const addTask = (title) => {
    dispatch({
      type: "add",
      payload: title,
    });
  };

  const removeTask = (id) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  };

  const toggleDone = (id) => {
    dispatch({
      type: "changeDone",
      payload: id,
    });
  };

  const changeTitle = (id, newTitle) => {
    dispatch({
      type: "changeTitle",
      payload: { id, title: newTitle },
    });
  };

  const filtersData = {
    "All tasks": () => true,
    done: (task) => task.done,
    todo: (task) => !task.done,
  };

  return (
    <div className="todo">
      <h1>{currentTexts.todoList}</h1>
      <TodoForm addTask={addTask} />
      <div className="todo-panel">
        <TodoFilter
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
          filtersData={filtersData}
        />
        <div className="todo-list">
          {tasks.filter(filtersData[activeFilter]).map((task) => (
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
