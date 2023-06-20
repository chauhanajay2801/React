import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer"

const Body = () =>{

  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("")
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  console.log("body")
  console.log(listOfRestaurants)

  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    //optional chaining
    setlistOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };
   
    /////conditional
    return listOfRestaurants?.length===0 ? <Shimmer/> : (
      <div className="body">
       <div className="filter">
       <div className="search">
        <input type="text" className="search-box" value={searchText} 
        onChange={(e)=>{setsearchText(e.target.value)}}/>
        <button onClick={()=>{
          const filteredRestaurant = listOfRestaurants.filter
          ((res) => res.data.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
          setfilteredRestaurant(filteredRestaurant);
        }}>Search</button>
       </div>
        <button onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => res.data.avgRating > 4);
            setlistOfRestaurants(filteredList)
        }} 
      className='filter-btn'>Top Rated Restaurants</button>
       </div>
       <div className="rest-container">
       {filteredRestaurant?.map((restaurant) => 
       (<RestaurantCard key={restaurant.data.id} resData={restaurant}/>))
       }
       </div>
      </div>
    )
  }

export default Body