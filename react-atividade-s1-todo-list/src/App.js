import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import Form from "./components/Form/Form";

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
  };

  const handleTodo = (itemRemove) => {
    setTodo(todo.filter((element) => element !== itemRemove));
  };

  return (
    <div className="App">
      <div className="App-header">
        <Form addTodo={addTodo} />
        <TodoList todo={todo} handleTodo={handleTodo} />
      </div>
    </div>
  );
}

export default App;
