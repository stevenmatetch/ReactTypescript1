import React, { useState } from "react";
import logo from "./logo.svg";
import "./Todo.css";
import { Enumerable } from "sharp-collections";

interface Todo {
  id: number;
  todo: string;
}
let i = 0;
function Todo() {
  const [message, setMessage] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChange = (event: any) => {
    setMessage(event.target.value);
  };

  function Add() {
    const t = {} as Todo;
    t.id = i++;
    console.log(t.id)
    t.todo = message;
    todos.push(t);
    setTodos([...todos]);
  }

  function Remove(event: any) {
    console.log(event.currentTarget.id);
    const enumerable = Enumerable.from(todos);

    const thisTodo = enumerable
      .where((x) => x.id.toString() === event.currentTarget.id)
      .toArray();

    const index = todos.indexOf(thisTodo[0]);
    if (index > -1) {
      todos.splice(index, 1);
    }
    setTodos([...todos]);
  }

  return (
    <div className="App">
      <div>
        <input value={message} onChange={handleChange} />
        <button onClick={() => Add()}>Add</button>
        {todos.map((todo, i) => (
          <div className="task" key={i}>
            <p>{todo.todo}</p>
            <button id={todo.id.toString()} onClick={(e) => Remove(e)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
