import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


function Footer() {
    return (
        <div className='bg-slate-800 text-slate-300 p-2'>
            <div className="mr-5 ml-5">

                <div className="text-center p-5">
                    Download Mobile App
                </div>

                <div className='flex justify-around'>
                    <img src="https://static-assets-web.flixcart.com/fk-sp-static/images/play_store.png" alt="" />
                    <img src="https://static-assets-web.flixcart.com/fk-sp-static/images/apple_store.png" alt="" />
                </div>

                <div className='text-center p-3'>Stay Connected</div>
                <div className="icons flex justify-around">
                    <div className='p-2 rounded-full bg-black'><CiFacebook className='size-6' /></div>
                    <div className='p-2 rounded-full bg-black'><FaInstagram className='size-6' /></div>
                    <div className='p-2 rounded-full bg-black'><CiLinkedin className='size-6' /></div>
                    <div className='p-2 rounded-full bg-black'><FaYoutube className='size-6' /></div>
                    <div className='p-2 rounded-full bg-black'><FaTwitter className='size-6' /></div>
                </div>
            </div>
        </div>
    )
}

export default Footer