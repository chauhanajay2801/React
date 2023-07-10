import React from 'react'
import { useSelector } from 'react-redux'
import FoodItems from './FoodItems'


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)

  return (
    <div>
      <h1 className='text-2xl font-bold'>{cartItems.length}</h1>
      
      {cartItems.map(item =>( 
      <FoodItems key={item.id} {...item} />
      ))}
    </div>
  )
}

export default Cart