import React from 'react'
import { assetsw } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
{/* Easy Exchange  */}
      <div><img src={assetsw.exchange_icon} alt="" className='w-12 m-auto mb-5'/>
      <p className='font-semibold'>EASY EXCHANGE POLICY</p>
      <p className='tetx-gray-400'>We offer hassele free exchange policy</p>
      </div>


      {/* Quality icon  */}
      <div><img src={assetsw.quality_icon} alt="" className='w-12 m-auto mb-5'/>
      <p className='font-semibold'>7 Days Return Policy</p>
      <p className='tetx-gray-400'>We provide 7days free return policy</p>
      </div>
      {/* support  customer  */}
      <div><img src={assetsw.support_img} alt="" className='w-12 m-auto mb-5'/>
      <p className='font-semibold'>Best Customer Support</p>
      <p className='tetx-gray-400'>We provide 24/7 customer support </p>
      </div>
    </div>
  )
}

export default OurPolicy
