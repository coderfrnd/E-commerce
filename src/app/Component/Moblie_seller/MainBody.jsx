import React from "react";
import { BsArrowDownSquare } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";


function MainBody() {
    return (
        <div className="">
            <div className="relative">
                <div className=" absolute z-10 mt-5 ml-5">Sell Online With Flipkart</div>
                <img
                    className=" max-h-[350px] h-auto w-screen"
                    src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/banner/Mobile_sell.webp"
                    alt=""
                />
            </div>

            <div className="grid grid-cols-2 ">
                <div className="border col-span-1 flex flex-col items-center justify-center h-40">
                    <div className="h-15 w-15 p-5 m-2">
                    <FaPeopleGroup className="h-8 w-8" />
                        
                    </div>
                    <div className="text-xs w-[90%] m-auto text-center">45 Crores+ Flipkart Costumers</div>
                </div>
                <div className="border col-span-1 flex flex-col items-center justify-center h-40">
                    <div className="h-15 w-15 p-5 m-2">
                    <CiWallet className="h-8 w-8" />
                        
                    </div>
                    <div className="text-xs w-[90%] m-auto text-center">7* days secure and regular payments</div>
                </div>
                <div className="border col-span-1 flex flex-col items-center justify-center h-40">
                    <div className="h-15 w-15 p-5 m-2">
                    <BsArrowDownSquare className="h-8 w-8" />
                        
                    </div>
                    <div className="text-xs w-[90%] m-auto text-center">Low cost of doing business</div>
                </div>
                <div className="border col-span-1 flex flex-col items-center justify-center h-40">
                    <div className="h-15 w-15 p-5 m-2">
                    <RiCustomerService2Fill className="h-8 w-8 " />
                        
                    </div>
                    <div className="text-xs w-[90%] m-auto text-center">24 hours Costumer Support</div>
                </div>
                <div className="border col-span-2 flex flex-col items-center justify-center h-40">
                    <div className="h-15 w-15 p-5 m-2">
                    <IoBagOutline className="h-8 w-8" />
                        
                    </div>
                    <div className="text-xs w-[90%] m-auto text-center">Access to Big Billion Days and more</div>
                </div>
            </div>
        </div>
    );
}

export default MainBody;
