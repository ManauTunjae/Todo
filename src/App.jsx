import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  let todoList = [
    {
      title: "köpa mat",
      content: "Jag behöver handla för att laga julbord.",
      done: false,
      id: crypto.randomUUID(),
    },
    {
      title: "plugga",
      content: "Idag måste jag repetera props.",
      done: true,
      id: crypto.randomUUID(),
    },
    {
      title: "träna",
      content: "Jag ska träna idag - rygg",
      done: false,
      id: crypto.randomUUID(),
    },
    {
      title: "todo list",
      content: "Jag ska todo list med React.",
      done: false,
      id: crypto.randomUUID(),
    },
    {
      title: "köp banan",
      content: "Jag ska göra smoothie",
      done: false,
      id: crypto.randomUUID(),
    },
  ];
  
  const [show, setShow] = useState(todoList);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // Den här funktionen ska lägga till ny todo i lista.
  function createTodo() {
    let newTodo = {
      title: title,
      content: content,
      done: false,
      id: crypto.randomUUID(),
    };
    setShow([...show, newTodo]);
  }

  function deleteTodo (id) {
      let newTodo = show.filter(todo => {
        return todo.id !== id
      })
      console.log(newTodo)
      setShow(newTodo)
  }
  return (
    <>
      <h1>Todo List</h1>
      <div id="new-todo">
        <input
          type="text"
          placeholder="title"
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="content"
          required
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div>
      <button onClick={() => createTodo()}>Lägg till</button>
      <TodoList todolist={show} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
