import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { clerkMiddleware } from '@clerk/clerk-express';
import clerkWebhook from './controllers/clerkWebhooks.js';

import connectDB from './config/db.js'; 

dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:5173'], // Add your frontend URLs
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));

app.use(express.json());




app.use(clerkMiddleware());

//api to listen clerk webhook
app.use('/api/clerk',clerkWebhook);

app.post('/webhook',clerkWebhook);

// MongoDB Connection
connectDB();
// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Hotel Management API');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});