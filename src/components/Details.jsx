import React, { useEffect, useState } from "react";
import axios from "../utils/Axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { useContext } from "react";
import ProductContext from "../utils/ProductContext";


const Details=()=>{
    //Initialize the user interface
    const Navigate=useNavigate();
    const [products, setProducts]=useContext(ProductContext)
    const [product,setProduct]=useState(null);

    //Fetch the product details using the provided id
    const {id}=useParams(); 

    

    //Fetch product data when the component mounts or when the id changes
    useEffect(()=>{
        if(!product){
            setProduct(products.filter(p=>p.id == id)[0]);
        }
    },[]);

    const ProductDelete=(id)=>{
        const FilteredProduct=products.filter((p)=>p.id !== id);
        setProducts(FilteredProduct);
        localStorage.setItem("products",JSON.stringify(FilteredProduct));
        Navigate("/");
    }

    //Display the product details when the data is available
    return product ? (
        <div className="w-[70%] flex justify-between items-center h-full m-auto p-[10%]">
            <img
            className="object-contain h-[80%] w-[40%]"
            src={`${product.image}`} 
            alt="" />
            <div className="content w-[50%]">
                <h1 className="text-4xl">{product.title}</h1>
                <h3 className="text-zinc-500 my-5">{product.category}</h3>
                <h3 className="text-emerald-600 mb-3">{`$ ${product.price}`}</h3>
                <p className="mb-5">{product.description}</p>
                <Link className='px-5 mr-2 hover:bg-blue-500 hover:text-white py-2 border rounded border-blue-300 text-blue-500'>Edit</Link>
                <button onClick={()=>ProductDelete(product.id)} className='px-5 mr-2 py-2 hover:bg-red-600 hover:text-white border rounded border-red-300 text-red-500'>Delete</button>
            </div>
        </div>
    ):(
        <Loading/>
    )
}

export default Details;