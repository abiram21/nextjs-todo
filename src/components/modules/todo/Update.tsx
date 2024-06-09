// components/EditTodoForm.tsx
import { Todo } from '@/types/todo';
import React, { ChangeEvent, FormEvent, useState } from 'react';

type EditTodoFormProps = {
  todo: Todo;
  onUpdate: (id: number, title: string) => void;
  onCancel: () => void;
};

const EditTodoForm: React.FC<EditTodoFormProps> = ({ todo, onUpdate, onCancel }) => {
  const [updatedTodo, setUpdatedTodo] = useState(todo);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUpdatedTodo({ ...updatedTodo, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onUpdate(updatedTodo.id, updatedTodo.title);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2 className="text-xl font-semibold">Edit Todo</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={updatedTodo.title}
        onChange={handleChange}
        className="border px-4 py-2 my-2 w-full"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-2">
        Update
      </button>
      <button type="button" onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded mt-2 ml-2">
        Cancel
      </button>
    </form>
  );
};

export default EditTodoForm;
