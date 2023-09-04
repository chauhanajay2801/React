import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems,setshowIndex}) => {
  // const [showItems, setshowItems] = useState(false);
  const handleClick = () => {
  //   // showItems===false?setshowItems(true):setshowItems(false)
  //   setshowItems(!showItems)
setshowIndex();  
};

  return (
    <div>
      <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4 cursor-pointer font-bold text-lg">
        {/* Header */}
        <div className="flex justify-between" 
        onClick={handleClick}
        >
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span>&darr;</span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/* Accordion */}
    </div>
  );
};

export default RestaurantCategory;
