import axios from "./Axios";
import React,{ useEffect, useState} from "react";
import ProductContext from "./ProductContext";

const Context=(props)=>{
    // Initialize the product state as null
    const [products,setProducts]=useState(null);

    // Fetch products on component mount using the getProducts function
    const getProducts=async()=>{
        try{
            const {data}=await axios("/products");
            setProducts(data);
        }catch(err){
            console.log(err);
        }
    }

    console.log(products);

    // Fetch products on component update using the getProducts function if the category changes
    useEffect(()=>{
        getProducts();
    },[]);

    // Return the product state as a context provider for other components to consume
    return(
        <ProductContext.Provider value={[products,setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default Context;