import axios from "./axios";
import React,{ useEffect, useState} from "react";
import ProductContext from "./ProductContext";

const Context=(props)=>{
    const [product,setProduct]=useState(null);
    const getProducts=async()=>{
        try{
            const {data}=await axios("/products");
            setProduct(data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getProducts();
    },[]);

    return(
        <ProductContext.Provider value={[product,setProduct]}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default Context;