
import React from 'react'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Card from './Pages/Card'
import PlaceOrder from './Pages/Placeorder'
import Orders from './Pages/Orders'
import Navbar from './Components/Navbar'
import Login from './Pages/Login' 
import {  Route, Router, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import SearchBox from './Components/SearchBox'
import './index.css';

const App = () => {
  return (
    
     <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      
         <Navbar />
         <SearchBox></SearchBox>
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/collection' element={<Collection />} />
           <Route path='/about' element={<About />} />
           <Route path='/contact' element={<Contact />} />
           <Route path='/product/:productId' element={<Product />} />
           <Route path='/cart' element={<Card />} />
           <Route path='/login' element={<Login />} />
           <Route path='/place-order' element={<PlaceOrder />} />
           <Route path='/orders' element={<Orders />} />
         </Routes>
         <Footer/>
     </div>
   
    
  )
}

export default App
