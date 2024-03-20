import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import catItems from "./catItems";
import Link from "next/link";
catItems;

function page() {
  return (
    <div>
      <header className="grid grid-flow-col px-1 items-center py-3 bg-blue-600 text-white ">
        <div>
            <Link href='/'>
                <IoArrowBack size="1.4rem" />
            </Link>
        </div>
        <div>All Categories</div>
        <div>
          <CiSearch className="flex m-auto items-end" size="1.4rem" />
        </div>
        <div>
          <CiShoppingCart className="flex m-auto items-end" size="1.4rem" />
        </div>
        <div>
          <FaRegUser
            className="flex m-auto justify-end items-end"
            size="1.4rem"
          />
        </div>
      </header>

      <div className="grid grid-cols-3 justify-center items-center text-sm mt-2">
        <div className="border flex flex-col justify-center items-center  m-1">
          <img
            className="h-[7rem] w-[6rem] m-auto"
            src="https://img.freepik.com/free-photo/full-length-portrait-smiling-pretty-woman-isolated-white-wall_231208-703.jpg"
            alt="fn"
          />
        <div>Fashion</div>
        </div>
        <div className="border flex flex-col justify-center items-center  m-1">
          <img
            className="h-[7rem] w-[6rem] m-auto"
            src="https://media.istockphoto.com/id/511991248/vector/smartphone-with-app-icons.jpg?s=612x612&w=0&k=20&c=UmEdw7hbpARzqW5bJEZc4sBao0WA56wB-vZlBGkI23k="
            alt="fn"
          />
        <div>Mobiles</div>
        </div>
        <div className="border flex flex-col justify-center items-center  m-1">
          <img
            className="h-[7rem] w-[6rem] m-auto"
            src="https://freerangestock.com/sample/141013/technology.-electronic-devices-on-a-white-background.jpg"
            alt="fn"
          />
        <div>Electronics</div>
        </div>
        <div className="border flex flex-col justify-center items-center  m-1">
          <img
            className="h-[7rem] w-[6rem] m-auto"
            src="https://cdn3.vectorstock.com/i/1000x1000/62/02/large-set-household-items-on-white-background-vector-30436202.jpg"
            alt="fn"
          />
        <div>Home</div>
        </div>
        <div className="border flex flex-col justify-center items-center  m-1">
          <img
            className="h-[7rem] w-[6rem] m-auto"
            src="https://media.gettyimages.com/id/171589331/photo/home-appliance.jpg?s=612x612&w=gi&k=20&c=1Ispnvk0P2ZKjduOtpxaPrLLKo5pUJFHdmD6CngMB4o="
            alt="fn"
          />
        <div>Appliances</div>
        </div>
        <div className="border flex flex-col justify-center items-center  m-1">
          <img
            className="h-[7rem] w-[6rem] m-auto"
            src="https://i.pinimg.com/originals/aa/a2/9e/aaa29e8ea70ca1394d5f9946a206f35c.png"
            alt="fn"
          />
        <div>Personal Care</div>
        </div>
        <div className="border flex flex-col justify-center items-center  m-1">
          <img
            className="h-[7rem] w-[6rem] m-auto"
            src="https://img.freepik.com/premium-photo/children-s-toys-white-background_168508-618.jpg"
            alt="fn"
          />
        <div>Toys</div>
        </div>
        <div className="border flex flex-col justify-center items-center  m-1">
          <img
            className="h-[7rem] w-[6rem] m-auto"
            src="https://static.vecteezy.com/system/resources/thumbnails/032/384/976/small_2x/furniture-on-white-background-ai-generative-photo.jpg"
            alt="fn"
          />
        <div>Furniture</div>
        </div>
        <div className="border flex flex-col justify-center items-center  m-1">
          <img
            className="h-[7rem] w-[6rem] m-auto"
            src="https://www.pngitem.com/pimgs/m/303-3039141_soccer-performance-soccer-player-white-background-hd-png.png"
            alt="fn"
          />
        <div>Sports</div>
        </div>
        <div className="border flex flex-col justify-center items-center  m-1">
          <img
            className="h-[7rem] w-[6rem] m-auto"
            src="https://static.vecteezy.com/system/resources/previews/028/718/074/original/medical-insurance-icon-health-insurance-icon-on-white-background-illustration-vector.jpg"
            alt="fn"
          />
        <div>Insurance</div>
        </div>
        <div className="border flex flex-col justify-center items-center  m-1">
          <img
            className="h-[7rem] w-[6rem] m-auto"
            src="https://s3.envato.com/files/261739247/protein%20silver%20lid%203%20cans%20wa.jpg"
            alt="fn"
          />
        <div>Nutrition</div>
        </div>
        <div className="border flex flex-col justify-center items-center  m-1">
          <img
            className="h-[7rem] w-[6rem] m-auto"
            src="https://png.pngtree.com/background/20230621/original/pngtree-isolated-white-background-3d-illustration-of-a-super-sports-motorbike-picture-image_3913073.jpg"
            alt="fn"
          />
        <div>Bikes</div>
        </div>
        <div className="border flex flex-col justify-center items-center  m-1">
          <img
            className="h-[7rem] w-[6rem] m-auto"
            src="https://media.istockphoto.com/id/1200796811/photo/gift-cards-with-red-colored-bow.webp?b=1&s=170667a&w=0&k=20&c=1MfPgRmFtdZaHUbzIxlre3HymoxHJuqzp2DnJZPxYQA="
            alt="fn"
          />
        <div>gift Cards</div>
        </div>
        <div className="border flex flex-col justify-center items-center  m-1">
          <img
            className="h-[7rem] w-[6rem] m-auto"
            src="https://freerangestock.com/sample/32119/a-stack-of-books-isolated-on-a-white-background.jpg"
            alt="fn"
          />
        <div>Books</div>
        </div>
      </div>
    </div>
  );
}

export default page;
