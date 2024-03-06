import React from "react";
import { SiFlipkart } from "react-icons/si";
const page = () => {
  return (
    <div className="grid w-full h-full m-0">
      <div className="header bg-blue-600 h-24 text-white">
        <SiFlipkart className="h-16 m-2 w-24" />
      </div>
      <div className="flex justify-center p-2 mt-[35%] ">
        <div className="h-full w-[80%] mt-0 p-2 ">
          <div className="space-y-4">
            <input
              type="text"
              placeholder=" Name"
              className="border-2   border-zinc-900 w-[90%] h-10 mt-2 ml-2"
            />
            <input
              type="text"
              placeholder=" Email"
              className="border-2  border-zinc-900 w-[90%] h-10 ml-2"
            />
            <input
              type="text"
              placeholder=" Mobile Number"
              className="border-2  border-zinc-900 w-[90%] h-10 ml-2 "
            />
            <input
              type="text"
              placeholder=" Password"
              className="border-2  border-zinc-900 w-[90%] h-10 ml-2 "
            />
            <button className="border-2  border-zinc-900 w-[90%] h-8 ml-2 ">Click</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
