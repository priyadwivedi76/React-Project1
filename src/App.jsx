import React from 'react';
import { Link,Routes,Route,useLocation } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Create from './components/Create';
import Edit from './components/Edit';
function App() {
    const {search,pathname}=useLocation();
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
                    <Route path="/edit/:id" element={<Edit/>}/>
            </Routes> 
        </div>
    )
}

export default App;
