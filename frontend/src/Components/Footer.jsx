import React from 'react'
import { assets } from '../assets/admin_assets/assets'

const Footer = () => {
  return (
    <div  >
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm' >
      <div>
        <img src={assets.logo}   className='mb-5 w-32' alt="" />
        <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur debitis nesciunt vitae voluptas cum soluta iure reiciendis distinctio est fugit?
        </p>
      </div>


      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
        </ul>
      </div>



      <div><p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
      <ul className='flex flex-col gap-1 text-gray-600'>
        <li>+91-64716437476</li>
        <li>amit@gmail.com</li>
        </ul></div>



</div>
        <div >
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ lunara.com-All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
