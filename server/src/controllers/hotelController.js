import Hotel from '../models/Hotel.js';
import User from '../models/User.js';

export const registerHotel = async (req, res) => {
    try {
        const auth = req.auth();
        console.log('Auth data:', auth); // Debug log
        
        const { name, address, contact, city } = req.body;
        const owner = auth.userId;

        if (!owner) {
            return res.status(401).json({ 
                success: false, 
                message: "Authentication required" 
            });
        }

        // Check if user already has a hotel
        const hotel = await Hotel.findOne({ owner });
        if (hotel) {
            return res.status(400).json({ success: false, message: "User already has a hotel" });
        }

        // Create hotel
        const newHotel = await Hotel.create({ name, address, contact, owner, city });

        // Update user role to hotelOwner
        await User.findOneAndUpdate(
            { clerkId: owner },
            { role: "hotelOwner" }
        );

        res.status(201).json({ 
            success: true, 
            message: "Hotel registered successfully", 
            hotel: newHotel 
        });
    } catch (error) {
        console.error('Hotel registration error:', error);
        res.status(500).json({ 
            success: false, 
            message: error.message || "Failed to register hotel" 
        });
    }
}