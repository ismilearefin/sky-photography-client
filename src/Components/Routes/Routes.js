import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Body from "../Pages/Home/Body/Body";


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
            
        }
      ]
    },
  ]);