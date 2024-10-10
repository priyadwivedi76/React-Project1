import axios from "./Axios";
import React,{ useEffect, useState} from "react";
import ProductContext from "./ProductContext";

const Context=(props)=>{
    // Initialize the product state as null and if the product is not null get them from local storage
    const [products,setProducts]=useState(JSON.parse(localStorage.getItem("products")||null));

    // Return the product state as a context provider for other components to consume
    return(
        <ProductContext.Provider value={[products,setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default Context;