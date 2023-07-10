import { addItem, clearCart, removeItem } from "../utils/cartSlice";
import UseRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = UseRestaurantMenu(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item))
  }


  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul className="p-5">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100} - 
            <button className="px-3 py-1 rounded-lg bg-pink-400"
            onClick={() => addFoodItem(item)}
            >Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
