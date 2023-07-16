import { useEffect, useState } from "react";
import Header from "../../component/header/Header";
import Posts from "../../component/posts/Posts";
import Sidebar from "../../component/sidebar/Sidebar";
import axios from "axios";
import "./home.css";
import { useLocation } from "react-router-dom";

export default function Home() {
const [posts,setPosts]=useState([]);
const {search}=useLocation();

useEffect(()=>{
   const fetchPosts=async ()=>{
     const res=await axios.get("/posts"+search);
     setPosts(res.data);
   }
   fetchPosts();
},[search]);

  return (<>
      <Header />
    <div className="home">
    <Posts posts={posts}/>
    <Sidebar/>
    </div>
    </>
  );
}
