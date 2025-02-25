
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ShopContextProvider } from './Context/ShopContext.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
  <ShopContextProvider>
  <App />
  </ShopContextProvider>
  </BrowserRouter>
  </React.StrictMode>
)
