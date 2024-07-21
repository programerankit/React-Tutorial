import { useEffect, useState } from "react"
import userContext from "./useContext"
export default function UserContextProvider({children}){
const [data,setData]=useState([]);
    useEffect(async ()=>{
        let res=await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.6.22/v1/currencies/inr.json")
        let data=await res.json();
        //console.log(data)
        setData(data)
    },[])

    return(<>
        <userContext.Provider value={{data,setData}}>
        {children}
        </userContext.Provider>
    </>)
}