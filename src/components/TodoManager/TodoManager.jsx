import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import { v4 as uuidv4 } from "uuid";
import EditTodo from "../EditTodo/EditTodo";
import Todo from "../Todo/Todo";

const TodoManager = () => {
  const [todos, setTodos] = useState([]);

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
        completed: false,
        isEditing: false,
        priority: todo.priority,
      },
    ]);
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
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id, priority) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task, priority, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  return (
    <div className="bg-gray-400 mt-20 p-8 rounded-lg">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodo key={todo.id} todo={todo} editTask={editTask} />
        ) : (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            priorityColors={priorityColors} // Pass priorityColors as prop
          />
        )
      )}
    </div>
  );
};

export default TodoManager;
