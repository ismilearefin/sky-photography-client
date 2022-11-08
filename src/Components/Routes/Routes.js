import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Addservice from "../Pages/Addservice/Addservice";
import AllService from "../Pages/AllService/AllService";
import Blog from "../Pages/Blog/Blog";
import Body from "../Pages/Home/Body/Body";
import Login from "../Pages/Login/Login";
import Myreview from "../Pages/Myreview/Myreview";
import ServicePage from "../Pages/ServicePage/ServicePage";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
        },
        {
          path:'/addservice',
          element: <PrivateRoute><Addservice></Addservice></PrivateRoute>
        },
        {
          path:'/myreviews',
          element:<PrivateRoute><Myreview></Myreview></PrivateRoute>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
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