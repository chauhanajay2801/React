import { useState} from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
// import { useContext } from 'react'
// import UserContext from '../utils/UserContext'


const Header = () =>{

  const [login, setlogin] = useState("Login")
  const onlineStatus = useOnlineStatus();
  // const {user} = useContext(UserContext);

  return (
    
    <div className="flex justify-between bg-pink-100 shadow-md">
      <div className="">
        <img className="w-60" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-1">
          <li className="px-4">Online Status:{onlineStatus ? "yes" : "no" }</li>
          <li className="px-4"> <Link to="/">Home</Link></li>
          <li className="px-4"> <Link to="/about">About us</Link></li>
          <li className="px-4"> <Link to="/contact">Contact</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4"><Link to="/cart">Cart</Link></li>
          <button className="px-3 py-1 bg-pink-300 rounded-md" 
          onClick={()=>{
            login === "Login" ? 
            setlogin("Logout"):
            setlogin("Login")}}
          >{login}</button>
          {/* <li className="px-4">{user.name}</li> */}
        </ul>
      </div>
    </div>
  )
}

export default Header