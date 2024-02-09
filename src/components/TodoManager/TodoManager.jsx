import { useState, useEffect } from "react";
import TodoForm from "../TodoForm/TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo/Todo";

const TodoManager = () => {
  // State Management
  const [todos, setTodos] = useState([]);
  const [tasksAdded, setTasksAdded] = useState(false);
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  // useEffect to retrieve todos from local storage on component mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    if (storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  // useEffect to store todos in local storage whenever there's a change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    setTotalTasks(todos.length);
    setCompletedTasks(todos.filter((todo) => todo.completed).length);
  }, [todos]);

  // Object defining priority colors
  const priorityColors = {
    low: "blue",
    medium: "yellow",
    high: "red",
  };

  // Function to add a new todo to the list
  const addTodo = (todo) => {
    const newTodo = {
      id: uuidv4(), // Generating unique ID for todo
      task: todo.task,
      priority: todo.priority,
      completed: false,
      inCompleted: true,
      isEditing: false,
    };
    setTodos([...todos, newTodo]); // Adding new todo to the list
    setTasksAdded(true); // Setting tasksAdded to true
  };

  // Function to delete a todo from the list
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Function to toggle the completion status of a todo
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to toggle the editing status of a todo
  const editTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, isEditing: !todo.isEditing }
        : { ...todo, isEditing: false }
    );
    setTodos(updatedTodos);
  };

  // Function to edit the task details of a todo
  const editTask = (task, id, priority) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task, priority, isEditing: false } : todo
    );
    setTodos(updatedTodos);
  };

  // Filtering todos into completed and incomplete lists
  const completedTodos = todos.filter((todo) => todo.completed);
  const incompleteTodos = todos.filter((todo) => !todo.completed);

  // Sorting incomplete todos based on priority
  const sortedIncompleteTodos = [...incompleteTodos].sort((a, b) => {
    const priorityOrder = { low: 1, medium: 2, high: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div className="bg-[#000000] mt-20 p-8 border-color rounded">
      <div className="flex justify-center ">
        <button className="text-white font-bold px-8 py-2 bg-gradient-to-br from-pink-600 to-orange-500 my-4 rounded-md">
          Todo List
        </button>
      </div>
      <TodoForm addTodo={addTodo} /> {/* Rendering incomplete todos */}
      <div>
        {sortedIncompleteTodos.length > 0 && (
          <h2 className="text-white py-3">Incomplete Tasks :</h2>
        )}

        {sortedIncompleteTodos.map((todo) => (
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
      {/* Rendering completed todos */}
      <div>
        {completedTodos.length > 0 && (
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
      {/* Displaying total tasks and completed tasks if applicable */}
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
