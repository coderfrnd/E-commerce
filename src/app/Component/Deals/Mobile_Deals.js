import React from 'react';

const Mobile_Deals = ({ imageUrl, title, offer }) => {
  return (

    <div className='w-[46%] h-[28%] overflow-hidden flex flex-col justify-center border-2 pb-6 pt-8 m-2 border-black'>
      <img src={imageUrl} alt={title} className=" object-fill w-full h-full" />
      <div className=''>

      <h3 className='text-lg  text-zinc-900'>{title}</h3>
      <h3 className='text-md  text-red-900'>{offer}</h3>
      </div>
    </div>
  );
}

export default Mobile_Deals;
