// TaskDetails.js

import React from 'react';

const TaskDetails = ({ task }) => {
  const {
    taskName,
    description,
    startDate,
    endDate,
    assignedMembers,
    prerequisiteTasks,
    isComplete,
  } = task;

  return (
    <div style={styles.taskDetails}>
      <h3>{taskName}</h3>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Start Date:</strong> {startDate}</p>
      <p><strong>End Date:</strong> {endDate}</p>
      <p><strong>Assigned Members:</strong> {assignedMembers.join(', ')}</p>
      {prerequisiteTasks.length > 0 && (
        <p><strong>Prerequisite Tasks:</strong> {prerequisiteTasks.join(', ')}</p>
      )}
      <p><strong>Is Complete:</strong> {isComplete ? 'Yes' : 'No'}</p>
    </div>
  );
};

const styles = {
  taskDetails: {
    backgroundColor: '#f0f0f0',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem',
  },
};

export default TaskDetails;
