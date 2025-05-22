const Room = require('../models/Room');

// Get all rooms
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find().populate('hotelOwner', 'name email');
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get room by ID
exports.getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id).populate('hotelOwner', 'name email');
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new room
exports.createRoom = async (req, res) => {
  try {
    const roomData = {
      ...req.body,
      hotelOwner: req.auth.userId // Get user ID from Clerk session
    };
    
    const room = new Room(roomData);
    const savedRoom = await room.save();
    res.status(201).json(savedRoom);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update room
exports.updateRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    
    // Check if user is the room owner
    if (room.hotelOwner.toString() !== req.auth.userId) {
      return res.status(403).json({ message: 'Not authorized to update this room' });
    }
    
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    
    res.json(updatedRoom);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete room
exports.deleteRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    
    // Check if user is the room owner
    if (room.hotelOwner.toString() !== req.auth.userId) {
      return res.status(403).json({ message: 'Not authorized to delete this room' });
    }
    
    await Room.findByIdAndDelete(req.params.id);
    res.json({ message: 'Room deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Toggle room availability
exports.toggleAvailability = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    
    // Check if user is the room owner
    if (room.hotelOwner.toString() !== req.auth.userId) {
      return res.status(403).json({ message: 'Not authorized to update this room' });
    }
    
    room.isAvailable = !room.isAvailable;
    const updatedRoom = await room.save();
    
    res.json(updatedRoom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 