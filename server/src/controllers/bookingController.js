import Booking from '../models/Booking.js';
import Room from '../models/Room.js';
import Hotel from '../models/Hotel.js';

//before booking a room, check if the room is available
export const checkRoomAvailability=async({room,checkInDate,checkOutDate})=>{
    try{
       
        const bookings=await Booking.find({room,
            checkInDate:{
                $lte:checkOutDate
            },
            checkOutDate:{
                $gte:checkInDate
            }
        });
       const isAvailable=bookings.length===0;
       res.status(200).json({success: true, isAvailable});
       return isAvailable;
        
    }
    catch(error){
        res.status(500).json({success: false, message: error.message});
    }
}

//api to check availability of a room
//POST /api/bookings/check-availability
export const checkAvailabilityAPI=async(req,res)=>{
    try{
        const {room,checkInDate,checkOutDate}=req.body;
        const isAvailable=await checkRoomAvailability({room,checkInDate,checkOutDate});
        res.status(200).json({success: true, isAvailable});
    }
    catch(error){
        res.status(500).json({success: false, message: error.message});
    }
}

//api to create a new booking
//POST /api/bookings/book
export const createBooking=async(req,res)=>{
    try{
        const {room,checkInDate,checkOutDate,guests}=req.body;
        const user=req.user._id;
        
        //before booking, check if the room is available
        const isAvailable=await checkRoomAvailability({room,checkInDate,checkOutDate});
        if(!isAvailable){
            return res.status(400).json({success: false, message: "Room is not available"});
        }

        //get total price from room
        const roomData=await Room.findById(room).populate("hotel");
        let totalPrice=roomData.pricePerNight;

        //calculate total price based on nights
        const checkIn=new Date(checkInDate);
        const checkOut=new Date(checkOutDate);
        const nights=Math.ceil((checkOut-checkIn)/(1000*60*60*24));
        totalPrice*=nights;

        //create a new booking
        const booking=await Booking.create({
            room,
            checkInDate,
            checkOutDate,
            guests: +guests,
            totalPrice,
            user,
            hotel: roomData.hotel._id
        });

        res.status(201).json({success: true, booking});
    } 
    catch(error){
        res.status(500).json({success: false, message: error.message});
    }
};


//api to get all bookings for a user
//GET /api/bookings/user
export const getUserBookings=async(req,res)=>{
    try{
        const bookings=await Booking.find({user:req.user._id}).populate("room").populate("hotel").sort({createdAt:-1});
        res.status(200).json({success: true, bookings});
    }
    catch(error){
        res.status(500).json({success: false, message: error.message});
    }
}

export const getHotelBookings = async (req, res) => {
  try {
    const hotel = await Hotel.findOne({ owner: req.auth.userId });
    if (!hotel) {
      return res.status(404).json({ success: false, message: "Hotel not found" });
    }
    const bookings = await Booking.find({ hotel: hotel._id }).populate("room").populate("user").sort({ createdAt: -1 });
    
    // Calculate total revenue
    const totalRevenue = bookings.reduce((acc, booking) => acc + booking.totalPrice, 0);
    
    res.status(200).json({ 
      success: true, 
      dashboardData: {
        totalBookings: bookings.length,
        totalRevenue
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch bookings" });
  }
};

