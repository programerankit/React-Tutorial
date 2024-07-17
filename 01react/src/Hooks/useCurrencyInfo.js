import { useEffect } from "react";

export default function useCurrencyInfo(currency){
    useEffect(async ()=>{
        try{
            let res=await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.6.22/v1/currencies/${currency}.json`)
            let data=res.json();
            console.log(data)
            return data;
        }catch(err){
            return err;
        }
    },[currency])
}
