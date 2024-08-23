import User from "../models/user.models.js";
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup=async(req,res)=>{
  try {
      const {fullName,username,password,confirmPassword,gender}=req.body
      if(!fullName||!username||!password||!confirmPassword||!gender)
      {
          return res.status(400).json({message:"Please fill all the fields"})
      }
      if(password!==confirmPassword)
      {
          return res.status(400).json({message:"Passwords do not match"})
      }
      if(password.length<6)
      {
          return res.status(400).json({message:"Password must be at least 6 characters long"})
      }
      const userAlreadyexist=await User.findOne({username})
      if(userAlreadyexist)
      {
          return res.status(400).json({message:"Username already exists please enter a new user name"})
      }
  
      //const hashpassword
      const salt=await bcrypt.genSalt(10)
      const hashpassword=await bcrypt.hash(password,salt)
  
      const boyprofilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
      const girlprofilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`
     const newuser=new User({
      fullName,
      username,
      password:hashpassword,
      gender,
      profilePic:gender==='male'?boyprofilePic:girlprofilePic
     })
    if(newuser)
    {
     generateTokenAndSetCookie(newuser._id,res)
     newuser.save()
    }
  res.status(200).json({
      _id:newuser._id,
      fullName:newuser.fullName,
      username:newuser.username,
      profilePic:newuser.profilePic,
      message:"User created successfully",
      
  })
  } catch (error) {
    res.status(500).json({
        message:"Internal server error"
    })
  }

}
export const login=async(req,res)=>{
    try {
        const {username,password}=req.body
        const user=await User.findOne({username})
        const isPasswordCorrect=await bcrypt.compare(password,user?.password || "")
        if(!isPasswordCorrect)
        {
            return res.status(400).json({message:"Invalid username or password"})
        }
      if(!user ||!isPasswordCorrect)
      {
        return res.status(400).json({message:"Invalid username or password"})
      }
      generateTokenAndSetCookie(user._id,res)
     res.status(200).json({
        _id:user._id,
        fullName:user.fullName,
        username:user.username,
        profilePic:user.profilePic,
        message:"User logged in successfully",
     })
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong",
        })
        console.log(error.message);
    }
}
export const logout=async(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"User logged out successfully"})
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong while logging out"
        })
    }
}