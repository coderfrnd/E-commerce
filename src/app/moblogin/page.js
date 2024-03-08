"use client";
import React, { useState } from "react";
import { SiFlipkart } from "react-icons/si";
// import { POST } from "../user/route";
import { FaUserSecret } from "react-icons/fa6";
import Link from "next/link";
// import { IoLogIn } from "react-icons/io5";
const Page = () => {
  //  useState
  const [name, setname] = useState("");
  const [passo, setpass] = useState("");
  const [email, setemail] = useState("");
  const [mob, setmob] = useState("");

  const adduser = async () => {
    // console.log(name, passo, email, mob);
    // let result = await fetch("http://localhost:3000/user", {
    //   method: "POST",
    //   body: JSON.stringify({ name, email, passo, mob }),
    // });
    // result = await result.json();
    // if (result.success) {
    //   alert("Go Home ");
    // }
  };

  return (
    <div className="grid w-full h-full m-0">
      <div className="header bg-blue-600 h-24 text-white">
        <SiFlipkart className="h-16 m-2 w-24" />
      </div>
      <div className="flex justify-center p-0 mt-[30%] mb-0 flex-col items-center">
        <FaUserSecret className="h-16 m-1 w-24" />
        <div className="space-x-1">
          <Link href='/moblogin'>
          <span className="text-black font-semibold hover:text-blue-600">
            Login
          </span>
          </Link>
         
          <span>/</span>
          <Link href='/mobsignup'>
          <span className="text-black font-semibold hover:text-blue-600">
            Signup
          </span>
          </Link>
        </div>
      </div>
      <div className="flex justify-center p-1 mt-[0%] ">
        <div className="h-full w-[80%] mt-0 p-2  ">
          <div className="space-y-4 ml-2 ">
           
            <input
              type="text"
              placeholder=" Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="border-2  border-zinc-900 w-[90%] h-10 ml-2"
            />
           
            <input
              type="password"
              placeholder=" Password"
              value={passo}
              onChange={(e) => setpass(e.target.value)}
              className="border-2  border-zinc-900 w-[90%] h-10 ml-2 "
            />
            <button
              onClick={adduser}
              className="border-2  border-zinc-900 w-[90%] h-8 ml-2 "
            >
              Click
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
