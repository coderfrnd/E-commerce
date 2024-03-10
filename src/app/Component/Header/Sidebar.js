import React from "react";
import { FaUser } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaBorderAll } from "react-icons/fa6";
import { LiaLanguageSolid } from "react-icons/lia";
import { AiOutlineMore } from "react-icons/ai";
import { BiSolidOffer } from "react-icons/bi";
import { AiFillShop } from "react-icons/ai";
import { RiCoupon2Fill } from "react-icons/ri";
import { FaCartArrowDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";



const Sidebar = () => {
  return (
    <div className="h-full w-[75%]  ">
      <div className="head flex justify-between items-center bg-blue-600 text-white p-3">
        <div>
          {" "}
          <FaUser />{" "}
        </div>
        <div>Login & SignUp</div>
        <div>
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-cbb357.png"
            className="h-7 w-7"
          />
        </div>
      </div>

      <div className="bg-slate-100">
        <ul className="text-slate-600">
          <li className="flex p-2 items-center">
            <div className="mr-2"><BsFillLightningChargeFill /></div>
            <div>Super Coin Zone</div>
          </li>
          <li className="flex p-2 items-center">
            <div className="mr-2"> <img src="https://rukminim2.flixcart.com/www/200/28/promos/11/07/2018/70e5346e-fce4-4718-8e56-27be8492faa5.png?q=60" /> </div>
            <div>Flipkart plus zone</div>
          </li>
          <hr className="border-slate-400" />
          <li className="flex p-2 items-center">
            <div className="mr-2"> <FaBorderAll /> </div>
            <div>All Categories</div>
          </li>
          <li className="flex p-2 items-center">
            <div className="mr-2"><AiOutlineMore /> </div>
            <div>More on Flipkart</div>
          </li>
          <hr className="border-slate-400"/>
          <li className="flex p-2 items-center">
            <div className="mr-2"><LiaLanguageSolid /> </div>
            <div>Language</div>
          </li>
          <hr className="border-slate-400"/>
          <li className="flex p-2 items-center">
            <div className="mr-2"><BiSolidOffer /> </div>
            <div>Offers on Flipkart</div>
          </li>
          <li className="flex p-2 items-center">
            <div className="mr-2"><AiFillShop /> </div>
            <div>Sell on Flipkart</div>
          </li>
          <hr className="border-slate-400"/>
          <li className="flex p-2 items-center">
            <div className="mr-2"> <img src="https://rukminim2.flixcart.com/www/200/28/promos/10/03/2017/b7a79d1a-e088-4c4b-951f-9b8214719cc9.png?q=60" className="h-4 w-4"/> </div>
            <div>My orders</div>
          </li>
          <li className="flex p-2 items-center">
            <div className="mr-2"><RiCoupon2Fill /> </div>
            <div>Coupons</div>
          </li>
          <li className="flex p-2 items-center">
            <div className="mr-2"><FaCartArrowDown /> </div>
            <div>carts</div>
          </li>
          <li className="flex p-2 items-center">
            <div className="mr-2"><FaHeart /> </div>
            <div>My wishlist</div>
          </li>
          <li className="flex p-2 items-center">
            <div className="mr-2"><MdAccountCircle /> </div>
            <div>My Accounts</div>
          </li>
          <li className="flex p-2 items-center">
            <div className="mr-2"><IoIosNotifications /> </div>
            <div>My Notifications</div>
          </li>
          <hr className="border-slate-400"/>
          <li className="flex p-2 items-center">Notification Prefrences</li>
          <li className="flex p-2 items-center">Help Center</li>
          <li className="flex p-2 items-center">Legal</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
