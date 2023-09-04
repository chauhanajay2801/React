import React, { useContext } from "react";
import { useState } from "react";
import { LOGO_URL } from "../utils/const";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../context/userContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [login, setlogin] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex bg-orange-300 p-1 justify-between shadow-md">
      <div className="w-52 cursor-pointer">
        <Link to="/">
          <img src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-1">
          <li className="px-4 cursor-pointer hover:text-white">
            <Link to="/">
              OnlineStatus:
              {onlineStatus ? "True" : "False"}
            </Link>
          </li>
          <li className="px-4 cursor-pointer hover:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 cursor-pointer hover:text-white">
            <Link to="/about">AboutUs</Link>
          </li>
          <li className="px-4 cursor-pointer hover:text-white">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 cursor-pointer hover:text-white">
            <Link to="/instamart">InstaMart</Link>
          </li>
          <li className="px-4 cursor-pointer hover:text-white">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4 cursor-pointer hover:text-white">
            {loggedInUser}
          </li>
          <li
            className=" px-7 py-1 rounded-md bg-orange-500 cursor-pointer  hover:bg-orange-600 hover:text-white"
            onClick={() =>
              login === "Login" ? setlogin("Logout") : setlogin("Login")
            }
          >
            {login}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
