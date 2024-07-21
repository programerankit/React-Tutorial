import { useContext } from "react"
import customerContext from "../context/CustomerContext"
export default function GetCustData(){
    const {customerData}=useContext(customerContext)
    if(!customerData) return <h1>Login first</h1>
    return(<>
        {
            customerData && customerData.map((obj)=>{   //also use first check value is or not
                return(
                    <>
                    <h1 key={obj.cust_id}>Customer Name : {obj.name}, Customer Id : {obj.cust_id}</h1>
                    </>
                )
            })
        }
    </>)
}
