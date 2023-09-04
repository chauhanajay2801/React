import React from "react";
import { useState, useEffect} from "react";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  
  const [listofRestaurants, setlistofRestaurants] = useState(null);
  const [filteredRestaurants, setfilteredRestaurants] = useState([])
  const [search, setsearch] = useState("");
  
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const fetchData = async() =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json)
    setfilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setlistofRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(listofRestaurants)  
    console.log(filteredRestaurants)  
}

useEffect(()=>{
  fetchData();
},[]);


const onlineStatus = useOnlineStatus();

if(onlineStatus===false) return (<h1>Offline</h1>)


  return listofRestaurants===null?<Shimmer/>:(
    <div className="p-2">
      <div className="flex p-1">
        <input type="text" className="border border-black rounded-lg " 
        value={search} onChange={(e)=> setsearch(e.target.value)} />
        <button className="px-5 py-1 mx-1 rounded-md bg-orange-400  hover:bg-orange-600 cursor-pointer hover:text-white"
        onClick={()=>{
           const filteredList = filteredRestaurants.filter((res)=> res?.info?.name.toLocaleLowerCase()
           .includes(search.toLocaleLowerCase()));
           setlistofRestaurants(filteredList)
        }}>
          Search Restaurant
        </button>
        <button className="px-5 py-1 rounded-md bg-orange-400 cursor-pointer hover:text-white hover:bg-orange-600"
        onClick={()=>{
          const topList = listofRestaurants.filter(res=>res?.info?.avgRating>4.5)
          setlistofRestaurants(topList)
        }}>
          Top Restaurant
        </button>
      </div>
      <div className="flex flex-wrap gap-5">
      {listofRestaurants?.map((restaurant) => (
           <Link 
            key={restaurant?.info?.id}
            to={"/restaurants/"+restaurant?.info?.id}>
            {
            restaurant?.info?.avgRating>4.3 ? (
            <RestaurantCardPromoted resData={restaurant?.info}/>
            ) :(
            <RestaurantCard resData={restaurant?.info} />
      )}
            </Link>
            
        ))}
      </div>
    </div>
  );
};

export default Body;
