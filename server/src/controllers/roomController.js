import Room from '../models/Room.js';
import Hotel from '../models/Hotel.js';
import cloudinary from '../config/cloudinary.js';

//API to create a new room for a hotel
export const createRoom = async (req, res) => {
  try {
    const { roomType, pricePerNight, amenities, maxOccupancy } = req.body;
  
    const hotel = await Hotel.findOne({ owner: req.auth.userId });

    if (!hotel) {
      return res.status(404).json({ success: false, message: "Hotel not found" });
    }

    //upload images to cloudinary
    const uploadImages = req.files.map(async (file) => {
      const result = await cloudinary.uploader.upload(file.path);
      return result.secure_url;
    });
     
    //wait for all images to be uploaded
    const images = await Promise.all(uploadImages);

    //create room storing in database
    const room = await Room.create({
      hotel: hotel._id,
      roomType,
      pricePerNight: +pricePerNight,
      amenities: JSON.parse(amenities),
      maxOccupancy,
      images
    });

    res.status(201).json({ success: true, message: "Room created successfully", room });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//api to get all rooms
export const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find({ isAvailable: true })
      .populate({
        path: 'hotel',
        populate: {
          path: 'owner',
          select: 'image'
        }
      })
      .sort({ createdAt: -1 });
    res.status(200).json({ success: true, rooms });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//api to get all rooms for specific hotel
export const getOwnerRooms = async (req, res) => {
  try {
    const hotelData = await Hotel.findOne({ owner: req.auth.userId });
    if (!hotelData) {
      return res.status(404).json({ success: false, message: "Hotel not found" });
    }
    const rooms = await Room.find({ hotel: hotelData._id.toString() }).populate("hotel");
    res.status(200).json({ success: true, rooms });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//api to toggle room availability
export const toggleRoomAvailability = async (req, res) => {
  try {
    const { roomId } = req.body;
    const room = await Room.findById(roomId);
    
    if (!room) {
      return res.status(404).json({ success: false, message: "Room not found" });
    }

    room.isAvailable = !room.isAvailable;
    await room.save();
    
    res.status(200).json({ success: true, message: "Room availability toggled successfully", room });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

