import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";


function Deals() {
  return (
    <div className="">
      <div className="w-[98%] m-auto bg-white mt-5 flex flex-col">
        <div className="bg-white flex flex-row justify-between">
          <div><b>Top Deals</b></div>
          <div> <MdOutlineNavigateNext className="h-10 w-10 cursor-pointer border-2 rounded-full bg-amber-400 hover:bg-transparent	" /> </div>
        </div>
        
      </div>
    </div>
  );
}

export default Deals;
