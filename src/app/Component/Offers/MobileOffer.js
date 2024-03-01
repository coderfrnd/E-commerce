import React from 'react';

const MobileOffer = ({ imageUrl, title, price }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden flex justify-center flex-col">
      <img src={imageUrl} alt={title} className="rounded-full w-26 h-24 object-cover" />
      <div className="p-2">
        <h2 className="text-gray-800 font-semibold text-lg">{title}</h2>
      </div>
    </div>
  );
};

export default MobileOffer;
