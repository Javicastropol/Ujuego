import React from 'react'
// import Main from '../Vistas/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../components/login/Login';
import Cart from '../components/cart/Cart';
import Main from '../Vistas/Main';
import JuegoPage from '../components/Categorias/JuegoPage';
const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/categories' element={<JuegoPage/>}/>
                 
            
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router