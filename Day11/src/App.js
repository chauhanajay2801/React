import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";


const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () => {
  return(
    <div className="App">
     <Header/>
     <Outlet/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Body user={{ 
          name:"Ram",
          email:"chauhanajay2801@gmail.com"
        }}/>
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






