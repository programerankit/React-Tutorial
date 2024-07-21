import { useState } from "react"
import { useContext } from "react";
import customerContext from "../context/CustomerContext";

export default function PostCustData(){
    const [custName,setCustName]=useState();
    const [custId,setCustId]=useState();
    const {customerData,setCustomerData}=useContext(customerContext)
    function saveDataInContextAPI(e){
        e.preventDefault();
        setCustomerData([...customerData,{name:custName,cust_id:custId}])
    }
    return(<>
        <label htmlFor="cust_name">Customer Name </label>
        <input type="text" id="cust_name" onChange={(e)=>{setCustName(e.target.value)}}/>
        <br/>
        <label htmlFor="cust_id">Customer Id</label>
        <input type="text" id="cust_id" onChange={(e)=>{setCustId(e.target.value)}}/>
        <br />
        <input type="button" value={"save"} onClick={saveDataInContextAPI}/>
    </>)
}