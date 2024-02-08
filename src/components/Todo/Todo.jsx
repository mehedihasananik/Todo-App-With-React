const Todo = ({ todo, deleteTodo, toggleTodo, editTodo }) => {
  // Determine background color based on priority
  let priorityColor = "blue"; // Default color for low priority
  if (todo.priority === "medium") {
    priorityColor = "yellow";
  } else if (todo.priority === "high") {
    priorityColor = "red";
  }

  return (
    <div
      style={{ backgroundColor: priorityColor }} // Apply background color style
      className="flex justify-between items-center text-white p-3 rounded mb-4"
    >
      <p
        onClick={() => toggleTodo(todo.id)}
        className={`${
          todo.completed
            ? "text-black line-through cursor-pointer"
            : "cursor-pointer"
        }`}
      >
        {todo.task}
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
