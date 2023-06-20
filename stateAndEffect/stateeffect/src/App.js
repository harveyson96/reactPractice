import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
function App() {
  let [count, setCount] = useState(() => {
    const localCount = localStorage.getItem("count");
    return localCount ? parseInt(localCount, 10) : 0;
  });
  useEffect(() => {
    localStorage.setItem("count", count.toString());
  });
  const handleMinus = () => {
    setCount(count - 1);
  };
  const handlePlus = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor="">{count}</label>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
      </header>
    </div>
  );
}

export default App;
