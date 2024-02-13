import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
// import Dashboard from "./components/Dashboard";
// import Home from "./components/Home";
// import ProtectedRoute from "./components/ProtectedRoute";
import TransactionForm from "./routes/TransactionForm";
// import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

const pathname = window.location.pathname;
const isTrue = pathname !== "/login" && pathname !== "/register";

const App = () => {
  return (
    <div className="container ">
      {pathname !== "/login" && pathname !== "/register" ? <Navbar /> : null}
      <div className={`${isTrue ? "sidebar-dashboard-gird-container" : ""}`}>
        {pathname !== "/login" && pathname !== "/register" ? <Sidebar /> : null}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/transaction-form" element={<TransactionForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
