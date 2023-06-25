import "./App.css";
import ToggleMode from "./components/toggleMode";
import Counter from "./components/counter";
import WindowResizer from "./components/windowResizer";
import "./components/formVlidation";
import React from "react";
import FormValidation from "./components/formVlidation";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Click Counter</h1>
        <Counter />
        <h1>Background Toggle</h1>
        <ToggleMode />
        <h1>window width Measurement</h1>
        <WindowResizer />
        <h1>Form Validation</h1>
        <FormValidation />
      </header>
    </div>
  );
}

export default App;
