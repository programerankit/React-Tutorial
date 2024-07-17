import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import { About, Contact, Header, Home, Layout,ParamComp,Error } from './Components/index.js'
const router=createBrowserRouter(
  // [  //it need for first way
  //this is first way to set route
  // {
  //   path:"/",
  //   element:<Layout/>,
  //   children:[
  //     {
  //       path:"",
  //       element:<Home/>
  //     },
  //     {
  //       path:"/home",
  //       element:<Home/>
  //     },
  //     {
  //       path:"/about",
  //       element:<About/>
  //     },
  //     {
  //       path:"/contact",
  //       element:<Contact/>
  //     },
  //     {
  //       path:"/par/:userId",
  //       element:<ParamComp/>
  //     },
  //     {
  //       path:"*",
  //       element:<Error/>
  //     }
  // ]
  // }
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='par/:id' element={<ParamComp/>}/>
      <Route path='*' element={<Error/>}/>
    </Route>
  )
// ]  
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>,
)
