"use client";

import React from "react";
import { SiFlipkart } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";



function Desktop() {
  return (
    <div>
      <header className="flex flex-row justify-around	">
        <div className="flipkart cursor-pointer">
          <SiFlipkart className="h-7 w-7" />
          <span>Explore plus</span>
        </div>

        <div className="search flex flex-row items-center w-3/6">
          <div className="search-icon cursor-pointer"> <CiSearch className="h-6 w-6" /> </div>
          <input type="text" placeholder="Search for product, brands and more" className="search-bar border-solid border-2  rounded-md bg-sky-50 w-full p-2" />
        </div>

        <div className="login flex flex-row items-center cursor-pointer hover:bg-sky-700">
          <div className="user-icon"> <FaRegUserCircle className="h-7 w-7 mr-2" /> </div>
          <div className="login-text">Login</div>
        </div>

        <div className="cart-seller flex flex-row">
          <div className="cart">cart</div>
          <div className="seller">seller</div>
        </div>

        <div className="three-dots">3 dots</div>
      </header>
    </div>
  );
}

export default Desktop;
