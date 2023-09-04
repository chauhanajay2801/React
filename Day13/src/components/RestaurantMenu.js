import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [restaurantInfo, setrestaurantInfo] = useState(null);

  // const {resId} = useParams();
  const { resId } = useParams();

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   setrestaurantInfo(json?.data);
  //   console.log(json);
  //   console.log(restaurantInfo);
  // };

  const restaurantInfo = useRestaurantMenu(resId);

  const [showIndex, setshowIndex] = useState(0);

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines } = restaurantInfo?.cards[0].card?.card?.info;
  // const { itemCards } =
  //   restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card

  const categories =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="text-center">
      {/* <img src={CDN_URL+cloudinaryImageId}  */}
      {/* className="w-52 rounded-lg  object-top" */}
      {/* alt="Restaurant_Img" /> */}
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="text-lg font-bold">{cuisines.join(",")}</p>
      {/* build accordion for category */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setshowIndex={() => setshowIndex(index)}
        />
      ))}

      {/* <ul> */}
      {/* {itemCards.map((item) => ( */}
      {/* <li className="font-semibold" key={item?.card?.info?.id}> */}
      {/* {item?.card?.info?.name}- */}
      {/* {item?.card?.info?.price / 100 || */}
      {/* item?.card?.info?.defaultPrice / 100} */}
      {/* </li> */}
      {/* ))} */}
      {/* </ul> */}
    </div>
  );
};

export default RestaurantMenu;
