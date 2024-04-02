"use client";

import React, { useRef, useState, useEffect } from "react";
import { SlGraph } from "react-icons/sl";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { CiDeliveryTruck, CiShoppingCart } from "react-icons/ci";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { GiCash } from "react-icons/gi";
import { MdFindReplace } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { SiFlipkart } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { FaUserCheck } from "react-icons/fa";
import Link from "next/link";
import { RiBarChartGroupedFill } from "react-icons/ri";
useState

function page() {
    
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef(null);

    const togglePopup = ()=>{
        setShowPopup(!showPopup);
    };

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //       if (popupRef.current && !popupRef.current.contains(event.target)) {
    //         setShowPopup(false);
    //       }
    //     };
    
    //     document.addEventListener('mousedown', handleClickOutside);
    
    //     return () => {
    //       document.removeEventListener('mousedown', handleClickOutside);
    //     };
    //   }, []);
    

    return (
        <div className="">
            <header className="flex justify-between py-4 sticky top-0 bg-white">
                <div className="flex">
                    <div>
                        <Link href="/">
                            <IoMdArrowBack className="w-6 h-6 mx-3" />
                        </Link>{" "}
                    </div>
                    <div>
                        <SiFlipkart className="w-6 h-6 mx-3" />
                    </div>
                </div>

                <div className="flex">
                    <div>
                        <CiSearch className="w-6 h-6 mx-3" />{" "}
                    </div>
                    <div>
                        <CiShoppingCart className="w-6 h-6 mx-3" />{" "}
                    </div>
                    <div>
                        <FaUserCheck className="w-6 h-6 mx-3" />
                    </div>
                </div>
            </header>

            <div className="">
                <div className="flex h-25 w-[98%] m-1">
                    <div className="w-[30%] items-center justify-start flex flex-initial m-2">
                        <img
                            className="w-12 h-13"
                            src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/k/2/m/-original-imagxvyxc9su7u6y.jpeg?q=70"
                            alt=""
                        />
                    </div>

                    <div className="m-2">
                        <p className="text-xs">
                            Eurdo M Running shoes for Men
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="text-sm m-1">$199</div>
                            <div className="text-sm m-1 text-green-600 w-full">35% Off</div>
                            <div className="w-full">
                                <img
                                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                                    alt=""
                                    className="w-20 h-10"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="border bg-slate-100 ">AD</div>
                    </div>
                </div>

                <div className="m-2">
                    <img
                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/k/2/m/-original-imagxvyxc9su7u6y.jpeg?q=70"
                        alt="" 
                        // onClick={togglePopup}
                    />

                    {/* {
                        showPopup && (
                            <div ref={popupRef} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                                <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/k/2/m/-original-imagxvyxc9su7u6y.jpeg?q=7" alt=""  className="max-w-3/4 max-h-3/4" />
                            </div>
                        )
                    } */}
                </div>
            </div>

            <div className="flex w-[90%] justify-between items-center m-auto p-2">
                <div className="border rounded-full bg-green-200">
                    <SlGraph className="h-7 w-7 p-1" />
                </div>
                <div>
                    <p className="text-sm">950+ people ordered this in the last 7 days</p>
                </div>
            </div>

            <div className=" bg-gray-50 w[98%] text-sm text-slate-900 m-2">
                <div className="p-4 border-b">Select Variant</div>

                <div className="flex justify-between p-4 border-b">
                    <div>Color: Black & White</div>
                    <div className="text-slate-500">9 more</div>
                </div>

                <div className="p-4 border-b">
                    <div className="flex flex-row items-center justify-between">
                        <div>Size - UK/India</div>
                        <div className="flex items-center">
                            <div className="mx-2"><RiBarChartGroupedFill /></div>
                            <div className="">Size Chart</div>
                        </div>
                    </div>

                    <div className="flex justify-between my-4">
                        <div className="flex flex-col">
                            <div className="rounded-full border border-slate-400 w-12 h-12 items-center flex justify-center mb-2">
                                <p>6</p>
                            </div>
                            <div className="border border-red-500 flex justify-center">
                                <p className="text-red-500 text-xs">3 left</p>
                            </div>
                        </div>

                        <div>
                            <div className="rounded-full border border-black w-12 h-12 items-center flex justify-center">
                                <p>7</p>
                            </div>
                        </div>

                        <div>
                            <div className="rounded-full border border-slate-400 w-12 h-12 items-center flex justify-center mb-2">
                                <p>8</p>
                            </div>
                            <div className="border border-red-500 flex justify-center">
                                <p className="text-red-500 text-xs">2 left</p>
                            </div>
                        </div>

                        <div>

                            <div className="rounded-full border border-black w-12 h-12 items-center flex justify-center">
                                <p>9</p>
                            </div>
                        </div>
                        
                        <div className="">
                            <div className="rounded-full border border-slate-300 w-12 h-12 items-center flex justify-center">
                                <hr className="bg-black border-slate-300 w-full relative"  />
                                <p className="absolute text-slate-300">10</p>
                            </div>
                        </div>

                        <div>
                            <div className="rounded-full border border-slate-400 w-12 h-12 items-center flex justify-center mb-2">
                                <p>11</p>
                            </div>
                            <div className="border border-red-500 flex justify-center">
                                <p className="text-red-500 text-xs">6 left</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-2 my-4">
                <p className="text-sm">
                    <b>Adidas</b> These running shoes are designed to provide both style and functionality. With their sleek and modern design, they are perfect for men.
                </p>

                <div className="flex items-center my-2">
                    <IoIosStar color="green" />
                    <IoIosStar color="green" />
                    <IoIosStar color="green" />
                    <IoIosStar color="green" />
                    <IoIosStarOutline color="green" />
                    <p className="text-blue-600 text-xs ml-2">2,150,384 ratings</p>
                </div>

                <div className="flex items-center">
                    <h2 className="m font-semibold text-green-700 text-xl">35% off</h2>
                    <h2 className="mx-2 font-semibold text-slate-400 line-through text-xl">
                        5,999
                    </h2>
                    <h2 className="mx-2 font-semibold text-slate-700 text-xl">₹2,449</h2>
                </div>

                <div>
                    <p className="flex text-sm items-center text-green-700">
                        Free delivery by <p className="ml-1 text-slate-800">25th March</p>
                    </p>
                </div>
            </div>

            <div className="mx-2 my-4">
                <div className="flex items-center justify-between mx-4 p-1">
                    <div>
                        <CiDeliveryTruck className="h-6 w-6" />
                    </div>

                    <div>
                        <div className="flex">
                            <div className="text-green-600 flex">
                                FREE Delivery{" "}
                                <p className="text-slate-400 line-through mx-2">₹40</p>
                            </div>
                            <div className="">Delivery by:</div>
                        </div>
                        <div>25th Mar, Monday</div>
                    </div>

                    <div>Next</div>
                </div>
            </div>

            <div className="flex justify-between mx-2 my-4">
                <div className="flex flex-col items-center justify-center">
                    <div>
                        <MdOutlineHomeRepairService className="w-6 h-6 m-2" />
                    </div>
                    <div className="text-center text-sm">7 days service centre</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div>
                        <GiCash className="w-6 h-6 m-2" />
                    </div>
                    <div className="text-center text-sm">Cash on delivery</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div>
                        <MdFindReplace className="w-6 h-6 m-2" />
                    </div>
                    <div className="text-center text-sm">10 days replacement</div>
                </div>
            </div>

            <div className="mx-2 my-4">
                <div className="">
                    <div className="mb-1">Highlights</div>

                    <div>
                        <ol className="list-disc text-sm p-4 m-1">
                            <li>
                                Avaliable in different sizes
                            </li>
                            <li>
                                Have comforing soul
                            </li>
                            <li>
                                Springy Bounce cushioning ensures comfort through even the most grueling sessions.
                            </li>
                            <li>The tooling the shank was created by using data from hundreds of atheletes</li>
                            <li>Stylish & Durable</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="px-2 py-4">
                <div className="flex items-center justify-between p-2">
                    <div className="">Ratings & Review</div>
                    <button className="p-2 px-6 border border-slate-400 rounded-lg text-blue-600">Rate Product</button>
                </div>

                <div className="flex justify-between">
                    <div className="w-[50%] flex flex-col justify-evenly ">

                        <div className="text-center text-sm text-slate-500">Very Good</div>
                        <div className="flex items-center justify-center">
                            <IoIosStar color="green" />
                            <IoIosStar color="green" />
                            <IoIosStar color="green" />
                            <IoIosStar color="green" />
                            <IoIosStarOutline color="green" />
                        </div>

                        <div className="text-sm flex items-center text-center text-slate-500">2,18,612 ratings and 28,775 reviews</div>
                    </div>

                    <div className="w-[50%] text-sm border-l pl-5 ml-2">
                        <div className="flex justify-between items-center">
                            <div>5</div>
                            <IoIosStar className="w-7 h-7" />
                            <div className="w-[90%] h-full flex ml-2 pr-6 items-center relative">
                                <div className="w-[90%] rounded-xl border-slate-300 h-full border-t-4 absolute"></div>
                                <div className="w-[90%] rounded-xl border-green-600 h-full border-t-4 absolute"></div>
                            </div>
                            <div className="text-slate-500 text-xs w-full ">1,24,978</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>4</div>
                            <IoIosStar className="w-7 h-7" />
                            <div className="w-[90%] h-full flex ml-2 pr-6 items-center relative">
                                <div className="w-[90%] rounded-xl border-slate-300 h-full border-t-4 absolute"></div>
                                <div className="w-[35%] rounded-xl border-green-600 h-full border-t-4 absolute"></div>
                            </div>
                            <div className="text-slate-500 text-xs w-full ">41,446</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>3</div>
                            <IoIosStar className="w-7 h-7" />
                            <div className="w-[90%] h-full flex ml-2 pr-6 items-center relative">
                                <div className="w-[90%] rounded-xl border-slate-300 h-full border-t-4 absolute"></div>
                                <div className="w-[50%] rounded-xl border-green-600 h-full border-t-4 absolute"></div>
                            </div>
                            <div className="text-slate-500 text-xs w-full ">12,310</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>2</div>
                            <IoIosStar className="w-7 h-7" />
                            <div className="w-[90%] h-full flex ml-2 pr-6 items-center relative">
                                <div className="w-[90%] rounded-xl border-slate-300 h-full border-t-4 absolute"></div>
                                <div className="w-[20%] rounded-xl border-green-600 h-full border-t-4 absolute"></div>
                            </div>
                            <div className="text-slate-500 text-xs w-full ">1200</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>1</div>
                            <IoIosStar className="w-7 h-7" />
                            <div className="w-[90%] h-full flex ml-2 pr-6 items-center relative">
                                <div className="w-[90%] rounded-xl border-slate-300 h-full border-t-4 absolute"></div>
                                <div className="w-[11%] rounded-xl border-green-600 h-full border-t-4 absolute"></div>
                            </div>
                            <div className="text-slate-500 text-xs w-full ">5260</div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="sticky w-full bottom-0">
                <div className="grid grid-cols-2 ">
                    <div className="w-full">
                        <button className="items-center w-full p-4 bg-white">
                            Add to cart
                        </button>
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
