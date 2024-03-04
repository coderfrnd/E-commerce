"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoBusinessOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { CiSquareMore } from "react-icons/ci"
// import { useRouter } from 'next/router'
const Mob_Footer = ({ children, href }) => {
    const router = useRouter()

    const handleNavigation = (route) => {
        router.push(route);
    };
  
    const Foot = ({ icon, size = '1.5em', color = 'black', ...rest }) => {
        const IconComponent = icon;
        return (
            <IconContext.Provider value={{ size, color }}>
                <IconComponent {...rest} />
            </IconContext.Provider>
        );
    }

    return (
        <div className='  text-black h-16 w-[100%] flex flex-row mt-2 space-x-4 black   mb-0 '>
            {/* <Foot icon={FaDiscord} size="2em" color="white"/> */}
            <div className='ml-2 w-14 flex justify-center flex-col items-center'>
            <Foot icon={IoHomeOutline} size="1.5em" color="black"/>
            <h3 className='font-bold'>Home</h3>
            </div>
            <div className='ml-2 w-14 flex justify-center flex-col items-center'>
            <Foot icon={FaRegUser}size="1.5em" color="black"/>
            <h3 className='font-bold'>USER</h3>
            </div>
            <div className=' w-18 flex justify-center flex-col items-center'>
            <Foot icon={IoBusinessOutline} size="1.5em" color="black"/>
            <h3 className='font-bold'>BUSINESS</h3>
            </div>
            <div className='ml-2 w-14 flex justify-center flex-col items-center'>
            <Foot icon={CiShoppingCart} size="1.5em" color="black"/>
            <h3 className='font-bold'>CART</h3>
            </div>
            <div className='ml-2 w-14 flex justify-center flex-col items-center'>
            <Foot icon={CiSquareMore} size="1.5em" color="black"/>
            <h3 className='font-bold'>MORE</h3>
            </div>
        </div>
    )
}

export default Mob_Footer;
