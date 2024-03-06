"use client";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiFlipkart } from "react-icons/si";
import Sidebar from "./Sidebar";
import { RxCross1 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Mobile_Carousel from "../Carousel/Mobile_Carousel";
import MobileOffer from "../Offers/MobileOffer";
import Mobile_Deals from "../Deals/Mobile_Deals";
import Mob_Footer from "../MobileFOOTER/Mob_Footer";
import ItemsMob from "../Items/ItemsMob";
import { MdOutlineNavigateNext } from "react-icons/md";
import Link from "next/link";

const Mobile = () => {
  // useState to control sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // console.log("Click")
  };

  return (
    <div className="h-full w-screen flex flex-col ">
      <div className="h-full w-screen">
        {isSidebarOpen ? (
          <div className="h-full w-screen flex flex-col">
            <div className="flex flex-row ">
              <div className="w-12 h-12 items-center mt-2 flex justify-center">
                <GiHamburgerMenu
                  className="h-8 mt-1 w-6 cursor-pointer  "
                  onClick={toggleSidebar}
                />
              </div>

              <div className=" flex mt-3 ml-[49%]  justify-center item-center space-x-4">
                <SiFlipkart className="h-7 w-6 mt-1" />
                
                <Link href='/moblogin' >
                  <FaRegUserCircle className="h-7 w-6 mt-1 " />{" "}
                </Link>
                <IoCartOutline className="h-7 w-6 mt-1 " />
                <CiShop className="h-7 w-6 mt-1" />
              </div>
            </div>
            <div className="search flex flex-row items-center w-full  ">
              <div className="search-icon cursor-pointer">
                {" "}
                {/* <CiSearch className="h-6 w-6" />{" "} */}
              </div>
              <input
                type="text"
                placeholder="Search for product, brands and more "
                className="search-bar border-solid border-2  rounded-md bg-sky-50 w-full p-2"
                // <CiSearch className="h-6 w-6" />{" "}
              />
            </div>
            <div className="mt-0 mb-0">
              <Mobile_Carousel imageUrl="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ec6cf773ae886bd7.jpg?q=20" />
            </div>
            <div className="m-2 flex flex-row item-center space-x-3">
              <MobileOffer
                imageUrl="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ec6cf773ae886bd7.jpg?q=20"
                title="FOOD"
              />
              <MobileOffer
                imageUrl="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ec6cf773ae886bd7.jpg?q=20"
                title="FOOD"
              />
              <MobileOffer
                imageUrl="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ec6cf773ae886bd7.jpg?q=20"
                title="FOOD"
              />
              <MobileOffer
                imageUrl="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ec6cf773ae886bd7.jpg?q=20"
                title="FOOD"
              />
            </div>

            <div className="h-10  mt-1 mb-0 flex flex-row w-full">
              <h2 className="text-gray-800 font-semibold text-lg items-center ml-4 mt-1">
                TOP DEALS
              </h2>
            </div>

            {/* <div className='mb-2 ml-1 mt-0 flex flex-row w-full h-full'> */}
            <div className="h-screen m-0 p-0 w-screen flex flex-col  ">
              {/* Your other components */}
              <div className=" flex flex-wrap  m-0 h-screen w-screen overflow-y-auto ">
                <Mobile_Deals
                  imageUrl="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ec6cf773ae886bd7.jpg?q=20"
                  title="FOOD"
                  offer="56% off"
                  // className='mb-2'
                />
                <Mobile_Deals
                  imageUrl="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/9926b000d9e06f79.jpg?q=20"
                  title="ELECTRONICS"
                  offer="56% off"
                  // className='mb-2'
                />
                <Mobile_Deals
                  imageUrl="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/81035a28051d094e.jpg?q=20"
                  title="MOBILE"
                  offer="56% off"
                  // className='mb-2'
                />
                <Mobile_Deals
                  imageUrl="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/81035a28051d094e.jpg?q=20"
                  title="MOBILE"
                  offer="56% off"
                  // className='mb-2'
                />
                <Mobile_Deals
                  imageUrl="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/81035a28051d094e.jpg?q=20"
                  title="MOBILE"
                  offer="56% off"
                  // className='mb-2'
                />
                <Mobile_Deals
                  imageUrl="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/81035a28051d094e.jpg?q=20"
                  title="MOBILE"
                  offer="56% off"
                  // className='mb-2'
                />
              </div>
            </div>

            {/* Items Mobile  */}
            <div className="flex justify-between m-2">
              <div>Top Items</div>
              <div> <MdOutlineNavigateNext className="h-10 w-10 cursor-pointer border-2 rounded-full bg-blue-600 hover:bg-transparent	" /> </div>
            </div>

            <div className="text-black flex flex-row ">
              <ItemsMob
                imgURL="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/b/0/1/-original-imagxp8vkpczss32.jpeg?q=70"
                Name="Fire Boult"
                Specs="Gray Strap, Free Size"
                Price="$199"
                Discount="35% off"
              />
              <ItemsMob
                imgURL="https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/a/y/s/57-vc-s13835-vincent-chase-original-imagx8jejpzwgnt6.jpeg?q=70"
                Name="Vincent Chase"
                Specs="UV Protection"
                Price="$9"
                Discount="15% off"
              />
              <ItemsMob
                imgURL="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/k/2/m/-original-imagxvyxc9su7u6y.jpeg?q=70"
                Name="Adida"
                Specs="Light Weight, Comfort "
                Price="$49"
                Discount="20% off"
              />
            </div>
           

            {/* <Mob_Footer  /> */}
            <div className="h-1 m-10 bg-white">A </div>
            <div className="bg-black ">
              <Mob_Footer />
            </div>
          </div>
        ) : (
          <div className="h-full w-full flex ">
            <Sidebar />
            <RxCross1 onClick={toggleSidebar} className="h-8 w-8 m-2  " />
          </div>
        )}
      </div>
    </div>
  );
};

export default Mobile;
