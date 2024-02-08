import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
    }
    setValue("");
  };
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit} className="TodoForm">
        <input
          type="text"
          value={value}
          placeholder="what you are thinking?"
          className="todo-input"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
