import React from 'react';

const Mobile_Deals = ({ imageUrl, title ,offer}) => {
  return (
   
    <div className='w-[45%] h-[50%] flex flex-col justify-center border-2 m-1 border-black'>
    <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
    <h3 className='text-lg m-1 text-zinc-900'>{title}</h3>
    <h3 className='text-md m-1 text-red-900'>{offer}</h3>
  </div>
  );
}

export default Mobile_Deals;
