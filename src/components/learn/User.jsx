import React, { useState } from "react";

const User = () => {
  const [user, setUser] = useState({
    name: "Tom",
    age: 25,
  });
    
  const [name, setName] = useState(user.name);

  const changeAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  const changeHandler = (e) => { 
    setName(e.target.value);
  }

  const changeUserName = () => { 
    setUser({...user, name: name})
  }

  return (
    <div>
      <h2>
        Name: {user.name}, age: {user.age}
      </h2>
      <button onClick={changeAge}>Change age</button>
      <div>
        <input type="text" value={name} onChange={changeHandler} />
        <button onClick={changeUserName}>save</button>
      </div>
    </div>
  );
};

export default User;

// const user = { name: "Tom", age: 25 };

// const user2 = { ...user, age: user.age + 1 }

// const user2 = { name: "Tom", age: 25, age: 30 };
