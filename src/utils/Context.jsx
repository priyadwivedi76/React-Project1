import axios from "./Axios";
import React,{ useEffect, useState} from "react";
import ProductContext from "./ProductContext";

const Context=(props)=>{
    // Initialize the product state as null
    const [product,setProduct]=useState(null);

    // Fetch products on component mount using the getProducts function
    const getProducts=async()=>{
        try{
            const {data}=await axios("/products");
            setProduct(data);
        }catch(err){
            console.log(err);
        }
    }

    // Fetch products on component update using the getProducts function if the category changes
    useEffect(()=>{
        getProducts();
    },[]);

    // Return the product state as a context provider for other components to consume
    return(
        <ProductContext.Provider value={[product,setProduct]}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default Context;