//GET /api/user


export const getUser = async (req, res) => {
    try{
        const role= req.user.role;
       const  recentSearchedCities= req.user.recentSearchedCities;
       res.status(200).json({ success: true, role, recentSearchedCities});
    }
    catch(error){
        res.status(500).json({ success: false, message: error.message});
    }
}

//store user recent searched cities
export const storeRecentSearchedCities = async (req, res) => {  
    try{
        const {recentSearchedCities} = req.body;
        const user = await req.user;
        
        if(user.recentSearchedCities.length <3){
        user.recentSearchedCities.push(recentSearchedCities);
        }
        else{
            user.recentSearchedCities.shift();
            user.recentSearchedCities.push(recentSearchedCities);
        }
        await user.save();
        res.status(200).json({success: true, message: "Recent searched cities stored successfully"});
    }
    catch(error){
        res.status(500).json({success: false, message: error.message});
    }
};