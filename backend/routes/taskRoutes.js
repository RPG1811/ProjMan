// taskRoutes.js

import { Router } from 'express';
import {
  createTask,
  getTaskById,
  
  markTaskComplete,
  checkPrerequisiteTasks,
} from '../controllers/taskController.js';

const router = Router();

// Route for creating a new task
router.post('/', createTask);

// Route for fetching a task by its ID
router.get('/:taskId', getTaskById);



// Route for marking a task as complete
router.post('/:taskId/complete', markTaskComplete);

// Route for checking prerequisite tasks for a task
router.get('/:taskId/prerequisites', checkPrerequisiteTasks);

export default router;
