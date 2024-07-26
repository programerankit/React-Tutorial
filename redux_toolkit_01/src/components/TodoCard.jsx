import { useSelector ,useDispatch} from "react-redux" 
import {removeTodo} from '../Slices/TodoSlices/TodoSlice'
export const TodoCard=()=>{
    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch();
    return(<>
        {
            todos && todos.map((obj)=>{
                return(<>
                    <p key={obj.id}>id : {obj.id}, Msg : {obj.text} <button onClick={()=>dispatch(removeTodo(obj.id))}>X</button> </p>
                </>)
            })
        }
    </>)
}