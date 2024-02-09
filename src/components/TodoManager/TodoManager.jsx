import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo/Todo";

const TodoManager = () => {
  const [todos, setTodos] = useState([]);
  const [tasksAdded, setTasksAdded] = useState(false);

  const priorityColors = {
    low: "blue",
    medium: "yellow",
    high: "red",
  };

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo.task,
        priority: todo.priority,
        completed: false,
        isEditing: false,
      },
    ]);

    // Set tasksAdded to true after adding a task
    setTasksAdded(true);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isEditing: !todo.isEditing }
          : { ...todo, isEditing: false }
      )
    );
  };

  const editTask = (task, id, priority) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, priority, isEditing: false } : todo
      )
    );
  };

  const completedTodos = todos.filter((todo) => todo.completed);
  const incompleteTodos = todos.filter((todo) => !todo.completed);

  return (
    <div className="bg-[#000000] mt-20 p-8 border-color rounded">
      <div className="flex justify-center ">
        <button className="text-white font-bold px-8 py-2 bg-gradient-to-br from-pink-600 to-orange-500 my-4 rounded-md">
          Todo List
        </button>
      </div>
      <TodoForm addTodo={addTodo} />
      {tasksAdded && incompleteTodos.length > 0 && (
        <div>
          <h2 className="text-white py-3">Incomplete Tasks :</h2>
          {incompleteTodos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
              editTask={editTask}
              priorityColors={priorityColors}
            />
          ))}
        </div>
      )}
      {completedTodos.length > 0 && (
        <div>
          <h2 className="text-white py-3">Completed Tasks :</h2>
          {completedTodos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
              priorityColors={priorityColors}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoManager;
