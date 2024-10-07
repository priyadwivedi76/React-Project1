import React,{useEffect, useState} from "react";
import {useContext} from "react";
import { Link,useLocation } from "react-router-dom";
import axios from "../utils/Axios";
import Nav from "./Nav";
import Loading from "./Loading";
import ProductContext from "../utils/ProductContext";


const Home=()=>{
    const [products]=useContext(ProductContext);
    const {search}=useLocation();
    const category=decodeURIComponent(search.split("=")[1]);

    
    const [filteredProduct,setfilteredProduct]=useState(null)
    const getProductCategory=async ()=>{
        try{
            const {data}=await axios.get(`/products/category/${category}`)
            setfilteredProduct(data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        if(!filteredProduct || category=="undefined"){
            setfilteredProduct(products);
        }
        if(category != "undefined"){
        getProductCategory()
        };
    },[category,products]);

    console.log(filteredProduct);

    return products ? (
        <>
            <Nav/> 
            <div className='h-full w-[85%] p-5 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
                {filteredProduct && filteredProduct.map((p,i)=>(
                    <Link key={i} to={`/details/${p.id}`} className="mr-3 mb-2 w-[18%] h-[30vh] p-3 card border rounded shadow flex flex-col items-center justify-center">
                        <div className='hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center' style={{backgroundImage:`url(${p.image})`}}></div>
                        <h1 className='hover:text-blue-500'>{p.title}</h1>
                    </Link> 
                ))}
            </div>
        </>
    ):(
        <Loading/>
    )
}

export default Home;        