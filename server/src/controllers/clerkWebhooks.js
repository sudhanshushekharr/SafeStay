import User from "../models/User.js";
import { Webhook } from "svix";
import dotenv from "dotenv";

dotenv.config();

const clerkWebhook = async (req,res)=>{
    try{
        //CREATING WEBHOOK OBJECT
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        //GETTING HEADERS
        const headers = {
            'svix-id': req.headers['svix-id'],
            'svix-signature': req.headers['svix-signature'],
            'svix-timestamp': req.headers['svix-timestamp'],
        };
     

         //VERIFYING HEADERS for security purpose
        await whook.verify(JSON.stringify(req.body),headers);


        //getting data from request body

        const {data,type}=req.body;

        const userData={
            _id:data.id,
            username:data.first_name+" "+data.last_name,
            email:data.email_addresses[0].email_address,
            image:data.image_url,
      
        }


        //switch case for different events
        //event handling
        switch(type){
            case "user.created":
                await User.create(userData);
                break;
            case "user.updated":
                await User.findByIdAndUpdate(userData._id,userData);
                break;
            case "user.deleted":
                await User.findByIdAndDelete(userData._id);
                break;
            
            default:
                break;
        }

        res.status(200).json({message:"Webhook received"});
        
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}

export default clerkWebhook;    

        
    