import React, { useState } from 'react';

// Initial data for the list
const initialTodos = [
  { id: 1, text: 'Learn React Testing Library', completed: false },
  { id: 2, text: 'Master React Query', completed: true },
];

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const todo = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false,
    };
    setTodos([...todos, todo]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>My Todo List</h1>
      
      {/* Add Todo Form */}
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="New todo item..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          data-testid="todo-input" // For testing
        />
        <button type="submit" data-testid="add-button">Add Todo</button>
      </form>

      {/* Todo List */}
      <ul data-testid="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ 
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                margin: '5px 0'
            }}
            data-testid={`todo-item-${todo.id}`} // For testing
          >
            {todo.text}
            <button 
                onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}
                data-testid={`delete-button-${todo.id}`} // For testing
                style={{ marginLeft: '10px' }}
            >
                Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;