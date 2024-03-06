import React from 'react'
import { SiFlipkart } from "react-icons/si";
const page = () => {
  return (
    <div className='fixed flex flex-col'>
<div className='w-screen h-20 bg-blue-600 mt-0'></div>
    <div className='w-screen h-screen flex justify-center items-center flex-col'>
      
 <div className='w-[80%] h-[60%] border-2  border-black flex  flex-col '>
 <div className="flipkart cursor-pointer mb-4 mt-2 justify-center flex items-center h-20 w-[80%] ml-4 ">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" 
          className='h-20  mr-10 overflow-hidden ml-6'
          />
        </div>
 
  <div className='m-2 flex flex-col space-y-8 '>
  <input
  type="text"   
  placeholder='name'
  className='border-2   border-red-800 w-[90%] h-10 mt-2 ml-2'
  />
  <input
  type="text"   
  placeholder='email'
  className='border-2  border-red-800 w-[90%] h-10 ml-2'
  />
  <input
  type="text"   
  placeholder='Number'
  className='border-2  border-red-800 w-[90%] h-10 ml-2 '
  />
  <input
  type="text"   
  placeholder='Address'
  className='border-2  border-red-800 w-[90%] h-10 ml-2 '
  />
  </div>
 
 </div>
    </div>
    </div>
  )
}

export default page