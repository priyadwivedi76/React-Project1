import React from 'react';
import { Link,Routes,Route,useLocation } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Create from './components/Create';
function App() {
    const {search,pathname}=useLocation();
    console.log(search,pathname)
    return(
        <div className="h-screen w-full flex">  
            {
                (pathname != "/" || search.length > 0) && (
                    <Link to="/" className="left-[17%] top-[3%] absolute px-3 py-2 rounded-md font-semibold bg-red-500 hover:bg-red-700 text-white">Home</Link>
                )
            }
            <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/create" element={<Create/>}/>
                    <Route path="/details/:id" element={<Details/>}/>
            </Routes> 
        </div>
    )
}

export default App;
