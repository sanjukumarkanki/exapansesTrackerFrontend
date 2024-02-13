import { useRef, useState } from "react";
// import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import "../App.css";

const people = [
  {
    id: 1,
    name: "Income",
    avatar:
      "https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png",
  },
  {
    id: 2,
    name: "Expanses",
    avatar:
      "https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png",
  },
];

export default function Example() {
  const transitionFormData = useRef({
    category: "",
    amount: 0,
    date: new Date(),
    type: people[0].name,
    errorMessage: "",
  });

  const handleChange = (e) => {
    if (e.name === undefined) {
      transitionFormData.current[e.target.name] = e.target.value;
      console.log(transitionFormData.current);
    } else {
      transitionFormData.current[transitionFormData.current.type] = e.name;
    }
  };

  const verfyTransaction = async (e) => {
    e.preventDefault();
    const formData = transitionFormData.current;
    console.log(formData);
    const userData = localStorage.getItem("userId");
    const parsedData = JSON.parse(userData);
    const bodyData = { ...formData, ...parsedData };

    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      };
      console.log("https://expansestrackerapp.onrender.com/");
      const response = await fetch(
        "https://expansestrackerapp.onrender.com/add-transaction",
        options
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert(data.message);
        transitionFormData.current = {
          category: "",
          amount: 0,
          date: new Date(),
          type: people[0].name,
          errorMessage: "",
        };
      }
    } catch (err) {
      transitionFormData.current.errorMessage = err.message;
    }
  };

  return (
    <>
      <form
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}
        className=" md:w-6/12 w-11/12 rounded-lg space-y-6 p-5 bg-white"
        onSubmit={verfyTransaction}
      >
        {/* Transction Type */}

        <div className=" space-y-3">
          <label
            htmlFor="type"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Transction Type
          </label>
          <select
            id="type"
            name="type"
            required
            onChange={handleChange}
            className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-[#FC1503] focus:outline-none focus:ring-2 focus:ring-[#FC1503] sm:text-sm sm:leading-6"
          >
            {people.map((each, index) => (
              <option
                className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                value={each.name}
                key={index}
              >
                <img
                  src={each.avatar}
                  className="h-5 w-5 flex-shrink-0 rounded-full"
                  alt=""
                />
                <span>{each.name}</span>
              </option>
            ))}
          </select>
        </div>

        {/*  Amount in rupees */}
        <div className=" space-y-3">
          <label
            htmlFor="amount"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Amount
          </label>
          <input
            required
            pattern="[0-9]*"
            onChange={handleChange}
            title="Enter Only Digits"
            className=" relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-[#FC1503] focus:outline-none focus:ring-2 focus:ring-[#FC1503] sm:text-sm sm:leading-6"
            type="text"
            id="amount"
            name="amount"
          />
        </div>

        {/*  Transction Category */}
        <div className=" space-y-3">
          <label
            htmlFor="category"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Category
          </label>
          <input
            className=" relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-[#FC1503] focus:outline-none focus:ring-2 focus:ring-[#FC1503] sm:text-sm sm:leading-6"
            type="text"
            onChange={handleChange}
            required
            id="category"
            name="category"
          />
        </div>

        {/*  Transction Date */}
        <div className=" space-y-3">
          <label
            htmlFor="date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Date
          </label>
          <input
            required
            onChange={handleChange}
            className=" relative  w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-[#FC1503] focus:outline-none focus:ring-2 focus:ring-[#FC1503] sm:text-sm sm:leading-6"
            type="date"
            id="date"
            name="date"
          />
        </div>

        <button
          type="submit"
          className="btn border-none outline-none cursor-pointer text-white w-full text-sm bg-[#FC1503]"
        >
          Add Transction
        </button>
        <p>
          {transitionFormData.current.errorMessage !== "" &&
            transitionFormData.current.errorMessage}
        </p>
      </form>
    </>
  );
}
