import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { clerkMiddleware } from '@clerk/express';
import clerkWebhook from './controllers/clerkWebhooks.js';
import connectDB from './config/db.js'; 
import userRouter from './routes/userRoutes.js';
import hotelrouter from './routes/hotelRoutes.js';
import connectCloudinary from './config/cloudinary.js';
import roomRouter from './routes/roomRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';



dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:5173', 'https://safestay.vercel.app'], // Add your frontend URLs
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

app.post('/api/clerk/test', (req, res) => {
  console.log('Test endpoint hit!');
  res.json({ message: 'Test endpoint hit!' });
});
//api to listen to clerk webhook
app.post('/api/clerk/webhook', clerkWebhook);
// Clerk middleware with secret key
app.use(clerkMiddleware({
  secretKey: process.env.CLERK_SECRET_KEY
}));


// Webhook endpoint for Clerk events


// MongoDB Connection
connectDB();
connectCloudinary();  

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Hotel Management API');
});

//user routes
app.use('/api/user', userRouter);
//hotel routes
app.use('/api/hotels', hotelrouter);
//room routes
app.use('/api/rooms', roomRouter);
//booking routes
app.use('/api/bookings', bookingRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});