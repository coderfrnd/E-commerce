"use client";

import React from "react";
import { SiFlipkart } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Card from "../Category/Card";

import Carousel_Desk from "../Carousel/Carousel_Desk";
import Offers from "../Offers/Offers";
import Deals from "../Deals/Deals";

function Desktop() {
  return (
    <div>
      <header className="flex flex-row justify-around	">
        <div className="flipkart cursor-pointer">
          <SiFlipkart className="h-7 w-7" />
          <span>Explore plus</span>
        </div>

        <div className="search flex flex-row items-center w-3/6">
          <div className="search-icon cursor-pointer">
            {" "}
            <CiSearch className="h-6 w-6" />{" "}
          </div>
          <input
            type="text"
            placeholder="Search for product, brands and more"
            className="search-bar border-solid border-2  rounded-md bg-sky-50 w-full p-2"
          />
        </div>

        <div className="login flex flex-row items-center cursor-pointer hover:bg-sky-700">
          <div className="user-icon">
            {" "}
            <FaRegUserCircle className="h-7 w-7 mr-2" />{" "}
          </div>
          <div className="login-text">Login</div>
        </div>

        <div className="flex flex-row items-center cart cursor-pointer">
          <IoCartOutline className="h-7 w-7 mr-2" />
          <div>Cart</div>
        </div>

        <div className="seller flex flex-row items-center cursor-pointer">
          <CiShop className="h-7 w-7 mr-2" />
          <div>Seller</div>
        </div>

        <div className="three-dots flex items-center cursor-pointer">
          {" "}
          <HiOutlineDotsVertical />{" "}
        </div>
      </header>
      {/* <Card/> */}
      <div>
        <Card />
      </div>
      <div>
        <Carousel_Desk />
      </div>

      {/* Offers */}

      <div className="flex ">
        <div className="">
          <Offers imageUrl="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ec6cf773ae886bd7.jpg?q=20"
            title="FOOD" />
        </div>
        <div className="">
          <Offers imageUrl="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/22e305bf45e2e1a2.jpeg?q=20"
            title="FOOD" />
        </div>
        <div className="">
          <Offers imageUrl="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/c3146ff3077e7744.jpg?q=20"
            title="FOOD" />
        </div>
        <div className="">
          <Offers imageUrl="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ec6cf773ae886bd7.jpg?q=20"
            title="FOOD" />
        </div>
      </div>


      {/* Deals  */}

      <div>
        <Deals />
      </div>
    </div>
  );
}

export default Desktop;
