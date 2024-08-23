import mongoose from "mongoose";

const connecttoDb=async(req,res)=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to db");
    } catch (error) {
        console.log(error.message);
    }
}

export default connecttoDb