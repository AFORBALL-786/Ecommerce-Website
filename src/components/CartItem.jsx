import {AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { remove } from '../Redux/Slices/CartSlice';
import {toast} from 'react-hot-toast';

const CartItem = ({item, index}) => {

    const dispatch = useDispatch();
    
    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed from Cart");

    }

  return (
    <div className='flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500  mt-2 mb-2 md:mx-5 '>
      <div className='w-[30%]'>
        <img className='object-cover' src={item.image}/>
      </div>
      <div className='md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]'>
        <h1 className='text-xl text-slate-700 font-semibold'>{item.title}</h1>
        <h1 className='text-base text-gray-700 font-normal text-[11px] text-left'>{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
        <div className='flex items-center justify-between'>
            <p className='font-bold text-lg text-green-600'>${item.price}</p>
            <button
              className=' bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3'
              onClick={removeFromCart}>
                <AiFillDelete className='text-red-800 group-hover:text-white' height="1em" width="1em"/>
            </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
