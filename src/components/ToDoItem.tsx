import React from "react";
import interfaceTodo from "../App";
import "./ToDoItem.css";
interface Props {
  handleToggle: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
  toDolist: any;
}
export default function ToDoItem(props: Props) {
  const { toDolist, handleToggle, handleDeleteTodo } = props;
  return (
    <div>
      <ul className="toDoItem">
        {toDolist.map((todo: any) => (
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
  );
}
