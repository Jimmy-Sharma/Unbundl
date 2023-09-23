import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from '../Components/Main'
import Cart from '../Components/Cart'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
    </div>
  )
}

export default MainRoutes