import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisine, star, cost, eta } = resData;
  return (
    <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="rest-logo"
        className="rest-logo"
        src={CDN_URL}
      />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{star} Stars</h4>
      <h4>Eta:{cost} for two</h4>
      <h4>Eta:{eta}</h4>
    </div>
  );
};

export default RestaurantCard;
