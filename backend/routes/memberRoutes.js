// memberRoutes.js

import { Router } from 'express';
import {
  createMember,
  getMemberById,
  getMemberTasks,
} from '../controllers/memberController.js';

const router = Router();

// Route for creating a new member
router.post('/', createMember);

// Route for fetching a member by their ID
router.get('/:memberId', getMemberById);

// Route for fetching tasks assigned to a member
router.get('/:memberId/tasks', getMemberTasks);

export default router;
