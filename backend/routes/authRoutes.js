// authRoutes.js

import { Router } from 'express';
import { register, login } from '../controllers/authController.js';

const router = Router();

// Route for user registration
router.post('/register', register);

// Route for user login
router.post('/login', login);

export default router;
