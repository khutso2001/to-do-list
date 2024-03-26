import React from "react";
import "./Input.css";
interface Props {
  handleInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addToDoList: () => void;
}
export default function Input(props: Props) {
  const { handleInputValue, addToDoList } = props;
  return (
    <div className="input">
      <input onChange={handleInputValue} className="todoInput" />
      <button type="submit" className="addButton" onClick={addToDoList}>
        add
      </button>
    </div>
  );
}
