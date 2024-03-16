import React from "react";
import { SlGraph } from "react-icons/sl";


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
