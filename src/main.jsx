
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Context from './utils/Context.jsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <Context>
    <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </StrictMode>
  </Context>
  
  
)
