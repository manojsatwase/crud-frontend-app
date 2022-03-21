import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {
  Home,
  HomeOutlined,
  DashboardOutlined,
  Dashboard,
  Add,
  AddOutlined,
  SearchOutlined,
  Search,

} from "@mui/icons-material";

const Header = () => {
  const [tab, setTab] = useState(window.location.pathname);
  return (
    <header className="header">
      <Link to="/" onClick={() => setTab("/")}>
        {tab === "/" ? <Home style={{ color: "black" }} /> : <HomeOutlined />}
      </Link>

      <Link to="/dashboard" onClick={() => setTab("/dashboard")}>
        {tab === "/dashboard" ? <Dashboard style={{ color: "black" }} /> : <DashboardOutlined />}
      </Link>

      <Link to="/newpatient" onClick={() => setTab("/newpatient")}>
        {tab === "/newpatient" ? (
          <Add style={{ color: "black" }} />
        ) : (
          <AddOutlined />
        )}
      </Link>

      <Link to="/search" onClick={() => setTab("/search")}>
        {tab === "/search" ? (
          <Search style={{ color: "black" }} />
        ) : (
          <SearchOutlined />
        )}
      </Link>


    </header>
  );
};

export default Header;
