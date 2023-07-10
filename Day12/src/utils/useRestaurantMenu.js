import { useEffect, useState } from "react";

const UseRestaurantMenu = (resId) => {

    const [resInfo, setresInfo] = useState(null);

    //fetch data
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.624480699999999&restaurantId="+resId);
    const json  = await data.json();
    setresInfo(json.data);
    }

    return resInfo;
}

export default UseRestaurantMenu