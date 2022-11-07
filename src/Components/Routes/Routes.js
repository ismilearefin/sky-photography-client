import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllService from "../Pages/AllService/AllService";
import Body from "../Pages/Home/Body/Body";
import ServicePage from "../Pages/ServicePage/ServicePage";


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
            element:<ServicePage></ServicePage>
        },
        {
            path:'/services',
            element:<AllService></AllService>
        }
      ]
    },
  ]);