import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Home/Home";
import ServicesD from "../Layout/Main/ServicesD";
import Reverse from "../Reverse/Reverse";
import Testmonials from "../Home/Testmonials/Testmonials";

const Routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path: "/testmonials" ,
            element: <Testmonials></Testmonials>
         }
      ],
    },
    {
        path: "/dashbord",
        element: <ServicesD></ServicesD>,
        children: [
            {
                path: "/dashbord/reverse",
                element: <Reverse></Reverse>
            }
        ]
    }
    
        
  ],
);

export default Routes;
