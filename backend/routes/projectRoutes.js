// projectRoutes.js

import { Router } from 'express';
import {
  createProject,
  getAllProjects,
  getProjectById,
  assignMembersToProject,
  completeProject,
  sortCompletedProjects,
  
} from '../controllers/projectController.js';

const router = Router();

// Route for creating a new project
router.post('/', createProject);

// Route for fetching all projects
router.get('/', getAllProjects);

// Route for fetching a project by its ID
router.get('/:projectId', getProjectById);

// Route for assigning a member to a project
router.post('/:projectId/assign', assignMembersToProject);

// Route for marking a project as complete
router.post('/:projectId/complete', completeProject);

// Route for sorting completed projects by total cost (high to low or low to high)
router.get('/completed/sort/:order', sortCompletedProjects);

// Route for checking for tasks that are running late in a project


export default router;
