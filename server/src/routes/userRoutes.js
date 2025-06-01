import  express from 'express';
import { isAuthenticated } from '../middleware/authMiddleware.js';
import { getUser, storeRecentSearchedCities } from '../controllers/userControllers.js';

const userRouter = express.Router();

userRouter.get('/', isAuthenticated, getUser);
userRouter.post('/store-recent-search', isAuthenticated, storeRecentSearchedCities); //this will be used to store the recent searched cities in the user's profile(database)

export default userRouter;