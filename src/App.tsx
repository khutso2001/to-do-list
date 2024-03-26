import "./App.css";
import { useState } from "react";

interface todoItems {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [toDolist, setToDoList] = useState<todoItems[]>([]);
  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const addToDoList = () => {
    if (inputValue !== "") {
      const newToDo: todoItems = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setToDoList([...toDolist, newToDo]);
      console.log(toDolist);
    }
  };

  const handleDeleteTodo = (id: number) => {
    const filteredTodos = toDolist.filter((todo) => todo.id !== id);
    setToDoList(filteredTodos);
  };

  const handleToggle = (id: number) => {
    const changeToggle = toDolist.map((todo) =>
      todo.id == id ? { ...todo, completed: !todo.completed } : todo
    );
    setToDoList(changeToggle);
  };
  return (
    <div className="App">
      <div className="toDoList">
        <div>
          <input onChange={handleInputValue} className="todoInput" />
          <button type="submit" className="addButton" onClick={addToDoList}>
            add
          </button>
        </div>
        <ul className="toDoItem">
          {toDolist.map((todo) => (
            <li className="toDoItemLi" key={todo.id}>
              <p>{todo.text}</p>
              <li>
                <input
                  className="Checkbox"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                />
                <button
                  className="deleteButton"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Delete
                </button>
              </li>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
