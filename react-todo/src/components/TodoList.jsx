import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: inputValue.trim() }]);
    setInputValue('');
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Add new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        data-testid="todo-input"
      />
      <button onClick={addTodo} data-testid="add-button">Add Todo</button>
      
      <ul data-testid="todo-list">
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)} data-testid={`remove-button-${todo.id}`}>Remove</button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p>No tasks yet.</p>}
    </div>
  );
};

export default TodoList;