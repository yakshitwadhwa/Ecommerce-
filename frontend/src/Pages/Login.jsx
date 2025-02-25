import React, { useState } from 'react'

const Login = () => {
  const[current ,setcurrent]= useState('SignUp');
  const onSubmithandle = async(event)=>{
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmithandle} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2  mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{current}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>

{current=='Login'?'':<input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='name' required/>}
<input type="email" className='w-full px-3 py-2 border border-gray-950' placeholder='email' required/>
<input type="password" className='w-full px-3 py-2 border border-gray-950' placeholder='Password' required/>
<div className='w-full flex justify-between text-sm mt-[-8px]'>
  <p className='cursor-pointer'>Forget your Password?</p>
  {current==='Login'?
  <p onClick={()=>setcurrent('SignUp')}className='cursor-pointer'>Create Account</p>: 
  <p onClick={()=>setcurrent('Login')} className='cursor-pointer'> Login Here</p>}
</div>
<button className='bg-black text-white font-light px-8 py-2 mt-4'>{current=='Login'?'Sign In':'Sign Up'}</button>
    </form>
  )
}

export default Login
