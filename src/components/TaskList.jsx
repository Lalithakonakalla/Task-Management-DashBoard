import React from 'react';

const TaskList = ({ tasks, updateStatus }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <div className={`task-card ${task.priority}`} key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p><strong>Priority:</strong> {task.priority}</p>
          <p><strong>Assignee:</strong> {task.assignee}</p>
          <select value={task.status} onChange={e => updateStatus(task.id, e.target.value)}>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
