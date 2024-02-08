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
    <div>
      <form onSubmit={handleSubmit} className="w-full mb-4">
        <input
          type="text"
          value={task}
          placeholder="Enter task"
          className="outline-none bg-transparent border border-purple-300 px-4 py-2 mt-4 mb-8 w-72 text-white"
          onChange={(e) => setTask(e.target.value)}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="outline-none bg-transparent border border-purple-300 px-4 py-2 mt-4 mb-8 w-72 text-white"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          type="submit"
          className="bg-green-500 text-white border-none py-2 px-3 rounded cursor-pointer"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
