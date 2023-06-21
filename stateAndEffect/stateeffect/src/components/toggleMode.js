import React, { useEffect, useState } from "react";
import "./toggleMode.css";

const ToggleMode = () => {
  // practice 2: click button to toggle bg color between dark and light
  let [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="practice2">
      <button onClick={handleToggle}>
        {" "}
        {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
      </button>
      <h1> {isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
    </div>
  );
};

export default ToggleMode;
