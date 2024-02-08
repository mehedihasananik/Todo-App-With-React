const Todo = ({ todo, deleTodo, toggleTodo, editTodo }) => {
  return (
    <div className="flex justify-between items-center bg-green-500 text-white p-3 rounded mb-4">
      <p
        onClick={() => toggleTodo(todo.id)}
        className={`${
          todo.completed
            ? "text-black line-through cursor-pointer "
            : "text-white cursor-pointer "
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
          className=" bg-red-500 text-white px-4 py-2"
          onClick={() => deleTodo(todo.id)}
        >
          Del
        </button>
      </div>
    </div>
  );
};

export default Todo;
