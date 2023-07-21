// taskController.js

import Task from '../models/Task.js';

// Create a new task
export async function createTask(req, res) {
  try {
    const { projectId, name, description, startDate, endDate, assignedMember, prerequisiteTasks } = req.body;

    // Check if the project with the provided ID exists
    // Note: You should have a Project model for this check
    // Assume you have a function `projectExists` to check if the project exists.
    const projectExists = await projectExists(projectId);
    if (!projectExists) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Create a new task
    const task = new Task({
      projectId,
      name,
      description,
      startDate,
      endDate,
      assignedMember,
      prerequisiteTasks,
      state: 'Not Started',
      hoursWorked: 0,
    });

    // Save the task to the database
    await task.save();

    res.status(201).json({ message: 'Task created successfully', taskId: task._id });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create task' });
  }
}

// Get a task by ID
export async function getTaskById(req, res) {
  try {
    const { taskId } = req.params;

    // Find the task by ID
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: 'Failed to get task' });
  }
}

// Mark a task as complete
export async function completeTask(req, res) {
  try {
    const { taskId } = req.params;

    // Find the task by ID
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Check if the task is already marked as complete
    if (task.state === 'Completed') {
      return res.status(400).json({ message: 'Task is already marked as complete' });
    }

    // Update the task state and hours worked
    task.state = 'Completed';
    task.hoursWorked = req.body.hoursWorked || 0;
    await task.save();

    res.status(200).json({ message: 'Task marked as complete', task });
  } catch (error) {
    res.status(500).json({ message: 'Failed to mark task as complete' });
  }
}
// Check prerequisite tasks for a task
export async function checkPrerequisiteTasks(req, res) {
    try {
      const { taskId } = req.params;
  
      // Find the task by ID
      const task = await Task.findById(taskId);
  
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      // Check if there are any prerequisite tasks for the task
      const prerequisiteTasks = await Task.find({ _id: { $in: task.prerequisiteTasks } });
  
      res.status(200).json({ prerequisiteTasks });
    } catch (error) {
      res.status(500).json({ message: 'Failed to check prerequisite tasks' });
    }
  }
  export async function markTaskComplete(req, res) {
    try {
      const { taskId } = req.params;
  
      // Find the task by ID
      const task = await Task.findById(taskId);
  
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      // Check if the task is already marked as complete
      if (task.state === 'Completed') {
        return res.status(400).json({ message: 'Task is already marked as complete' });
      }
  
      // Update the task state and hours worked
      task.state = 'Completed';
      task.hoursWorked = req.body.hoursWorked || 0;
      await task.save();
  
      res.status(200).json({ message: 'Task marked as complete', task });
    } catch (error) {
      res.status(500).json({ message: 'Failed to mark task as complete' });
    }
  }  