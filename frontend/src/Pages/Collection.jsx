import React,{useContext, useEffect, useState} from 'react'
import { assetsw } from '../assets/frontend_assets/assets';
import Title from '../Components/Title';
import { ShopContext } from '../Context/ShopContext'
// import productslItem from '../Components/ProductItem';
import ProductItem from '../Components/ProductItem';

const Collection = () => {
  const {products,search ,showsearch } = useContext(ShopContext);
  const[showfilter ,setshowfilter ] = useState(false);
  const[filterproduct,setfilterproduct] = useState([]);
   const[category ,setcategory]= useState([]);
   const[subcategory ,setsubcategory]= useState([]);
const[sortType ,setSortType]= useState('relevant');

  //  togglecat 
const togglecat =(e)=>{
  if(category.includes(e.target.value)){
    setcategory(prev=>prev.filter(item=>item!=e.target.value)
    )
  }else{
    setcategory(prev=>[...prev,e.target.value]);
  }
}


// togglesubcat 
const togglesubcat = (e) => {
  const value = e.target.value;

  if (subcategory.includes(value)) {
    // If the value is already in the list, remove it
    setsubcategory(prev => prev.filter(item => item !== value));
  } else {
    // If the value is not in the list, add it
    setsubcategory(prev => [...prev, value]);
  }
};



  // Set initial products and apply filters
  useEffect(() => {
    setfilterproduct(products);
  }, []);

  
  useEffect(() => {
    applyfilter();
  }, [category, subcategory,search,showsearch]);

  useEffect(() => {
   sortProduct(); 
  }, [sortType]);
// useEffect(()=>{
//   setfilterproduct(products);
// })
// useEffect(()=>{
//   // setcategory(products);
//   console.log(subcategory);
// },[subcategory])


// const applyfilter =()=>{
//   let productcopy = products.slice();
//   if(category.length>0){
//     productcopy = productcopy.filter(item => category.includes(item.category));
//   }
//   console.log("Filtered Products:", productcopy);
//   setfilterproduct(productcopy);
// }
// const applyfilter = () => {
//   let productcopy = products.slice();

//   if (category.length > 0) {
//     productcopy = productcopy.filter((item) =>
//       category.some((cat) => cat.toLowerCase() === item.category.toLowerCase())
//     );
//   }
//   if (subcategory.length > 0) {
//     productcopy = productcopy.filter(item =>
//       subcategory.some(sub => sub.toLowerCase().trim() === item.subcategory.toLowerCase().trim())
//     );
//   }

const applyfilter = () => {
  let productcopy = products.slice();

  if (showsearch && typeof search === 'string') {
    productcopy = productcopy.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
     }
  
  // Filter by category (case-insensitive)
  if (category.length > 0) {
    productcopy = productcopy.filter((item) =>
      category.some((cat) => cat.toLowerCase() === item.category.toLowerCase())
    );
  }

  // Filter by subcategory (case-insensitive and trim spaces)
  if (subcategory.length > 0) {
    productcopy = productcopy.filter(item =>
      subcategory.some(sub => sub.toLowerCase().trim() === item.subcategory.toLowerCase().trim())
    );
  }

  // If both category and subcategory are empty, reset to the full product list
  if (category.length === 0 && subcategory.length === 0) {
    productcopy = products.slice();
  }

  setfilterproduct(productcopy);
};
 
// useEffect(()=>{
//  applyfilter();
// },[category ,subcategory])


const sortProduct =()=>{
  let fcopy = filterproduct.slice();
  switch(sortType){
    case 'lowhigh':
      setfilterproduct(fcopy.sort((a,b)=>(a.price-b.price)))
      break;

      case 'highlow':
        setfilterproduct(fcopy.sort((a,b)=>(b.price-a.price)));
        break;

        default:
          applyfilter();
          break;
  }
}























  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* filter options */}
      <div  className=' w-44 '>
<p onClick={()=>setshowfilter(!showfilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'> Filters
  <img className={`h-3 sm:hidden ${showfilter?'rotate-90':''}`} src={assetsw.dropdown_icon} alt="" />
</p>
{/* category fikter  */}
<div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '' : 'hidden'} sm:block`}>
  <p  className='mb-3 text-sm font-medium'>Categories</p>
  <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' onChange={togglecat} value={'men'} />Men

    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' onChange={togglecat}  value={'women'} />Women
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' onChange={togglecat} value={'kids'} />Kids
    </p>
  </div>
</div>
     {/* Subcategory  */}
     <div className={`border border-gray-300 pl-5 py-3 my-5 ${showfilter?'':'hidden'} sm:block` }> 
  <p  className='mb-3 text-sm font-medium'>TYPE</p>
  <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' onChange={togglesubcat} value={'topwear'} />Topwear
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' onChange={togglesubcat} value={'bottomwear'} />Bottomwear
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3'  onChange={togglesubcat} value={'winterwear'} /> Winterwear
    </p>
  </div>
</div>

      </div>

{/* right side  */}
<div className='flex-1'>

  <div className='flex justify-between text-base sm:text-2xl mb-4'>
<Title text1={'ALL'} text2={'COLLECTION'}></Title>
{/* Product sort */}
<select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-399 text-sm px-2'>
  <option value="relevant">Sort by :Relevent</option>
  <option value="lowhigh">Sort by:Low to High</option>
  <option value="highlow">Sort by:High to Low</option>
</select>
  </div>

  {/* map products  */}
  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
{
  filterproduct.map((item,index)=>(
    <ProductItem key={index} name={item.name} id={item.id} price={item.price} image={item.image}></ProductItem>
  ))
}
  </div>
</div>






     </div>
  )
}

export default Collection
