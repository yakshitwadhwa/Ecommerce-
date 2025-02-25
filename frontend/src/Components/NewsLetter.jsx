import React from 'react'

const NewsLetter = () => {
    const onsubmithandler=(event)=>{
event.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'> Subscribe now and get 20% off</p>
      <p className='text-gray-500 mt-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, excepturi?
      </p>
      <form onSubmit={onsubmithandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 pl-3 '> 
      <input
    className="w-full sm:flex-1 px-4 py-3 text-sm border border-gray-700 rounded-md outline-none focus:ring-2 focus:ring-blue-500 transition-all"
    type="email"
    placeholder="Enter your email"
    required
  />
  <button
    type="submit"
    className="bg-black text-white text-xs px-8 py-3 rounded-md hover:bg-gray-800 transition-all"
  >
    SUBSCRIBE
  </button>

      </form>
    </div>
  )
}

export default NewsLetter
