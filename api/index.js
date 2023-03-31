const express=require('express');
const dotenv=require('dotenv');
const app=express();
const mongoose=require('mongoose');
const authRoute=require('./routes/auth');
const userRoute=require('./routes/users');
const userPost=require('./routes/posts');
dotenv.config();
app.use(express.json());


mongoose.connect(process.env.MONGO_URL).then(console.log( "Connected to MongoDB")).catch((err)=>console.log(err));


app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",userPost);

const PORT=process.env.PORT
app.listen(PORT || 8800,()=>{
    console.log('Backend server running')
})