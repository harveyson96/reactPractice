import "./App.css";
import ToggleMode from "./components/toggleMode";
import Counter from "./components/counter";
import WindowResizer from "./components/windowResizer";
import React from "react";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <ToggleMode />
        <WindowResizer />
      </header>
    </div>
  );
}

export default App;
