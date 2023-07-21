// ProjectCard.js

import React from 'react';

const ProjectCard = ({ project }) => {
  const { name, description, startDate, endDate, totalHoursWorked, totalProjectCost, state } = project;

  return (
    <div style={styles.projectCard}>
      <h3 style={styles.projectName}>{name}</h3>
      <p style={styles.projectDescription}>{description}</p>
      <p><strong>Start Date:</strong> {startDate}</p>
      <p><strong>End Date:</strong> {endDate}</p>
      <p><strong>Total Hours Worked:</strong> {totalHoursWorked}</p>
      <p><strong>Total Project Cost:</strong> ${totalProjectCost.toFixed(2)}</p>
      <p><strong>State:</strong> {state}</p>
    </div>
  );
};

const styles = {
  projectCard: {
    backgroundColor: '#f0f0f0',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem',
  },
  projectName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  projectDescription: {
    marginBottom: '0.5rem',
  },
};

export default ProjectCard;
