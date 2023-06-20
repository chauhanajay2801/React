import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"


const Header = () =>{

  const [login, setlogin] = useState("Login")

  return (
    
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/about">About us</Link></li>
          <li> <Link to="/contact">Contact</Link></li>
          <li>Cart</li>
          <button className="login" 
          onClick={()=>{
            login === "Login" ? 
            setlogin("Logout"):
            setlogin("Login")}}
          >{login}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header