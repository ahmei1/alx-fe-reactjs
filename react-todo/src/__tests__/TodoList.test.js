import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList';

describe('TodoList Component', () => {
  test('renders the initial empty list state', () => {
    // Renders the TodoList component
    render(<TodoList />);
    
    // Checks that the "No tasks yet." message is displayed
    expect(screen.getByText(/No tasks yet/i)).toBeInTheDocument();
  });

  test('adds a new todo item', () => {
    render(<TodoList />);
    
    // Find the input field
    const inputElement = screen.getByTestId('todo-input');
    // Find the add button
    const addButton = screen.getByTestId('add-button');

    // Type a task into the input
    fireEvent.change(inputElement, { target: { value: 'Buy groceries' } });
    
    // Click the Add button
    fireEvent.click(addButton);

    // Check that the new task is displayed in the list
    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
    
    // Check that the input is cleared
    expect(inputElement.value).toBe('');
  });

  test('removes a todo item', () => {
    render(<TodoList />);
    
    const inputElement = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Add the item
    fireEvent.change(inputElement, { target: { value: 'Task to delete' } });
    fireEvent.click(addButton);
    
    // Find the task text
    const taskText = screen.getByText('Task to delete');
    expect(taskText).toBeInTheDocument();
    
    // Find the dynamically created remove button (we can search for the text)
    const removeButton = screen.getByText('Remove');
    
    // Click the Remove button
    fireEvent.click(removeButton);

    // Check that the task is no longer in the document
    expect(taskText).not.toBeInTheDocument();
  });
});