import React , {lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import AboutUs from './components/AboutUs'
import Instamart from './components/Instamart'
import Cart from './components/Cart'
import Error from './components/Error'
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';


const Grocery = lazy(()=> import("./components/Grocery.js"))

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<AboutUs/>
      },
      {
        path:"/instamart",
        element:<Instamart/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense> 
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      }
    ],
    errorElement: <Error />,
  },
 
]) 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={appRouter}/>
);

