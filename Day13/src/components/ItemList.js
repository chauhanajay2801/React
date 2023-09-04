import React from "react";
import { CDN_URL } from "../utils/const";

const ItemList = ({ items }) => {
  
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex"
        >
          <div>
            <div className="absolute">
              <button className=" bg-white shadow-lg rounded-lg">Add +</button>
            </div>
            <img
              className="w-30"
              src={CDN_URL + item?.card?.info?.imageId}
              alt="product"
            />
          </div>
          <div>
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
