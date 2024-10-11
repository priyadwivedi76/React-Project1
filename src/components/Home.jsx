import React,{useEffect, useState} from "react";
import {useContext} from "react";
import { Link,useLocation } from "react-router-dom";
import axios from "../utils/Axios";
import Nav from "./Nav";
import Loading from "./Loading";
import ProductContext from "../utils/ProductContext";


const Home=()=>{
    //Use the default
    const [products]=useContext(ProductContext);

    //Get the search parameter from the url
    const {search}=useLocation();

    //Extract the category from the search parameter
    const category=decodeURIComponent(search.split("=")[1]);

    //Get the category for filtering
    const [filteredProduct,setfilteredProduct]=useState(null)

    //Fetch the products based on the category if provided in the url
    const getProductCategory=async ()=>{
        try{
            const {data}=await axios.get(`/products/category/${category}`)
            setfilteredProduct(data);
        }catch(error){
            console.log(error);
        }
    }

    //Fetch the products on component mount or when the category changes
    useEffect(()=>{

        //Get the category and if the category is undefined then show all the products
        if(!filteredProduct || category=="undefined"){
            setfilteredProduct(products);
        }

        //Fetch the products based on the category if provided in the url if it's different from the current category
        if(category != "undefined"){
            setfilteredProduct(products.filter(p=>p.category == category))
        //getProductCategory()
        };
    },[category,products]);

    //Display the products if they are available, else display a loading spinner
    return products ? (
        <>
            <Nav/> 

            {/* Display the products based on the category */}
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