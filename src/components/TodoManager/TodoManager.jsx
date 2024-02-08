import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import { v4 as uuidv4 } from "uuid";
import EditTodo from "../EditTodo/EditTodo";
import Todo from "../Todo/Todo";

const TodoManager = () => {
  const [todos, setTodoes] = useState([]);

  const addTodo = (todo) => {
    setTodoes([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  console.log(todos);

  const deleTodo = (id) => {
    setTodoes(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodoes(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodoes(
      todos.map((todo) =>
        todo.id == id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodoes(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
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
            deleTodo={deleTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoManager;
