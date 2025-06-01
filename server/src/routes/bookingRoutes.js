import express from 'express';
import { isAuthenticated } from '../middlewares/authMiddleware.js';
import { getUserBookings, getHotelBookings, checkAvailabilityAPI, createBooking } from '../controllers/bookingController.js';

const bookingRouter=express.Router();

bookingRouter.get('/',isAuthenticated,getUserBookings);
bookingRouter.get('/hotel',isAuthenticated,getHotelBookings);
bookingRouter.post('/check-availability', checkAvailabilityAPI);
bookingRouter.post('/book',isAuthenticated,createBooking);

export default bookingRouter;