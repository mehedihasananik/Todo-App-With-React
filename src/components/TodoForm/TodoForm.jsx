import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addTodo({ task, priority });
      setTask("");
      setPriority("low");
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="w-full mb-4">
        <div className="flex">
          <input
            type="text"
            value={task}
            placeholder="Enter task"
            className="outline-none bg-transparent border border-purple-300 px-4 py-2 mt-4 mb-8 w-full md:w-72 text-white"
            onChange={(e) => setTask(e.target.value)}
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className=" bg-black text-white outline-none border border-purple-300 px-4 py-2 mt-4 mb-8 md:w-25 mx-4"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-500 text-white font-bold py-2.5 px-3  mx-3 rounded cursor-pointer"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
