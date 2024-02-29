"use client"
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { SiFlipkart } from "react-icons/si";
import Sidebar from './Sidebar';
import { RxCross1 } from "react-icons/rx";

const Mobile = () => {
    // useState to control sidebar visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        // console.log("Click")
    };

    return (
        <div className=" h-full w-full flex flex-row">
            {/* <div className='flex m-6 w-full h-full justify-center'> */}
                {/* Clickable hamburger menu icon */}
     {
       ( isSidebarOpen ? <div className ='h-8 w-8 flex m-6 justify-center'><GiHamburgerMenu className='h-8 w-6 cursor-pointer' onClick={toggleSidebar}/></div> : 
       <div className ='h-full w-full flex'>
        <Sidebar/>
        <RxCross1 onClick ={toggleSidebar} className ='h-8 w-8 m-2  '/>
        </div>
       )
     }
    {/* <SiFlipkart/> */}
        </div>
    );
}

export default Mobile;
