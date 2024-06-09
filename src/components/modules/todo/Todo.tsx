// components/Home.tsx
'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Todo } from '@/types/todo';
import CreateTodoForm from './Create';
import TodoList from './List';


const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get<Todo[]>('/api/todo');
    setTodos(response.data);
  };

  const createTodo = async (title: string) => {
    await axios.post('/api/todo', { title });
    fetchTodos();
  };

  const updateTodo = async (id: number, title: string) => {
    await axios.patch(`/api/todo/${id}`, { title});
    setEditingTodo(null);
    fetchTodos();
  };

  const deleteTodo = async (id: number) => {
    await axios.delete(`/api/todo/${id}`);
    fetchTodos();
  };

  return (
    <div className="container mx-auto px-4">
      
      <CreateTodoForm onCreate={createTodo} />

      {editingTodo && (
        <form onSubmit={(e) => { e.preventDefault(); updateTodo(editingTodo.id, editingTodo.title); }} className="mb-4">
          <h2 className="text-xl font-semibold">Edit Todo</h2>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={editingTodo.title}
            onChange={(e) => setEditingTodo({ ...editingTodo, title: e.target.value })}
            className="border px-4 py-2 my-2 w-full"
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-2">
            Update
          </button>
          <button type="button" onClick={() => setEditingTodo(null)} className="bg-gray-500 text-white px-4 py-2 rounded mt-2 ml-2">
            Cancel
          </button>
        </form>
      )}

      <TodoList todos={todos} onEdit={setEditingTodo} onDelete={deleteTodo} />
    </div>
  );
};

export default Home;
