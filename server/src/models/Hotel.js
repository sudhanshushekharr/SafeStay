import mongoose from 'mongoose';
import User from './User.js';
const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    contact:{
        type: String,
        required: true,
    },
   owner:{
    type:String,
    required:true,
    ref:'User',
   },
  city:{
    type:String,
    required:true,

  }
 
},{timestamps:true});

const Hotel = mongoose.model('Hotel', hotelSchema);
export default Hotel;