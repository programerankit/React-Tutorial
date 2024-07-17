import { useEffect, useState } from "react";

export default function useCurrencyConvetor(currency){
    const [data,setData]=useState({})
    async function fun(){
        let res=await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.6.22/v1/currencies/${currency}.json`)
        let data=await res.json();
        let currencies=data[currency]
        setData(currencies)
    }
    //console.log(currency)
    useEffect(()=>{
        fun()
    },[currency])
    //console.log(data)
    return data;
}