import express from 'express';
import { getAllRooms, getRoomById, createRoom, updateRoom, deleteRoom, toggleAvailability } from '../controllers/roomController.js';
import checkRole from '../middleware/checkRole.js';

const router = express.Router();

// Public routes
router.get('/', getAllRooms);
router.get('/:id', getRoomById);

// Protected routes (require authentication)
router.post('/', checkRole(['hotelOwner']), createRoom);
router.put('/:id', checkRole(['hotelOwner']), updateRoom);
router.delete('/:id', checkRole(['hotelOwner']), deleteRoom);
router.patch('/:id/toggle', checkRole(['hotelOwner']), toggleAvailability);

export default router; 