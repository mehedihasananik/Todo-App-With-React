import { useState } from "react";

const EditTodo = ({ todo, editTask }) => {
  const [value, setValue] = useState(todo.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      editTask(value, todo.id);
    }
  };
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit} className="w-full mb-4">
        <input
          type="text"
          value={value}
          placeholder="what you are thinking?"
          className="outline-none bg-transparent border border-purple-300 px-4 py-2 mt-4 mb-8 w-72 text-white"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 text-white border-none py-2 px-3 rounded cursor-pointer"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditTodo;
