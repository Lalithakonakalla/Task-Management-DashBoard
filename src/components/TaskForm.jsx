import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [assignee, setAssignee] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !assignee) return;
    onSubmit({ title, description, priority, assignee, status: 'pending' });
    setTitle('');
    setDescription('');
    setPriority('medium');
    setAssignee('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
      <input value={assignee} onChange={e => setAssignee(e.target.value)} placeholder="Assignee" required />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
