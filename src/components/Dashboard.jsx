import React from "react";
// import Navbar from "./Navbar";
import Balance from "./Balance";
import RecenetTransctions from "./RecenetTransctions";
import TransactionForm from "../routes/TransactionForm";
import Analytics from "./Analytics";

const Dashboard = () => (
  <div className="dashboard space-y-3 p-5">
    <h2 className=" text-2xl font-bold text-[#FC1503]">Dashboard</h2>
    <Balance />
    <div className="grid lg:grid-cols-2   gap-5 md:gap-10 items-center justify-start">
      <RecenetTransctions />
      <Analytics />
    </div>

    <div className="flex justify-center items-center gap-5 md:gap-10 items-center justify-start">
      <TransactionForm />
    </div>
  </div>
);

export default Dashboard;
