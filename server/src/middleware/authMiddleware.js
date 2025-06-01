import User from '../models/User.js';


//middleware to check if user is authenticated
export const isAuthenticated = async (req, res, next) => {
    const {userId} = req.auth;

    try {
        if(!userId)
            return res.status(401).json({message: "Unauthorized"});

        const user = await User.findById(userId);
        req.user = user;
        next();
            
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}