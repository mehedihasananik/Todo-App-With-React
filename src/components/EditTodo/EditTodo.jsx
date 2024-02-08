// EditTodo.js
import React, { useState } from "react";

const EditTodo = ({ todo, editTask }) => {
  const [value, setValue] = useState(todo.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      editTask(value, todo.id, todo.priority);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full mb-4">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditTodo;
