import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header>
      <h3 >TANN TRIM</h3>
      <div className="nav-items">
          <IoSearchSharp className=" nav-icon nav-hidden" />
          <FaUser  className="nav-icon nav-hidden" />
          <BsBagFill   className="nav-icon nav-hidden"/>
          <BsBookmarkFill  className="nav-icon nav-hidden" />
          <GiHamburgerMenu  className="nav-icon hamburger-icon" />
      </div>
    </header>
  );
};

export default Header;
