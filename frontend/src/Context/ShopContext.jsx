// import { createContext } from "react";
// import { products } from "../assets/frontend_assets/assets";
// export const ShopContext = createContext();

// const ShopContextProvider=(props) => {
//     const currency ='$';
//     const delivery_fee=10;
//     const value={
// products,currency,delivery_fee
//     }
//     return(
//         <ShopContext.Provider value={value}>
//             {props.children}
//         </ShopContext.Provider>
//     )
// }
// export default ShopContextProvider;
import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useState } from "react";
export const ShopContext = createContext();

export const ShopContextProvider = (props ) => {
    const currency = '$';
    const delivery_fee = 10;
    const[search ,setsearch] = useState('');
    const[showsearch,setshowsearch] = useState(false);
    const value = {
        products,
        currency,
        delivery_fee,setsearch ,setshowsearch,showsearch
        ,search
    };
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};
