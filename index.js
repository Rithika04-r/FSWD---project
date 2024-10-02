import express from "express";
import dotenv from "dotenv";
import bodyparser from "body-parser";
import mongoose from "mongoose";

const app=express()

dotenv.config();
const PORT=process.env.PORT;
app.use(bodyparser.json())


mongoose.connect("mongodb+srv://rithurithi170:1234@cluster0.1yokl.mongodb.net/").then(()=>{console.log("Mongodb connected")
app.listen(PORT, ()=>{
   console.log("Server starting "+PORT)
   console.log("server "+process.env.PROCESS)
})
});

