import React, { useContext,useState, useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assetsw } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBox = () => {
    const{search ,setsearch,showsearch,setshowsearch}=useContext(ShopContext);
    const location = useLocation();
   const[visible,setvisible] =useState(false);
useEffect(()=>{
  console.log(location.pathname)
if(location.pathname.includes('/collection')&& showsearch){
setvisible(true);
}else{
   setvisible(false); 
}
},[location])


  return showsearch && visible? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center
      border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input value={search} onChange={(e)=>setsearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
        <img src={assetsw.search_icon} alt="" className='w-4' />
      </div>
      <img onClick={()=>setshowsearch(false)}  src={assetsw.cross_icon} alt="" className='inline w-3 cursor-pointer'/>
    </div>
  ):null;
}

export default SearchBox
