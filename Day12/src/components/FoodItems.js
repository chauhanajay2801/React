import React from 'react'
import {CDN_URL} from '../utils/constants'

const FoodItems = ({
    name,
    description,
    cloudinaryImageId,
    price
}) => {
  
  return (
    <div>
      <img src={CDN_URL+cloudinaryImageId} alt="" />
      <h2>{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees:{price}</h4>
    </div>
  )
}

export default FoodItems