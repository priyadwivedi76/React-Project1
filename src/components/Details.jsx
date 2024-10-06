import React from "react";
import { Link } from "react-router-dom";

const Details=()=>{
    return(
        <div className="w-[70%] flex justify-between items-center h-full m-auto p-[10%]">
            <img
            className="object-contain h-[80%] w-[40%]"
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" 
            alt="" />
            <div className="content w-[50%]">
                <h1 className="text-4xl">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
                <h3 className="text-zinc-500 my-5">men's clothing</h3>
                <h3 className="text-emerald-600 mb-3">$ 109.95</h3>
                <p className="mb-5">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                <Link className='px-5 mr-2 hover:bg-blue-500 hover:text-white py-2 border rounded border-blue-300 text-blue-500'>Edit</Link>
                <Link className='px-5 mr-2 py-2 hover:bg-red-6+00 hover:text-white border rounded border-blue-300 text-blue-500'>Delete</Link>
            </div>
        </div>
    )
}

export default Details;