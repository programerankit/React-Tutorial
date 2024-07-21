import { useState } from "react"
import customerContext from "./CustomerContext"
const CustomerContextProvider=({children})=>{
    const [customerData,setCustomerData]=useState([{name:"Ankit Kumar",cust_id:1}]);
    // const [customerData,setCustomerData]=useState(null);
    return(<>
            <customerContext.Provider value={{customerData,setCustomerData}}>
                {children}
            </customerContext.Provider>
        </>
    )
}
export default CustomerContextProvider;