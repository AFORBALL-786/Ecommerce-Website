import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const {cart} = useSelector((state) => state);
  return (
    <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
        <NavLink to="/">
                <img className='h-14 ml-5' src={logo}/>
        </NavLink>
        
        <div className='flex items-center text-lg text-slate-100 mr-5 space-x-6'>
            <NavLink to="/">
                <p className='hover:text-green-400 transition duration-300 ease-in'>Home</p>
            </NavLink>

            <NavLink to="/cart">
                <div className='relative'>
                    <FaShoppingCart className='text-2xl text-white hover:text-green-400 transition duration-300 ease-in'/>
                    {cart.length > 0 &&
                        <span className='absolute -top-1 -right-2 bg-green-600 text-xs font-bold w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white
                        '>{cart.length}</span>
                    }
                    
                </div>
            </NavLink>
        </div>
    </nav>
  )
}

export default Navbar