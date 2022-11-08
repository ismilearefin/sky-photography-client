import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllService from "../Pages/AllService/AllService";
import Body from "../Pages/Home/Body/Body";
import Login from "../Pages/Login/Login";
import ServicePage from "../Pages/ServicePage/ServicePage";
import Signup from "../Pages/Signup/Signup";


export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Body></Body>
        },
        {
            path:'/services/:id',
            element:<ServicePage></ServicePage>,
            loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path:'/services',
            element:<AllService></AllService>,
            loader : () => fetch('http://localhost:5000/allservices')
        }
      ]
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/signup',
      element:<Signup></Signup>
    }
  ]);