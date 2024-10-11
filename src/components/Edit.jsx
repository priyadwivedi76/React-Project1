import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../utils/ProductContext";
import { useState } from "react";
import { nanoid } from "nanoid";

const Edit=()=>{
    const [products, setProducts]=useContext(ProductContext);
    const Navigate=useNavigate();
    const {id}=useParams();
    const [product,setProduct]=useState({
        title:"",
        image:"",
        category:"",
        price:"",
        description:""
    });

    const ChangeHandler=(e)=>{
        //console.log(e.target.name,e.target.value);
        setProduct({...product,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        setProduct(products.filter((p)=>p.id==id)[0])
    },[id]);

    const AddProductHandler=(e)=>{
        e.preventDefault();

        if( product.title.trim().length < 5 || product.description.trim().length < 5|| product.category.trim().length < 5 || product.price.trim().length<1 || product.image.trim().length < 5 ){
            alert("Enter atleast 4 characters");
            return;
        }

        const pi=products.findIndex((p)=>p.id == id);
        const copyData=[...products];
        copyData[pi]={...products[pi],...product};
        console.log(copyData);
        setProduct(copyData);
        localStorage.setItem("products",JSON.stringify(copyData));
        Navigate(-1);
    }

    return(
        <form onSubmit={AddProductHandler} className="p-[5%] flex flex-col items-center h-screen w-full">
            <h1 className="text-3xl w-1/2 mb-3 text-red-800">Edit Product</h1>
            <input 
                type="url" 
                placeholder="image" 
                className="p-2 rounded text-xl mb-3 text-black bg-slate-200 w-1/2" 
                name="image"
                onChange={ChangeHandler}
                value={product && product.image}
            />
            <input 
                type="text" 
                placeholder="title" 
                className="p-2 rounded text-xl mb-3 text-black bg-slate-200 w-1/2" 
                name="title"
                onChange={ChangeHandler}
                value={product && product.title}
            />
            <div className="w-1/2 flex justify-between">
                <input 
                    type="text" 
                    placeholder="category" 
                    className="p-2 rounded text-xl mb-3 text-black bg-slate-200 w-[48%]" 
                    name="category"
                    onChange={ChangeHandler}
                    value={product && product.category}
                />
                <input 
                    type="number" 
                    placeholder="price" 
                    className="p-2 rounded text-xl mb-3 text-black bg-slate-200 w-[48%]" 
                    name="price"
                    onChange={ChangeHandler}
                    value={product && product.price}
                />
            </div>
            <textarea 
                className="p-2 rounded text-xl mb-3 text-black bg-slate-200 w-1/2"  
                placeholder="Enter Product description Here.."
                rows="10"
                name="description"   
                onChange={ChangeHandler}
                value={product && product.description}
            />
            <div className="w-1/2">
                <button className='px-5 py-2 border-[3px] hover:bg-blue-500 font-bold hover:text-white rounded border-blue-300 text-blue-500'>
                    Add New Project
                </button>
            </div>
        </form>
    )
}

export default Edit;