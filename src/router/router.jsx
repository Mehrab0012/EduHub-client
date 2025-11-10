import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayouts,
        children:[
            {
                index:true,
                Component: Home,
            },
            {
                index: 
            }
        ]
    }
])