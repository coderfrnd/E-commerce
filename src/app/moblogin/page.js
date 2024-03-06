"use client";
import React, { useState } from "react";
import { SiFlipkart } from "react-icons/si";
// import { POST } from "../user/route";
const page = () => {
  //  useState
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");
  const [email, setemail] = useState("");
  const [mob, setmob] = useState("");

  const adduser = async () => {
    console.log(name, pass, email, mob);
    let result = await fetch("http://localhost:3000/user", {
      method: "POST",
      body: JSON.stringify({ name, email, pass, mob }),
    });
    result = await result.json();
    if (result.success) {
      alert("Go Home ");
    }
  };

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
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="border-2   border-zinc-900 w-[90%] h-10 mt-2 ml-2"
            />
            <input
              type="text"
              placeholder=" Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="border-2  border-zinc-900 w-[90%] h-10 ml-2"
            />
            <input
              type="text"
              placeholder=" Mobile Number"
              value={mob}
              onChange={(e) => setmob(e.target.value)}
              className="border-2  border-zinc-900 w-[90%] h-10 ml-2 "
            />
            <input
              type="text"
              placeholder=" Password"
              value={pass}
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

export default page;
