import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoBusinessOutline } from "react-icons/io5";
import { CiShop, CiShoppingCart } from "react-icons/ci";
import { CiSquareMore } from "react-icons/ci";
import Link from "next/link";
import { TbCategory } from "react-icons/tb";

const Mob_Footer = ({ color }) => {
  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(route);
  };

  // useState
  const [Header, setHeader] = useState(false);

  const scrolltry = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrolltry);
    return () => {
      window.removeEventListener("scroll", scrolltry);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 w-screen flex justify-around items-center bg-${
        Header ? "black" : "white"
      } text-${Header ? "white" : "black"} border-t border-gray-300 px-4 py-0`}
    >
      <div className="w-1/5 text-center flex  items-center flex-col">
        <IoHomeOutline size="1.5em" />
        <h3 className="font-semibold text-xs">Home</h3>
      </div>
      <div className="w-1/5 text-center flex  items-center flex-col">
        <Link href="/categories">
          <TbCategory size="1.5em" />
        </Link>
        <h3 className="font-semibold text-xs">CATEGORIES</h3>
      </div>
      <div className="w-1/5 text-center flex  items-center flex-col">
        <Link href="mobseller">
          <CiShop size="1.5em" />
        </Link>
        <h3 className="font-semibold text-xs">SELLER</h3>
      </div>
      <div className="w-1/5 text-center flex  items-center flex-col">
        <CiShoppingCart size="1.5em" />
        <h3 className="font-semibold text-xs">CART</h3>
      </div>
      <div className="w-1/5 text-center flex  items-center flex-col">
        <Link href="/moblogin">
          <FaRegUser size="1.5em" />
        </Link>
        <h3 className="font-semibold text-xs">USER</h3>
      </div>
    </div>
  );
};

export default Mob_Footer;
