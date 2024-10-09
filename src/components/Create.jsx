import React, { useState } from "react";
import { nanoid } from "nanoid";


const Create=()=>{
    const [products, setProduct]=useState("");
    const [title,setTitle]=useState("");
    const [image,setImage]=useState("");
    const [category,setCategory]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");

    const AddProductHandler=(e)=>{
        e.preventDefault();
        const product={
            id:nanoid(),
            title,
            image,
            category,
            price,
            description
        }
        setProduct([...products,product]);
    }

    return(
        <form onSubmit={AddProductHandler} className="p-[5%] flex flex-col items-center h-screen w-full">
            <h1 className="text-3xl w-1/2 mb-3 text-red-800">Add New Product</h1>
            <input 
                type="url" 
                placeholder="image" 
                className="p-2 rounded text-xl mb-3 text-black bg-slate-200 w-1/2" 
                onChange={(e)=>setImage(e.target.value)}
                value={image}
            />
            <input 
                type="text" 
                placeholder="title" 
                className="p-2 rounded text-xl mb-3 text-black bg-slate-200 w-1/2" 
                onChange={(e)=>setTitle(e.target.value)}
                value={title}
            />
            <div className="w-1/2 flex justify-between">
                <input 
                    type="text" 
                    placeholder="category" 
                    className="p-2 rounded text-xl mb-3 text-black bg-slate-200 w-[48%]" 
                    onChange={(e)=>setCategory(e.target.value)}
                    value={category}
                />
                <input 
                    type="number" 
                    placeholder="price" 
                    className="p-2 rounded text-xl mb-3 text-black bg-slate-200 w-[48%]" 
                    onChange={(e)=>setPrice(e.target.value)}
                    value={price}
                />
            </div>
            <textarea 
                className="p-2 rounded text-xl mb-3 text-black bg-slate-200 w-1/2" 
                onChange={(e)=>setDescription(e.target.value)}
                value={description} 
                placeholder="Enter Product description Here.."
                rows="10"
            />
            <div className="w-1/2">
                <button className='px-5 py-2 border-[3px] hover:bg-blue-500 font-bold hover:text-white rounded border-blue-300 text-blue-500'>
                    Add New Project
                </button>
            </div>
        </form>
    )
}

export default Create;