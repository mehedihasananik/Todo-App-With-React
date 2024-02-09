import { useState } from "react";

const EditTodo = ({ todo, editTask }) => {
  const [value, setValue] = useState(todo.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      // Call the editTask function with the updated task value and other necessary parameters
      editTask(value, todo.id, todo.priority);
      // Exit editing mode
      todo.isEditing = false;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full mb-4">
        <div className="flex justify-between">
          <input
            className="bg-red-400 w-[90%] py-3 text-white outline-none px-3"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="bg-gradient-to-br from-pink-600 to-orange-500 text-white px-4"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTodo;
