import React from 'react'
import { assetsw } from '../assets/frontend_assets/assets'
import Title from '../Components/Title';
import NewsLetter from '../Components/NewsLetter';
const About = () => {
  return (
    <div>
     <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
     
      </div> 

<div className='my-10 flex flex-col md:flex-row gap-16'>
  <img src={assetsw.about_img}  className='w-full md:max-w-[450px]' alt="" />
  <div className='flex- flex-col justify-center gap-6 md:w-2/4 text-gray-600 mt-10'>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias officia repellat quam deleniti. Autem ipsa fuga molestias officiis soluta laboriosam rerum eos beatae sint. Aut dolorum unde ipsum illo vel.</p>
  <p className='mt-6 mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore autem atque quos cumque minus, nemo in porro beatae aliquam possimus accusantium numquam nobis vero nesciunt?</p>
  <b className='text-gray-800 mt-10'>Our Mission</b>
  <p  className='mt-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quae, autem id reprehenderit eligendi ipsam? Fugit natus repellendus voluptate nostrum!</p>
  </div>
</div>

<div className='text-xl py-4'>
  <Title text1={"WHY"} text2={'CHOOSE US'}/>

</div>
<div className='flex flex-col md:flex-row text-sm mb-20'>
  <div className='border px-10 md:px-16 py-8 md:py-29 flex flex-col gap-5'>
    <b>Quality Assuance :</b>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vel ullam adipisci mollitia possimus quidem excepturi incidunt est voluptate suscipit.</p>
  </div>
  <div className='border px-10 md:px-16 py-8 md:py-29 flex flex-col gap-5'>
    <b>Convinence :</b>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vel ullam adipisci mollitia possimus quidem excepturi incidunt est voluptate suscipit.</p>
  </div>
  <div className='border px-10 md:px-16 py-8 md:py-29 flex flex-col gap-5'>
    <b>Exceptional Customer Service :</b>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vel ullam adipisci mollitia possimus quidem excepturi incidunt est voluptate suscipit.</p>
  </div>
</div>
<NewsLetter></NewsLetter>
    </div>
  )
}

export default About
