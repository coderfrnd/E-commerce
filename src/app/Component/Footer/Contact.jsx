import React from "react";
import { CiFacebook } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

function Contact() {
    return (
        <div className="flex flex-col justify-between pl-5 border-l">
            <div className="flex flex-col">
                <div className="text-white mb-2">
                    <b>Mail us:</b>
                </div>
                <div className="hover:underline hover:text-white cursor-pointer">
                    cs@flipkart.com
                </div>
            </div>

            <div className="">
                <div className="text-white">
                    <b>Social:</b>
                </div>
                <div className="flex">
                    <div className="cursor-pointer m-2 ">
                        {" "}
                        <CiFacebook className="w-4 h-4" />{" "}
                    </div>
                    <div className="cursor-pointer m-2 ">
                        {" "}
                        <BsTwitterX className="w-4 h-4" />{" "}
                    </div>
                    <div className="cursor-pointer m-2 ">
                        {" "}
                        <FaYoutube className="w-4 h-4" />{" "}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
