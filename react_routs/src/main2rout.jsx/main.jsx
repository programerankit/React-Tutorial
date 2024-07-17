import React from "react"
import ReactDOM from 'react-dom/client'
import { Home,About,Contact } from "../RouteCompnents2/Root/index/js"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "../RouteCompnents2/Root"
const render=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"home",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>
            }
        ]
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider render={render}/>
)