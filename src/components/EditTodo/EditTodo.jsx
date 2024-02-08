const EditTodo = ({ todo, editTask }) => {
  const [value, setValue] = useState(todo.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      // Call the editTask function with the updated task value and other necessary parameters
      editTask(value, todo.id, todo.priority);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full mb-4">
        <input
          className="bg-red-400 w-[70%]"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditTodo;
