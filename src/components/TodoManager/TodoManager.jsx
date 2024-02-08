// TodoManager.js
import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import { v4 as uuidv4 } from "uuid";
import EditTodo from "../EditTodo/EditTodo";
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

  const completedTodos = todos.filter((todo) => todo.completed);
  const incompleteTodos = todos.filter((todo) => !todo.completed);

  return (
    <div className="bg-gray-400 mt-20 p-8 rounded-lg">
      <TodoForm addTodo={addTodo} />
      {tasksAdded && incompleteTodos.length > 0 && (
        <div>
          <h2>Incomplete Tasks</h2>
          {incompleteTodos.map((todo) => (
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
      {completedTodos.length > 0 && (
        <div>
          <h2>Completed Tasks</h2>
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
