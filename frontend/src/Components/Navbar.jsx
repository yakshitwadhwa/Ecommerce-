import React, { useContext, useState } from "react";
import { assets } from "../assets/admin_assets/assets.js";
import { assetsw } from "../assets/frontend_assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext.jsx";
const Navbar = () => {
const[visible ,setvisible ]=useState(false);
const{setshowsearch} = useContext(ShopContext);


  return (
   
    <div className="flex items-center justify-between py-5 font-medium ">

<Link to='/'><img src={assets.logo} className="w-36" alt="Logo" /></Link>


  
  <ul className="hidden sm:flex items-center gap-5 text-sm text-gray-900 ml-5">
    <NavLink to="/" className="flex flex-col items-center gap-1 ">
    <p>Home</p>
    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
    </NavLink>
    <NavLink to="/collection" className="flex flex-col items-center gap-1">
    <p>Collections</p>
    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
    </NavLink>
    <NavLink to="/about" className="flex flex-col items-center gap-1">
      <p>About</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
    </NavLink>
    <NavLink to="/contact" className="flex flex-col items-center gap-1">
      <p>Contact</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
    </NavLink>
  </ul>

<div className=" flex items-center gap-6">
  <img onClick={()=>setshowsearch(true)}  src={assetsw.search_icon} alt="" className="w-5 cursor-pointer "/>
  <div className="group relative">
   <Link to='/login'> <img src={assetsw.profile_icon} className="w-5 cursor-pointer"  alt="" /></Link>
<div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
<div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
  <p className="cursor-pointer hover:text-black">My Profile </p>
  <p className="cursor-pointer hover:text-black">Orders</p>
  <p className="cursor-pointer hover:text-black">Logout</p>
</div>
</div>
  </div>
  <Link to='/cart'  className="relative">
  <img src={assetsw.cart_icon} className="w-5 min-w-5" alt="" />
  <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
  </Link>
  <img src={assetsw.menu_icon} alt="" 
 onClick={()=>setvisible(true)} className="w-5 cursor-pointer sm:hidden"/>
</div>

 {/* sidebar menu for small screen  */}
 <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all 4 ${visible ?'w-full':'w-0'}`}>
  <div className="flex flex-col text-600">
    <div onClick={()=>setvisible(false)} className="flex items-center gap-4 p-3">
<img className="h-4 rotate-180" src={assetsw.dropdown_icon} alt="" />
<p>back</p>
    </div>
    <NavLink to="/" onClick={()=>setvisible(false)} className="py-2 pl-6 border ">
    <p>Home</p>
   </NavLink>
    <NavLink to="/collection" onClick={()=>setvisible(false)}className="py-2 pl-6 border">
    <p>Collections</p>
   </NavLink>
    <NavLink to="/about"onClick={()=>setvisible(false)} className="py-2 pl-6 border">
      <p>About</p>
     </NavLink>
    <NavLink to="/contact"onClick={()=>setvisible(false)} className="py-2 pl-6 border">
      <p>Contact</p>
       </NavLink>
  </div>
 </div>
</div>
  );
};

 

export default Navbar;
