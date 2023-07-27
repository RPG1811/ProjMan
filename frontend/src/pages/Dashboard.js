// Dashboard.js

import React from 'react';
import ProjectCard from '../components/ProjectCard';
import TaskCard from '../components/TaskCard';

const Dashboard = () => {
  // Sample project data (replace this with your actual data)
  const projects = [
    {
      name: 'Project A',
      description: 'This is a sample project A',
      startDate: '2023-07-20',
      endDate: '2023-08-20',
      totalHoursWorked: 120,
      totalProjectCost: 2500,
      state: 'In Progress',
    },
    // Add more projects here...
  ];

  // Sample task data (replace this with your actual data)
  const tasks = [
    {
      taskId: 1,
      name: 'Task A',
      description: 'This is a sample task A',
      startDate: '2023-07-20',
      endDate: '2023-08-20',
      assignedMember: 'John Doe',
      state: 'In Progress',
      hoursWorked: 15,
    },
    // Add more tasks here...
  ];

  return (
    <div>
      <h2>Dashboard</h2>

      <div>
        <h3>Projects</h3>
        {projects.map(project => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>

      <div>
        <h3>Tasks</h3>
        {tasks.map(task => (
          <TaskCard key={task.taskId} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
