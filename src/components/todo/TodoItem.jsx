import React from 'react';

const TodoItem = ({ task, removeTask }) => {
  return (
    <div className="todo-item">
      <input type="checkbox" defaultChecked={task.done} />
      <span className={task.done ? "done" : ""}>{task.title}</span>

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

