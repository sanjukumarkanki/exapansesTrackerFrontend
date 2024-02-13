import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "../redux/transactionSlice";
const RecenetTransctions = () => {
  const dispatch = useDispatch();
  const recentTransactions = useSelector(
    (state) => state.transactions.transactionList
  );

  const userDetails = localStorage.getItem("userId");
  let userId;
  if (userDetails !== undefined) {
    userId = JSON.parse(userDetails).id;
  } else {
    alert("Your Session Expired , Please Login Again!");
    window.location.href = "/login";
  }

  useEffect(() => {
    const getTransactionsData = async () => {
      try {
        const response = await fetch(
          `https://expansestrackerapp.onrender.com/get-transactions/${userId}`
        );
        const data = await response.json();
        dispatch(addTransaction(data));
      } catch (err) {
        console.log(err);
      }
    };
    getTransactionsData();
  }, []);

  return (
    <div className="card w-full">
      {recentTransactions === null ? (
        <p>Loader</p>
      ) : (
        <>
          <div className="header">
            <h4 className="title text-xl text-[#FC1503] font-medium">
              Recent Transactions
            </h4>
          </div>
          <div className="content table-responsive ">
            <table className="table bg-white shadow-lg table-hover table-striped rounded-md">
              <thead className="bg-[#FC1503]">
                <tr className="text-white text-xs ">
                  <th>Sl.No</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Transaction Type</th> {/* Corrected the casing */}
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map(
                  (
                    transaction,
                    index // Added parentheses to return JSX
                  ) => (
                    <tr key={index} className="text-[#000] text-xs ">
                      <td>{index + 1}</td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.category}</td>
                      <td>{transaction.transactionType}</td>
                      <td>{transaction.date}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default RecenetTransctions;
