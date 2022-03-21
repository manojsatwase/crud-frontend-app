import React from "react";
import "./sidebar.css";

import { Link } from "react-router-dom";

const Sidebar = () => {
 return (
  <div className="sidebar">
   <Link to="/">
    <p>Mern Curd</p>
   </Link>
  </div>
 );
};

export default Sidebar;
