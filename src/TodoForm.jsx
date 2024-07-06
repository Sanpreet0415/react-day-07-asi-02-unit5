// TodoForm.js

import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoForm = () => {
  const [todoText, setTodoText] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: todoText.trim()
      };
      addTodo(newTodo);
      setTodoText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter a new todo..."
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
