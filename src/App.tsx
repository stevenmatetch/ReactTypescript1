import React from "react";
import logo from "./logo.svg";
import Todo from "./components/todo/Todo";
import Color from "./components/color/Color";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Todo></Todo>
      {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
    </div>
  );
}

export default App;
