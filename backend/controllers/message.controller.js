import Message from "../models/message.models.js";
import User from "../models/user.models.js";
import Conversation from "../models/conversation.models.js";
export const sendMessage=async(req,res)=>
{
    try {
        const {message}=req.body
        const {id:receiverId}=req.params
        const senderId=req.user._id
      if(!message)
      {
        res.status(400).json("Please enter a message message can't be empty")
      }
      const user=await User.findById(receiverId)
      if(!user)
      {
        res.status(400).json("User not found")
      }
     let conversation =  await Conversation.findOne({
        participants:{
            $all:[senderId,receiverId]
        }
     })
     if(!conversation)
     {
        conversation=await Conversation.create({
            participants:[senderId,receiverId],
           
        })
     }
     const newMessage=new Message({
       senderId,
        receiverId,
        message

     })
     if(newMessage)
     {
        conversation.messages.push(newMessage._id)
     }
  
     await Promise.all([conversation.save(),newMessage.save()])
     res.status(201).json({newMessage,
        message:"message sent successfully"})
    } catch (error) {
        res.status(500).json("Internal server error")
        console.log(error.message);
        
    }
}

export const getMessages=async(req,res)=>{
    try {
        const {id:userToChatId}=req.params
        const user=await User.findById(userToChatId)
        const senderId=req.user._id
        
        if(!user)
        {
            res.status(400).json("User not found")
        }
         const conversation=await Conversation.findOne({
            participants:{
                $all:[senderId,userToChatId]
            },
        }).populate("messages")
        if(!conversation)
        {
            return res.status(200).json([])
        }
        const messages=conversation.messages

        res.status(200).json(messages)
    } catch (error) {
        log(error.message)
        res.status(500).json({
            message:"Internal server error"
        })
    }
}