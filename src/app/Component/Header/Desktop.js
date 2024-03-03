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
import Deals_img from "../Deals/Deals_img";
import Footer_desk from "../Footer/Footer_desk";

function Desktop() {
  return (
    <div className="">
      <header className="flex flex-row justify-around	m-5">
        <div className="flipkart cursor-pointer">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" />
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
          <Offers
            imageUrl="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ec6cf773ae886bd7.jpg?q=20"
            title="FOOD"
          />
        </div>
        <div className="">
          <Offers
            imageUrl="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/22e305bf45e2e1a2.jpeg?q=20"
            title="FOOD"
          />
        </div>
        <div className="">
          <Offers
            imageUrl="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/c3146ff3077e7744.jpg?q=20"
            title="FOOD"
          />
        </div>
        <div className="">
          <Offers
            imageUrl="https://i.pinimg.com/736x/eb/7e/c6/eb7ec6677c9e7f769787d781d26027fe.jpg"
            title="FOOD"
          />
        </div>
      </div>

      {/* Deals  */}

      <div>
        <div className="mb-5">

        <Deals />
        </div>
        <div className="flex justify-center m-auto w-[98%]">

        <Deals_img
          imgURL="https://images-cdn.ubuy.co.in/65487090c761180592382d4a-men-watches-military-black-steel.jpg"
          brand="Armani Exchange"
          discount="35% off"
          />
        <Deals_img
          imgURL="https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/k/n/7/-original-imaggcb7k3frtbrk.jpeg?q=90&crop=true"
          brand="Sparky Limited"
          discount=" Flat 25% off"
          />
        <Deals_img
          imgURL="https://india.ray-ban.com/media/wysiwyg/Rb-M-sunglasses_clp_opti/08_Sunglasses_Page_Hero_Banner_Mobile_-_675x1200px.jpg"
          brand="Ray-Eyes"
          discount="Up-to 50% off"
          />
        <Deals_img
          imgURL="https://rukminim2.flixcart.com/image/850/1000/jjkbhjk0/jean/2/u/y/33-12111400blue-denim-jack-jones-original-imaf744vuu3hbtjn.jpeg?q=20&crop=false"
          brand="Jack-n-Jeans"
          discount="Under $500"
          />
        <Deals_img
          imgURL="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/e/tr:w-270,/1e5ec8fNTHRAD00003466_1.jpg?rnd=20200526195200"
          brand="Jack-n-Jacket"
          discount="Starting from $400"
          />
          </div>
      </div>

      {/* Footer */}

      <Footer_desk />

    </div>
  );
}

export default Desktop;
