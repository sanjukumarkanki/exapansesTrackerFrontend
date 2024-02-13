import React from "react";

const BalanceCards = [
  {
    cardType: "Total Balance",
    img: "https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png",
  },
  {
    cardType: "Expenses",
    img: "https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png",
  },
  {
    cardType: "Income",
    img: "https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png",
  },
];

const Balance = () => {
  const userDetails = localStorage.getItem("userId");
  let userId;
  if (userDetails !== undefined) {
    userId = JSON.parse(userDetails);
  } else {
    alert("Your Session Expired , Please Login Again!");
    window.location.href = "/login";
  }

  console.log(userId, "usr");

  return (
    <div className="md:grid-cols-3 grid gap-4 ">
      {BalanceCards.map((each, index) => (
        <div className="p-6 bg-white rounded-lg shadow-xl" key={index}>
          <div className="flex justify-between items-center">
            <img src={each.img} alt="" width="50" />
            <h2 classNam="text-gray-800 text-2xl font-semibold">
              {each.cardType}
            </h2>
            <p>{each.cardType === "Total Balance" && userId.id}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Balance;
