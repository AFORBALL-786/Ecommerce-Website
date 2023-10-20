import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Navbar from './components/Navbar'
import Cart from './Pages/Cart'

const App = () => {
  return (
    <div className='w-screen h-screen overflow-y-auto overflow-x-hidden'>
      <div className='bg-slate-900 '>
        <Navbar/>
      </div>
      <Routes>  
      <Route path='/' element={<HomePage/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App

