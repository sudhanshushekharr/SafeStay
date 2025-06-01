import User from "../models/User.js";
import { Webhook } from "svix";
import dotenv from "dotenv";

dotenv.config();

const clerkWebhook = async (req,res)=>{
    try{
        console.log('Webhook received:', {
            headers: req.headers,
            body: req.body
        });

        if (!process.env.CLERK_WEBHOOK_SECRET) {
            console.error('CLERK_WEBHOOK_SECRET is not set in environment variables');
            return res.status(500).json({message: "Webhook secret not configured"});
        }

        //CREATING WEBHOOK OBJECT
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        //GETTING HEADERS
        const headers = {
            'svix-id': req.headers['svix-id'],
            'svix-signature': req.headers['svix-signature'],
            'svix-timestamp': req.headers['svix-timestamp'],
        };
     
        console.log('Verifying webhook with headers:', headers);

        //VERIFYING HEADERS for security purpose
        try {
            await whook.verify(JSON.stringify(req.body), headers);
        } catch (verifyError) {
            console.error('Webhook verification failed:', verifyError);
            return res.status(401).json({message: "Webhook verification failed", error: verifyError.message});
        }

        //getting data from request body
        const {data, type} = req.body;
        console.log('Webhook event type:', type);
        console.log('User data:', data);

        if (!data || !data.id) {
            console.error('Invalid webhook data:', data);
            return res.status(400).json({message: "Invalid webhook data"});
        }

        const userData = {
            _id: data.id,
            username: data.first_name ? `${data.first_name} ${data.last_name || ''}` : 'Unknown User',
            email: data.email_addresses?.[0]?.email_address || 'no-email@example.com',
            image: data.image_url || 'default-image-url',
        }

        console.log('Processed user data:', userData);

        //switch case for different events
        //event handling
        switch(type){
            case "user.created":
                console.log('Creating new user...');
                try {
                    await User.create(userData);
                    console.log('User created successfully');
                } catch (createError) {
                    console.error('Error creating user:', createError);
                    return res.status(500).json({message: "Error creating user", error: createError.message});
                }
                break;

            case "user.updated":
                console.log('Updating user...');
                try {
                    await User.findByIdAndUpdate(userData._id, userData, { new: true });
                    console.log('User updated successfully');
                } catch (updateError) {
                    console.error('Error updating user:', updateError);
                    return res.status(500).json({message: "Error updating user", error: updateError.message});
                }
                break;

            case "user.deleted":
                console.log('Deleting user...');
                try {
                    const deletedUser = await User.findByIdAndDelete(userData._id);
                    if (!deletedUser) {
                        console.log('User not found for deletion');
                        return res.status(404).json({message: "User not found for deletion"});
                    }
                    console.log('User deleted successfully');
                } catch (deleteError) {
                    console.error('Error deleting user:', deleteError);
                    return res.status(500).json({message: "Error deleting user", error: deleteError.message});
                }
                break;
            
            default:
                console.log('Unhandled event type:', type);
                return res.status(400).json({message: "Unhandled event type"});
        }

        res.status(200).json({message: "Webhook processed successfully"});
        
    } catch(error) {
        console.error('Webhook error:', error);
        res.status(500).json({message: "Internal server error", error: error.message});
    }
}

export default clerkWebhook;    

        
    