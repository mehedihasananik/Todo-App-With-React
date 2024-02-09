import EditTodo from "../EditTodo/EditTodo"; // Importing EditTodo component

const Todo = ({ todo, deleteTodo, toggleTodo, editTodo, editTask }) => {
  // Determine background color based on priority
  let priorityColor = "blue";
  let color = "white";
  if (todo.priority === "medium") {
    priorityColor = "yellow";
    color = "black";
  } else if (todo.priority === "high") {
    priorityColor = "red";
  }

  // Combine task name and priority for display
  const taskWithPriority = `${todo.task} (${todo.priority})`;

  return (
    <div>
      {/* Render EditTodo component conditionally when editing */}
      {todo.isEditing ? (
        <EditTodo todo={todo} editTask={editTask} />
      ) : (
        <div
          style={{ backgroundColor: priorityColor, color: color }}
          className="flex justify-between items-center text-white p-3 rounded mb-4"
        >
          <label className="flex items-center">
            {/* Checkbox to toggle completion status */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="mr-2 cursor-pointer"
            />
            {/* Displaying task with priority, strike-through if completed */}
            <p
              className={`${
                todo.completed ? "line-through" : ""
              } cursor-pointer`}
            >
              {taskWithPriority}
            </p>
          </label>
          {/* Buttons for editing and deleting todo */}
          <div>
            {!todo.completed && ( // Render "Edit" button only if the task is incomplete
              <button
                className="mx-2 bg-red-500 text-white px-4 py-2"
                onClick={() => editTodo(todo.id)}
              >
                Edit
              </button>
            )}
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
