import express from 'express';
import { createRoom, getAllRooms, getOwnerRooms, toggleRoomAvailability } from '../controllers/roomController.js';
import upload from '../middleware/uploadMiddleware.js';
import { isAuthenticated } from '../middlewares/authMiddleware.js';

const roomRouter = express.Router();

roomRouter.post('/', isAuthenticated, upload.array('images',4), createRoom);
roomRouter.get('/', getAllRooms);
roomRouter.get('/owner', isAuthenticated, getOwnerRooms);
roomRouter.post('/toggle', isAuthenticated, toggleRoomAvailability);

export default roomRouter;