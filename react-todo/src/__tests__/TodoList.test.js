import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // Test 1: Initial Render
  test('renders the initial list of todos', () => {
    render(<TodoList />);
    
    // Check for the heading
    expect(screen.getByText(/My Todo List/i)).toBeInTheDocument();

    // Check for the two initial items
    expect(screen.getByText(/Learn React Testing Library/i)).toBeInTheDocument();
    expect(screen.getByText(/Master React Query/i)).toBeInTheDocument();
  });

  // Test 2: Adding a new todo
  test('allows user to add a new todo item', () => {
    render(<TodoList />);
    const inputElement = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    const newTodoText = 'Walk the dog';

    // 1. Simulate user typing
    fireEvent.change(inputElement, { target: { value: newTodoText } });
    expect(inputElement.value).toBe(newTodoText);

    // 2. Simulate form submission
    fireEvent.click(addButton);

    // 3. Check if the new item is now in the document
    expect(screen.getByText(newTodoText)).toBeInTheDocument();
    
    // 4. Check if the input field is cleared
    expect(inputElement.value).toBe('');
  });

  // Test 3: Toggling todo completion status
  test('allows user to toggle a todo item to completed', () => {
    render(<TodoList />);
    // Initial todo: "Learn React Testing Library" has id 1
    const initialTodo = screen.getByText(/Learn React Testing Library/i);
    
    // Check that it's initially not completed (no line-through style)
    expect(initialTodo).not.toHaveStyle('text-decoration: line-through');

    // Simulate clicking the todo item to toggle
    fireEvent.click(initialTodo);

    // Check that the item is now completed (has line-through style)
    expect(initialTodo).toHaveStyle('text-decoration: line-through');
  });

  // Test 4: Deleting a todo
  test('allows user to delete a todo item', () => {
    render(<TodoList />);
    const todoText = /Master React Query/i;
    
    // 1. Ensure the todo is initially present
    let todoItem = screen.getByText(todoText);
    expect(todoItem).toBeInTheDocument();
    
    // 2. Find the delete button for the item (it's the second initial item, has id 2)
    const deleteButton = screen.getByTestId('delete-button-2');

    // 3. Simulate clicking the delete button
    fireEvent.click(deleteButton);

    // 4. Check that the item is no longer in the document
    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
  });
});