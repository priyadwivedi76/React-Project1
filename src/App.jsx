import React from 'react';
import { Link,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
function App() {
    return(
        <div className="h-screen w-full flex">  
            <Link to="/" className="left-[17%] top-[2%] absolute px-3 py-2 rounded-md font-semibold bg-red-500 hover:bg-red-700 text-white">Home</Link>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/details/:id" element={<Details/>}/>
            </Routes>
        </div>
    )
}

export default App;
