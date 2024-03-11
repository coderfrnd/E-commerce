import React from 'react'

function ItemsGadgets({imgURL, about, price}) {
  return (
    <div>
        <div className='flex flex-col items-center justify-center h-50 w-50'>
            <div className='flex justify-center h-50 w-50'>
                <img className='h-28 w-28 object-fill' src={imgURL} alt="" />
            </div>
            <div>{about}</div>
            <div>{price}</div>
        </div>
    </div>
  )
}

export default ItemsGadgets