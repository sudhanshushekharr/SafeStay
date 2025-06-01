import express from 'express';
import { registerHotel } from '../controllers/hotelController.js';
import { isAuthenticated } from '../middlewares/authMiddleware.js';

const hotelrouter = express.Router();

hotelrouter.post('/', isAuthenticated, registerHotel);

export default hotelrouter;