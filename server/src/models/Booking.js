import mongoose from 'mongoose';
import User from './User.js';
import Room from './Room.js';
import Hotel from './Hotel.js';

const bookingSchema = new mongoose.Schema({
  user:{type:String,required:true, ref:"User"},
  room:{type:String,required:true, ref:"Room"},
  hotel:{type:String,required:true, ref:"Hotel"},
  checkInDate:{type:Date,required:true},
  checkOutDate:{type:Date,required:true},
  totalPrice:{type:Number,required:true},
  status:{type:String,
    enum:["pending","confirmed","cancelled","completed"],
    default:"pending"},
  paymentMethod:{type:String,default:"Pay at hotel"},
  guests:{type:Number,required:true},
  isPaid:{type:Boolean,default:false},
},
{timestamps:true}
);

const Booking=mongoose.model("Booking",bookingSchema);
export default Booking; 