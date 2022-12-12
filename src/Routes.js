import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Cart from './Cart'
import Navbar from './Navbar'

const Routes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navbar/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Routes