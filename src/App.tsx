import "./App.css";
import { useState } from "react";
import Input from "./components/input";
import ToDoItem from "./components/ToDoItem";
export interface todoItems {
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
        <Input handleInputValue={handleInputValue} addToDoList={addToDoList} />
        <ToDoItem
          toDolist={toDolist}
          handleToggle={handleToggle}
          handleDeleteTodo={handleDeleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
