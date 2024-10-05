import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
function App() {
    return(
        <div className="h-screen w-full flex">  
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default App;
