// TaskCard.js

import React from 'react';

const TaskCard = ({ task }) => {
  const { taskId, name, description, startDate, endDate, assignedMember, state, hoursWorked } = task;

  return (
    <div style={styles.taskCard}>
      <h3 style={styles.taskName}>{name}</h3>
      <p><strong>Task ID:</strong> {taskId}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Start Date:</strong> {startDate}</p>
      <p><strong>End Date:</strong> {endDate}</p>
      <p><strong>Assigned Member:</strong> {assignedMember}</p>
      <p><strong>State:</strong> {state}</p>
      <p><strong>Hours Worked:</strong> {hoursWorked}</p>
    </div>
  );
};

const styles = {
  taskCard: {
    backgroundColor: '#f0f0f0',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem',
  },
  taskName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
};

export default TaskCard;
