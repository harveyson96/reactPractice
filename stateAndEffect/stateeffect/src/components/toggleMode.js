import React, { useEffect, useState, useRef } from "react";
import "./toggleMode.css";

const ToggleMode = () => {
  // practice 2: click button to toggle bg color between dark and light
  let [isDarkMode, setIsDarkMode] = useState(false);
  const practice2Ref = useRef(null);
  useEffect(() => {
    const targetElement = practice2Ref.current;
    if(targetElement){
      if (isDarkMode) {
      targetElement.classList.add("dark-mode");
    } else {
      targetElement.classList.remove("dark-mode");
    }
    }
    
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div id="practice2" ref = {practice2Ref}>
      <button onClick={handleToggle}>
        {" "}
        {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
      </button>
      <h1> {isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
    </div>
  );
};

export default ToggleMode;
