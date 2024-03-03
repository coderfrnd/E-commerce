import React from 'react'

function Help() {
  return (
    <div>
        <div className='text-white mb-2'><b>Help</b></div>
        <ul className='cursor-pointer'>
            <li className='hover:underline hover:text-white'>Payment</li>
            <li className='hover:underline hover:text-white'>Shipping </li>
            <li className='hover:underline hover:text-white'>Cancellation & Return </li>
            <li className='hover:underline hover:text-white'>FAQ </li>
            <li className='hover:underline hover:text-white'>Report</li>
        </ul>
    </div>
  )
}

export default Help