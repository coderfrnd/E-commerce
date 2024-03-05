import React from 'react';

const MobileOffer = ({ imageUrl, title, price }) => {
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer">
      <style>
        {`
          @media (max-width: 400px) {
            .circular-image {
              width: 56px;
              height: 56px;
            }
          }
        `}
      </style>
      <img src={imageUrl} alt={title} className="rounded-full w-24 h-24 md:w-32 md:h-32 object-cover circular-image" />
      <h2 className="text-gray-800 font-semibold text-lg mt-2">{title}</h2>
    </div>
  );
};

export default MobileOffer;
