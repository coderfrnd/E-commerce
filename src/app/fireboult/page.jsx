import React from "react";
import { SlGraph } from "react-icons/sl";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";


function page() {
  return (
    <div className="">

      <header>

      </header>

      <div className="">
        <div className="flex h-25 w-[98%] m-1">

          <div className="w-[30%] items-center justify-center flex flex-initial m-2">
            <img
              className="w-15 h-15"
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/b/0/1/-original-imagxp8vkpczss32.jpeg?q=70"
              alt=""
            />
          </div>

          <div className="m-2">
            <p className="text-xs">
              Fire-Boult Ninja Calling Pro Plus 1.83 inch display, Samrtwatch
              Bluetooth Calling AI voice...
            </p>
            <div className="flex justify-between items-center">
              <div className="text-sm m-1">$199</div>
              <div className="text-sm m-1 text-green-600 w-full">35% Off</div>
              <div className="w-full">
                <img
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                  alt="" className="w-20 h-10"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center"><div className="border bg-slate-100 ">AD</div></div>
        </div>

        <div className="m-2">
          <img
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/b/0/1/-original-imagxp8vkpczss32.jpeg?q=70"
            alt=""
          />
        </div>
      </div>

      <div className="flex w-[90%] justify-between items-center m-auto p-2">
        <div className="border rounded-full bg-green-200"><SlGraph className="h-7 w-7 p-1" /></div>
        <div><p className="text-sm">950+ people ordered this in the last 7 days</p></div>
      </div>

      <div className=" bg-gray-50 w[98%] text-sm text-slate-900 m-2">
        <div className="p-4 border-b">Select Variant</div>

        <div className="flex justify-between p-4 border-b">
          <div>Strap Color: Silver</div>
          <div className="text-slate-500">9 more</div>
        </div>

        <div className="flex justify-between p-4 border-b">
          <div>Display Size: 1.83 inch </div>
          <div className="text-slate-500">3 more</div>
        </div>
      </div>

      <div className="mx-2 my-4">
        <p className="text-sm"><b>Fire-Boult</b> Hurricane 1.33 inches Curved Glass Display with 360 Health Training1 100+ Sports Modes Smartwatch (Gray Strap, Free Size) </p>

        <div className="flex items-center my-2">
          <IoIosStar color="green" />
          <IoIosStar color="green" />
          <IoIosStar color="green" />
          <IoIosStar color="green" />
          <IoIosStarOutline color="green" />
          <p className="text-blue-600 text-xs ml-2">2,150,384 ratings</p>
        </div>

        <div className="flex">
          <h2 className="m font-semibold text-green-700 text-xl">35% off</h2>
          <h2 className="m-1 font-semibold text-slate-400 line-through text-xl">8999</h2>
          <h2 className="m-1 font-semibold text-slate-700 text-xl">₹1,999</h2>
        </div>

        <div>
          <p className="flex text-sm items-center text-green-700">Free delivery by <p className="ml-1 text-slate-800">25th March</p></p>
        </div>

      </div>

      <div className="mx-2 my-4">
        <div className="flex">
          <div>Icon</div>

          <div>
            <div className="flex">
              <div className="text-green-600 flex">FREE Delivery <p className="text-slate-400 line-through mx-2">₹40</p></div>
              <div className="">Delivery by:</div>
            </div>
              <div>25th Mar, Monday</div>
          </div>
        </div>
      </div>

      <footer className="sticky w-full bottom-0">
        <div className="grid grid-cols-2 ">
          <div className="w-full">
            <button className="items-center w-full p-4 bg-white">Add to cart</button>
          </div>
          <div className="w-full">
            <button className="items-center w-full p-4 bg-yellow-400">
              Buy now
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default page;
