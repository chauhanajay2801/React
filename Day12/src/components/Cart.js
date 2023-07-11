import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FoodItems from './FoodItems'
import {clearCart} from '../utils/cartSlice'


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispath = useDispatch();
    const handleClearCart = () => {
      dispath(clearCart())
    }

  return (
    <div>
      <h1 className='text-2xl font-bold'>{cartItems.length}</h1>
      <button className='bg-orange-400 px-4 py-1 m-3 rounded-md'
      onClick={() => handleClearCart()}
      >ClearCart</button>
      <FoodItems {...cartItems[0]} />
    </div>
  )
}

export default Cart