import "./App.css";
import { useState } from "react";

interface toDoItems {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todo, setTodo] = useState<toDoItems[]>([]);

  const handleInputChamge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const addToDoList = () => {
    if (inputValue !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodo([...todo, newTodo]);
      console.log(todo);
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <div>
        <input
          className="input"
          type="text"
          placeholder="write here ..."
          onChange={handleInputChamge}
        />
        <button type="submit" onClick={addToDoList}>
          add
        </button>

        <ul>
          {todo.map((item) => (
            <li key={item.id}>
              <span
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                {item.text}
              </span>
              <button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
