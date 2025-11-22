import React, { useEffect, useState } from "react";
import "./Theme.css";

const Theme = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light");
  }, []);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <div
        className="block"
        style={{
          backgroundColor: theme === "dark" ? "black" : "white",
          color: theme === "dark" ? "white" : "black",
        }}
      >
        Lorem ipsum dolor sit amet.
      </div>
    </div>
  );
};

export default Theme;
