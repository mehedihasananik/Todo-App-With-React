import React, { useState, useEffect } from "react";
import TodoForm from "../TodoForm/TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo/Todo";

const TodoManager = () => {
  const [todos, setTodos] = useState([]);
  const [tasksAdded, setTasksAdded] = useState(false);
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    if (storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    // Update total and completed tasks counts
    setTotalTasks(todos.length);
    setCompletedTasks(todos.filter((todo) => todo.completed).length);
  }, [todos]);

  const priorityColors = {
    low: "blue",
    medium: "yellow",
    high: "red",
  };

  const addTodo = (todo) => {
    const newTodo = {
      id: uuidv4(),
      task: todo.task,
      priority: todo.priority,
      completed: false,
      inCompleted: true,
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
    setTasksAdded(true);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, isEditing: !todo.isEditing }
        : { ...todo, isEditing: false }
    );
    setTodos(updatedTodos);
  };

  const editTask = (task, id, priority) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task, priority, isEditing: false } : todo
    );
    setTodos(updatedTodos);
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

      <div>
        {incompleteTodos.length && (
          <h2 className="text-white py-3">Incomplete Tasks :</h2>
        )}

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

      <div>
        {completedTodos.length && (
          <h2 className="text-white py-3">Completed Tasks :</h2>
        )}

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

      {totalTasks > 0 && (
        <div className="text-white">
          Total Tasks: {totalTasks}
          <br />
          {completedTodos.length > 0 && <> Completed Tasks: {completedTasks}</>}
        </div>
      )}
    </div>
  );
};

export default TodoManager;
