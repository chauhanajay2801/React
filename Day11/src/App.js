import React, { lazy, Suspense, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import UserContext from "./utils/UserContext";



const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () => {
  const [user, setuser] = useState({
    name:"Ajay Chauhan",
    email:"Chauhanajay2801@gmail.com"
  });



  return(
    <>

    <UserContext.Provider value={{user:user,setuser:setuser}}>
     <Header/>
     <Outlet/>
     <Footer/>
    </UserContext.Provider>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:"/contact", 
        element:<Contact/>
      },  
      {
        path:"/cart", 
        element:<Cart/>
      },
      {
        path:"/grocery", 
        element:
          <Suspense fallback={<h1>hey data is loading</h1>}>
          <Grocery/>
          </Suspense>
      },
      {
        path: "/restaurants/:resId",
        element:<RestaurantMenu/> 
      }
    ]
    ,errorElement : <Error/>
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)






