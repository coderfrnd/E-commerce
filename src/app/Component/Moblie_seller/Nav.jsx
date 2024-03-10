import Link from "next/link";
import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";

function Nav() {
  return (
    <div className="mt-2 mr-5 ml-5">
      <div className="flex justify-between">
        <div className=" text-xs">
          Existing Seller? Explore our product recommendations with Dhamaka
          selection
        </div>
        <button className="border rounded-lg pl-10 pr-10 box-border text-blue-700 border-blue-700">
          Login
        </button>
      </div>

      <div className="flex justify-between items-center p-2">
        <div>
          <Link href='/'>
          <img
            src="https://static-assets-web.flixcart.com/fk-sp-static/images/flipkart_logo_color_revamp.svg"
            alt=""
          />
          </Link>
        </div>
        <button className="p-3 bg-yellow-400">Start Selling</button>
      </div>

    </div>
  );
}

export default Nav;
