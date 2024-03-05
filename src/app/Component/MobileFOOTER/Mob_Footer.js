import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoBusinessOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { CiSquareMore } from "react-icons/ci";

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
    }

    useEffect(() => {
        window.addEventListener('scroll', scrolltry);
        return () => {
            window.removeEventListener('scroll', scrolltry);
        }
    }, []);

    return (
        <div className={`fixed bottom-0 left-0 w-full flex justify-between items-center bg-${Header ? 'black' : 'white'} text-${Header ? 'white' : 'black'} border-t border-gray-300 px-4 py-2`}>
            <div className='w-1/5 text-center flex  items-center flex-col'>
                <IoHomeOutline size="1.5em"  />
                <h3 className='font-bold'>Home</h3>
            </div>
            <div className='w-1/5 text-center flex  items-center flex-col'>
                <FaRegUser size="1.5em" />
                <h3 className='font-bold'>USER</h3>
            </div>
            <div className='w-1/3 text-center flex  items-center flex-col'>
                <IoBusinessOutline size="1.5em"  />
                <h3 className='font-bold'>BUSINESS</h3>
            </div>
            <div className='w-1/5 text-center flex  items-center flex-col'>
                <CiShoppingCart size="1.5em" />
                <h3 className='font-bold'>CART</h3>
            </div>
            <div className='w-1/5 text-center flex  items-center flex-col'>
                <CiSquareMore size="1.5em" />
                <h3 className='font-bold'>MORE</h3>
            </div>
        </div>
    );
}

export default Mob_Footer;
