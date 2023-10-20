import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {

    const {cart} = useSelector( (state) => state)
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect( () => {
        setTotalAmount(cart.reduce( (acc,curr) => acc + curr.price,0));
    },[cart])

  return (
    <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center'>
      {
        cart.length > 0 ? 
        (<div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center '>
            <div className='w-[50%]'>
                {
                    cart.map( (item) => (<CartItem key={item.id} item={item}/>))
                }
            </div>
            <div className='w-[100%] md:w-[40%] mt-5  flex flex-col justify-center'>
                <div className='flex flex-col gap-5 '>
                    <p className='font-semibold text-xl text-green-800 '>Your Cart</p>    
                    <p className='font-semibold text-5xl text-green-700 uppercase -mt-5'>Summary</p>
                    <p className='text-xl'><span className='text-gray-700 font-semibold text-xl'>Total Items : {cart.length}</span></p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-xl font-semibold'>Total Amount:<span className='text-gray-700 font-bold'> ${totalAmount}</span></p>
                    <button className='bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl'>Checkout Now</button>
                </div>
            </div>    
            
        </div>) : 
        (<div className='min-h-[80vh] flex flex-col items-center justify-center'>
            <h1 className='text-gray-700 font-bold text-xl mb-2'>Your cart is empty!</h1>
            <NavLink to={"/"}>
                <button className='bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 px-10 tracking-wider'>
                    SHOP NOW
                </button>    
            </NavLink> 
        </div>)

      }
    </div>
  )
}

export default Cart
