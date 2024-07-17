import { useParams } from "react-router-dom"
export default function ParamComp(){
    const {userId}=useParams()
    return(<>
        <h1>Params : {userId}</h1>
    </>)
}