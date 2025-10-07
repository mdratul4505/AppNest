import { createBrowserRouter } from "react-router";

import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import Error from "../Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    hydrateFallbackElement:<p>loading.....</p>,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
            path:'/apps',
            Component:Apps,
        },
        {
            path:'/installation',
            Component: Installation
        }

    ]
  },
  
]);


export default router