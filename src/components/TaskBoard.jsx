import React from 'react';

const statuses = ['pending', 'in-progress', 'completed'];

const TaskBoard = ({ tasks, updateStatus }) => {
  return (
    <div className="task-board">
      {statuses.map(status => (
        <div className="task-column" key={status}>
          <h2>{status.toUpperCase()}</h2>
          {tasks.filter(task => task.status === status).map(task => (
            <div className={`task-card ${task.priority}`} key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p><strong>Assignee:</strong> {task.assignee}</p>
              <button onClick={() => updateStatus(task.id, getNextStatus(status))}>Move</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const getNextStatus = (status) => {
  if (status === 'pending') return 'in-progress';
  if (status === 'in-progress') return 'completed';
  return 'completed';
};

export default TaskBoard;
