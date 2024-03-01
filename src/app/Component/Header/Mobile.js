"use client"
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { SiFlipkart } from "react-icons/si";
import Sidebar from './Sidebar';
import { RxCross1 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi"
import Mobile_Carousel from '../Carousel/Mobile_Carousel';
import MobileOffer from '../Offers/MobileOffer';

const Mobile = () => {
    // useState to control sidebar visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        // console.log("Click")
    };

    return (
        <div className='h-full w-full flex flex-col '>

       
        <div className="h-full w-full">
           
     {
       ( isSidebarOpen ? <div className ='h-full w-full flex flex-col'>

        <div className='flex flex-row '>
        <div className='w-12 h-12 items-center mt-2 flex justify-center'>
        <GiHamburgerMenu className='h-8 mt-1 w-6 cursor-pointer  ' onClick={toggleSidebar}/>
        </div>
        
  
        
        <div className=' flex mt-3 ml-[50%]  justify-center item-center space-x-4'>
    
    <SiFlipkart className="h-7 w-6 mt-1" />
 
      <FaRegUserCircle className="h-7 w-6 mt-1 " />{" "}
  
    <IoCartOutline className="h-7 w-6 mt-1 " />
    
  <CiShop className="h-7 w-6 mt-1" />
  
 {/* <div> */}
    {/* kk
 </div> */}
</div>
        </div>
        <div className="search flex flex-row items-center w-full  ">
          <div className="search-icon cursor-pointer">
            {" "}
            {/* <CiSearch className="h-6 w-6" />{" "} */}
          </div>
          <input
            type="text"
            placeholder= "Search for product, brands and more "
            className="search-bar border-solid border-2  rounded-md bg-sky-50 w-full p-2"
            // <CiSearch className="h-6 w-6" />{" "}
          />
        </div>
        <div className='mt-0 mb-0'>
            <Mobile_Carousel
            imageUrl="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ec6cf773ae886bd7.jpg?q=20"
            />
        </div>
        <div className='m-2 flex flex-row item-center space-x-3'>
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

        </div>
        
        : 
       <div className ='h-full w-full flex'>
        <Sidebar/>
        <RxCross1 onClick ={toggleSidebar} className ='h-8 w-8 m-2  '/>
        </div>
       )
     }
     
     
    
     </div>
     </div>
    );
    }

export default Mobile;
