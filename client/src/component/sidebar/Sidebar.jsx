import { useEffect, useState } from "react";
import "./sidebar.css";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [categories,setCategories]=useState([]);

  useEffect(()=>{
    const getCats= async()=>{
         const res=await axios.get("/categories");
         setCategories(res.data);
    
    }
    getCats();
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://source.unsplash.com/350x350"
          alt=""
        />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
        {categories.map((category,id)=>(
    <Link to={`/?cat=${category.name}`} className="link" key={id}>
    <li className="sidebarListItem" >{category.name}</li>
    </Link>
        ))}
          
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
