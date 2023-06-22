import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null)
  const {resId} = useParams();

useEffect(() => {
  fetchMenu();
}, []);

const fetchMenu = async () =>{
  const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.624480699999999&restaurantId="+resId);
  const json = await data.json();
  console.log(json)
  setResInfo(json.data)
}

if (resInfo===null) return <Shimmer/>;

const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <>
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3> 
      <h3>{costForTwoMessage}</h3>
      <ul>
     {itemCards.map(item => <li key={ item.card.info.id}>{ item.card.info.name}-{ item.card.info.price/10 || item.card.info.defaultPrice/10}</li> )}
      </ul>
    </>
  );
};

export default RestaurantMenu;
