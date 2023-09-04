import { useState, useEffect } from "react";
import { MENU_API } from "./const";

const useRestaurantMenu = (resId) =>{
    const [restaurantInfo,setrestaurantInfo] = useState(null)

     useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setrestaurantInfo(json?.data);
  //  console .log(json);
    // console.log(restaurantInfo);
  };

    return restaurantInfo;

}

export default useRestaurantMenu