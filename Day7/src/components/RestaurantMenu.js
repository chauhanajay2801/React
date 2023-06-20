import React, { useEffect } from "react";

const RestaurantMenu = () => {
useEffect(() => {
  fetchMenu();
}, []);

const fetchMenu = async () =>{
  const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.624480699999999&restaurantId=425&submitAction=ENTER");
     
  const json = await data.json();
  console.log(json)
}

  return (
    <>
      <h1>Name of the restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Kebabs</li>
        <li>Thali</li>
      </ul>
    </>
  );
};

export default RestaurantMenu;
