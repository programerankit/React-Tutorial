import { Outlet } from "react-router-dom"
import {Header,Footer} from "../Root/index.js"
export default Layout=()=>{
    return (<>
        <Header/>
        <Outlet/>
        <Footer/>
    </>)
}