import React from "react";
import ReactDOM from "react-dom/client";


const Header = () =>{
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
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
  
const resList = [
  {
    name:"Annapurna foods",
    star:4,
    cuisine:"Indian,SouthIndian",
    eta:45,
    cost:200
  },
  {
    name:"Kfc",
    star:4.1,
    cuisine:"American",
    eta:40,
    cost:200
  },
  {
    name:"Kwality foods",
    star:3.1,
    cuisine:"Indian",
    eta:21,
    cost:200
  },
  {
    name:"Garhwali foods",
    star:4.2,
    cuisine:"Indian,North Indian",
    eta:20,
    cost:200
  },
  {
    name:"Mcdonald",
    star:4.7,
    cuisine:"American",
    eta:55,
    cost:200
  },
  {
    name:"Dharma Dhaba",
    star:3.1,
    cuisine:"Indian",
    eta:30,
    cost:200
  },
  {
    name:"Baweja Foods",
    star:3.7,
    cuisine:"Indian,Chinese",
    eta:21,
    cost:200
  },
  {
    name:"Annapurna foods",
    star:4,
    cuisine:"Indian,SouthIndian",
    eta:45,
    cost:200
  },
]


const RestaurantCard = (props) =>{
  const {resData} = props;
  const {name,cuisine,star,cost,eta} = resData;
  return(
    <div className="rest-card" style={{backgroundColor: "#f0f0f0"}}>
    <img alt="rest-logo" className="rest-logo"
    src="https://b.zmtcdn.com/data/pictures/chains/5/304055/4d6463c05d83c74e8d95183bed9659b7_o2_featured_v2.jpg?output-format=webp" />
     <h3>{name}</h3>
     <h4>{cuisine}</h4>
     <h4>{star} Stars</h4>
     <h4>Eta:{cost} for two</h4>
     <h4>Eta:{eta}</h4>
    </div>
  )
}


const Body = () =>{
  return(
    <div className="body">
     <div className="Search">Search</div>
     <div className="rest-container">
     {resList.map((restaurant) => 
     (<RestaurantCard resData={restaurant}/>))
     }
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






