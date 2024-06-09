// components/TodoList.tsx
import { Todo } from '@/types/todo';
import React from 'react';


type TodoListProps = {
  todos: Todo[];
  onEdit: (Todo: Todo) => void;
  onDelete: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onEdit, onDelete }) => {
  return (
    <ul>
      {todos.map((Todo) => (
        <li key={Todo.id} className="border-b py-2">
          <h2 className="text-xl font-semibold">{Todo.title}</h2>
          <button
            onClick={() => onEdit(Todo)}
            className="bg-yellow-500 text-white px-4 py-2 rounded mt-2 mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(Todo.id)}
            className="bg-red-500 text-white px-4 py-2 rounded mt-2"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
