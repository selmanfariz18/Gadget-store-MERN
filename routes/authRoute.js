// routes/authRoute.js
import express from 'express';
import { registerController } from '../controllers/authController.js';

const router = express.Router();

// Simple test route
router.post("/register", registerController);

export default router;
