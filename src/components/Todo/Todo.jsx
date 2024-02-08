import EditTodo from "../EditTodo/EditTodo";

const Todo = ({ todo, deleteTodo, toggleTodo, editTodo, editTask }) => {
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
    <div>
      {/* Render EditTodo component conditionally */}
      {todo.isEditing ? (
        <EditTodo todo={todo} editTask={editTask} />
      ) : (
        <div
          style={{ backgroundColor: priorityColor }}
          className="flex justify-between items-center text-white p-3 rounded mb-4"
        >
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="mr-2 cursor-pointer"
            />
            <p
              className={`${
                todo.completed ? "line-through" : ""
              } cursor-pointer`}
            >
              {taskWithPriority} {/* Display task name with priority */}
            </p>
          </label>
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
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
