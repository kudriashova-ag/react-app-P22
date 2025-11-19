import React, { useState } from "react";

const TodoItem = ({ task, removeTask, toggleDone, changeTitle }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [error, setError] = useState(false);

  const saveTask = (e) => { 
    
    if (e.code === "Enter") { 
      if (newTitle === "") { 
        setError(true);
        return;
      }
      changeTitle(task.id, newTitle);
      setIsEdit(false)
      setError(false)
    }
    
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        defaultChecked={task.done}
        onClick={() => toggleDone(task.id)}
      />

      {isEdit ? (
        <>
          <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={saveTask}
        />
          {error && <div className="error">Title is required</div>}
        </>
      ) : (
        <span
          className={task.done ? "done" : ""}
          onClick={() => setIsEdit(true)}
        >
          {task.title}
        </span>
      )}

      <button className="remove-btn" onClick={() => removeTask(task.id)}>
        Remove
      </button>
    </div>
  );
};

export default TodoItem;

// деструктурізація
// створення змінних на основі масива чи об'єкта

// const [data, , year] = [13, 11, 2025];
// console.log(year);

// const admin = {
//   name: 'Tom',
//   age: 25,
//   car: true
// }

// // { name, age, car } = admin

// const showUserInfo = ({ name, age, car })=>{
//   console.log(name, age, car);
// }

// showUserInfo(admin)
