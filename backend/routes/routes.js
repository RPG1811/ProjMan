// routes/routes.js

import { Router } from 'express';
const router = Router();

// Import the necessary controllers
import { register, login } from '../controllers/authController.js';
import { createProject, getAllProjects, getProjectById } from '../controllers/projectController.js';
import { createTask, getTaskById, updateTask } from '../controllers/taskController.js';
import { createMember, getMemberById, getMemberTasks } from '../controllers/memberController.js';

// Define the routes
router.post('/register', register);
router.post('/login', login);

router.post('/projects', createProject);
router.get('/projects', getAllProjects);
router.get('/projects/:projectId', getProjectById);

router.post('/tasks', createTask);
router.get('/tasks/:taskId', getTaskById);
router.put('/tasks/:taskId', updateTask);

router.post('/members', createMember);
router.get('/members/:memberId', getMemberById);
router.get('/members/:memberId/tasks', getMemberTasks);

export default router;
