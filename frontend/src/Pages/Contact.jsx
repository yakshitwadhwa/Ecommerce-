import React from 'react'
import Title from '../Components/Title'
import { assetsw } from '../assets/frontend_assets/assets'
import NewsLetter from '../Components/NewsLetter';
const Contact = () => {
  return (
    <div>
   <div className='text-center text-2xl pt-10 border-t'>
    <Title text1={'CONTACT'} text2={'US'}/>
    </div>   

    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
      <img className='w-full md:max-w-[480px]' src={assetsw.contact_img} alt="" />
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-xl text-gray-600'>OUR STORE</p>
        <p className='text-gray-500'>54709 Willis Station <br /> Suite 350,Washington ,USA</p>
        <p className='text-gray-500'> Tel:(415)555-0132 <br /> Email:admin@lunara.com</p>
        <p className='font-semibold text-xl text-gray-600'> Carriers at Lunaraa</p>
        <p className='text-gray-500'>Learn more about our team and job openning </p>
        <p className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'> Explore Jobs</p>
      </div>
    </div>
    <NewsLetter />
    </div>
  )
}

export default Contact
