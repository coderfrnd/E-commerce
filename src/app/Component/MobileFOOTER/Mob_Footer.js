"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
// import { useRouter } from 'next/router'
const Mob_Footer = ({ children, href }) => {
    const router = useRouter()
    // useRouter
    const handleNavigation = (route) => {
        router.push(route);
      };
  return (
    <div className=' bg-black text-whiteh-full w-[100%] flex flex-col mt-4'>
    <div className='h-full w-[92%] flex m-2 border-2 bg-black text-white border-black '>
        {/* Mob_Footer */}
        <div className='w-[45%] h-[90%] flex flex-col  border-2 m-1 border-black'
        onClick={() => handleNavigation('/layout')}>
            <h2 className='font-bold'>About</h2>
            {/* <h2 className='font-bold'>About</h2> */}
            <p>About us</p>
            <p>Conatct-us</p>
            <p> Carrer</p>
            {/* <p>About us</p> */}


        </div>
        <div className='w-[45%] h-[90%] flex flex-col  border-2 m-1 border-black'
        onClick={() => handleNavigation('/layout')}>
            <h2 className='font-bold'>Groups</h2>
            {/* <h2 className='font-bold'>About</h2> */}
            <p>XYZ Lmt</p>
            <p>XYZ Lmt</p>
            <p>XYZ Lmt</p>
          


        </div>
        <div className='w-[45%] h-[90%] flex flex-col  border-2 m-1 border-black'
        onClick={() => handleNavigation('/layout')}>
            <h2 className='font-bold'>Social</h2>
            {/* <h2 className='font-bold'>About</h2> */}
            <p>XYZ Lmt</p>
            <p>XYZ Lmt</p>
            <p>XYZ Lmt</p>
          


        </div>
      
    </div>
    <div className='text-white  flex flex-col justify-center h-15 space-x-2'>
        {/* ICONS */}
        <div className='justify-center flex space-x-2'>
        <FaGithub />
        <FaDiscord />
        </div>
      
        <div className='text-white justify-center flex space-x-2'>
        Dev by @attacker
    </div>
    </div>
    
    </div>
  )
}

export default Mob_Footer