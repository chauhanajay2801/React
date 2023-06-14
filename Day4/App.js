import React from "react";
import ReactDOM from "react-dom/client";


const Header = () =>{
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="" srcset="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const styleCard = {
  backgroundColor: "#f0f0f0"
}

const RestaurantCard = () =>{
  return(
    <div className="rest-card" style={styleCard}>
     <h3>Meghana Foods</h3>
    </div>
  )
}


const Body = () =>{
  return(
    <div className="body">
     <div className="Search">Search</div>
     <div className="rest-container">
    <RestaurantCard/>
     </div>
    </div>
  )
}

const AppLayout = () => {
  return(
    <div className="App">
     <Header/>
     <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)