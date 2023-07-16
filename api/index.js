const express=require('express');
const dotenv=require('dotenv');
const app=express();
const mongoose=require('mongoose');
const authRoute=require('./routes/auth');
const userRoute=require('./routes/users');
const postRoute=require('./routes/posts');
const categoryRoute=require('./routes/categories');
const multer=require("multer");


dotenv.config();
app.use(express.json());


mongoose.connect(process.env.MONGO_URL).then(console.log( "Connected to MongoDB")).catch((err)=>console.log(err));


const storage=multer.diskStorage


app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/categories",categoryRoute);

const PORT=process.env.PORT
app.listen(PORT || 8800,()=>{
    console.log('Backend server running')
})