import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import "../App.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="sidebar-dashboard-gird-container">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
};

export default Home;
