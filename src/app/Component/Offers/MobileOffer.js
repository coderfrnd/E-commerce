"use client"
import React from 'react';

const MobileOffer = ({ imageUrl, title, price }) => {
  return (
    // <div className="bg-white shadow-md rounded-md overflow-hidden flex justify-center flex-col">
    <div className='flex flex-col justify-center cursor-pointer'>
      <img src={imageUrl} alt={title} className="rounded-full w-24 h-24 object-cover" />
      {/* <div className="p-2"> */}
        <h2 className="text-gray-800 font-semibold text-lg items-center ml-4">{title}</h2>
      {/* </div> */}
      </div>
    // </div>
  
  );
};

export default MobileOffer;
