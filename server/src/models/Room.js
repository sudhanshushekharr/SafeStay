import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
     _id:{
        type: String,
        required: true,
        unique: true,
     },
    
    roomNumber: {
        type: Number,
        required: true,
    },
    roomType:{
        type: String,
        enum: ["single","double","suite"],
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    amenities:{
        type: [String],
        required: true,
    },
    isAvailable:{
        type: Boolean,
        default: true,
    },
    
})