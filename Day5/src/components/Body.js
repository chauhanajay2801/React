import RestaurantCard from './RestaurantCard'
import { useState } from 'react';
import resList from '../utils/mockdata'

const Body = () =>{

  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

    return(
      <div className="body">
       <div className="filter">
        <button onClick={() => {
            const filteredList = listOfRestaurants.filter(res => res.star > 4);
            setlistOfRestaurants(filteredList)
        }} 
      className='filter-btn'>Top Rated Restaurants</button>
       </div>
       <div className="rest-container">
       {listOfRestaurants.map((restaurant) => 
       (<RestaurantCard key={restaurant.id} resData={restaurant}/>))
       }
       </div>
      </div>
    )
  }

export default Body