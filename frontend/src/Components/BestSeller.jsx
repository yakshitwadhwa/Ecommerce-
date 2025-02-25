import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const{products} =useContext(ShopContext);
    const[bestseller,setbestseller]= useState([]);
    useEffect(()=>{
const bestproduct = products.filter((item)=>(item.bestseller));
setbestseller(bestproduct.slice(0,5));
    },[])
  return (
    <div className='my-10'>
      <div className='text-center text-4xl py-8'>
        <Title text1={'BEST'}text2={'SELLERS'}></Title>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ab!</p>
      </div>

<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
    {
        bestseller.map((item,index)=>(
            <ProductItem key={index} id={item.id} name ={item.name} image = {item.image} price={item.price} />
        ))
    }
</div>


    </div>
  )
}

export default BestSeller
