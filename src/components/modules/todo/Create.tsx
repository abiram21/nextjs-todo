// components/CreateTodoForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';

type CreateTodoFormProps = {
  onCreate: (title: string) => void;
};

const CreateTodoForm: React.FC<CreateTodoFormProps> = ({ onCreate }) => {
  const [newTodo, setNewTodo] = useState({ title: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onCreate(newTodo.title);
    setNewTodo({ title: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2 className="text-xl font-semibold">Create Todo</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newTodo.title}
        onChange={handleChange}
        className="border px-4 py-2 my-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
        Create
      </button>
    </form>
  );
};

export default CreateTodoForm;
