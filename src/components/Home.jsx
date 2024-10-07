import React from "react";
import {useContext} from "react";
import Nav from "./Nav";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import ProductContext from "../utils/ProductContext";


const Home=()=>{
    const [products]=useContext(ProductContext);
    console.log(products);
    return products ? (
        <>
            <Nav/> 
            <div className='h-full w-[85%] p-5 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
                {products.map((p,i)=>(
                    <Link to="/details/1" className="mr-3 mb-2 w-[18%] h-[30vh] p-3 card border rounded shadow flex flex-col items-center justify-center">
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