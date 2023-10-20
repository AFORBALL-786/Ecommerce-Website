import React from 'react'
import {useDispatch, useSelector}  from 'react-redux'
import { increment, decrement } from '../Redux/Slices/CounterSlice';

const Counter = () => {
    
    const count = useSelector( (state) => state.counter.value);
    const dispatch = useDispatch();

  return (
    <div className='flex justify-center items-center space-x-6 w-screen h-screen'>
        <button 
            onClick={ () => dispatch(decrement())}     
            className='border p-2 rounded-lg'>
            Decrement
        </button>
        <div>{count}</div>
        <button 
            onClick={ () => dispatch(increment())}
            className='border p-2 rounded-lg'>
            Increment
        </button>
    </div>
  )
}

export default Counter
