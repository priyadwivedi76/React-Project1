import React from "react";

const Nav=()=>{
    return(
        <>
            <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
                <a className='px-5 py-2 border hover:bg-blue-500 hover:text-white rounded border-blue-300 text-blue-500' href="/create">Add New Project</a>
                <hr className='my-3 w-[80%]'/>
                <h1 className='text-2xl mb-3 w-[80%]'>Category Filter</h1>
                <ul className='w-[80%]'>
                    <li className="text-sm flex items-center mb-3">
                        <span className=' mr-2 w-[15px] h-[15px] rounded-full bg-blue-200'></span>
                        Category 1
                    </li> 
                    <li className="text-sm flex items-center mb-3">
                        <span className=' mr-2 w-[15px] h-[15px] rounded-full bg-red-200'></span>
                        Category 1
                    </li> 
                    <li className="text-sm flex items-center mb-3">
                        <span className=' mr-2 w-[15px] h-[15px] rounded-full bg-green-200'></span>
                        Category 1
                    </li> 
                    <li className="text-sm flex items-center mb-3">
                        <span className=' mr-2 w-[15px] h-[15px] rounded-full bg-emerald-200'></span>
                        Category 1
                    </li> 
                </ul>
            </nav> 
        </>
    )
}

export default Nav;