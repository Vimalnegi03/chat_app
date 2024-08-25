import express from 'express'
const app=express();
import dotenv from 'dotenv'
dotenv.config()

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import cors from 'cors'
import connecttoDb from './db/db.connection.js';
import cookieParser from 'cookie-parser';
const PORT=process.env.PORT||5555

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)
app.listen(PORT,()=>{
    connecttoDb()
    console.log("Server is running on port 5555");
})