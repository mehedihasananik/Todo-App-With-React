import { useState } from "react";

const EditTodo = ({ todo, editTask }) => {
  // State variable to manage the value of the edited task
  const [value, setValue] = useState(todo.task);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      editTask(value, todo.id, todo.priority);
      todo.isEditing = false;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full mb-4">
        <div className="flex justify-between">
          {/* Input field for editing task */}
          <input
            className="bg-red-400 w-[90%] py-3 text-white outline-none px-3"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)} // Handling input change
          />
          {/* Button to submit edited task */}
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
