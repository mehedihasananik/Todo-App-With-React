const Todo = ({ todo, deleTodo, toggleTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleTodo(todo.id)}
        className={`${todo.completed ? "completed" : "incompleted"}`}
      >
        {todo.task}
      </p>
      <div>
        <button onClick={() => editTodo(todo.id)}>Edit</button>
        <button onClick={() => deleTodo(todo.id)}>Del</button>
      </div>
    </div>
  );
};

export default Todo;
