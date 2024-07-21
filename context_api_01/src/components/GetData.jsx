import userContext from "../context/useContext";
import { useContext } from "react";
const GetData =()=>{
    const {data}=useContext(userContext);
    console.log(data)
    return (<>
        
    </>)
}
export default GetData;