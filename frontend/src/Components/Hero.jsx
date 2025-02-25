import React from 'react'
import { assets } from '../assets/admin_assets/assets'
import { assetsw } from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* heroleft  */}
      <div className='max-w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
      <div className='text-[#414141]'>
<div className='flex items-center gap-2'>
<p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
<p className='font-medium tet-sm md:text-base'>OUR BESTSELLERS</p>
</div>
<h1 className='prata-regular text-3xl sm:py-3 lg:text:5xl leading-relaxed'>Latest Arrivals</h1>
<div className='flex items-center gap-2'>
  <p className='font-semibold text-sm md:etxt-base'>SHOP Now</p>
  <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
</div>
        </div></div>
        {/* hero right side  */}
        <img  className='w-full sm:w-1/2'src={assetsw.hero_img} alt="" />
    </div>
  )
}

export default Hero
