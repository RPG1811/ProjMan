// ProjectList.js

import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';

const ProjectList = ({ projects }) => {
  return (
    <div>
      <h2>Projects</h2>
      {projects.map(project => (
        <div key={project._id}>
          <ProjectCard project={project} />
          <ProjectDetails project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
