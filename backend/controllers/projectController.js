// ProjectController.js

import Project from '../models/Project.js';
import Task from '../models/Task.js';

// Create a new project
export async function createProject(req, res) {
  try {
    const { name, description, startDate, endDate, admin } = req.body;

    // Check if the project with the provided name already exists
    const existingProject = await Project.findOne({ name });
    if (existingProject) {
      return res.status(400).json({ message: 'Project with provided name already exists' });
    }

    // Create a new project
    const project = new Project({
      name,
      description,
      startDate,
      endDate,
      admin,    
      state: 'Not Started',
    });

    // Save the project to the database
    await project.save();

    res.status(201).json({ message: 'Project created successfully', projectId: project._id });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create project' });
  }
}

// Get all projects
export async function getAllProjects(req, res) {
  try {
    // Fetch all projects from the database
    const projects = await Project.find();

    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ message: 'Failed to get projects' });
  }
}

// Get project by ID
export async function getProjectById(req, res) {
  try {
    const { projectId } = req.params;

    // Find the project by ID
    const project = await Project.findById(projectId).populate('tasks');

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json({ project });
  } catch (error) {
    res.status(500).json({ message: 'Failed to get project' });
  }
}
export async function assignMembersToProject(req, res) {
    try {
      const { projectId } = req.params;
      const { memberIds } = req.body;
  
      // Find the project by ID
      const project = await Project.findById(projectId);
  
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
  
      // Find all members with the provided memberIds in the database
      const members = await members.find({ _id: { $in: memberIds } });
  
      // Check if all memberIds are valid and exist in the database
      if (members.length !== memberIds.length) {
        return res.status(404).json({ message: 'One or more members not found' });
      }
  
      // Assign the members to the project by adding their memberIds to the project's assignedMembers array
      project.assignedMembers.push(...memberIds);
      await project.save();
  
      res.status(200).json({ message: 'Members assigned to the project successfully', project });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to assign members to project' });
    }
  }
  
// Mark a project as complete
export async function completeProject(req, res) {
  try {
    const { projectId } = req.params;

    // Find the project by ID
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Check if the project is already marked as complete
    if (project.state === 'Completed') {
      return res.status(400).json({ message: 'Project is already marked as complete' });
    }

    // Check if all tasks in the project are complete
    const incompleteTasks = await Task.find({ project: projectId, state: { $ne: 'Completed' } });
    if (incompleteTasks.length > 0) {
      return res.status(400).json({ message: 'Cannot mark the project as complete. Some tasks are still incomplete' });
    }

    // Calculate the total number of hours worked on the project and the project cost
    let totalHoursWorked = 0;
    let totalProjectCost = 0;
    for (const task of project.tasks) {
      totalHoursWorked += task.hoursWorked;
      totalProjectCost += task.hoursWorked * task.assignedMember.hourlyRate;
    }

    // Update the project state and total hours worked
    project.state = 'Completed';
    project.totalHoursWorked = totalHoursWorked;
    project.totalProjectCost = totalProjectCost;
    await project.save();

    res.status(200).json({ message: 'Project marked as complete', project });
  } catch (error) {
    res.status(500).json({ message: 'Failed to mark project as complete' });
  }
}
export async function sortCompletedProjects(req, res) {
    try {
      // Fetch completed projects from the database
      const completedProjects = await Project.find({ state: 'Completed' }).sort({ totalProjectCost: -1 });
  
      res.status(200).json({ completedProjects });
    } catch (error) {
      res.status(500).json({ message: 'Failed to sort completed projects' });
    }
  }