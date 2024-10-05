import React from "react";
import Nav from "./Nav";
const Home=()=>{
    return (
        <>
        <Nav/>
            <div className='h-screen w-full flex'>
                <div className='h-full w-[85%] p-5 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
                    <div className="mr-3 mb-2 w-[18%] h-[30vh] p-3 card border rounded shadow flex flex-col items-center justify-center">
                        <div className='hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center' style={{backgroundImage:"url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"}}></div>
                        <h1 className='hover:text-blue-500'>Lorem, ipsum dolor.</h1>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Home;        