const Todo = ({ todo, deleteTodo, toggleTodo, editTodo }) => {
  // Determine background color based on priority
  let priorityColor = "blue"; // Default color for low priority
  if (todo.priority === "medium") {
    priorityColor = "yellow";
  } else if (todo.priority === "high") {
    priorityColor = "red";
  }

  // Combine task name and priority for display
  const taskWithPriority = `${todo.task} (${todo.priority})`;

  return (
    <div
      style={{ backgroundColor: priorityColor }} // Apply background color style
      className="flex justify-between items-center text-white p-3 rounded mb-4"
    >
      <p
        onClick={() => toggleTodo(todo.id)}
        className={`${todo.completed ? "line-through" : ""} cursor-pointer`}
      >
        {taskWithPriority} {/* Display task name with priority */}
      </p>
      <div>
        <button
          className="mx-2 bg-red-500 text-white px-4 py-2"
          onClick={() => editTodo(todo.id)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2"
          onClick={() => deleteTodo(todo.id)}
        >
          Del
        </button>
      </div>
    </div>
  );
};

export default Todo;
