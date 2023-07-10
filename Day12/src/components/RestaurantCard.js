import { CDN_URL } from "../utils/constants";
// import { useContext } from "react";
// import UserContext from '../utils/UserContext'

const RestaurantCard = (props) => {
  const { resData } = props;


  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;


  // const {user} = useContext(UserContext);
  
  return (
    
    <div className="m-4 p-4 w-[280px] rounded-lg bg-gray-100 hover:bg-gray-200" >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg py-2">{name}</h3>
      <h4 className="py-1">{cuisines.join(", ")}</h4>
      <h4 className="py-1">{avgRating} stars</h4>
      {/* <h4 className="py-1">{user.name}</h4> */}
      <h4 className="py-1">₹{costForTwo / 100} FOR TWO</h4>
      <h4 className="py-2">{deliveryTime} minutes</h4>
      <button className="py-2 px-5 bg-slate-700 rounded-lg text-white">Order</button>
    </div>
  );
};

export default RestaurantCard;