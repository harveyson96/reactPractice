import React, { useEffect, useState } from "react";

const Counter = () => {
  //practice 1: use localstorage to preserve counts
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
    <div className="practice1">
      <label htmlFor="">{count}</label>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
};

export default Counter;
