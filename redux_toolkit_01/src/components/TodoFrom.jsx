import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../Slices/TodoSlices/TodoSlice";
export const TodoFrom =()=>{
    const [text,setText]=useState('');
    const dispatch=useDispatch();
    const addClick=(e)=>{
        e.preventDefault();
        dispatch(addTodo(text))
        setText('')
    }
    return(
        <>
        <div>

            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={addClick}>Add</button>
        </div>
        </>
    )
}