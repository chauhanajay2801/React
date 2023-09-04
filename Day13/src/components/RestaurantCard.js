import React from 'react'
import { CDN_URL } from '../utils/const'



const RestaurantCard = (props) => {
  const {resData} = props;
  const{cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    eta,
    costForTwo
  } = resData;

  return (
    <>
        <div className='p-4 bg-orange-300 h-30 w-56 m-2 rounded-lg'>
            <div>
                <img src={CDN_URL + cloudinaryImageId} className='w-52 rounded-lg' alt="" />
            </div>
            <div>
                <h1 className='px-5'>{name}</h1>
                <h2 className='px-5'>{avgRating} stars</h2>
                <h2 className='px-5 overflow-scroll'>{cuisines.join(",")}</h2>
                <h2 className='px-5'>{eta} minutes</h2>
                <h2 className='px-5'>{costForTwo} for two</h2>
                <button className='px-5 bg-orange-600 rounded-md text-white'>Order</button>
            </div>
        </div>
    </>
  )
}


//higher order component
//input-- Restaurant card => Restauarant card promoted

export const withPromotedLabel = (RestaurantCard) =>{

  return (props) =>{
    return(
      <div>
        <label className='absolute bg-black text-xs text-white m-2 p-2 rounded-lg'>SuperStar</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard