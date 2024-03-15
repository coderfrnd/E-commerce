import React from 'react'
import { MdNavigateNext } from "react-icons/md";
import ItemsGadgets from './ItemsGadgets';


function Main() {
  return (
    <div className='m-1 border'>
      <div className='flex items-center justify-between m-1 pt-2 pb-2'>
        <div className="head">Smart Gadgets</div>
        <div className="icon bg-blue-600 rounded-full"> <MdNavigateNext className='h-7 w-7' /> </div>
      </div>

      <div className='grid grid-cols-2'>
        <ItemsGadgets imgURL='https://m.media-amazon.com/images/I/81QP3C+rTbL.jpg' about='Mivi Speakers' price='From ₹699' />
        <ItemsGadgets imgURL='https://m.media-amazon.com/images/I/61PmIDoJn7L._AC_UF1000,1000_QL80_.jpg' about='Noise Smartwatch' price='From ₹999' />
        <ItemsGadgets imgURL='https://images-cdn.ubuy.co.in/64f1d4493f37c864a6533720-nuxgal-power-50000mah-power-bank-18w-pd.jpg' about='Power Bank' price='From ₹459' />
        <ItemsGadgets imgURL='https://rukminim2.flixcart.com/image/850/1000/l01blow0/ram/n/f/h/8gb-ddr3-desktop-memory-hx318c10f-8-hyperx-original-imagbxamqxhddmsv.jpeg?q=90&crop=false' about='RAM' price='From ₹2599' />
      </div>
    </div>
  )
}

export default Main