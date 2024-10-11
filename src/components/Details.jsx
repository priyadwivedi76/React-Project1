import React, { useEffect, useState } from "react";
import axios from "../utils/Axios";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";


const Details=()=>{
    //Initialize the user interface
    const [product,setProduct]=useState(null);

    //Fetch the product details using the provided id
    const {id}=useParams();
    console.log(id);

    //Fetch the product data from the server using the provided id
    const getSingleProduct=async()=>{
        try{
            const {data} =await axios.get(`/products/${id}`);
            setProduct(data);
        }catch(err){
            console.log(err);
        }
    }

    //Fetch product data when the component mounts or when the id changes
    useEffect(()=>{
        getSingleProduct();
    },[]);

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
<<<<<<< HEAD
                <Link to={`/edit/${product.id}`} className='px-5 mr-2 hover:bg-blue-500 hover:text-white py-2 border rounded border-blue-300 text-blue-500'>Edit</Link>
                <button onClick={()=>ProductDelete(product.id)} className='px-5 mr-2 py-2 hover:bg-red-600 hover:text-white border rounded border-red-300 text-red-500'>Delete</button>
=======
                <Link className='px-5 mr-2 hover:bg-blue-500 hover:text-white py-2 border rounded border-blue-300 text-blue-500'>Edit</Link>
                <Link className='px-5 mr-2 py-2 hover:bg-red-600 hover:text-white border rounded border-red-300 text-red-500'>Delete</Link>
>>>>>>> parent of 55abebb (almost completed)
            </div>
        </div>
    ):(
        <Loading/>
    )
}

export default Details;