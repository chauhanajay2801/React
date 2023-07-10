import { useEffect,useState } from "react";

const useBodyData = () => {

    const [listOfRest, setlistOfRest] = useState([]);
    const [filteredRest, setfilteredRest] = useState([]);




    useEffect(() => {
        fetchData();
      }, [])
      
      const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setlistOfRest(json?.data?.cards[2]?.data?.data?.cards);
        setfilteredRest(json?.data?.cards[2]?.data?.data?.cards);
      };
      return listOfRest,filteredRest;
      
}

export default useBodyData;