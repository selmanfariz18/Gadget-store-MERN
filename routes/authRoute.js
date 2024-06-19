// routes/authRoute.js
import express from 'express';

const router = express.Router();

// Simple test route
router.post('/register', (req, res) => {
    res.json({ message: 'Register route works' });
});

export default router;
