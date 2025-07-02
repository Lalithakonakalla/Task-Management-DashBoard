import React from 'react';

const TaskStats = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === 'completed').length;
  const pending = tasks.filter(t => t.status !== 'completed').length;

  return (
    <div className="task-stats">
      <p><strong>Total Tasks:</strong> {total}</p>
      <p><strong>Completed:</strong> {completed}</p>
      <p><strong>Pending:</strong> {pending}</p>
    </div>
  );
};

export default TaskStats;
