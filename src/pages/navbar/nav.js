import React from "react";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
// import Home from "../home/home";
import Skills from "../skills/skills"
import Contact from "../contact/contact"
import About from "../about/about";
import Newhome from "../newhome";
const route=createBrowserRouter([
    {
        path:"/",
        element:<Newhome/>
    },
    {
        path:'contact',
        element:<Contact/>
    },
    {
        path:'skills',
        element:<Skills/>
    },
    {
        path:"about",
        element:<About/>
    }
   
])
export const nav=<RouterProvider router={route}/>