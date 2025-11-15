import React, { useState } from "react";
import User from "./User";

const First = () => {
  // стан, ф-ція яка оновлює стан
  // при оновлені стану - оновлюється компонент і відображаються нові данні
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <h1>First</h1>
      <User />

      <div>
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
      </div>
      <hr />
      <div>
        <button onClick={toggleVisible}>Show</button>
        {visible && (
          <div style={{ color: "red" }}>Lorem ipsum dolor sit amet.</div>
        )}
      </div>
    </div>
  );
};

export default First;
