import express from 'express';
import webhookController from '../controllers/webhookController.js';

const router = express.Router();

// Webhook endpoint for Clerk events
router.post('/clerk', webhookController);

export default router; 