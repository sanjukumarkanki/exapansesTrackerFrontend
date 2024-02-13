import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaFileWaveform } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";

const categories = [
  {
    name: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    name: "Transaction Form",
    icon: <FaFileWaveform />,
  },
  {
    name: "Transaction Lists",
    icon: <GrTransaction />,
  },
];

const SidebarTabs = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  return (
    <>
      {categories.map((category, index) => (
        <button
          className={`btn mb-4  btn-danger flex justify-start items-center w-full border-none outline-none text-white cursor-pointer ${
            category.name === selectedCategory && "bg-[#FC1503]"
          } `}
          onClick={() => setSelectedCategory(category.name)}
          key={index}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
              height: "1rem",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
              height: "1rem",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </>
  );
};

export default SidebarTabs;
