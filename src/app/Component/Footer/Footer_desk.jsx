import React from 'react'
import About from './About'
import Group_companies from './Group_companies'
import Help from './Help'
import Consumer_pol from './Consumer_pol'
import Contact from './Contact'
import Address from './Address'
import { CiGift, CiShop } from "react-icons/ci";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdOutlineCopyright } from 'react-icons/md'

function Footer_desk() {
    return (
        <div className=''>
            <footer className=' bg-slate-900 text-slate-400'>
                <div className='flex flex-row  p-8 text-xs justify-around'>

                    <About />
                    <Group_companies />
                    <Help />
                    <Consumer_pol />

                    <Contact />
                    <Address />
                </div>

                <hr />

                <div className='flex justify-around items-center pt-5 pb-5'>
                    <div className="seller flex text-xs">
                        <div className="sellIcon"> <CiShop className='w-4 h-4 mr-3' /> </div>
                        <div className="hover:underline hover:text-white cursor-pointer">Become a seller</div>
                    </div>
                    <div className="Ads flex text-xs">
                        <div className="sellIcon"> <RiAdvertisementFill className='w-4 h-4 mr-3' /> </div>
                        <div className="hover:underline hover:text-white cursor-pointer">Advertise</div>
                    </div>
                    <div className="Gift flex text-xs">
                        <div className="sellIcon"> <CiGift className='w-4 h-4 mr-3' /> </div>
                        <div className="hover:underline hover:text-white cursor-pointer">Gift Cards</div>
                    </div>
                    <div className="Copyright flex items-center text-xs">
                        <MdOutlineCopyright /><div>2007-2024 Flipkart.com </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer_desk