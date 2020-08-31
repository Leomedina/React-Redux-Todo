import React, { useState } from 'react';

function TodoForm({ initialFormData = { todo: "" }, handleTodo }) {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData(data => ({
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    const newId = Math.floor(Math.floor(Math.random() * 201))
    event.preventDefault();
    handleTodo("ADD", { id: newId, todo: formData.todo })
    setFormData(initialFormData);
  };

  return (
    <div className="todos">
      <h1>Add Todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="Add Todo here"
          value={formData.todo}
          onChange={handleChange}
          required
        />
        <button>Submit!</button>
      </form>
    </div>
  )
};

export default TodoForm;