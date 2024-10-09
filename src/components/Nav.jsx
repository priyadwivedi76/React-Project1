import React from "react";
import ProductContext from "../utils/ProductContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Nav=()=>{
    // Fetching products from context hook
    const [products]=useContext(ProductContext);

    // Getting distinct categories from products array and storing them in a new array
    let distinct_category=products && products.reduce((acc,cv)=>[...acc,cv.category],[]);
    distinct_category=[...new Set(distinct_category)];

    // Function to generate random color for each category
    const color=()=>{
        return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`;
    }

    // Rendering navigation bar with categories and links to filter products by category
    return(
        <>
            <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
                <a className='px-5 py-2 border hover:bg-blue-500 hover:text-white rounded border-blue-300 text-blue-500' href="/create">Add New Project</a>
                <hr className='my-3 w-[80%]'/>
                <h1 className='text-2xl mb-3 w-[80%]'>Category Filter</h1>
                <div className='w-[80%]'>
                    {/* category shown in navigation area */}
                    {distinct_category.map((category,index)=>(
                        <Link to={`/?category=${category}`} key={index} className="text-sm flex items-center mb-3">
                            <span style={{backgroundColor:color()}} className=' mr-2 w-[15px] h-[15px] rounded-full bg-blue-200'></span>
                            {category}
                        </Link>
                    ))} 
                </div>
            </nav> 
        </>
    )
}

export default Nav;