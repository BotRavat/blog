const router=require("express").Router();
const Post=require("../models/Post");


//CREATE A POST

router.post("/",async(req,res)=>{
    const newPost=new Post(req.body);
    try{
        const savedPost=newPost.save();
        res.status(200).json(savedPost);

    }catch(err){
        res.status(500).json(err);
    }
})




module.exports=router;