import User from "../models/user.models.js";

export const getUsersForSidebar=async(req,res)=>{
    try {
        const loggedInUserId=req.user._id
        const filterdUsers=await User.find({_id:{$ne:loggedInUserId}}).select("-password")//find all the user except the one whose id is provided
        res.status(200).json(filterdUsers)

    } catch (error) {
        console.log(error.message);
        res.status(500).json({error:"internal server error"})
    }
}