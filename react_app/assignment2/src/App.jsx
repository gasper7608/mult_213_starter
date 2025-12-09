import './App.css';
import { useState } from 'react';
import viteLogo from '/vite.svg';
import { Header } from './Header';
import reactLogo from './assets/react.svg';
import { Todo } from './TodoList';
import { Card } from './card';
import { Footer } from './footer';

// code from lessons and React, but took some into ToDoList component
function App() {
  // Define the TODO models
  const [todos, setTodos] = useState([]);

  // Build up the UI element for the TODOs
  let listContent = <></>;

  if (todos.length == 0) {
    listContent = (
      <li key="empty" className="todo-list__empty">
        No tasks yet. Add your first TO-DO above.
      </li>
    );
  } else {
    listContent = todos.map((item, i) => {
      return (
        <Todo item={item} i={i} />
      );
    });
  }

  // Set up add new TODO form handler
  const handleFormSubmit = (formData) => {
    const titleField = formData.get('title');
    console.log(`Handling new TODO: ${titleField}`);

    const newTodo = {
      name: titleField,
    };

    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
  };

  return (
    <>
      <Header title="Welcome to my website!" message="Thanks for visiting my site." />

      <main>
        <section>
          <form id="todo-form" action={handleFormSubmit}>
            <input
              className="todo-form__input"
              id="todo-input"
              name="title"
              type="text"
              placeholder="Add a new task…"
              autoComplete="off"
              required
            />
            <button className="todo-form__button" type="submit">
              Add
            </button>
          </form>
        </section>

        <section>
          <h2>My TO-DOs:</h2>
          <ul className="todo-list" id="todo-list">
            {listContent}
          </ul>
        </section>

        <section>
          <h2>Example Card</h2>
          <Card
            title="My Card Title"
            subtitle="My Card Subtitle"
            content="This is the content of my card."
            image="https://via.placeholder.com/400x200?text=Example+Image"
          />
        </section>
      </main>

      <Footer message="Contact me at contact@mywebsite.com" />

      <footer>
        <p className="read-the-docs">
          Click on the Vite (the build tool) and React (the frontend framework) logos to learn more
        </p>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </footer>
    </>
  );
}

export default App;
