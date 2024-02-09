Project Name: Todo Manager

Description:
The Todo Manager project is a simple web application built using React.js that allows users to manage their tasks by adding, editing, and deleting todos. It provides functionality to prioritize tasks and mark them as completed. The application stores todos locally in the browser's storage to maintain persistence across sessions.

Project Structure:

- App: The main App component renders the TodoManager component, serving as the entry point of the application.

- TodoManager: This component manages the overall functionality of the Todo application. It handles state management for todos, including adding, deleting, toggling completion status, and editing todos. The component also renders the TodoForm component for adding new todos and renders lists of incomplete and completed todos using the Todo component.

- TodoForm: The TodoForm component is responsible for rendering a form where users can input new tasks and select their priority levels. It includes state management for task and priority inputs and handles form submission to add new todos.

- Todo: The Todo component represents an individual todo item. It renders each todo with options to toggle completion status, edit the task, and delete the todo. It also displays the priority of the task with different background colors based on priority levels.

- EditTodo: This component provides functionality to edit the task of a todo item. It renders an input field where users can modify the task and submit the changes. It handles state management for the edited task value and form submission.

- Technologies Used:

React.js: JavaScript library for building user interfaces.
useState: React Hook for managing component state.
useEffect: React Hook for performing side effects in function components.
uuid: Library for generating unique identifiers.
Tailwind CSS: A utility-first CSS framework for styling web applications.

Clone the project repository from (https://github.com/mehedihasananik/Todo-App-With-React.git).

- Navigate to the project directory in your terminal.
- Install dependencies using npm install.
- Run the application using npm run dev.

Contributor:

- Mehedi Hasan Anik
- portfolio:https://mehedi-anik.vercel.app
- github: https://github.com/mehedihasananik
