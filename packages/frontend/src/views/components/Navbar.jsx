import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../../assets/MenuFilled.png";
import search from "../../../assets/Vector.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="">
      <div className="flex md:justify-between flex-col md:flex-row px-8 py-4 bg-primary_colour">
        <div className="flex gap-4 mb-3 md:mb-0">
          <img
            className="w-10 h-8 cursor-pointer md:hidden"
            src={icon}
            alt="img"
            onClick={toggleMobileMenu}
          />
          <h2 className="text-white text-xl font-semibold">Rainbow Noir</h2>
        </div>
        <div
          className={`flex md:flex gap-4 ${
            isMobileMenuOpen ? "flex" : "hidden"
          }`}
        >
          <h2 className="text-white md:text-xl text-sm font-semibold">
            <Link to="/read-review">Read Review</Link>
          </h2>
          <h2 className="text-white md:text-xl text-sm font-semibold">
            <Link to="/"> Write Review</Link>
          </h2>
          <h2 className="text-white md:text-base text-sm font-normal">Login</h2>
        </div>
      </div>
      <div className="bg-black flex justify-center items-center p-2">
        <div className="relative h-10 rounded-md">
          <img
            src={search}
            className="absolute ml-1 p-2 text-lg font-normal text-center"
          />
          <input
            type="text"
            className="border pl-10 border-gray-200 h-10 lg:w-[672px] rounded-lg"
            placeholder="SEARCH"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
