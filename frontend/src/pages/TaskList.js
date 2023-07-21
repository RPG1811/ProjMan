// TaskList.js

import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map(task => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
